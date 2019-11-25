<script>
// hide nonjavascript make selection and add questions form
$('.manufacturer').hide(0,0,addQuestions());

let make = null;
let air = null;
let switches = null;

//Show all seat cards
$('.seats-container').hide();
// $('div[id^="k7"]').hide();

//Hide question 2 and 3
$('.question2-container').hide();
$('.question3-container').hide();

const $k700 = $('#k700');
const $k701 = $('#k701');
const $k702 = $('#k702');
const $k703 = $('#k703');
const $p700 = $('#p700');
const $p701 = $('#p701');
const $p702 = $('#p702');
const $p703 = $('#p703');
const $manufacturerRadios = $('input[name="manufacturer"]');
const $seatbaseRadios = $('input[name="seatbase"]');
const $switchRadios = $('input[name="switches"]');

$manufacturerRadios.change(function() {
    let $checked = $manufacturerRadios.filter(':checked');
    $checked.blur();
    make = $checked.val();
    $('.question2-container').fadeIn(500);
    displaySeats()
    $('.seats-container').show();
});
$seatbaseRadios.change(function() {
    let $checked = $seatbaseRadios.filter(':checked');
    $checked.blur();
    $checked.prop("checked", true);
    air = $checked.val();
    if(air === 'yes') {
        $('.question3-container').fadeIn(500);
    } else {
        $('.question3-container').slideUp(800).hide();
        $switchRadios.filter(':checked').prop('checked', false);
        switches = null;
    }
    displaySeats()
});
$switchRadios.change(function() {
    let $checked = $switchRadios.filter(':checked');
    $checked.blur();
    $checked.prop("checked", true);
    switches = $checked.val();
    displaySeats()
});

function displaySeats() {
    $('div[id^="p7"]').hide();
    $('div[id^="k7"]').hide();
    if((switches !== null && air !== null && make !== null) || (switches !== null && make !== null)) {
        showSeat = `${make}70${switches}`;
        if(make === 'k') {
            if(switches === '1') {
                $k701.fadeIn(800);
            } else if(switches === '2') {
                $k702.fadeIn(800);
            } else if(switches === '3') {
                $k703.fadeIn(800);
            }
        } else {
            if(switches === '1') {
                $p701.fadeIn(800);
            } else if(switches === '2') {
                $p702.fadeIn(800);
            } else if(switches === '3') {
                $p703.fadeIn(800);
            }
        }
    } else if(air !== null && make !== null) {
        if(air === 'no') {
            if(make === 'k')
                $k700.fadeIn(800);
            else
                $p700.fadeIn(800);
        } else {
            if(make === 'k') {
                $k701.fadeIn(800);
                $k702.fadeIn(800);
                $k703.fadeIn(800);
            } else {
                $p701.fadeIn(800);
                $p702.fadeIn(800);
                $p703.fadeIn(800);
            }
        }
    } else if(air !== null && switches !== null) {
        if(air === 'no') {
            $k700.fadeIn(800);
            $p700.fadeIn(800);
        } else {
            if(switches === '1') {
                $k701.fadeIn(800);
                $p701.fadeIn(800);
            } else if(switches === '2') {
                $k702.fadeIn(800);
                $p702.fadeIn(800);
            } else if(switches === '3') {
                $k703.fadeIn(800);
                $p703.fadeIn(800);
            } else {
                $k700.fadeIn(800);
                $p700.fadeIn(800);
            }
        }
    } else if(air !== null) {
        if(air === 'no') {
            $k700.fadeIn(800);
            $p700.fadeIn(800);
        } else {
            $p701.fadeIn(800);
            $p702.fadeIn(800);
            $p703.fadeIn(800);
            $k701.fadeIn(800);
            $k702.fadeIn(800);
            $k703.fadeIn(800);
        }
    } else if(switches !== null) {
        if(switches === '1') {
            $k701.fadeIn(800);
            $p701.fadeIn(800);
        } else if(switches === '2') {
            $k702.fadeIn(800);
            $p702.fadeIn(800);
        } else {
            $k703.fadeIn(800);
            $p703.fadeIn(800);
        }
    } else if(make !== null) {
        if(make === 'k') {
            $('div[id^="k7"]').fadeIn(800);
        } else {
            $('div[id^="p7"]').fadeIn(800);
        }
    } else {
        $('div[id^="p7"]').fadeIn(800);
        $('div[id^="k7"]').fadeIn(800);
    }
}

/*=================================
Add HTML elements to page
==================================*/

