class PrehistoryObjects
{
    #objects
    #sortedObjects
    #numberOfObjects

    constructor ()
    {
        this.#objects = [
            {
                "type": "object",
                "name": "ball" 
            },
            {
                "type": "object",
                "name": "doll"
            },
            {
                "type": "object",
                "name": "car" 
            },
            {
                "type": "object",
                "name": "book"
            }];
        this.#sortedObjects = [];
        this.#numberOfObjects;
    };

    setNumberOfObjects (_number)
    {
        if (typeof(_number) != "string")
        {
            throw "Try to pass a number between double quotes!"
        }
        else
        {
            this.#validateNumberOfObjects(_number);
            this.#sortObjects();
        };
    };

    getSortedObjects ()
    {
        return this.#sortedObjects;
    };

    #sortObjects = () =>
    {
        this.#sortedObjects = [];
        let objectsAvailable = this.#objects.length;

        for (let number = 0; this.#sortedObjects.length < this.#numberOfObjects; number++)
        {
            let index = Math.floor(Math.random() * objectsAvailable);
            let object = this.#objects[index];

            let isSorted = this.#sortedObjects.indexOf(object);

            if (isSorted == -1)
            {
                this.#sortedObjects.push(object);
            };
        };
    };

    #validateNumberOfObjects = (_number) =>
    {
        let numberOfObjects = Number(_number);
        let stringNumber = _number.toLowerCase();
        let objectsAvailable = this.#objects.length;

        let letterE = stringNumber.indexOf("e");

        if (isNaN(numberOfObjects) || letterE != -1)
        {
            throw "Invalid round! Must be numeric and can not be an expression!";
        }
        else if (numberOfObjects > objectsAvailable || numberOfObjects <= 0)
        {
            throw `Invalid round! Must be bigger then 0 and smaller then ${objectsAvailable}!`;
        }
        else
        {
            this.#numberOfObjects = numberOfObjects;
        };
    };
};

const prehistoryObjects = new PrehistoryObjects();
