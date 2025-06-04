# ReindeerWebsite
Welcome to the code base for the Shortsville Reindeer Farm Website!

## How to edit the site
1. Contact the repository owner to be added as a collaborator.
2. The easiest way to make changes is to go to the file you want to change, click the little "Edit" pencil at the top right of the file, and make your changes in the browser.
3. Once you're done, add a title and a description describing what you changed and then "Commit changes" directly to the master branch.

The website is automatically and immediately deployed. If you just changed a html file you'll see the change goes live quickly, but CloudFlare caches images/javascript so it may take some time for those to show up.

(Is this the 'proper' way to use git? Not really. Does it work anyway? Absolutely. Since this is a low-traffic site and code base everything should... be... fine...)

## That contact form...
Is a Google form embedded in the page. It sends emails with the form contents with a <a href="https://medium.com/@max.brawer/learn-to-magically-send-emails-from-your-google-form-responses-8bbdfd3a4d02">little bit of scripting magic</a>. The actual script, should you need to recreate it, is:

```
function onFormSubmit(e) { 
  var values = e.namedValues;
  // Filter out weird duplicate triggers
  if(e.values && !e.values[0]){return;}
  
  var email = values["Email Address"];
  var name = values["Your Name"];
  var phone = values["Phone number (optional)"] == "" ? "no phone number" : values["Phone number (optional)"];

  if (email == "") {
    htmlBody = "New message (no email provided, phone " + phone + "):<br>" + values["Message"];
    GmailApp.sendEmail("mike@shortsvillereindeer.com", "Reindeer contact form submission from " + name, '', {htmlBody:htmlBody, 'from':'mike@shortsvillereindeer.com'});
  } else {
    htmlBody = "New message from " + email + " (" + phone + "):<br>" + values["Message"];
    GmailApp.sendEmail(email + ", mike@shortsvillereindeer.com", "Reindeer talk with " + name, '', {htmlBody:htmlBody, 'from':'mike@shortsvillereindeer.com'});
  }
}
```


## Your site is so small and bland. You should add [cool new thing] to it!
Thank you and no thank you.



![Reindeer Logo](images/reindeer-logo.svg)
