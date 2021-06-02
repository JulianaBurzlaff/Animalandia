class Shuffle
{
    #initialArray
    #shuffledArray

    constructor (_array)
    {
        this.#initialArray = _array;
        this.#shuffledArray;
    };

    setArray (_array)
    {

        if (typeof(_array) != "object")
        {
            throw "Invalid argument! Must be an object!";
        }
        else
        {
            this.#initialArray = _array;
            this.#shuffle();
        };
    };

    getShuffledArray ()
    {
        return this.#shuffledArray;
    };  

    #shuffle = () =>
    {
        // Algoritmo de Fisher Yates, qualquer dúvida consultar http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/
        for (let index = this.#initialArray.length; index; index--)
        {
            const aleatoryIndex = Math.floor(Math.random() * index);
            
            // guarda de um índice aleatório da lista
            const element = this.#initialArray[index - 1];
            this.#initialArray[index - 1] = this.#initialArray[aleatoryIndex];
            this.#initialArray[aleatoryIndex] = element;
        };

        this.#shuffledArray = [...this.#initialArray];
    };
};

const shuffle = new Shuffle;
