## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

--rubric wants
-bio data(name, pronouns, residence, optional extra info)
-Favorite animal data on button click
-This README file completed with a plan on how you intend to geth there
-Repo has multiple commits in the history
-Link to Netlify for the about section
-Work on a dev branch and submit pull link to canvas
In body:
A header tag to introduce myself by name, likely h1, within it's own header section
under the introduction, start the main section, a paragraph element hosting the rest of my information to share
under my info, a button hiding my favorite animal, also giving it the id=btn
hidden under my button, a div tag containing my favorite animal with class=hidden and id=animalDiv, Try and fit a picture in an img tag as well with the same id and class as the div.

For coding my button event, create a const showButton and set it to document.getElementById('btn') to grab the button from the HTML file
create a similar const for animal using the same document call for Id animalDiv
showButton.addEventListener('click', () => {}) causes the event of the button push, inside I animal.classList.remove('hidden') to show my hidden content.