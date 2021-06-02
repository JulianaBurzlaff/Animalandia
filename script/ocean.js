class Ocean
{
    #animals
    #sortedAnimals
    #numberOfAnimals

    constructor ()
    {
        this.#animals = [
            {
                "type": "animal",
                "name": "turtle"
            },
            {
                "type": "animal",
                "name": "dolphin"
            },
            {
                "type": "animal",
                "name": "fish1"
            },
            {
                "type": "animal",
                "name": "fish2"
            }];

        this.#sortedAnimals;
        this.#numberOfAnimals;
    };

    setNumberOfAnimals (_number)
    {
        if (typeof(_number) != "string")
        {
            throw "Try to pass a number between double quotes!"
        }
        else
        {
            this.#validateNumberOfAnimals(_number);
            this.#sortAnimals();
        };
    };

    getSortedAnimals ()
    {
        return this.#sortedAnimals;
    };

    #sortAnimals = () =>
    {
        this.#sortedAnimals = [];
        let animalsAvailable = this.#animals.length;

        for (let number = 0; this.#sortedAnimals.length < this.#numberOfAnimals; number++)
        {
            let index = Math.floor(Math.random() * animalsAvailable);
            let animal = this.#animals[index];

            let isSorted = this.#sortedAnimals.indexOf(animal);

            if (isSorted == -1)
            {
                this.#sortedAnimals.push(animal);
            };
        };
    };

    #validateNumberOfAnimals = (_number) =>
    {
        let numberOfAnimals = Number(_number);
        let stringNumber = _number.toLowerCase();
        let animalsAvailable = this.#animals.length;

        let letterE = stringNumber.indexOf("e");

        if (isNaN(numberOfAnimals) || letterE != -1)
        {
            throw "Invalid round! Must be numeric and can not be an expression!";
        }
        else if (numberOfAnimals > animalsAvailable || numberOfAnimals <= 0)
        {
            throw `Invalid round! Must be bigger then 0 and smaller then ${animalsAvailable}!`;
        }
        else
        {
            this.#numberOfAnimals = numberOfAnimals;
        };
    };

};

const oceanAnimals = new Ocean();
