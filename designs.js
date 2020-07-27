// Define necessary variables
var height;
var width;
var color;
var table = document.getElementById('pixelCanvas');

// Make sure DOM is ready
$(document).ready(function() {
    $('#sizePicker').submit(function(event) {
        event.preventDefault();
        table.innerHTML = '';
        height = $('#inputHeight').val();
        width = $('#inputWidth').val();
        makeGrid(height, width);
        //console.log('test')
    });
    var clear = document.getElementById('test'); // Added an event listener that would allow to clear all colors, just like hitting submit, but anyway
    clear.addEventListener('click', function() {
        //console.log('test5');
        var clearClass = document.querySelectorAll('.cell'); // https://isabelcastillo.com/set-style-attribute-for-multiple-elements-javascript
        var i = clearClass.length;
        for(j = 0; j < i; j++) {
            clearClass[j].removeAttribute('style') // https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
        }
    });
});

// When size is submitted by the user, call makeGrid()
// Leveraged the following resources to owrite this code:
// - https://www.w3schools.com/jsref/met_table_insertrow.asp
// - https://stackoverflow.com/questions/27371109/insertrow-javascript-not-recognized
// Tried it first using jQuery and caught a type error 

function makeGrid(height, width) {
    // console.log('test2')
    for (var x = 0; x < height; x++) {
        var row = table.insertRow(x);
        for (var y = 0; y < width; y++) {
            var cell = row.insertCell(y);
            cell.classList.add('cell'); // https://www.w3schools.com/howto/howto_js_add_class.asp
            cell.addEventListener('click', function(event) {
                // console.log('test3');
                var color = document.getElementById('colorPicker').value;
                event.target.style.backgroundColor = color;
            });
            cell.addEventListener('dblclick', function(event) { // https://www.w3schools.com/jsref/event_ondblclick.asp
                console.log('test4');
                event.target.style.backgroundColor = ''; // I like the if/else method better that GlitchITSystem came up with, but with this one I came up on my own
            });
        };
    };
}
