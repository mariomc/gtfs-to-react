# GTFS to React
Build React and React Native applications timetables from GTFS transit data

## What does it include?
This project follows a multi-repository approach, based on [Lerna](https://github.com/lerna/lerna) and provides the following packages:
* GTFS to React Server - An Express server that connects to the mongoDB and provides a GrapqhQL endpoint for all the clients.
* [Future Release - WIP] GTFS to React Native - A React Native application for mobile devices. It connects to the GTFS React Server for GrapqhQL data.
* GTFS to React Web - An web application that connects to the GTFS React Server for GrapqhQL data.

## How to get it running

You need to use [node-gtfs](https://github.com/BlinkTagInc/node-gtfs) to import your GTFS data into a mongodb collection. (At the moment, it's hardcoded to read if from a localhost server with the collection name of 'gtfs')
You can use any GTFS data available worldwide. [TransitFeeds](http://transitfeeds.com/) offer a wide array of choices for public GTFS feeds.

If you wish, you can use the config available in our repository.

Fork this project, then, install mongodb, and with the mongo daemon running, run the following to import the data to the database:
```
git clone git@github.com:mariomc/gtfs-to-react.git
cd gtfs-to-react
npm install gtfs mongoose lerna -g
gtfs-import --configPath import-config.json
```

This project is a multi-repository and uses [Lerna](https://github.com/lerna/lerna) to handle versioning and publishing.
At the moment of development, you need to
```
lerna bootstrap
```
To run all packages:
```
lerna run start
```

You can run each package individually by using this command inside the package folder:
```
npm start
```
