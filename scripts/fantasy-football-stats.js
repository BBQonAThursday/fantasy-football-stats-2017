var header = document.querySelector('header');
var row = document.querySelector('.row');

//var requestURL = 'https://github.com/BBQonAThursday/fantasy-football-stats-2017/blob/master/week%201/rushing-week-1.json';
//var request = new XMLHttpRequest();
//request.open('GET', requestURL);

function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', 'assets/Fantasy-Football-Stats-2017/week-1/rushing-week-1.json', true);
      xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
      };
      xobj.send(null);
}
function init() {
  loadJSON(function(response){
      var actual_JSON = JSON.parson(response);
      showRBs(actual_JSON);
  });
}
init();
//request.responseType = 'json';
//request.send();

//request.onload = function() {
//  var runningBacks = request.response;
//  populatePlayer(runningBacks);
//  showRBs(runningBacks);
//}

function populatePlayer(jsonObj) {
  //var playerName = document.creatElement('h3');
  //myH1.textContent = jsonObj['player'];
  //section.appendChild(playerName);

  //var opponentName = document.createElement('p');
  //myPara.textContent = jsonObj['location'] + jsonObj['opponentName'];
  //section.appendChild(opponentName);
}

function showRBs(jsonObj) {
  var rbs = jsonObj['RunningBacks'];

  for (var i =0; i < RunningBacks.length; i++) {
    var rbCardContainer = document.createElement('section');
    var rbH2 = document.createElement('h2');
    var location = document.createElement('p');
    var opponent = document.createElement('p');
    var attempts = document.createElement('p');
    var yards = document.createElement('p');
    var yardsPerAttemptValue = RunningBacks[i].yards / RunningBacks[i].attempts;
    var yardsPerAttempt = documnet.createElement('p');
    var touchdowns = document.createElement('p');

    rbCardContainer.className = "col-xs-12 col-sm-6 col-md-3 running-back-card-container";
    rbH2.textContent = RunningBacks[i].player;
    location.textContent = 'Home or Away: ' + RunningBacks[i].location;
    opponent.textContent = 'Opponent: ' +  RunningBacks[i].opponent;
    attempts.textContent = 'Attempts: ' +  RunningBacks[i].attempts;
    yards.textContent = 'Yards: ' + RunningBacks[i].yards;
    yardsPerAttempt.textContent = 'Yards Per Attempt: ' + yardsPerAttemptValue;
    touchdowns.textContent = 'Touchdowns: ' + RunningBacks[i].touchdowns;

    rbCardContainer.appendChild(rbH2);
    rbCardContainer.appendChild(location);
    rbCardContainer.appendChild(opponent);
    rbCardContainer.appendChild(attempts);
    rbCardContainer.appendChild(yards);
    rbCardContainer.appendChild(yardsPerAttempt);
    rbCardContainer.appendChild(touchdowns);

    row.appendChild(rbCardContainer); // places ther rbCardContainer inside the section on the page
  }
}
