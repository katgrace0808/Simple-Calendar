// let timeBlock = $(".container").append("<ul>");

let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
let hourArr = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];



let timeBlock = $(".row");
let timeCol = $("#time-column");
let textCol = $("#text-column");
let saveCol = $("#save-button");

let saveBtn = $("<button>");


$(document).ready(function() {
    let currentDay = $("#currentDay").text(momentVar);
    return currentDay;


function displayHours(){
    for (let i = 0; i < 10; i++) {
        timeBlock.append(timeCol, textCol, saveCol);
    }
    
    for (let j = 0; j < hourArr.length; j++) {
        timeCol.text(hourArr[j]);
        timeCol.push(hourArr[j]);
        
    }
}
});
displayHours();
