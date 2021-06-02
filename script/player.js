class Player {
  #name;
  #date;
  #strDate;
  #time;
  #score;
  #endGame;

  constructor() {
    this.#name = "";
    this.#score = 0;
    this.#time = 0;
    this.#date = new Date();
    this.#strDate = "";
    this.#endGame = {};
  }

  setName(_name) {
    if (_name) {
      this.#name = _name;
    } else {
      throw "No name was setted!";
    }
  }

  setPlayerData(_time, _score) {
    this.#totalTime(_time);
    this.#totalScore(_score);
  }

  getPlayerData() {
    return this.#playerData();
  }

  clear () {
    this.#name = "";
    this.#score = 0;
    this.#time = 0;
    this.#strDate = "";
    this.#endGame = {};
  }

  #gameDate = () => {
    let day = this.#date.getDate();
    let month = this.#date.getMonth();
    let year = this.#date.getFullYear();
    this.#strDate = `${day}/${month + 1}/${year}`;
    return this.#strDate;
  };

  #totalTime = (_time) => {
    if (isNaN(_time)) {
      throw "Invalid time! Must be numeric!";
    } else {
      this.#time += Number(_time);
    }
  };

  #totalScore = (_score) => {
    if (isNaN(_score)) {
      throw "Invalid score! Must be numeric!";
    } else {
      this.#score += Number(_score);
    }
  };

  #playerData = () => {
    this.#endGame = {
      name: this.#name,
      score: this.#score,
      time: this.#time,
      date: this.#gameDate(),
    };

    return this.#endGame;
  };
}

const player = new Player();
