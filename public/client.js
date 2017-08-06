console.log('script.js is sourced');

$(document).ready(function () {
    console.log('jquery is soured');
    

    $('#buttonContainer').on('click', '#addition', function () {
        //console.log('Addition clicked');
        var addObject = mathObjectBuilder('add');
        console.log(addObject);
        $.ajax({
            method: 'POST',
            url: '/addition',
            data: addObject,
            success: function(response){
                console.log(response);
            }
        });
        
    });
    $('#buttonContainer').on('click', '#subtraction', function () {
        //console.log('Subtraction clicked')
        mathObjectBuilder('subtract');
    });
    $('#buttonContainer').on('click', '#multiplication', function () {
        //console.log('Multiplication clicked')
        mathObjectBuilder('multiply');
    });
    $('#buttonContainer').on('click', '#division', function () {
        //console.log('Division clicked')
        mathObjectBuilder('divide');
    });
    $('#clearButton').on('click', function () {
        console.log('clear button clicked');
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
//some kind of ajax post  

function clearPage() {
        $('#firstNumber').val('');
        $('#secondNumber').val('');
        $('#displayResults').empty();

    }