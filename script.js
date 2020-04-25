let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
let hourArr = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
let userText = "";
let userInput = [];
let savedData = "";


function simpleCalendar() {
    $(document).ready(function() {
        savedInput();
        for (let i = 0; i < hourArr.length; i++) {
            let hour = hourArr[i];
            let timeBlock = $("<main>").addClass(".time-block");
            let row = $("<section>").addClass("row");
            let hourCol = $("<label>").addClass(" col-md-2 hour");
            let textCol = $(`<input class = 'col-md-8 input' id =input-${i}>`).attr("placeholder", "Add event here.");
            let saveCol = $(`<button class = 'col-md-2 saveBtn' id=hour-${i}>`).attr("type", "button").attr("data-number", i);
            let imgEl = $("<img>").attr({id: "image", src: "https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_53-512.png"});
            $(".container").append(timeBlock);
            timeBlock.append(row);
            row.append(hourCol);
            row.append(textCol);
            row.append(saveCol);
            saveCol.append(imgEl);
            hourCol.text(hour);
        
    
        }
        function currentDay(){
            let currentDay = $("#currentDay").text(momentVar);
            return currentDay;
        }
        currentDay();
        let storedItem = [];
        function savedInput(){
            let savedData = JSON.parse(localStorage.getItem("storedItem"));
            let i = $(".saveBtn").data("number")
                if (savedData !== "") {
                $(`#input-${i}`).val(savedData);
                console.log(savedData);
                } else {
                    return;
                }
        }
        
        $(".saveBtn").on("click", function(event) {
            event.preventDefault();
            let i = $(this).data("number");
            let userText = $(`#input-${i}`).val().trim();
            let userHour = `hour-${i}`;
            storedItem.push({[userHour]: userText});
            localStorage.setItem("storedItem", JSON.stringify(storedItem));
            console.log(storedItem);
            simpleCalendar();
        });
        
        let now = new Date().getHours();
        if (now > 8) {
            $("#input-0").addClass("past");
        }
        else if (now >= 8 && now < 9) {
            $("#input-0").addClass("present");
        }
        else if (now < 8) {
            $("#input-0").addClass("future");
        }

        if (now > 9) {
            $("#input-1").addClass("past");
        }
        else if (now >= 9 && now < 10) {
            $("#input-1").addClass("present");
        }
        else if (now < 9) {
            $("#input-1").addClass("future");
        }

        if (now > 10) {
            $("#input-2").addClass("past");
        }
        else if (now >= 10 && now < 11) {
            $("#input-2").addClass("present");
        }
        else if (now < 10) {
            $("#input-2").addClass("future");
        }

        if (now > 11) {
            $("#input-3").addClass("past");
        }
        else if (now >= 11 && now < 12) {
            $("#input-3").addClass("present");
        }
        else if (now < 11) {
            $("#input-3").addClass("future");
        }

        if (now > 12) {
            $("#input-4").addClass("past");
        }
        else if (now >= 12 && now < 13) {
            $("#input-4").addClass("present");
        }
        else if (now < 12) {
            $("#input-4").addClass("future");
        }

        if (now > 13) {
            $("#input-5").addClass("past");
        }
        else if (now >= 13 && now < 14) {
            $("#input-5").addClass("present");
        }
        else if (now < 13) {
            $("#input-5").addClass("future");
        }

        if (now > 14) {
            $("#input-6").addClass("past");
        }
        else if (now >= 14 && now < 15) {
            $("#input-6").addClass("present");
        }
        else if (now < 14) {
            $("#input-6").addClass("future");
        }

        if (now > 15) {
            $("#input-7").addClass("past");
        }
        else if (now >= 15 && now < 16) {
            $("#input-7").addClass("present");
        }
        else if (now < 15) {
            $("#input-7").addClass("future");
        }

        if (now > 16) {
            $("#input-8").addClass("past");
        }
        else if (now >= 16 && now < 17) {
            $("#input-8").addClass("present");
        }
        else if (now < 16) {
            $("#input-8").addClass("future");
        }

        if (now > 17) {
            $("#input-9").addClass("past");
        }
        else if (now >= 17 && now < 18) {
            $("#input-9").addClass("present");
        }
        else if (now < 17) {
            $("#input-9").addClass("future");
        }

    


});


}

simpleCalendar();


