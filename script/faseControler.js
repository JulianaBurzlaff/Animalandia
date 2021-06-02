class FaseControler
{
    #faseName
    #level
    #dropped
    #needToBeDropped

    constructor ()
    {
        this.#faseName = "";
        this.#level = 1;
        this.#dropped = 0;
        this.#needToBeDropped = 0;
    };

    setFaseName (_name)
    {
        this.#faseName = _name;
    };

    getFaseName ()
    {
        if(this.#faseName)
        {
            return this.#faseName;
        }
        else
        {
            throw "No name was setted!";
        };
    };

    setNeedToBeDropped (_number)
    {
        if (typeof(_number) != "string")
        {
            throw "Try to pass a number between double quotes!";
        }
        else
        {
            this.#validateNeedToBeDropped(_number);
        }
    };

    getNeedToBeDropped ()
    {
        if(this.#needToBeDropped)
        {
            return this.#needToBeDropped;
        }
        else
        {
            throw "No need to be dropped was setted!";
        };
    };

    dropped ()
    {
        this.#dropped++;
    };

    getDropped ()
    {
        return this.#dropped;
    };

    levelUp ()
    {
        this.#level++;
    };

    getLevel ()
    {
        return this.#level;
    };

    resetDropped ()
    {
        this.#dropped = 0;
    };

    resetAll ()
    {
        this.#faseName = "";
        this.#needToBeDropped = 0;
        this.#dropped = 0;
        this.#level = 1;
    };

    #validateNeedToBeDropped = (_number) =>
    {
        const number = Number(_number);
        const numberString = _number.toLowerCase();

        let letterE = 0;

        for (let index = 0; index < numberString.length; index++)
        {
            if (numberString[index] == "e")
            {
                letterE++;
            };
        };

        if (isNaN(number) || letterE != 0)
        {
            throw "Invalid parameter! Must be numeric and can not be an expression!";
        }
        else
        {
            this.#needToBeDropped = number;
        };
    };
};

const faseControler = new FaseControler();