/**
* Function addQuestions()
* Generates HTML elements and appends them to the DOM
*/
function addQuestions() {
    const questionsDiv = $('.seat-questions');
    questionsDiv.append(generateQuestionsForm());
    questionsDiv.append(generateSeatCards());
}

/*=================================
Generate HTML for page
==================================*/

/**
* function generateQuestionsForm()
* Creates search form, inputs and submit button HTML and appends to search container
* @return {object} Returns a form
*/
function generateQuestionsForm() {
    //Create Form element
    const questionsContainer = buildElement('div', '', { class: 'questions-container', action: '#' });

    //Create Seat finding instructions
    const headerSeatQuestions = buildElement('h2', 'Identify GRA-MAG seat by answering the following questions:', { class: 'questions-header'});
    questionsContainer.append(headerSeatQuestions);

    //Append Question Div's to questionsDivContainer
    questionsContainer.append(createQuestion1()); // add question 1
    questionsContainer.append(createQuestion2()); // add question 2
    questionsContainer.append(createQuestion3()); // add question 3
    
    //Return created form
    return questionsContainer;
}

/**
 * Function createquestion1()
 * Builds question 1 HTML elements
 * @return {object} Returns a div containing question and radio buttons.
 */
function createQuestion1() {

    //Create div container for question1
    const divQuestion1 = buildElement('div', '', {class: 'question1-container'});

    //Create question 1 Label and append to question 1 div
    const divQuestion1Label = buildElement('label', 'Select truck manufacturer.', {class: 'manfacturer-label', for: 'manufacturer'});
    divQuestion1.append(divQuestion1Label);

    //Create question 1 Radio Button for Kenworth and append to Question 1 Div
    const divQuestion1Radio1 = buildElement('input', '', {type: 'radio', name: 'manufacturer', value: 'k', id: 'manufacturer-logo-kenworth', class: 'question-answers manufacturer-logo kenworth'});
    divQuestion1.append(divQuestion1Radio1);

    //Create question 1 Radio Button for Peterbilt and append to Question 1 Div
    const divQuestion1Radio2 = buildElement('input', '', {type: 'radio', name: 'manufacturer', value:'p', id: 'manufacturer-logo-peterbilt', class: 'question-answers manufacturer-logo peterbilt'});
    divQuestion1.append(divQuestion1Radio2);

    //Return Quesiton 1 div
    return divQuestion1;
}


/**
 * Function createquestion2()
 * Builds question 2 HTML elements
 * @return {object} Returns a div containing question and radio buttons.
 */
function createQuestion2() {
    //Create div container for question2
    const divQuestion2 = buildElement('div', '', {class: 'question2-container'});

    // Create question 2 Label and append to question 2 div
    const divQuestion2Label = buildElement('label', 'Does seat use air suspension?', {class: 'seatbase-label', for: 'seatbase'});
    divQuestion2.append(divQuestion2Label);

    //Create question 2 Radio Button for Air Seatbase and append to Question 2 Div
    const divQuestion2Radio1 = buildElement('input', '', {type: 'radio', name: 'seatbase', value: 'yes', id: 'seatbase-air', class: 'question-answers seatbase-img air'});
    divQuestion2.append(divQuestion2Radio1);

    //Create question 2 Radio Button for Static Seatbase and append to Question 2 Div
    const divQuestion2Radio2 = buildElement('input', '', {type: 'radio', name: 'seatbase', value:'no', id: 'seatbase-static', class: 'question-answers seatbase-img static'});
    divQuestion2.append(divQuestion2Radio2);

    return divQuestion2;
}

/**
 * Function createquestion3()
 * Builds question 3 HTML elements
 * @return {object} Returns a div containing question and radio buttons.
 */
function createQuestion3() {
    //Create div container for question3
    const divQuestion3 = buildElement('div', '', {class: 'question3-container'});

    //Create question 3 Label and append to question 3 div
    const divQuestion3Label = buildElement('label', 'How many lumbar control switches does the seat have?', {class: 'switches-label', for: 'switches'});
    divQuestion3.append(divQuestion3Label);

    //Create question 3 Radio button for 1 Switches and append to Question 3 Div
    const divQuestion3Radio1 = buildElement('input', '1', {type: 'radio', name: 'switches', value: '1', id: 'switch1', class: 'question-answers switches-img switch1'});
    divQuestion3.append(divQuestion3Radio1);

    //Create question 3 Radio button for 2 Switches and append to Question 3 Div
    const divQuestion3Radio2 = buildElement('input', '2', {type: 'radio', name: 'switches', value:'2', id: 'switch2', class: 'question-answers switches-img switch2'});
    divQuestion3.append(divQuestion3Radio2);

    //Create question 3 Radio button for 3 Switches and append to Question 3 Div
    const divQuestion3Radio3 = buildElement('input', '3', {type: 'radio', name: 'switches', value:'3', id: 'switch3', class: 'question-answers switches-img switch3'});
    divQuestion3.append(divQuestion3Radio3);

    return divQuestion3;
}

