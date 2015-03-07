# Charleston Front
A listing of tech companies in Charleston that develop software solutions. The list includes software companies, design agencies, etc.

#Data fields needed for each company:
Name
LogoURL
Location
-Street Address 1

-Steet Address 2

-City

-Zip

Contact 

-email

-phone

-twitter

-website

-careers page of website

Info

-long desc.

-short desc.

-clients

-hiring: front, back, full

-category: design agencies, software companies, (both)

Approved/Unapproved

#Features:

##MVP FEATURES:
###General Listing Page
'Cards' for each company

-Favorite button

Company detail

-Favorite button

Welcome Message for user

###Map Page
All companies listed on map with marker at location

Click on marker and popover w/ detailed info comes up

Detail page


###Favorites
User can favorite companies and they get added to their favorites list.

-User local storage

###Admin
CRUD - Create, read, update, delete functionality for companies.

C - Add company form

R - Render all companies (edit, delete buttons)

U - Edit company form

D - delete button on render screen

##STRETCH FEATURES:
Twitter stuff

Company comments

User submitting company

-List of unapproved companies

Deployed to Heroku

#Tech we're going to use:
AngularJS

Underscore.js

-ui.bootstrap

Google Maps SDK/API

BootStrap

-Grid, Tables, Forms


####Routes(views):
Welcome/Splash view        -- ALLSTON

All Companies (list) view  -- COURTLAND

All Companies (map) view   -- BRENT

Detail Company (list) view -- RONALD

Detail Company (map) view  -- BRENT

####Admin -
All Companies view -- VERONIKA

Edit Company view  -- VERONIKA

Add Company view   -- VERONIKA

####Controllers:

AdminController    -- VERONIKA

FrontController    -- BRENT

####Service:

CompaniesService   -- VERONIKA

FavoritesService   -- BRENT
