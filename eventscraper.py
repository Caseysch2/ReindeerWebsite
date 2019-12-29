# You need to install some stuff to get this to run.
import datetime
import os
import PIL # install pillow
import re
import requests
import urllib.request
from bs4 import BeautifulSoup
from PIL import Image
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

# Some useful variables
eventsPage = "https://www.facebook.com/pg/ShortsvilleReindeerFarm/events"
localRepoPath = r"c:\Users\username\Source\Repos\ReindeerWebsite"
localEventsFileName = localRepoPath +r"\javascript\eventprettifier.js"
localEventsPhotos = localRepoPath + r"\images\events\\"

# Start a browser
options = Options()
options.headless = True
driver = webdriver.Chrome(options=options, executable_path=r'C:\Program Files\ChromeDriver\chromedriver.exe')

# Look at the facebook events page
driver.get(eventsPage)
delay = 3 # seconds
try:
	WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '//div[text()="Upcoming Events"]')))
	
	# Get the events that the website has already, using the local file
	with open(localEventsFileName, "r") as localFile:
		localFileContents = localFile.read()
	
	# Get all the upcoming events. Try not to rely on facebook's HTML structure.
	soup = BeautifulSoup(driver.page_source, 'html.parser')
	event = soup.find(text='Upcoming Events').findNext("table").parent
	lines_of_text = list()
	
	# Parse the events
	while event is not None:
		row = event.find("table").find("tr")
		
		# The date is the first table cell. Eg: JAN2
		# The year is the minimum year that makes this event upcoming
		date = datetime.datetime.strptime(row.find("td").text, '%b%d')
		date = date.replace(year=date.today().year)
		if date.today() > date:
			date = date.replace(year=date.today().year + 1)
		
		# The title of the event is the text of that link
		title = row.find("a").text.strip()
		
		# Discard this event if it's already recorded
		if date.strftime("%m/%d/%Y") in localFileContents:
			print("Already have this event: " + title)
			event = event.nextSibling
			continue
		print("Adding this event: " + title)
		
		# The link is the first "a" element in the row
		link =  row.find("a")["href"].split("/")
		link = "https://www.facebook.com/" + link[1] + "/" + link[2] + "/"
		
		# Location is the last text in the row
		#location = row.findAll("span")[-1].text
		location = row.find(text=re.compile(r'[a-zA-Z ]+, [A-Z]{2}$'))
		
		# We'll fetch the event picture later
		picture = date.strftime("%Y-%m-%d") + ".jpg"
		
		# Format this event in a way the website will expect
		lines_of_text.extend([
			"\t\t{",
			"\n\t\t\t\"title\": " + "\"" + title + "\",",
			"\n\t\t\t\"date\": " + "\"" + date.strftime("%m/%d/%Y") + "\",",
			"\n\t\t\t\"picture\": " + "\"./images/events/" + picture + "\",",
			"\n\t\t\t\"link\": " + "\"" + link + "\",",
			"\n\t\t\t\"location\": " + "\"" + location + "\",",
			"\n\t\t},\n"
		])
		
		# Actually fetch the picture and save it
		driver.get(link)
		delay = 3 # seconds
		try:
			WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.TAG_NAME, "img")))
			soup = BeautifulSoup(driver.page_source, 'html.parser')
			bannerPhoto = soup.find("img", {"width" : "500"})["src"]
			urllib.request.urlretrieve(bannerPhoto, localEventsPhotos + picture)
			
			# Resize the images to be have the smallest dimension 200px
			with Image.open(localEventsPhotos + picture) as img:
				width = float(img.size[0])
				height = float(img.size[1])
				if width > height:
					width = int(width*(200/height))
					height = 200
				else:
					height = int(height*(200/width))
					width = 200
				img = img.resize((width, height), PIL.Image.ANTIALIAS)
				img.save(localEventsPhotos + picture)
		except TimeoutException:
			print('Loading took too much time!')
		
		# Move on to next event
		event = event.nextSibling
	
	# Write all the new lines to the file
	if len(lines_of_text):
		with open(localEventsFileName, "r+") as localFile:
			# Read the current contents and then delete them from the file
			lines = localFile.readlines()
			localFile.seek(0)
			localFile.truncate()
			
			# Write all the lines back, inserting the new events in the right place
			i = 0
			for index, line in enumerate(lines):
				if "events = [" in line:
					i = index+1
					break
			for index, line in enumerate(lines_of_text):
				lines.insert(i+index, line)
			localFile.writelines(lines)
	else:
		print("No new events to add.")

except TimeoutException:
	print('Loading took too much time!')
	

# Close the browser
driver.quit()

# Commit changes
os.chdir(localRepoPath)
print(os.system("echo %CD%"))
os.system('git add -A')
os.system('git commit -m "Automatically adding events from Facebook page"')
os.system('git push')