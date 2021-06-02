class Stickers{
  #myStickers;
  #stickers;
  #lastSticker;
  #counter;
  #fase;

  constructor(){
    this.#fase = ""
    this.#lastSticker = "";
    this.#stickers = {
      "prehistory" : ["dino1", "dino2", "dino3", "dino4"],
      "forest" : ["monkey", "elephant", "lion", "giraffe"],
      "ocean" : ["turtle", "dolphin", "fish1", "fish2"],
      "sky" : ["canary", "bird2", "bird3", "vulture"],
      "garden": ["bee", "butterfly", "hummingbird", "ladybug"]
    }
    this.#myStickers = {"prehistory" : [],"forest" : [], "ocean" : [],"sky" : [],"garden": []}
    this.#counter = {"prehistory" : 0 ,"forest" : 0, "ocean" : 0,"sky" : 0,"garden": 0}
  }

  setFase(_fase){
    this.#fase = _fase
  }
  setStickers(){
    if(this.#myStickers[this.#fase].length != this.#stickers[this.#fase].length)
    {
      this.#stickersControl(this.#fase);
    }
  }

  #stickersControl = (_fase) =>
  {
    const sortedSticker = Math.floor(Math.random() * (this.#stickers[this.#fase].length));
    if(!this.#myStickers[this.#fase].includes(this.#stickers[this.#fase][sortedSticker])) {
        this.#lastSticker = this.#stickers[this.#fase][sortedSticker]
        this.#myStickers[this.#fase].push(this.#lastSticker);
      }
    else {
      this.#stickersControl(this.#fase);
    }

  }

  getLastSticker(){
    if(this.#counter[this.#fase] < this.#myStickers[this.#fase].length){
      this.#counter[this.#fase] ++;
      return this.#lastSticker;
    }else{
      return false;
    }
  }
  getStickers(){
      return this.#myStickers;
  }
  clear(){
    this.#lastSticker = "";
    this.#myStickers = {"prehistory" : [],"forest" : [], "ocean" : [],"sky" : [],"garden": []}
    this.#counter = {"prehistory" : 0 ,"forest" : 0, "ocean" : 0,"sky" : 0,"garden": 0};
  }

}

const stickers = new Stickers();
