window.onload = function() {
	// The list of events (all fields are optional)
    events = [
		{
			"title": "Bring in the New Year!",
			"date": "01/01/2020",
			"picture": "./images/events/2020-01-01.jpg",
			"link": "https://www.facebook.com/events/1726163650851793/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Middleburgh's Miracle on Main St",
			"date": "12/06/2019",
			"picture": "./images/events/2019-12-06.jpg",
			"link": "https://www.facebook.com/events/2656227571105434/",
			"location": "Middleburgh, NY",
		},
		{
			"title": "Sodus Rotary Winter Festival",
			"date": "01/18/2020",
			"picture": "./images/events/2019-12-07.jpg",
			"link": "https://www.sodusrotary.org/winter-fest-2020",
			"location": "Sodus Point, NY",
		},
		{
			"title": "Meet the Boys",
			"date": "12/21/2019",
			"picture": "./images/events/2019-12-22.jpg",
			"link": "https://www.facebook.com/events/1723556037775430/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Meet the Boys",
			"date": "12/22/2019",
			"picture": "./images/events/2019-12-22.jpg",
			"link": "https://www.facebook.com/events/1723556037775430/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Christmas Wonderland Festival",
			"date": "12/07/2019",
			"picture": "./images/events/2019-12-07.jpg",
			"link": "https://www.trinityeventsnj.com/christmas",
			"location": "Orangeburg, NY",
		},
		{
			"title": "Christmas Wonderland Festival",
			"date": "12/08/2019",
			"picture": "./images/events/2019-12-07.jpg",
			"link": "https://www.trinityeventsnj.com/christmas",
			"location": "Orangeburg, NY",
		},
		{
			"title": "Run With the Reindeer",
			"date": "11/30/2019",
			"picture": "./images/events/2019-11-30.jpg",
			"link":"https://shortsvillereindeer.com/run",
			"location": "Shortsville, NY",
		},
		{
			"title": "See the Reindeer",
			"date": "12/16/2018", 
			"picture": "./images/events/2018-12-16.jpg",
			"link":"https://www.facebook.com/events/1952687338359622/",
			"location": "Shortsville, NY",
		},
		{
			"title": "See the Reindeer",
			"date": "12/23/2018", 
			"picture": "./images/events/2018-12-23.jpg",
			"link":"https://www.facebook.com/events/2236833463268337/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Come visit the Reindeer",
			"date": "12/2/2018", 
			"picture": "./images/events/2018-12-02.jpg",
			"link":"https://www.facebook.com/events/317172502217939/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Come See the Reindeer!",
			"date": "12/9/2018", 
			"picture": "./images/events/2018-12-09.jpg",
			"link":"https://www.facebook.com/events/2230305200587562/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Come visit the Reindeer! See how they have grown since last year",
			"date": "11/25/2018", 
			"picture": "./images/events/2018-11-25.jpg",
			"link":"https://www.facebook.com/events/294524054519787/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Last Chance to Meet the Reindeer Before Christmas",
			"date": "12/17/2017",
			"picture": "./images/events/2017-12-17.jpg",
			"link": "https://www.facebook.com/events/940516056097434/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Meet the Reindeer, again",
			"date": "12/10/2017",
			"picture": "./images/events/2017-12-10.jpg",
			"link": "https://www.facebook.com/events/415304925554240/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Meet the Reindeer",
			"date": "12/3/2017",
			"picture": "./images/events/2017-12-03.jpg",
			"link": "https://www.facebook.com/events/1682489158492940/",
			"location": "Shortsville, NY",
		},
		{
			"title": "Barn Warming and Reindeer Welcome",
			"date": "11/25/2017", 
			"picture": "./images/events/2017-11-25.jpg",
			"link":"https://www.facebook.com/events/1434059856642539/",
			"location": "Shortsville, NY",
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
			thisEvent += '<div class="event" style="background-image: url(' + backgroundImage + '), url(./images/reindeer-logo.svg)">';
			
			// Add the date and title
			thisEvent += '<div class="event-date">' + eventDate + '</div>' +
				'<div class="event-title">' + eventTitle + '</div>';
			
			// Add the location, if we have one
			if (eventArray[index]["location"]) {
				thisEvent += '<div class="event-location">' + eventArray[index]["location"] + '</div>';
			}
				
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
