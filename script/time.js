class Time
{
    #timeLevel1
    #timeLevel2
    #timeLevel3
    #timeFase

    constructor ()
    {
        this.#timeLevel1 = 0;
        this.#timeLevel2 = 0;
        this.#timeLevel3 = 0;
        this.#timeFase = 0;
    };

    setTimeLevel (_time)
    {
        if (isNaN(_time))
        {
            throw "Invalid time! Must be numeric!";
        }
        else
        {
            this.#time(_time);
        };
    };

    getTotalTime()
    {
        if (this.#timeFase)
        {
            return this.#timeFase;
        }
        else
        {
            throw "Set at least one value!";
        };
    };

    getTimeLevel1()
    {
        if (this.#timeLevel1)
        {
            return this.#timeLevel1;
        }
        else
        {
            throw "No value was setted!";
        };
    };

    getTimeLevel2()
    {
        if (this.#timeLevel2)
        {
            return this.#timeLevel2;
        }
        else
        {
            throw "No value was setted!";
        };
    };

    getTimeLevel3()
    {
        if (this.#timeLevel3)
        {
            return this.#timeLevel3;
        }
        else
        {
            throw "No value was setted!";
        };
    };

    clear ()
    {
        this.#timeLevel1 = 0;
        this.#timeLevel2 = 0;
        this.#timeLevel3 = 0;
        this.#totalTime();
    }

    #time = (_time) =>
    {
        if (this.#timeLevel1)
        {
            if (this.#timeLevel2)
            {
                if (this.#timeLevel3)
                {
                    throw "Only three different values can be setted!";
                }
                else
                {
                    this.#timeLevel3 = _time;
                };
            }
            else
            {
                this.#timeLevel2 = _time;
            };
        }
        else
        {
            this.#timeLevel1 = _time;
        };

        this.#totalTime();
    };

    #totalTime = () =>
    {
        this.#timeFase = this.#timeLevel1 + this.#timeLevel2 + this.#timeLevel3;
    };
}

const time = new Time();
