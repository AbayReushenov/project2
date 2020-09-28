// id задания: 22 Не сдано
// Задание: Напишите программу, которая принимает с клавиатуры два числа, образующих ответ на вопрос «который час?» (первое – часы, второе минуты, например, 15 и 42) и выводит на экран следующие значения (каждое – в отдельной строке): сколько секунд прошло с полуночи да «данного момента» и сколько минут прошло за это же время, а также сколько минут осталось до полуночи.

const hours = +prompt("Который час? Введите часы: "),
      minutes = +prompt("Введите минуты: "),
      dateCustom = new Date(),
      timeNow = new Date();
      dateCustom.setHours(hours,minutes);
      

let century = new Date(2100, 0,
1,
2, 3, 4, 5);
// Year 2100
// January
// 1st 
// 02:03:04.005, local time

let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);

// Assign current time to a variable
const now = new Date();

// Print local and UTC timezones
console.log(now.getHours());
console.log(now.getUTCHours());




alert(`C полуночи до «данного момента» прошло ${sec1}секунд
\nC полуночи до «данного момента» прошло ${minutes1} минут.
\nДо полуночи осталось ${minutes2} минут.`)

const timenow = new Date()
console.log(Date.now())
console.log(timenow)

var today = new Date();
var birthday = new Date('December 17, 1995 03:24:00');
var birthday = new Date('1995-12-17T03:24:00');
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
var seconds = Math.floor(Date.now() / 1000);
// В этом случае важно возвращать только целое число (так что простое деление не подойдет), а также возвращать только фактически прошедшие секунды (поэтому этот код использует Math.floor () а не Math.round ()).


// Date Creation	Output
new Date() //	Current date and time
new Date(timestamp)	//Creates date based on milliseconds since Epoch time
new Date(date string)//	Creates date based on date string
new Date(year, month, day, hours, minutes, seconds, milliseconds)	//Creates date based on specified date and time

// Timestamp method
new Date(-6106015800000);

// Date string method
new Date("January 31 1980 12:30");

// Date and time method
new Date(1776, 6, 4, 12, 30, 0, 0);
// Initialize a new birthday instance
const birthday = new Date(1980, 6, 31);

birthday.getFullYear();      // 1980
birthday.getMonth();         // 6
birthday.getDate();          // 31
birthday.getDay();           // 4
birthday.getHours();         // 0
birthday.getMinutes();       // 0
birthday.getSeconds();       // 0
birthday.getMilliseconds();  // 0
birthday.getTime();          // 333849600000 (for GMT)

// Get today's date
const today = new Date();

// Compare today with October 3rd
if (today.getDate() === 3 && today.getMonth() === 9) {
  console.log("It's October 3rd.");
} else {
  console.log("It's not October 3rd.");
}

// Modifying the Date with set
// For all the get methods that we learned about above, there is a corresponding set method. Where get is used to retrieve a specific component from a date, set is used to modify components of a date. Below is a detailed chart of the set methods of the Date object.

// Date/Time	Method	Range	Example
// Year	setFullYear()	YYYY	1970
// Month	setMonth()	0-11	0 = January
// Day (of the month)	setDate()	1-31	1 = 1st of the month
// Day (of the week)	setDay()	0-6	0 = Sunday
// Hour	setHours()	0-23	0 = midnight
// Minute	setMinutes()	0-59	
// Second	setSeconds()	0-59	
// Millisecond	setMilliseconds()	0-999	
// Timestamp	setTime()	Milliseconds since Epoch time

// Change year of birthday date
birthday.setFullYear(1997);

birthday;
//Output
//Thu Jul 31 1997 00:00:00 GMT+0000 (UTC)

let startTime = Date.now();

getTime() //method returns this internal value, and the
set Time() //method sets it. 
// So you can add 30 seconds to a Date with code like this, for example:
d.setTime(d.getTime() + 30000);

setDate()
setMonth()
setYear()

let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);

let d = new Date(2020, 0, 1, 17, 10, 30); 
// 5:10:30pm on New Year's Day 2020 
console.log(d.toString()) // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)" 
console.log(d.toUTCString()) // => "Thu, 02 Jan 2020 01:10:30 GMT" 
console.log(d.toLocaleDateString()) // => "1/1/2020": 'en-US' locale 
console.log(d.toLocaleTimeString()) // => "5:10:30 PM": 'en-US' locale
console.log(d.toISOString()) // => "2020-01-02T01:10:30.000Z"

// Wed Jan 01 2020 17:10:30 GMT+0300 (Moscow Standard Time)
// Wed, 01 Jan 2020 14:10:30 GMT
// 1/1/2020
// 5:10:30 PM
// 2020-01-01T14:10:30.000Z

let clock = setInterval(() => { console.clear();
    console.log(new Date().toLocaleTimeString()); }, 1000);
    // After 10 seconds: stop the repeating code above.
    setTimeout(() => { clearInterval(clock); }, 10000);
