# message-demo:
Sample project for Shugmi Shumunov

#Updates I Made:
1) I added a basic file structure.
2) I added bootstrap to the page. I did this to style the page similar to the LLamasoft website.
3) I added a favicon.
4) I added a navbar and styled it similarly to the one on the website.
5) I added a sticky footer that would stick to the bottom of the page.
6) I added an accordion that would show/hide the project instructions on click.
7) I used toastr.js to complete the message task. I used it to style, add fade out, and an x on the messages where the user could click on it, or the message to exit out that particular message.
8) I added a button to describe why I want to join Llamasoft, and why I think I would be a valuable member to the team.

#Interesting things I noticed about the code:
1) The script tags were at the top of the page, and there was no document.ready on the JS page. This could cause problems as the DOM may not be loaded by the time Jquery were used. I put the script tags at the bottom of the body, and added a document.ready as well.
2) The initial Javascript was written very cleanly. The manner in which variables were written inside of functions would encapsulate those variables and prevent them from interacting with those in the global space.

#Suggestions for improvements:
1) Allow users the ability to customize their messages. This would allow each individual user to gain the most from their messages, not disturb their workflow as much, but still interact with the messages in a meaningful way.
2) Add a feature where a user could look up old messages. This could be critical if messages were used to deliver sensitive and important information.
3) Add an ability to set a do not disturb mode. This would allow the user to focus on an important time sensitive task, but important messages sent would be cataloged for the user to reference in the future.


#Places where I felt I went above and beyond:
1)I believe I went above in beyond in trying to replicate the page similar to the LLamasoft website.
2) I tried to give the user the best experience possible, and positioned the messages in a manner where the user could read them without missing the content on the page.
