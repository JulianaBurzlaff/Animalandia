class Sounds
{
  #sounds;
  #player;
  #congratulationsSounds;

  constructor()
  {
    this.#sounds =  {
        // "yey":"sounds/yey.mp3", // precisa definir ainda
        "fase":"sounds/applause.mp3",
        "drag":"sounds/drag.mp3",
        "drop-error":"sounds/drop-wrong.mp3",
        "drop-hit":"sounds/drop-correct.mp3",
    };
    this.#congratulationsSounds = ["sounds/congratulations.mp3", "sounds/cool.mp3", "sounds/very-good.mp3"];
    this.#player = new Audio();
  };

  setSound(_sound)
  {
    this.#player = new Audio(this.#sounds[_sound]);
    this.#player.play();
    this.#player.muted = true;
    return this.#player.play();
  };

  playSound(_sound)
  {
    this.#player = new Audio(this.#sounds[_sound]);
    this.#chosenSound(_sound);
    this.#player.play();
    return this.#player.play();
  };

  playCongratulationsSound()
  {
    this.#congratSound();
  };

  #congratSound = () =>
  {
    const index = Math.floor(Math.random() * this.#congratulationsSounds.length);
    const soundName = this.#congratulationsSounds[index];
    const yeyAudio = new Audio ("sounds/yeey.mp3");
    yeyAudio.play();
    yeyAudio.volume = .15;
    this.#player = new Audio (soundName);
    this.#player.play();
    this.#player.volume = 0.40;
  };

  stopSound()
  {
    this.#player.pause();
    this.#player = new Audio();
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
    if (_sound.includes("drop") || _sound == "drag" || _sound == "fase" )
    {
      this.#player.loop = false;

      if (_sound == "fase")
      {
        this.#player.volume = .4;
      }
    };
  };
};

const audio = new Sounds();
