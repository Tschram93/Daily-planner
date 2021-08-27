// moment().format('dddd'); 

// var today   = moment().format("MMM Do YY");
// var current = moment().format("")

$(function () {});

// Add today's date

// Add hours to the schedule
var hours = [
    {time: '9:00 AM', event: '' },
    {time: '10:00 AM', event: '' },
    {time: '11:00 AM', event: '' },
    {time: '12:00 PM', event: '' },
    {time: '1:00 PM', event: '' },
    {time: '2:00 PM', event: '' },
    {time: '3:00 PM', event: '' },
    {time: '4:00 PM', event: '' },
    {time: '5:00 PM', event: '' },
];

// Add to local storage 
var tasks = JSON.parse(localStorage.getItem('Day'))

// Shows current date
$('#currentDay').text(moment().format( "MMMM Do YYYY, h:mm:ss a"));
//  Adding moment.js
let now = new Date().getHours();

// Grid and rows
for (i = 0; i < hours.length; i++) {
    $(`<div class='col-2 time-frame'></div>`)
        .text(hours[i])
        .appendTo('.row');
    $(`<textarea class='col-8 note-input' id='input-${i}'></textarea>`)
        .attr('placeholder', 'Enter task here')
        .appendTo('.row');
    $(`<button class='col-2 btn btn-secondary saveBtn' id='hour${i}'></button>`)
    .text('save')
    .appendTo('.row');
    console.log(hours[i]);
}

//Displays input
row10amInput.value = localStorage.getItem('saved');

// Add eventlistener and saves the input data
//hour#.addEventListener('click', userDataStore#);

// Saves to local storage
function savedInfo() {
    localStorage.setItem('saved0', row9amInput.value);
};

