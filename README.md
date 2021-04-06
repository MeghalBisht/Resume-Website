## Resume-Website

## Live at 
https://meghal-resume.herokuapp.com/

## Technology Stack
1. React - Front End JS Framework
2. MaterialUI - React UI Framework
3. MongoDB - No SQL db
4. Mongoose
5. Node - JS runtime enviornment
6. Express - Framework for Node
7. Heroku - for Deployment
8. Sendgrid - Email delivery Service

**Feel free to copy, no copyright issues**

## Installation Steps 

**Setting up the Front End**

1. Fork the repository
2. Clone the forked repository 
3. Open terminal and run the following commands 
`git clone https://github.com/[Username]/Resume-Website.git`
`cd RESUME`
`cd client`
`npm start`
4. App starts at localhost:3000 if not, manually open localhost:3000

**Setting up Backend**

You will require MongoDB Atlas to create a cluster to store messages and Sendgrid for email service.
Steps to create a new cluster [here](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/) 

1. Go to config folder
2. Create a dev.js file.
Add the following code in dev.js
`module.exports ={
    MONGOURI : "{your_mongo_key}",
    SENDGRID_API : "{your_sendgrid_key}"
}`
3. To start the server, use the command `nodemon app` (install nodemon if not installed)
4. You would see a message logged to the terminal "port 5000 has started"

**Change of color theme**
Color theme is specified at client/src/App.css 

**Do star the repository if it helped you in any way!**

