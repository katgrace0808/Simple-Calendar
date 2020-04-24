let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
let hourArr = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];


$(document).ready(function() {
    for (let i = 0; i < hourArr.length; i++) {
        let hour = hourArr[i];
        let timeBlock = $("<main>").addClass(".time-block");
        let row = $("<section>").addClass("row");
        let hourCol = $("<label>").addClass("col-sm-2 hour");
        let textCol = $("<input>").addClass("col-sm-8 input");
        let saveCol = $("<img>").addClass("col-sm-2 saveBtn").attr({type: "button", src: "https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_53-512.png"});
        $(".container").append(timeBlock);
        timeBlock.append(row);
        row.append(hourCol);
        row.append(textCol);
        row.append(saveCol);
        hourCol.text(hour);
        console.log(hour);
}



// function timeChange() {
//     if ()
// }

});



