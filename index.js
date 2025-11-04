const monthElement = document.querySelector(".calender .full-day .month");
const fullDateElement = document.querySelector(".calender .full-day .day");
const daysElement = document.querySelector(".calender .number-days");
// here we have 12 month so we now which month using their index
const monthIndex = new Date().getMonth();
// first we want to now how much days in this month we have:
// here when we add this statement with 0 inthe last parameter i mean i want the last day in previous month
// to now this month last day i just add plus to the month argument
const lastDay = new Date(new Date().getFullYear(),monthIndex+1 , 0).getDate();
// get the first day in the month
// i minus one from the first day because in javascript its start from sunday not monday
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay()-1;
// Array of months to compared
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
monthElement.innerHTML = months[monthIndex];

fullDateElement.innerHTML = new Date().toDateString();

// here i add all days of the month in the html
let days = "";
// to add the empty days
for (let i = firstDay ; i>0 ; i--){
    days += `<div class="empty"></div>`;
}
// here i create divs equal to number of days
for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}
console.log(days);
daysElement.innerHTML = days;
console.log(daysElement);

