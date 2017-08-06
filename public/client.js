console.log('script.js is sourced');

$(document).ready(function () {
    console.log('jquery is sourced');


    $('#buttonContainer').on('click', '#addition', function () {
        //call object builder with operation clicked
        var addObject = mathObjectBuilder('add');
        //send object with url route to post function
        postMathObject('/addition', addObject);

    });
    $('#buttonContainer').on('click', '#subtraction', function () {
        //call object builder with operation clicked
        var addObject = mathObjectBuilder('subtract');
        //send object with url route to post function
        postMathObject('/subtract', addObject);

    });
    $('#buttonContainer').on('click', '#multiplication', function () {
        //call object builder with operation clicked
        var addObject = mathObjectBuilder('multiply');
        //send object with url route to post function
        postMathObject('/multiply', addObject);

    });
    $('#buttonContainer').on('click', '#division', function () {
        //call object builder with operation clicked
        var addObject = mathObjectBuilder('divide');
        //send object with url route to post function
        postMathObject('/divide', addObject);
        
    });
    $('#clearButton').on('click', function () {
        clearPage();
    });


    //ajax function
});
//function that takes operator and builds object
function mathObjectBuilder(operator) {
    var mathObject = {
        x: $('#firstNumber').val(),
        y: $('#secondNumber').val(),
        type: operator
    }
    //eventually this will send mahtobject to an ajax post
    return mathObject;
}
//ajax post that accepts both a url route and a completed object
function postMathObject(url, mathObject) {
    $.ajax({
        method: 'POST',
        url: url,
        data: mathObject,
        success: function (response) {
            console.log(response);
        }
    });
}

function clearPage() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#displayResults').empty();

}