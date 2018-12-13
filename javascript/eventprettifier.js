window.onload = function() {
	// The list of events (all fields are optional)
	events = [
		{
			"title": "See the Reindeer",
			"date": "12/16/2018", 
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/48366677_2268904426455451_7719887080981004288_o.jpg?_nc_cat=105&_nc_ht=scontent-sea1-1.xx&oh=05924504af82840a7d7dc17b18f0f1bf&oe=5CAE6DD4",
			"link":"https://www.facebook.com/events/1952687338359622/"
		},
		{
			"title": "See the Reindeer",
			"date": "12/23/2018", 
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/48366677_2268904426455451_7719887080981004288_o.jpg?_nc_cat=105&_nc_ht=scontent-sea1-1.xx&oh=05924504af82840a7d7dc17b18f0f1bf&oe=5CAE6DD4",
			"link":"https://www.facebook.com/events/1952687338359622/"
		},		
		{
			"title": "Merry Christmas <3",
			"date": "12/25/2018", 
			"picture": "",
			"link":"https://arcticwwf.org/species/reindeer-caribou/"
		},
		{
			"title": "Come visit the Reindeer",
			"date": "12/2/2018", 
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/47179082_2252176351461592_6750026067601260544_n.jpg?_nc_cat=106&_nc_ht=scontent-sea1-1.xx&oh=4831d4fb0afe6c0db2db737f9fc36133&oe=5CAEEBBE",
			"link":"https://www.facebook.com/events/317172502217939/"
		},
		{
			"title": "Come See the Reindeer!",
			"date": "12/9/2018", 
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/47086005_2257981990881028_2710824799927533568_n.jpg?_nc_cat=100&_nc_ht=scontent-sea1-1.xx&oh=814397adeeefea9a8b9a0dd1d8d227fd&oe=5C68A6A0",
			"link":"https://www.facebook.com/events/2230305200587562/"
		},
		{
			"title": "Come visit the Reindeer! See how they have grown since last year",
			"date": "11/25/2018", 
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/46025515_2225109234168304_198369064635072512_o.jpg?_nc_cat=102&_nc_ht=scontent-sea1-1.xx&oh=37310353dd6b296b2a2e04129f5022b7&oe=5C65BA38",
			"link":"https://www.facebook.com/events/294524054519787/"
		},
		{
			"title": "Say hi to the new baby reindeer",
			"date": "5/28/2018", 
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/33399215_1982603585085538_2430825505260306432_n.jpg?_nc_cat=108&_nc_ht=scontent-sea1-1.xx&oh=c28a462cb3834fe923602fb95a600127&oe=5CA0909A",
			"link": "https://www.facebook.com/events/421930808275853/"
		},
		{
			"title": "Meet the Baby Reindeer!",
			"date": "5/20/2018", 
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/32939082_1974879985857898_6536922829894451200_n.jpg?_nc_cat=105&_nc_ht=scontent-sea1-1.xx&oh=e080e34fd5cdcfb282dd9a7a098712b2&oe=5C9231A1",
			"link": "https://www.facebook.com/events/2106519519592014/"
		},
		{
			"title": "Last Chance to Meet the Reindeer Before Christmas",
			"date": "12/17/2017",
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/24899997_1801095103236388_1361676578275534141_n.jpg?_nc_cat=102&_nc_ht=scontent-sea1-1.xx&oh=d94f1b61a7bf1b3734ae8fc636e320fd&oe=5C938C10",
			"link": "https://www.facebook.com/events/940516056097434/"
		},
		{
			"title": "Meet the Reindeer, again",
			"date": "12/10/2017",
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/24232256_1793729267306305_4346382228583929229_n.jpg?_nc_cat=102&_nc_ht=scontent-sea1-1.xx&oh=1bf6a8db4ea3233ba30bab3303125ea8&oe=5CA90D4C",
			"link": "https://www.facebook.com/events/415304925554240/"
		},
		{
			"title": "Meet the Reindeer",
			"date": "12/3/2017",
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/24129571_1785572451455320_7808383860682464368_n.jpg?_nc_cat=108&_nc_ht=scontent-sea1-1.xx&oh=e748e20ed3235a56abce08524316a8cf&oe=5C638122",
			"link": "https://www.facebook.com/events/1682489158492940/"
		},
		{
			"title": "Barn Warming and Reindeer Welcome",
			"date": "11/25/2017", 
			"picture": "https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/21368738_1703624019650164_694406634727740084_o.jpg?_nc_cat=100&_nc_ht=scontent-sea1-1.xx&oh=883394a4a72c94a5c5ab8f74656656e1&oe=5C90DE6B",
			"link":"https://www.facebook.com/events/1434059856642539/"
		}
	];
	
	// Parse out the date for each event and sort them into "upcoming" and "past"
	var undatedEvents = [];
	var currentEvents = [];
	var pastEvents = [];
	var tomorrow = Date.now() + 24*60*60;
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
			if (parsedEventDate.getTime() < tomorrow) {
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
			thisEvent += '<div class="event" style="background-image: url(' + backgroundImage + ')">';		
			
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
