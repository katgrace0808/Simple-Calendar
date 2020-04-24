let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
let hourArr = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
let userText = "";
let userInput = $("#user-input")

function simpleCalendar() {
    $(document).ready(function() {
        currentDay();
        savedInput();

        for (let i = 0; i < hourArr.length; i++) {
            let hour = hourArr[i];
            let timeBlock = $("<main>").addClass(".time-block");
            let row = $("<section>").addClass("row");
            let hourCol = $("<label>").addClass("col-sm-2 hour");
            let textCol = $("<input>").addClass("col-sm-8 input past present future").attr("id", "user-input");
            let saveCol = $("<img>").addClass("col-sm-2 saveBtn").attr({id: "save", type: "button", src: "https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_53-512.png"});
            $(".container").append(timeBlock);
            timeBlock.append(row);
            row.append(hourCol);
            row.append(textCol);
            row.append(saveCol);
            hourCol.text(hour);
            console.log(hour);
        }
        function currentDay(){
            let currentDay = $("#currentDay").text(momentVar);
            return currentDay;
        }
    });
}

function savedInput(){
    let savedData = JSON.parse(localStorage.getItem("saveBtn"));
    if (savedData !== null) {
        userText = savedData;
    }
}

function storeInput() {
    localStorage.setItem("saveBtn", JSON.stringify(userText));
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    let userInput = userText.value;
    if (userInput === "") {
        return;
    }

    userText.push(userInput);

    storeInput();
    simpleCalendar();
});

function changeColor() {
    let presentHour = moment('hour');
    let pastHour = $(".past").moment().isBefore();
    let futureHour = $(".future").moment().isAfter();
//     if (moment().isBefore()) {
//     return pastHour; 
// }   else if (moment().isAfter()) {
//     futureHour = true;
// }
}
simpleCalendar();


