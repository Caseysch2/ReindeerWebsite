# ReindeerWebsite
Welcome to the code base for the Shortsville Reindeer Farm Website!

## How to edit the site
1. Contact the repository owner to be added as a collaborator. 
2. The easiest way to make changes is to go to the file you want to change, click the little "Edit" pencil at the top right of the file, and make your changes in the browser.
3. Once you're done, add a title and a description describing what you changed and then "Commit changes" directly to the master branch.

The website is automatically and immediately deployed. If you just changed a html file you'll see the change goes live quickly, but CloudFlare caches images/javascript so it may take some time for those to show up.

(Is this the 'proper' way to use git? Not really. Does it work anyway? Absolutely. Since this is a low-traffic site and code base everything should... be... fine...)

## Specifically, how to add an event
Go to [javascript/eventprettifier.js](javascript/eventprettifier.js) and add the new event to the list of events at the top.

All properties are optional, you can just put `""` instead of a real value for them. The event's date will be parsed out and used to sort it and put it in "Upcoming" or "Past" events as appropriate.  Commas are *very* important. 

```
{
  "title": "Your title here. It will be automatically cut off if too long.",
  "date": "MM/DD/YYYY", 
  "picture": "link to a picture (open a facebook image in a new tab and put that url here)",
  "link": "Link for more details"
},
```

## Your site is so small and bland. You should add [cool new thing] to it!
Thank you and no thank you.



![Reindeer Logo](images/reindeer-logo.svg)
