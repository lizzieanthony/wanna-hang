## Overview
Wanna Hang is an activity based friend dating app. This app was built with a React frontend and a Ruby-on-Rails backend.

Running the Application
To run the backend of this application, run the following commands in a terminal: 
- bundle install (to install dependencies) 
- rails db:migrate (to migrate migrate database)
- rails db:seed (to seed database) 
- rails s (to run rails server)

To run the frontend of this application, run the following commands in a separate terminal: 
- npm install --prefix client (to install dependencies) 
- npm start --prefix client (to start React server)

## Features and How to Use
Wanna Hang is a platform designed to facilitate user connections through joined activities. once logged in a user can view all users, view individual profiles, match with anyone they want to hang with, and edit their profile. Once you're matched, your match will appear on the home page with their contact info so you can start hanging at your convenience! 

Some of the highlights of this application is a self join table in the backend that joins two users to each other, useContext state managment, a form with checkboxes with updates the state of the userActivities, and advanced data iterations and rendering. 

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm