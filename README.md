# Inventory Transport Application

## UPDATE
- 09.09.22 everything is there acting like it should work, but have had 0 successful attempts.
  - admin.js, basicTable.js, and manual.js are the pages that were managed on all recent updates to have working code. 
  - Worked with 2 different instructors and reccomendation is to start fresh with more time.
  - This project will be worked on personally outside of the scopes of the deadline of Midnight tonight.

- This application's intended use is for a vehicle delivery company's drivers to be able to submit their trips to their administrators.
- There is a form, admin submission view page, and a reporting page in this application.

## Bugs
- Does not show error when submitting an invalid form based on the required fields.
- Select fields allowed for submission of default select answer.
- The reporting page is not yet linked to the database that will show data metrics (placeholder data in place)
- Heroku application was not able to deploy on time due to working on application.

- Messages were sent for assistance Thursday evening 8/25 to both TA and instructor about not being able to connect submission to backend and did not receive a response. 
- pgAdmin is connected and does populate data to the backend, just not vice versa. Postman 'GET' request works, but errors arise on 'POST' about null values even though allow null values is set to true.

## Future Updates
- We would like to create a database to hold all available options for easy access to make adjustments.
- A different form library would be used to make the error on required fields bug easier to manage.

## Organization
- Front End contains all of the source code for the React application
- Back End contains all the source code for the Node.js server application

## Getting started
- Clone the project locally
- Change into the Front End directory
- `npm install`
- `npm start`
- In a different terminal
- Change into the Back End directory
- `npm install`
- `npm start`
