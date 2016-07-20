$(document).ready(function() {

  var questions = [{
    question: 'What is your gender:',
    responses: ['Female', 'Male']
  }, {
    question: 'Do you experience any of these symptoms?',
    responses: ['Leg pain', 'Leg swelling', 'Heaviness in legs', 'Restless legs', 'None of these symptoms']
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

        if(arr[0] == 'Female') {
          $('.results').append('<p class="results">Women are four times more likely to develop varicose veins than men.</p>');
        } else {
          $('.results').append('<p class="results">Studies indicate up to 56% of men will experience varicose veins in their life</p>');
        };

        if(arr[1] == 'Leg pain' || arr[1] == 'Leg swelling' || arr[1] == 'Heaviness in legs' || arr[1] == 'Restless legs') {
          $('.results').append('<p class="results">These symptoms are common in people with venous insufficiency.</p>');
        } else {
          $('.results').append('<p class="results">Something else</p>');
        };

        if(arr[2] == 'Yes') {
          $('.results').append('<p class="results">Heredity is the number one risk factor for developing varicose veins.</p>');
        } else {
          $('.results').append('<p> class="results">Heredity is the number one risk factor for developing varicose veins but is not the only cause. ');
        };

        if(arr[3] == 'Yes') {
          $('.results').append('<p class="results">Bulging varicose veins are the most obvious sign of venous disease and typically indicates more disease is present in the leg</p>');
        } else {
          $('.results').append('<p class="results">Though the most obvious sign, bulging varicose veins are not the only indication of venous disease.</p>');
        };
          return;
    };
















});
