# GTFS to React
Build React and React Native applications timetables from GTFS transit data

## What does it include?
This project follows a multi-repository approach, based on [Lerna](https://github.com/lerna/lerna) and provides the following packages:
* GTFS to React Server - An Express server that connects to the mongoDB and provides a GrapqhQL endpoint for all the clients.
* GTFS to React Native - A React Native application for mobile devices. It connects to the GTFS React Server for GrapqhQL data.
* GTFS to React Web - An web application that connects to the GTFS React Server for GrapqhQL data.

## How to get it running

You need to use [node-gtfs](https://github.com/BlinkTagInc/node-gtfs) to import your GTFS data into a mongodb collection. (At the moment, it's hardcoded to read if from a localhost server with the collection name of 'carris')
You can use any GTFS data available worldwide. [TransitFeeds](http://transitfeeds.com/) offer a wide array of choices for public GTFS feeds.

After that, fork this repo and run:
```
npm install
```

This project is a multi-repository and uses [Lerna](https://github.com/lerna/lerna) to handle versioning and publishing.
At the moment of development, you need to
```
npm install -g lerna
```
To run all packages:
```
lerna run start
```

You can run each package individually by using this command inside the package folder:
```
npm start
```