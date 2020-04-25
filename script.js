let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
let hourArr = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
let userText = "";
let userInput = [];

function simpleCalendar() {
    $(document).ready(function() {
        savedInput();
        let i;
        for (let i = 0; i < hourArr.length; i++) {
            let hour = hourArr[i];
            let timeBlock = $("<main>").addClass(".time-block");
            let row = $("<section>").addClass("row");
            let hourCol = $("<label>").addClass(" col-md-2 hour");
            let textCol = $(`<input class = 'col-md-8 input past present future' 'id =input-${i}>`).attr("placeholder", "Add event here.");
            let saveCol = $(`<button class = 'col-md-2 saveBtn' 'id=hour-${i}>`).attr("type", "button");
            let imgEl = $("<img>").attr({id: "image", src: "https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_53-512.png"});
            $(".container").append(timeBlock);
            timeBlock.append(row);
            row.append(hourCol);
            row.append(textCol);
            row.append(saveCol);
            saveCol.append(imgEl);
            hourCol.text(hour);
            // console.log(hour);
        }
        function currentDay(){
            let currentDay = $("#currentDay").text(momentVar);
            return currentDay;
        }
        currentDay();
        let storedItem = [];

        
        $(".saveBtn").on("click", function(event) {
            event.preventDefault();
            let i;
            let userText = $(`#input-${i}`);
            let userInput = $(".input").val().trim();
            let userHour = $(`#hour-${i}`);
            storedItem.push({userHour: userText});
            localStorage.setItem("storedItem", JSON.stringify(userInput));
            // console.log(storedItem);
            simpleCalendar();
        });
        


// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     // let grabID = document.getElementById(saveCol.id);
//     let i;
//     let userInput = $(`#input-${i}`).val();
//     // let userHour = $(`#hour-${i}`);
//     storedItem.push({userInput, userHour});
//     localStorage.setItem("storedItem", JSON.stringify(userInput));
//     console.log(localStorage.getItem("storedItem"));
//     if (userInput === "") {
//         return;
//     }
//     simpleCalendar();
// });

function savedInput(){
    let savedData = JSON.parse(localStorage.getItem("storedItem"));
    if (savedData !== null) {
        $(".input").text(savedData);
        // console.log(savedData);
    }
}

});


}
// function changeColor() {
//     let presentHour = moment('hour');
//     let pastHour = $(".past").moment().isBefore();
//     let futureHour = $(".future").moment().isAfter();
// //     if (moment().isBefore()) {
// //     return pastHour; 
// // }   else if (moment().isAfter()) {
// //     futureHour = true;
// // }
// }
simpleCalendar();


