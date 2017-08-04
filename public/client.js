console.log('script.js is sourced');

$(document).ready(function () {
    console.log('jquery is soured');

    $('#buttonContainer').on('click', '#addition', function () {
        console.log('Addition clicked');

    });
    $('#buttonContainer').on('click', '#subtraction', function () {
        console.log('Subtraction clicked')
    });
    $('#buttonContainer').on('click', '#multiplication', function () {
        console.log('Multiplication clicked')
    });
    $('#buttonContainer').on('click', '#division', function () {
        console.log('Division clicked')
    });

});