/**
 * Function generateSeatCards()
 * Builds seat cards HTML elements and returns the seats-container HTML Element
 * @return {object} Returns a seats-container div with seat cards.
 */
function generateSeatCards() {
    const seatsDiv = buildElement('div', '', {class: 'seats-container'});

    //Create Seat Cards Header and append to form
    const seatCardsHeader = buildElement('h2', 'Click your GRA-MAG seat to display OEM parts with downloadable PDFs links', {}, 'text-align: center');
    seatsDiv.append(seatCardsHeader);

    const divk700 = buildElement('div', '', {class: 'seat-card', id: 'k700', onclick: "window.location='https://gramag.com/kenworth#ken700'"})
    const divk700Content = buildElement('div', '700', {class: 'seat-card-content'});
    divk700.append(divk700Content);

    const divk701 = buildElement('div', '', {class: 'seat-card', id: 'k701', onclick: "window.location='https://gramag.com/kenworth#ken701'"})
    const divk701Content = buildElement('div', '701', {class: 'seat-card-content'});
    divk701.append(divk701Content);

    const divk702 = buildElement('div', '', {class: 'seat-card', id: 'k702', onclick: "window.location='https://gramag.com/kenworth#ken702'"})
    const divk702Content = buildElement('div', '702', {class: 'seat-card-content'});
    divk702.append(divk702Content);

    const divk703 = buildElement('div', '', {class: 'seat-card', id: 'k703', onclick: "window.location='https://gramag.com/kenworth#ken703'"})
    const divk703Content = buildElement('div', '703', {class: 'seat-card-content'});
    divk703.append(divk703Content);

    const divp700 = buildElement('div', '', {class: 'seat-card', id: 'p700', onclick: "window.location='https://gramag.com/peterbilt#pet700'"})
    const divp700Content = buildElement('div', '700', {class: 'seat-card-content'});
    divp700.append(divp700Content);

    const divp701 = buildElement('div', '', {class: 'seat-card', id: 'p701', onclick: "window.location='https://gramag.com/peterbilt#pet701'"})
    const divp701Content = buildElement('div', '701', {class: 'seat-card-content'});
    divp701.append(divp701Content);

    const divp702 = buildElement('div', '', {class: 'seat-card', id: 'p702', onclick: "window.location='https://gramag.com/peterbilt#pet702'"})
    const divp702Content = buildElement('div', '702', {class: 'seat-card-content'});
    divp702.append(divp702Content);

    const divp703 = buildElement('div', '', {class: 'seat-card', id: 'p703', onclick: "window.location='https://gramag.com/peterbilt#pet703'"})
    const divp703Content = buildElement('div', '703', {class: 'seat-card-content'});
    divp703.append(divp703Content);

    seatsDiv.append(divk700);
    seatsDiv.append(divk701);
    seatsDiv.append(divk702);
    seatsDiv.append(divk703);
    seatsDiv.append(divp700);
    seatsDiv.append(divp701);
    seatsDiv.append(divp702);
    seatsDiv.append(divp703);

    return seatsDiv;
}

/*===========================
Helper Functions
=============================*/

/*
* Function buildElement()
* This takes html element name, text content of element, and object of attributes and values.
* This will accept any amount of attributes and matching values and add them to the element.
* @param {string} element      - This the only required parameter. The html element we want to create.
* @param {string} textContent  - String of content to set text content of element
* @param {object} parameters   - Attribute followed by value
* @param {style}  style        - String of inline css for styling
*/
function buildElement(element, textContent = '', parameters = {}, style = '') {
const newElement = document.createElement(element); // create new element

// Iterate through parameters and add to the new element
$.each(parameters, function (key, parameter) {
  // Uses truthy to determine if we need to add the parameter. If the string length is > 0 then we add the attribute to the element
  if (parameter) {
      newElement.setAttribute(key, parameter);
  }
});

// Check if we have styles to add to element
if(style !== '')
    newElement.setAttribute('style', style) //Add style to element

// Check if we have text content to add to element
if(textContent !== '')
    newElement.textContent = textContent; //Add textcontent to element

return newElement; // return new element with parameters
}
</script>