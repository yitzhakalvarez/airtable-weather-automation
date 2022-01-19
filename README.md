# <img src="https://github.com/yitzhakalvarez/airtable-weather-automation/blob/main/img/airtable.png" width="15" height="15"> Airtable Weather Automation

## Description

This automation is for volunteers or drivers who will pick up supplies and would like to know what the weather is going to be and what the weather is expected to be for the current day and current city. This automation is triggered when the date is set for “Today” in the 🚛 Supplier Pickup Events table. This automation first checks if the date is set to “Today” and will update the record with the given temperature in Fahrenheit for any New York city typed in the “City” field. Thru the 🙋🏽Volunteers CRM table, the user will be using the following fields to send out a text and display the temperature in Fahrenheit for the current date and current city thru the use of SMS automation: First Name, Phone number, City (from 🚛 Supplier Pickup Events), Temperature (Fahrenheit) (from 🚛 Supplier Pickup Events), and Expected weather (from 🚛 Supplier Pickup Events).

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

## Screenshot

<img src="https://github.com/yitzhakalvarez/airtable-weather-automation/blob/main/img/weather-automation-text.jpg" width="350" height="350">
