# Capstone

Brendan Hanna

An app for the general public to find non-profits in their area and manage one-time or recurring donations to them.

##Specs

###MVP
Search a non-profit API to return info about non profits in a given area, including contact info.

Create a new "non profit" object and store it to Firebase database.

Be able to Create, Read, Update and Delete database entries from interface

Google Authentication

Mobile Layout

###Wishlist
Use Stripe API to process transactions

Add user info/picture

Google Map Search for non profits

Social media tab with feed and walls where the user can see other users and organizations activity and post to their walls


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Set Up

Ensure NPM is installed.  Get it here: https://www.npmjs.com/

Clone repo

run 'npm install' from command line

### API key
You need an api key for the project to successfully build/serve.

create a file called api-keys.ts in the src directory.
get an Api key for Guidestar's Search API using this guide: https://community.guidestar.org/docs/DOC-2193-how-to-sign-up-for-guidestar-sandbox-apis

put it in api-keys.ts like this:

export var guideStarKey = "[your key here]"


### FireBase Credentials
FireBase will be your database.

Sign In/Sign up for Firebase and create a firebase project or go to a firebase project you want to connect to this app here: https://firebase.google.com/

go to console, select the project you want to use, and select "Add Firebase to your web app" from the top middle overview panel.

copy/paste the info that pops up into api-keys.ts like this:

export var masterFirebaseConfig = {
  apiKey: "xxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxx",
  databaseURL: "https://xxxxxxxx.firebaseio.com",
  projectId: "xxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxxxxx"
}

### Guidestar API resources
Guidestar API FAQ: https://sandboxdata.guidestar.org/faq.html
Guidestar Search API docs: https://community.guidestar.org/docs/DOC-1779-guidestar-apis#jive_content_id_GuideStar_Search_API_Version_1_1
Guidestar Detail API docs:
https://community.guidestar.org/docs/DOC-1779-guidestar-apis#jive_content_id_GuideStar_Detail_API

##Angular Stuff

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
