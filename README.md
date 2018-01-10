This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

Back End Workflow

Login:

* send post to auth (to create token) store token locally.
* if token in localStorage, we are logged in, else redirect to login

DashBoard:

* Check all forums. Consider adding a thread count node to forum, And creating a notification model for users: A notification can have a key for each unique instance: new groups, new messages. A new message added to a thread, on fetch, will compare the current length to the _thread_count_ and if it is longer, the new_notification toggles and will show a notification to the user on dashboard. Maybe I can use REACT chips?

workflow:

_Having a type for the forum, means change the model name (FORUM ==> CHAT) so we can avoid confusion with the forum type it will be using._

* Check groups. Our Notification object can have a node for _GROUP-FORUMS_ notifications. Maybe add an attribute to forum, denoting whether it is a forum chat, or a group chat. If Messages.filter(forum_id == x) && (forum.type == group) or something like that. if the group thread is long, add a new notification, and maybe a link to the group.

workflow:
Get Chats > Show all topics, in collapsible. in each collabsible will be the card with the chat itself, scrollable.
