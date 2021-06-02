class Chronometer
{
    #currentTime
    #currentTimeString
    #milisecondTime
    #timeInterval
    #chronometer

    constructor ()
    {
        this.#timeInterval = 5;
        this.#currentTime = 0;
        this.#currentTimeString;
        this.#chronometer;
        this.#milisecondTime = 0;
    };

    start ()
    {
        this.#chronometerStart();
    };

    #chronometerStart = () =>
    {
        this.#currentTimeString = "";
        this.#chronometer = setInterval(() =>
        {
            this.#currentTime += this.#timeInterval;
        }, this.#timeInterval);
    };

    pause ()
    {
        this.#chronometerPause();
    };

    #chronometerPause = () =>
    {
        clearInterval(this.#chronometer);
        this.#timeString();
    };

    stop ()
    {
        this.#chronometerStop();
    };

    #chronometerStop = () =>
    {
        clearInterval(this.#chronometer);
        this.#milisecondTime = this.#currentTime;
        this.#timeString();
        this.#currentTime = 0;
    };

    getCurrentTimeString()
    {
        if (!this.#currentTimeString)
        {
            throw "Stop or pause the chronometer first!";
        };
        return this.#currentTimeString;
    };

    getMilisecondTime()
    {
        if (!this.#milisecondTime)
        {
            throw "Stop or pause the chronometer first!";
        };
        return this.#milisecondTime;
    };
    
    #timeString = () =>
    {
        let auxiliarTime = this.#currentTime;
        let hour;
        let minutes;
        let seconds;
        let centSeconds;

        hour = Math.trunc(auxiliarTime / (60 * 60 * 1000));
        auxiliarTime %= (60 * 60 * 1000)

        minutes = Math.trunc(auxiliarTime / (60 * 1000));
        auxiliarTime %= (60 * 1000)

        seconds = Math.trunc(auxiliarTime / 1000);
        auxiliarTime %= 1000;

        centSeconds = Math.trunc(auxiliarTime / 10);

        this.#currentTimeString = "" + ((hour < 10) ? "0" : "") + hour;
        this.#currentTimeString += ((minutes < 10) ? ":0" : ":") + minutes;
        this.#currentTimeString += ((seconds < 10) ? ":0" : ":") + seconds;
        this.#currentTimeString += ((centSeconds < 10) ? ":0" : ":") + centSeconds;
    };
};

const chronometer = new Chronometer();
