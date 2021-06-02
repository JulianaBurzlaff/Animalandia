const express = require("express");
const router = express.Router();
const app = express();

const ranking = [];

app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/ranking/all", (req, res) => {
  return res.json(ranking);
});

app.get("/players", (req, res) =>{
  const registeredPlayers = [];

  for (let index = 0; index < ranking.length; index++) {
    registeredPlayers.push(ranking[index].name)
  };

  res.json(registeredPlayers);
});

app.post("/ranking", (req, res) => {
  const name = req.body.name;
  const score = req.body.score;
  const time = req.body.time;

  function convertTimeToString(_time) {
    let auxiliarTime = _time;
    let hour;
    let minutes;
    let seconds;

    hour = Math.trunc(auxiliarTime / (60 * 60 * 1000));
    auxiliarTime %= 60 * 60 * 1000;

    minutes = Math.trunc(auxiliarTime / (60 * 1000));
    auxiliarTime %= 60 * 1000;

    seconds = Math.trunc(auxiliarTime / 1000);
    auxiliarTime %= 1000;

    timeString = "" + (minutes < 10 ? "0" : ":") + minutes;
    timeString += (seconds < 10 ? ":0" : ":") + seconds;

    return timeString;
  }

  ranking = ranking.filter(function (rank) {
    return rank.name != name;
  });

  ranking.push({
    name: name,
    score: score,
    time: time,
    timeString: convertTimeToString(time),
  });
  res.json(ranking);
});

app.use("/", router);
app.listen(8080);
