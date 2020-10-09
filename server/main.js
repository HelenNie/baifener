import {Meteor} from 'meteor/meteor';
import Games from '../imports/api/collections/games.js'; // import Games collection
import '../imports/api/methods/games.js';
import '../imports/api/server/publications.js';

Meteor.startup(() => {
	// const MongoClient = require('mongodb').MongoClient;
	// const uri = 'mongodb+srv://heroku_2f3vz94w:zhaobuZ1@cluster-2f3vz94w.gx0ud.mongodb.net/heroku_2f3vz94w?retryWrites=true&w=majority&authSource=admin';
	// const client = new MongoClient(uri, { useNewUrlParser: true});
	// client.connect(err => {
	//   const collection = client.db("heroku_2f3vz94w").collection("games");
	//   //do stuff here
	//   console.log("hello");
	//   client.close();
	// });
});
