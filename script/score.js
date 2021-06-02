class Score
{
    #maxScore
    #mediumScore
    #minimumScore
    #score

    constructor ()
    {
        this.#maxScore = 100;
        this.#mediumScore = 75;
        this.#minimumScore = 50;
        this.#score = 0;
    };

    setTime (_time)
    {
        if (isNaN(_time))
        {
            throw "Invalid time! Must be numeric!";
        }
        else
        {
            this.#calculateScore(_time);
        };
    };

    getScore ()
    {
        return this.#score;
    };

    clear ()
    {
        this.#score = 0;
    };

    #calculateScore = (_time) =>
    {
        if (_time <= 1000 * 60 * 3)
        {
            this.#score = this.#maxScore;
        }
        else if(_time <= 1000 * 60 * 4.5)
        {
            this.#score = this.#mediumScore;
        }
        else
        {
            this.#score = this.#minimumScore;
        };
    };
};

const score = new Score();
