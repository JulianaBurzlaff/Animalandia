class BackgroundSounds
{
  #sounds;
  #player;

  constructor()
  {
    this.#sounds =  {
        "prehistory":"sounds/prehistory.mp3",
        "forest":"sounds/forest.mp3",
        "ocean":"sounds/ocean.mp3",
        "sky":"sounds/sky.mp3",
        "garden":"sounds/garden.mp3",
        "map":"sounds/map.mp3"
    };
    this.#player = new Audio();
  };

  setSound(_sound)
  {
    this.#player = new Audio(this.#sounds[_sound]);
    this.#player.play();
    this.#player.muted = true;
  };

  playSound(_sound)
  {
    this.#player = new Audio(this.#sounds[_sound]);
    this.#chosenSound(_sound);
    this.#player.play();
  };

  stopSound()
  {
    this.#player.pause();
  };

  muted ()
  {
    if (this.#player.muted)
    {
      this.#player.muted = false;
    }
    else
    {
      this.#player.muted = true;
    };
  };

  isMuted ()
  {
    if (this.#player.muted)
    {
      return true;
    }
    else
    {
      return false;
    };
  };

  #chosenSound = (_sound) =>
  {
      this.#player.loop = true;

      switch (_sound)
      {
            case "ocean":
                this.#player.volume = 0.40;
            break;

            case "forest":
                this.#player.volume = 0.50;
            break;

            case "prehistory":
                this.#player.volume = 1;
            break;

            case "garden":
                this.#player.volume = 0.30;
            break;

            case "map":
                this.#player.volume = 0.20;
            break;
      }
  };
};

const audioBackground = new BackgroundSounds();
