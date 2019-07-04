window.onload = function() {
	// The list of events (all fields are optional)
	events = [
		{
			"title": "See the Reindeer",
			"date": "12/16/2018", 
			"picture": "./images/events/2018-12-16.jpg",
			"link":"https://www.facebook.com/events/1952687338359622/"
		},
		{
			"title": "See the Reindeer",
			"date": "12/23/2018", 
			"picture": "./images/events/2018-12-23.jpg",
			"link":"https://www.facebook.com/events/2236833463268337/"
		},
		{
			"title": "Come visit the Reindeer",
			"date": "12/2/2018", 
			"picture": "./images/events/2018-12-02.jpg",
			"link":"https://www.facebook.com/events/317172502217939/"
		},
		{
			"title": "Come See the Reindeer!",
			"date": "12/9/2018", 
			"picture": "./images/events/2018-12-09.jpg",
			"link":"https://www.facebook.com/events/2230305200587562/"
		},
		{
			"title": "Come visit the Reindeer! See how they have grown since last year",
			"date": "11/25/2018", 
			"picture": "./images/events/2018-11-25.jpg",
			"link":"https://www.facebook.com/events/294524054519787/"
		},
		{
			"title": "Say hi to the new baby reindeer",
			"date": "5/28/2018", 
			"picture": "./images/events/2018-05-28.jpg",
			"link": "https://www.facebook.com/events/421930808275853/"
		},
		{
			"title": "Meet the Baby Reindeer!",
			"date": "5/20/2018", 
			"picture": "./images/events/2018-05-20.jpg",
			"link": "https://www.facebook.com/events/2106519519592014/"
		},
		{
			"title": "Last Chance to Meet the Reindeer Before Christmas",
			"date": "12/17/2017",
			"picture": "./images/events/2017-12-17.jpg",
			"link": "https://www.facebook.com/events/940516056097434/"
		},
		{
			"title": "Meet the Reindeer, again",
			"date": "12/10/2017",
			"picture": "./images/events/2017-12-10.jpg",
			"link": "https://www.facebook.com/events/415304925554240/"
		},
		{
			"title": "Meet the Reindeer",
			"date": "12/3/2017",
			"picture": "./images/events/2017-12-03.jpg",
			"link": "https://www.facebook.com/events/1682489158492940/"
		},
		{
			"title": "Barn Warming and Reindeer Welcome",
			"date": "11/25/2017", 
			"picture": "./images/events/2017-11-25.jpg",
			"link":"https://www.facebook.com/events/1434059856642539/"
		}
	];
	
	// Parse out the date for each event and sort them into "upcoming" and "past"
	var undatedEvents = [];
	var currentEvents = [];
	var pastEvents = [];
	var yesterday = Date.now() - 24*60*60*1000;
	for (var index in events) {
		var parsedEventDate = new Date(Date.parse(events[index]["date"]));
		
		// If there's a parsable date, use it to put the event in the right category
		if (parsedEventDate != "Invalid Date") {
			// Rewrite the date with something prettier
			events[index]["date"] = parsedEventDate.toLocaleString("en-us", { month: "short" }) + " " + 
				parsedEventDate.getUTCDate() + ", " +
				parsedEventDate.getUTCFullYear();
				
			// Remember the parsed date so we can sort on it
			events[index].parsedDate = parsedEventDate.getTime();
			
			// Put the date in the right category
			if (parsedEventDate.getTime() < yesterday) {
				pastEvents.push(events[index]);
			} else {
				currentEvents.push(events[index]);
			}
		} else {
			// Otherwise, put it in the undated category.
			events[index]["date"] = events[index]["date"] || "Unknown Date";
			undatedEvents.push(events[index]);
		}
	}	
	
	// Sort the current and past events
	currentEvents = currentEvents.sort(function(event1, event2) { return event1.parsedDate - event2.parsedDate });
	pastEvents = pastEvents.sort(function(event1, event2) { return event2.parsedDate - event1.parsedDate });
	
	// Put the events on the page
	if (undatedEvents.length > 0) {
		document.getElementById('undated-events-title').innerHTML = "<h2>Undated Events</h2>";
		document.getElementById('undated-events').innerHTML = convertEventObjectsToDiv(undatedEvents);
	}
	if (currentEvents.length > 0) {	
		document.getElementById('current-events-title').innerHTML = "<h2>Upcoming Events</h2>";
		document.getElementById('current-events').innerHTML = convertEventObjectsToDiv(currentEvents);
	}
	if (pastEvents.length > 0) {	
		document.getElementById('past-events-title').innerHTML = "<h2>Past Events</h2>";
		document.getElementById('past-events').innerHTML = convertEventObjectsToDiv(pastEvents);
	}
	
	/**
		This function converts an array of events into divs
		Default pic, if not specified, is the logo
		Default title, if not specified, is "Untitled Event"
		No modifications are done to the date or the order of events
	*/
	function convertEventObjectsToDiv(eventArray) {
		var returnHtml = "";
		
		// Make a div for each event
		for(var index in eventArray) {
			// Figure out what will be shown, fall back on default values if we need to
			var backgroundImage = eventArray[index]["picture"] || "./images/reindeer-logo.svg";
			var eventTitle = eventArray[index]["title"] || "Untitled Event";
			var eventDate = eventArray[index]["date"];
			var thisEvent = "";
			
			// Wrap it in a link tag, if we have one
			if (eventArray[index]["link"]) {
				thisEvent += '<a href="' + eventArray[index]["link"] + '" target="_blank" rel="noreferrer">';
			}
			
			// Make the data into a pretty div
			thisEvent += '<div class="event" style="background-image: url(./images/reindeer-logo.svg), url(' + backgroundImage + ')">';		
			
			// Add the date and time
			thisEvent += '<div class="event-date">' + eventDate + '</div>' +
				'<div class="event-title">' + eventTitle + '</div>';
				
			// Close the beginning div tag
			thisEvent += '</div>';
			
			// Close that link tag
			if (eventArray[index]["link"]) {
				thisEvent += '</a>';
			}
			
			// Append it to the list of divs we have going	
			returnHtml = returnHtml + thisEvent;
		}
		
		// Return all the divs
		return returnHtml;
	}
}
