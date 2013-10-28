PTmobile
========

If you're like me and want to sometimes use pivotal tracker on your mobile phone, this is for you.

Made this because I was bored and because I couldn't use Pivotal Tracker's web app in Android's Chrome. (too slow, unresponsive). 

In order to get the stories, you'll have to:

1. Start a web server
2. Clone this repo there
3. Edit the assets/js/getData.js file, and add token, project ID and owner initials 

NOTES: 
You can find the token on the profile page on PT.
The project ID is the last URI when you visit a project on PivotalTracker.

For now, what I do is set up a web server on Android (search KWS on play.google.com), add project there and start up the webserver.

Next up - add actions to stories (change their status, owner, add tasks/comments, etc).
