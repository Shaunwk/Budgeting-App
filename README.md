Budgeting app

Start date 5/11/2023

Built by Shaun William Kelly
ShaunWilliamKelly@gmail.com

# Progress
1. [Progress 5/20/2023](#progress-4)
2. [Progress 5/19/2023](#progress-3)
3. [Progress 5/17/2023](#progress-2) 
4. [Progress 5/16/2023](#progress-1)

### Progress 4
5/20/2023

Working on the Income section where users can add their income and it is displayed in a list. This has been difficult to get right. I am almost there and have had a lot of help from chatGPT. This section has been much more difficult than the previous sections so Iit will take a little longer to figure out and understand the JS code I got generated in chatGPT. 


### Progress 3
5/19/2023

Restarted on the JS for the planned income section. It works on mobile now! Only issue on mobile is it will display the $ next to the input if the return key is hit but not is the done key is hit. 

I could only get the amount entered to show if my input type is text. If I use input type number it won't show the amount input by the user. Not sure why but will look into it. 

Some of the JS is new to me so I will take some time to review and practice it. The localStorage I need to practice working with more. The blur() method is new for me but it fixed the issue of the input expecting more user input after hitting the enter key. 

Added commas to all numbers above 1,000 automatically using "const formattedNumber = parseFloat(text).toLocaleString();
  plannedAmount.value = `$${formattedNumber}`;"

Added a clearLocalStorage()

### Progress 2 
5/17/2023

Updated the JS to have a toggle instead of a if/else statment for the links toggle. 

I also updated the CSS to have the new classes created and implemented a keyframe with opacity changes. I applied that animation to the links-list.

In the HTML I deleted the inline style of display:none and put it in the CSS instead. 


### Progress 1
5/16/2023

Created a reset.css file to have all the resets like "box-sizing: border-box" and much more. 

Basic designing has been implemented with reusable code. 
The reusable code is "d-flex" for easily applying flexbox to a container.
Another reusable piece of code is "box" which has box-shadow, border radius, padding and some more to have all boxes the same.
There are a few other resusable code like "progress-bar-oultine" and "box-title".

I made the HTML file organized so it is easier to revisit and find your way around. 

The first stages of JavaScript have been implemented.
Stage 1 was the toggle for a dropdown menu that have links inside. 
The JS uses an "addEventListener" and a "if/else statment" to control the opening and closong of the menu and contains style changes. 

Stage 2. Create functional use by user allowing user to input income and display it on the screen. It has a running total and 
stores the inputs into "localStorage" so it is still there even on a page reresh. 
This part is not done and is needing to be tweaked.
I can't get the income submit button to work on mobile. On desktop it works fine. 

I will be working on this JavaScript and will have a new update when it works properly.



