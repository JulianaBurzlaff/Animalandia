class Raffle
{
    #maxElementsToBeRaffled
    #numberOfAnimals
    #numberOfObjects

    constructor (_maxElements)
    {
        this.#maxElementsToBeRaffled;
        this.#numberOfAnimals;
        this.#numberOfObjects;
    };

    setMaxElementsToBeRaffled (_number)
    {
        if (typeof(_number) != "string")
        {
            throw "Try to pass a number between double quotes!"
        }
        else
        {
            this.#validateMaxElementsToBeRaffled(_number);
            this.#raffle();
        };
    };

    getNumberOfAnimals ()
    {
        return this.#numberOfAnimals;
    };

    getNumberOfObjects ()
    {
        return this.#numberOfObjects;
    };

    #validateMaxElementsToBeRaffled = (_number) =>
    {
        let numberMaxElements = Number(_number);
        let stringMaxElements = _number.toLowerCase();

        let letterE = stringMaxElements.indexOf("e");

        if (isNaN(numberMaxElements) || letterE != -1)
        {
            throw "Invalid max elements! Must be numeric and can not be an expression!";
        }
        else
        {
            this.#maxElementsToBeRaffled = numberMaxElements;
        };
    };

    #raffle = () =>
    {
        const numberOfAnimals = Math.floor(Math.random() * (this.#maxElementsToBeRaffled - 2 + 1)) + 1;
        const numberOfObjects = this.#maxElementsToBeRaffled - numberOfAnimals;

        this.#numberOfAnimals = numberOfAnimals;
        this.#numberOfObjects = numberOfObjects;
    };
};

const raffle = new Raffle();
