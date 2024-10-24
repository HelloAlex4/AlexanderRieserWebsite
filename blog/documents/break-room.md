## What is Break-Room.ch
The Break-Room website offers a simple solution to a challenge we faced at our school: finding quiet, unoccupied rooms to study in. Students often had to check each room manually, which would disrupt ongoing classes. My solution was to create a website that displays available rooms in real time, making it easy to find a free space without causing interruptions. 
The site is currently developed and maintained by me, with financial support from KZU.
<br>
<br>
## Additional Features
In addition to displaying empty rooms, I have added several other features.

**Displaying consecutive empty rooms:**
One of these features allows you to see which rooms are empty for two consecutive lessons. This is useful when you need a space to study for more than just one lesson.

**Displaying canceled lessons:**
The website also lets you display all rooms where lessons have been canceled.
<br>
<br>
## Break-Room.ch at your school
Break-Room.ch could make life easier for students and staff at your school, too. With a simple interface and real-time data, it eliminates the guesswork of finding available study spaces. No more interrupting classes or wasting time hunting for an empty room. It’s a straightforward, effective tool that creates a quieter, more focused learning environment. Plus, additional features like tracking consecutive free periods and canceled lessons make it even more convenient. If your school faces similar challenges, Break-Room.ch is the solution you’ve been looking for.
<br>
<br>
## Technical
**Backend**
The backend uses a GO-lang script to fetch the necessary lesson data from the official school website. This data is updated twice a week to ensure it’s always current. Each room’s availability is checked against a complete list of all school rooms to determine which are unoccupied during each lesson. The data is delivered to users via a simple FastAPI application. If you’d like more in-depth information about the site, you can check out the code on my [github](https://github.com/HelloAlex4/Break-room).
<br>
<br>
<br>
<br>

-Alex Rieser