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

  qCreator();

  $('#next').click(function() {
      value = $("input[type='radio']:checked").val();

      if (value == undefined) {
        $('.qSection').append('<p>Please select an answer</p>');
        return;

      } else {

        userResponse.push(value);
          qCounter++;
          qCreator(qCounter);

      }
  });

    function qCreator(index) {
      if(qCounter < questions.length) {
          var question = questions[qCounter].question;
          var options = questions[qCounter].responses;
          var numOptions = questions[qCounter].responses.length;

          $('.questions').text(question);

          $('.selections').find('li').remove();

          var option;
          for(var i = 0; i < numOptions; i++) {
            option = options[i];


            $('.selections').append('<li><input type="radio" name="selections" value="' + option + '"/>' + option + "</li>");

          };
        } else {
          displayResults(userResponse);
        };
    };

    function displayResults(arr) {
      $('.questions').text('Results:')
      $('.selections').remove();
      for(var i = 0; i < arr.length; i++) {
        if(arr[0] == 'Female') {
          $('.results').append('<p>Women are four times more likely to develop varicose veins than men.</p>')
        } else {
          $('.results').append('<p>Studies indicate up to 56% of men will experience varicose veins in their life</p>');
        };
      };
    };












});
