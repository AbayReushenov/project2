// 11.4 Dates and Times
// The Date class is JavaScript’s API for working with dates and times. Create a Date object with the Date() constructor. With no arguments, it returns a Date object that represents the current date and time:
let now = new Date(); // The current time
// If you pass one numeric argument, the Date() constructor interprets that argument
// as the number of milliseconds since the 1970 epoch:
let epoch = new Date(0); // Midnight, January 1st, 1970, GMT
// If you specify two or more integer arguments, they are interpreted as the year, month, day-of-month, hour, minute, second, and millisecond in your local time zone, as in the following:
let century = new Date(2100, 0,
1,
2, 3, 4, 5);
// Year 2100
// January
// 1st 
// 02:03:04.005, local time

// Date.UTC(). This static method takes the same arguments as the Date() constructor, interprets them in UTC, and returns a millisecond timestamp that you can pass to the Date() constructor:
    // Midnight in England, January 1, 2100
let century = new Date(Date.UTC(2100, 0, 1));

let century = new Date("2100-01-01T00:00:00Z");

let d = new Date(); // Start with the current date 
d.setFullYear(d.getFullYear() + 1); // Increment the year

setDate()
setMonth()
setYear()

let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);



let d = new Date(2020, 0, 1, 17, 10, 30); 
// 5:10:30pm on New Year's Day 2020 
d.toString() // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)" 
d.toUTCString() // => "Thu, 02 Jan 2020 01:10:30 GMT" 
d.toLocaleDateString() // => "1/1/2020": 'en-US' locale 
d.toLocaleTimeString() // => "5:10:30 PM": 'en-US' locale
d.toISOString() // => "2020-01-02T01:10:30.000Z"

toString()
// This method uses the local time zone but does not format the date and time in a locale-aware way.
toUTCString()

toISOString()
// This method prints the date and time in the standard year-month-day hours:minutes:seconds.ms format of the ISO-8601 standard. The letter “T” sepa‐ rates the date portion of the output from the time portion of the output. The time is expressed in UTC, and this is indicated with the letter “Z” as the last letter of the output.
toLocaleString()
// This method uses the local time zone and a format that is appropriate for the user’s locale.
toDateString()
// This method formats only the date portion of the Date and omits the time. It uses the local time zone and does not do locale-appropriate formatting.
toLocaleDateString()
// 
toTimeString()
//
//This method formats only the date. It uses the local time zone and a locale- appropriate date format.
// This method formats only the time and omits the date. It uses the local time zone but does not format the time in a locale-aware way.
toLocaleTimeString()
// This method formats the time in a locale-aware way and uses the local time zone.

let d = new Date("2020-01-02T13:14:15Z"); // January 2nd, 2020, 13:14:15 UTC // With no options, we get a basic numeric date format
Intl.DateTimeFormat("en-US").format(d) // => "1/2/2020"
Intl.DateTimeFormat("fr-FR").format(d) // => "02/01/2020"

let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
Intl.DateTimeFormat("en-US", opts).format(d) 
// => "Thursday, January 2, 2020" 
Intl.DateTimeFormat("es-ES", opts).format(d) 
// => "jueves, 2 de enero de 2020"
// The time in New York, for a French-speaking Canadian
opts = { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" }; 
Intl.DateTimeFormat("fr-CA", opts).format(d) // => "8 h 14"

// Once a second: clear the console and print the current time
let clock = setInterval(() => { console.clear();
console.log(new Date().toLocaleTimeString()); }, 1000);
// After 10 seconds: stop the repeating code above.
setTimeout(() => { clearInterval(clock); }, 10000);

