# Airtable Weather Automation

## Description

This automation is for volunteers or drivers who are going to pick up supplies and would like to know what the weather is going to be and the expected weather to be for the current day and current city. This automation is triggered when the date is set for “Today” in 🚛 Supplier Pickup Events table. This automation first checks if the date is set “Today” and will update the record with the given temperature in Fahrenheit for any city in New York that is typed in the “City” field. In the 🙋🏽Volunteers CRM table, the user will be using the following fields to send out a text and display the temperature in Fahrenheit for current date and current city through the use of the SMS automation; First Name, Phone number, City (from 🚛 Supplier Pickup Events), Temperature (Fahrenheit) (from 🚛 Supplier Pickup Events), Expected weather (from 🚛 Supplier Pickup Events).

## To-Do

### Tables, views, and Fields required:

- 🚛 Supplier Pickup Events
  - Pickup Events Today
    - Event Name
    - Date
    - Today?
    - City
    - Temperature (Fahrenheit)
    - Expected weather
- 🙋🏽Volunteers CRM
  - First Name
  - Phone number
  - City (from 🚛 Supplier Pickup Events)
  - Temperature (Fahrenheit) (from 🚛 Supplier Pickup Events)
  - Expected weather (from 🚛 Supplier Pickup Events)
