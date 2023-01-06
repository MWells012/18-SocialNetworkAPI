# 18-SocialNetworkAPI

# Table of Contents
- [Description](#description)
- [User-Story](#user-story)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [Mock-Up](#Mock-up)

# Description
This application uses MongoDB as the backend database host, taking CRUD statements and turning them into 'posts' for social media via Insomnia. The API allows you to share thoughts, add other people as friends and add your reaction to your friends thoughts.

# User Story 
+ AS A social media startup
+ I WANT an API for my social network that uses a NoSQL database
+ SO THAT my website can handle large amounts of unstructured data

# Installation
To run the Social Network API on your local device follow these steps:
* clone repository locally with http or ssh key
* install the follow dependencies:
    - npm i express
    - npm i node.js
    - npm i mongoose
    - npm i moment
Please note - you must have MongoDB or something similar to view database work as the backend is using Mongoose.
* run `npm i` to install all dependencies
* run in the terminal `npm start`
* once running open Mongo Compass and connect via the URL provided

# Usage
Via the CRUD method, this is a social media platform that a user can post their thoughts or opinions on something, pick who they're friends with and react to their friends thoughts that are posted as well.

# Tests
Through Insomnia you can test the Get, Post, Put and Delete routes for the posts/thoughts from the users.

# Mock-Up