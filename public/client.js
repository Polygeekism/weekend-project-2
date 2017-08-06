console.log('script.js is sourced');
//global variable for storing numbers as they are entered
var enteredNumber = '';
//object to be sent to app.js
var mathObject = {
    x: '',
    y: '',
    operator: ''
}

$(document).ready(function () {
    console.log('jquery is sourced');
    //listening for number button clicks
    $('.calcButton').on('click', function () {
        //pull the correct number from the button
        var buttonPressed = this.value;
        //print numbers to the dom as they are pressed
        printToDom(buttonPressed);
        //save number for building mathObject
        enteredNumber += buttonPressed;

    })
    //click listening looking for operator clicks 
    $('.operatorButton').on('click', function () {
        //function to update dom and object with operator and reset enteredNumber
        operatorUpdate(this);
    });

    $('#equals').on('click', function () {
        //complete the mathobject with second number
        mathObjectStepTwo();
        //call post method to send info to the server

        postMathObject('/' + mathObject.operator, mathObject);

    })

    $('#clearButton').on('click', function () {
        //call the clear page method
        clearPage();
    });


    //ajax function
});

function operatorUpdate(thisOperator) {
    //add the selected operator to the display
    printToDom(' ' + $(thisOperator).html() + ' ');
    //collect the text from the id of the selected button
    var operator = thisOperator.id;
    //change the values for the first two properties of the mathobject
    mathObjectStepOne(enteredNumber, operator);
    //clear the number variable to track next inputs
    enteredNumber = '';
}
//ajax call to server for calculation that accepts the url path and mathobject
function postMathObject(url, mathObject) {
    $.ajax({
        method: 'POST',
        url: url,
        data: mathObject,
        success: function (response) {
            clearDisplay();
            printToDom('Calculating...')
            //delay display of new value for 3 seconds
            setTimeout(function () {
                clearDisplay();
                printToDom(response);
            }, 3000);

        }
    });
}
//take first number and operator and set those properties of the mathObject
function mathObjectStepOne(number, operator) {
    mathObject.x = number;
    mathObject.operator = operator;
}
//complete the math object
function mathObjectStepTwo() {
    mathObject.y = enteredNumber;
}

//clear the display and reset both the number tracker and the mathobject
function clearPage() {
    clearDisplay();
    enteredNumber = '';
    mathObject.x = '';
    mathObject.y = '';
    mathObject.operator = '';
}

function clearDisplay() {
    $('#displayResults').empty();
}

//function to print things to the display
function printToDom(result) {
    $('#displayResults').append(result);
}