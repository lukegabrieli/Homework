$('#playBox').css('display', 'none')
$('#resultsBox').css('display', 'none')

function pingPongMatch() {
  var Player = function(name, skill, speed) {
      this.name = name;
      this.skill = skill;
      this.speed = speed;
      this.score = 0;
      this.report = function () {
        return this.name + ' has ' + this.score + ' points.';
      };
      this.play = function () {
        if (this.speed > (Math.random() * 10)) {
          this.score += this.skill;
        }
      }
    }

    /*Get user name*/
    var userName = $('#getName').val();
    var userSkill = parseInt($('#getSkill').val());
    var userSpeed = parseInt($('#getSpeed').val());

    var player1 = new Player (userName,userSkill,userSpeed),
        player2 = new Player ('Kim Jong Un',7,4);

    var gameFinish = 21;

    while(player1.score < gameFinish && player2.score < gameFinish) {
      player1.play();
      player2.play();
    }

    var resultsReplace = $('#resultsHTML');

    if (player1.score > player2.score) {
      resultsReplace.text('Congratulations! You beat Kim Jong Un. You better watch out!');
    }
    else if (player1.score < player2.score) {
      resultsReplace.text('Ah man, Kim Jong Un beat you. Try practicing and play again!');
    }
    else {
      resultsReplace.text('Whoa! You guys tied. Who knew that was allowed in ping pong?');
    }

    $('#playerScore').text(userName + ': ' + player1.score)
    $('#kimScore').text('Kim Jong Un: ' + player2.score)

    /*alert (player1.report())
    alert (player2.report())*/

} /*End Ping Pong Game*/

/*CLICKS*/

/*Click enter button to enter name*/

$('#enter').click(function(){
  $('#enterBox').hide();
  $('#playBox').css('display','block').show();
  var userName = $('#getName').val();
  var userSkill = $('#getSkill').val();
  var userSpeed = $('#getSpeed').val();
  $('#userNameEnter').text("Name: " + userName);
  $('#userSkillEnter').text("Skill Level: " + userSkill);
  $('#userSpeedEnter').text("Speed Level: " + userSpeed);
});

/*Click play button to enter name*/

$('#playGame').click(function() {
  pingPongMatch();
  $('#playBox').hide();
  $('#resultsBox').css('display','block').show();
});

$('#replay').click(function(){
  window.location.reload(true);
});


