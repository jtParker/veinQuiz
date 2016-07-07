$(document).ready(function() {

  var questions = [{
    question: 'What is your gender:',
    responses: ['Female', 'Male']
  }, {
    question: 'Do you experience any of these symptoms?',
    responses: ['Leg pain', 'Leg swelling', 'Heaviness in legs', 'Restless Legs', 'None of these symptoms']
  }, {
    question: 'Does anyone in your family have varicose veins?',
    responses: ['Yes', 'No']
  }, {
    question: 'Do you have obvious bulging varicose veins?',
    responses: ['Yes', 'No']
  }];

  var userResponse = [];

  var qCounter = 0;

  qCreator(qCounter);

    function qCreator(index) {

        var question = questions[qCounter].question;
        var options = questions[qCounter].responses;
        var numOptions = questions[qCounter].responses.length;

        $('#qSection').append('<h3>' + question + '</h3>');

        var option;
        for(var i = 0; i < numOptions; i++) {
          option = options[i];

          $('#qSection').append('<li><input type="radio"' + option + "</li>");
        };
    };
})
