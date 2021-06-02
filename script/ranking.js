const url = "http://149.28.59.234:80";

function showRankingPlayers() {
  let xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    let rankingUserList = JSON.parse(this.response);

    if (rankingUserList.length != 0) {
      rankingUserList.sort((r1, r2) => (r1.time > r2.time ? 1 : -1));
      rankingUserList.sort((r1, r2) =>
        parseInt(r1.score) > parseInt(r2.score) ? -1 : 1
      );

      document.getElementById("ranking_tbody").innerHTML = "";
      for (let i = 0; i < rankingUserList.length; i++) {
        document.getElementById("ranking_tbody").innerHTML += `
          <tr>
              <td>${rankingUserList[i].name}</td>
              <td>${rankingUserList[i].score}</td>
              <td>${rankingUserList[i].timeString}</td>
          </tr>`;
      }
    }
  };
  xhttp.open("GET", `${url}/ranking`, true);
  xhttp.send();
}

function insertPlayerRanking({ name, score, time }) {
  const player = JSON.stringify({ name, score, time });

  const xhttp = new XMLHttpRequest();

  xhttp.open("POST", `${url}/ranking`, true);
  xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");

  xhttp.onload = function () {};
  xhttp.send(player);
}
