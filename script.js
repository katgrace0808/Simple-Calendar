let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
let hourArr = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

function simpleCalendar() {
    $(document).ready(function() {
        for (let i = 0; i < hourArr.length; i++) {
            let hour = hourArr[i];
            let timeBlock = $("<main>").addClass(".time-block");
            let row = $("<section>").addClass("row");
            let hourCol = $("<label>").addClass(" col-md-2 hour");
            let textCol = $(`<textarea class = 'col-md-8 input' id =input-${i}>`).attr("placeholder", "Add event here.");
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

        let now = new Date().getHours();
        if (now > 8) {
            $("#input-0").addClass("past");
        } else if (now >= 8 && now < 9) {
            $("#input-0").addClass("present");
        } else if (now < 8) {
            $("#input-0").addClass("future");
        }

        if (now > 9) {
            $("#input-1").addClass("past");
        } else if (now >= 9 && now < 10) {
            $("#input-1").addClass("present");
        } else if (now < 9) {
            $("#input-1").addClass("future");
        }

        if (now > 10) {
            $("#input-2").addClass("past");
        } else if (now >= 10 && now < 11) {
            $("#input-2").addClass("present");
        } else if (now < 10) {
            $("#input-2").addClass("future");
        }

        if (now > 11) {
            $("#input-3").addClass("past");
        } else if (now >= 11 && now < 12) {
            $("#input-3").addClass("present");
        } else if (now < 11) {
            $("#input-3").addClass("future");
        }

        if (now > 12) {
            $("#input-4").addClass("past");
        } else if (now >= 12 && now < 13) {
            $("#input-4").addClass("present");
        } else if (now < 12) {
            $("#input-4").addClass("future");
        }

        if (now > 13) {
            $("#input-5").addClass("past");
        } else if (now >= 13 && now < 14) {
            $("#input-5").addClass("present");
        } else if (now < 13) {
            $("#input-5").addClass("future");
        }

        if (now > 14) {
            $("#input-6").addClass("past");
        } else if (now >= 14 && now < 15) {
            $("#input-6").addClass("present");
        } else if (now < 14) {
            $("#input-6").addClass("future");
        }

        if (now > 15) {
            $("#input-7").addClass("past");
        } else if (now >= 15 && now < 16) {
            $("#input-7").addClass("present");
        } else if (now < 15) {
            $("#input-7").addClass("future");
        }

        if (now > 16) {
            $("#input-8").addClass("past");
        } else if (now >= 16 && now < 17) {
            $("#input-8").addClass("present");
        } else if (now < 16) {
            $("#input-8").addClass("future");
        }

        if (now > 17) {
            $("#input-9").addClass("past");
        } else if (now >= 17 && now < 18) {
            $("#input-9").addClass("present");
        } else if (now < 17) {
            $("#input-9").addClass("future");
        }

        let userText0 = $('#input-0');
        let userText1 = $('#input-1');
        let userText2 = $('#input-2');
        let userText3 = $('#input-3');
        let userText4 = $('#input-4');
        let userText5 = $('#input-5');
        let userText6 = $('#input-6');
        let userText7 = $('#input-7');
        let userText8 = $('#input-8');
        let userText9 = $('#input-9');

        userText0.val(localStorage.getItem('storedItem0'));
        userText1.val(localStorage.getItem('storedItem1'));
        userText2.val(localStorage.getItem('storedItem2'));
        userText3.val(localStorage.getItem('storedItem3'));
        userText4.val(localStorage.getItem('storedItem4'));
        userText5.val(localStorage.getItem('storedItem5'));
        userText6.val(localStorage.getItem('storedItem6'));
        userText7.val(localStorage.getItem('storedItem7'));
        userText8.val(localStorage.getItem('storedItem8'));
        userText9.val(localStorage.getItem('storedItem9'));

        $("#hour-0").on("click", function(event) {
            event.preventDefault();
            let userText0 = $("#input-0").val().trim();
            localStorage.setItem("storedItem0", userText0);
        });

        $("#hour-1").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-1").val().trim();
            localStorage.setItem("storedItem1", userText);
        });

        $("#hour-2").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-2").val().trim();
            localStorage.setItem("storedItem2", userText);
        });

        $("#hour-3").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-3").val().trim();
            localStorage.setItem("storedItem3", userText);
        });

        $("#hour-4").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-4").val().trim();
            localStorage.setItem("storedItem4", userText);
        });

        $("#hour-5").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-5").val().trim();
            localStorage.setItem("storedItem5", userText);
        });

        $("#hour-6").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-6").val().trim();
            localStorage.setItem("storedItem6", userText);
        });

        $("#hour-7").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-7").val().trim();
            localStorage.setItem("storedItem7", userText);
        });

        $("#hour-8").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-8").val().trim();
            localStorage.setItem("storedItem8", userText);
        });

        $("#hour-9").on("click", function(event) {
            event.preventDefault();
            let userText = $("#input-9").val().trim();
            localStorage.setItem("storedItem9", userText);
        });
    });
}
simpleCalendar();


