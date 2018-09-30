# MBTA Departure Board for North Station and South Station Commuter Rail

This Angular web application uses the MBTA V3 API to retrieve and display current and upcoming commuter rail departures from North Station and South Station. It will show up to 20 departures, including scheduled and on time departures based on the current time as well as departures that are up to 2 hours late. The data/UI automatically refreshes every 30 seconds.

## Deployment

To deploy this application, copy all the files from the dist/my-app dir to any websever and navigate to index.html in a web browser.

## More Information

Key files in the src dir:

### app.module.ts

Main application module

### app.component.*

Main webpage, includes title and departure board component

### departure.ts

Departure object that is used by the departure board component

### departure.service.ts

Departure service that retrieves data from the MBTA V3 API for use by the departure board component

### mock-departures.ts

Hard-coded Departure objects to use for testing without the web service

### departure-board/departure-board.component.*

Departure board component made up of current date/time and a table of the next 20 commuter rail departures from North Station and South Station. Component is set to retrieve updated data every 30 seconds.

## Built With

* [Angular](https://angular.io/)

## Authors

**Charlie Denison**