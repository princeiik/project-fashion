# Project Fashion
Project Fashion is a site that fosters interaction and discussion within the fashion community, allowing users post fashion related blog posts and comment on other user's blog post

**Link to project:** https://project-fashion.onrender.com/

## How It's Made:

**Tech used:** CSS, Javascript, Node, Express.js, MongoDB, EJS, Bootstrap

Backend:

On the back-end, I developed the server with Node.js and Express, and set up MongoDB to store user account data, posts, and comments. I integrated Passport.js for user authentication, allowing secure sign-in and access control for browsing and posting. To handle multimedia uploads, I integrated Cloudinary, enabling users to upload images with their posts. When a creates an account, their username and password is stored in my MongoDB collection (passwords is hashed on the backend for security purposes). This is user to authenticate the user and linked them to any specific post or comments made by them. When users create a post or post a comment, the information is saved into a different MongoDB collection which links to their user information to allow that user specifically to be able to delete their comment or delete/edit their post. 

Frontend: 

For the front-end, I used EJS, CSS, JavaScript, and Bootstrap to design the user interface, including forms, buttons, and cards. This is app is user friendly and simple enough to follow along and navigated. I also tried to make the layout flow well so it that elements do not feel all over the place. 

## Lessons Learned:

This project came with alot of setbacks and times where I did not know how I was going to overcome a problem especially being one of my first full stack web applications that was built. I learned alot of general knowledge about front-end and back-end while working on Project Fashion especially how the front-end and back-end interacts with each other. Even now, I still come back to this project to use what I continue to learn to apply it here and make it more than what it was when I first completed it.


# How to run the application locally
## Install

`npm install`

## Things to add

- Create a `.env` file in config folder and add the following as `key = value`
- MONGODB_USERNAME = your mongodb username
- MONGODB_PASSWORD = your mongodb password
- MONGODB_DATABASE_NAME = your mongodb database name
- CLOUD_NAME = your cloudinary cloud name
- API_KEY = your cloudinary api key
- API_SECRET = your cloudinary api secret
- MONGODB_URI = MongoDB URI

## Run

`npm run dev`
