harry hamlin - harryhamlin
desmond saelee - desmondsaelee
dureti kadir - duretitilmo
lincoln pough - xavionstar

hikes aggregator
    AS a hiker in the pnw
    I WANT a website where I can log my favorite hikes and read about other peoples favorite hikes
    SO THAT I can easily generate new ideas for places to go on the weekend

    GIVEN A CMS-style blog site
    WHEN I visit the site for the first time
    THEN I am presented with a homepage that includes pictures, and the most recently posted hikes and a nav for login and other view options
    WHEN I click on the 'login' nav button
    THEN I am taken to a login page where I can either create a free account or login to my existing account
    WHEN I login
    THEN I am taken to my profile page where my most recent activity is posted
    WHEN I click on 'add hike' in the nav
    THEN I am taken to a form page where I can submit my favorite hikes including photos, description, length, difficulty, altitude, conditions
    WHEN I submit my hike
    THEN it is added to the database and available for other users to view, comment on, and rate
    WHEN I select a recently posted hike from the homepage
    THEN I am redirected to the page describing the hike with photos, description, length, difficulty, altitude, conditions
    WHEN I select view hikes
    THEN I redirected to a page that has posted hikes as cards and am presented with some filter options

possible api's: cloudinary

    cloudinary??? new technology

units:
name - name of the hike
location - western washington, nothern washington, eastern washington, southern washington
difficulty - 1-5
description - written description by the user
max-altitude - number input (ft)
length - number miles
rating - 1-5 stars