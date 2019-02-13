console.log("The bot is starting");

//require Twit package, authenticate
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);

//
//  tweet 'hello world!'
//

//Tweet object
let tweet = { status: '#testtweet' };

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log('Something went wrong:');
        console.log(data);
    }   else {
        console.log('It worked!');
    }
};