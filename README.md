# React Networking App
Build a networking app using React and react-slingshot

### Learning Objectives
* React/react-slingshot
* CRUD functionality with React
* Bonus - Integrate a separate Express API app

### Getting Started
Create a new React app using the react-slingshot starter kit. Remember to remove the demo app that slingshot comes with. Refer to the [react-slingshot](https://github.com/coryhouse/react-slingshot) docs.

### Completion
Part 1 - 3 is required, Part 4 is bonus

### Submission
Homework is due Sunday night by 11pm

### Assignment
Once you begin your job search you'll find yourself meeting a lot of new people at networking events, hackathons, and job interviews. Wouldn't it be handy if you had an app that helped you keep track of all these new people?? The answer is obviously yes! This weekend you'll be creating a React app that uses [Arun's handy API generator for **People**](myapi-profstream.herokuapp.com). Your app will have full CRUD functionality with the Person API.

#### Part 1 - Setup
Start by heading over to Arun's API generator and creating a new instance of the **Person API**. Make sure you seed the API with data and then test out the API to see what kind of People data you get back. Once the API is configured, start sketching a view of what the app should look like. Break your view down into components. Once you feel comfortable with what the view should look like, create a new React app using `react-slingshot`.

#### Part 2 - Build
Start building! I would *highly* encourage you to not copy and paste from previous labs and even try to do as much from memory as possible. Create NEW components rather than recycling components you've created in previous labs. Give yourself as much opportunity as possible to learn and understand React!

#### Part 3 - Functionality
Your Networking app should be able to GET, POST, PUT, and DELETE to your Person API. Your app should also look nice - try playing with a CSS framework that you haven't used before.

#### Part 4 - Bonus - Notes
If you finish early consider implementing a little more functionality to your Networking app. Wouldn't it be nice if you could add notes about each Person that you've interacted with at networking events? The answer is yes bozo. Let's say that I meet a hipster, Vue.js developer at a BrookylnJS meet up:

id: 345
firstname: Bobert
lastname: Kong
email: BobertKong@aol.com
username: bkong

Perhaps I'd like to take notes about any interaction with Bobert such as:

id: 23
date: 3/10/2017
subject: What a rude guy
content: Bobert got hammered at the BrooklynJS meetup and made a total fool of himself
user_id: 345

Think about the relationship between **Persons** and **Notes**. Build out a *separate* Express CRUD API application that handles all of the interactions with your Notes database. It should only handle requests/responses with JSON. Use TDD (mocha, chai, supertest) to develop this API. Also remember that when you run both apps locally, your React app will be served on `localhost:3000/` so your Express API will need to be served on a different Port number.

I know this is a lot to ask for in a Bonus, so if you actually complete it you'll earn my undying respect!
