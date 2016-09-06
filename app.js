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
    var sympVal = [];
    var question = questions[qCounter].question;
      if (question === 'Do you experience any of these symptoms?'){
        $. each($("input[type='checkbox']:checked"), function(){
          sympVal.push($(this).val());
        });
        value = sympVal;
      } else {
        value = $("input[type='radio']:checked").val();
      };
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
              if (question === 'Do you experience any of these symptoms?') {
                $('.selections').append('<li><input type="checkbox" class="checkbox" name="selections" value="' + option + '"/>' + option + "</li>");
              } else {
                $('.selections').append('<li><input type="radio" name="selections" value="' + option + '"/>' + option + "</li>");
              };
            };
          } else {
            $('.button').remove();
            displayResults(userResponse);
          };
        };

    function displayResults(arr) {
      var resultArr = [];

      $('.questions').text('Results:')
      $('.selections').remove();

        if(arr[0] === 'Female') {
          resultArr.push('<p class="results">Women are four times more likely to develop varicose veins than men.</p>');
        } else {
          resultArr.push('<p class="results">Studies indicate up to 56% of men will experience varicose veins in their life</p>');
        };

        if(arr[1][0] === 'Leg pain' || arr[1][1] === 'Leg swelling' || arr[1][2] === 'Heaviness in legs' || arr[1][3] === 'Restless legs') {
          resultArr.push('<p class="results">These symptoms are common in people with venous insufficiency.</p>');
        } else {
          resultArr.push('<p class="results">Something else</p>');
        };

        if(arr[2] === 'Yes') {
          resultArr.push('<p class="results">Heredity is the number one risk factor for developing varicose veins.</p>');
        } else {
          resultArr.push('<p class="results">Heredity is the number one risk factor for developing varicose veins but is not the only cause.');
        };

        if(arr[3] === 'Yes') {
          resultArr.push('<p class="results">Bulging varicose veins are the most obvious sign of venous disease and typically indicates more disease is present in the leg.</p>');
        } else {
          resultArr.push('<p class="results">Though the most obvious sign, bulging varicose veins are not the only indication of venous disease.</p>');
        };
          resultsParagraph(resultArr);

    };

    function resultsParagraph(arr) {
      $('.results').append(arr);
      $('.button-screening').css('visibility', 'visible')
    };


});
