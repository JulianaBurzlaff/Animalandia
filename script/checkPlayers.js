class CheckPlayers
{
    #players
    #exists

    constructor ()
    {
        this.#players = [];
        this.#exists;
    };

    isPlayer (_playerName)
    {
        this.#verify(_playerName);
        return this.#exists;
    };

    #verify = (_player) =>
    {
        if (this.#players.indexOf(_player) == -1)
        {
            this.#exists = false;
            this.#players.push(_player);
        }
        else
        {
            this.#exists = true;
        };
    };
}

const checkPlayer = new CheckPlayers ();
