# Inventory Transport Application
- This application's intended use is for a vehicle delivery company's drivers to be able to submit their trips to their administrators.
- There is a form, admin submission view page, and a reporting page in this application

## Bugs
- We have a bug that does not cause an error to be thrown when submitting an invalid form based on the required fields.
- The reporting page is not yet linked to the database that will show data metrics.
- Heroku application needed to be deployed with 2 repositories and will try to get completed before turn in 8/26.

## Future Updates
- We would like to create a database to hold all available options for easy access to make adjustments.
- A different form library would be used to make the error bug easier to manage.

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

# Inventory Transport Form Bugs
- Does not show error on required fields if requirements aren't met
- Select fields allow for submission of default select answer
