/* ==================================================
   Game Player
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       Get Game ID
    ================================================== */

    const params =
        new URLSearchParams(window.location.search);

    const gameId =
        params.get("game");


    /* ==================================================
       Find Game
    ================================================== */

    const game =
        games.find((item) => item.id === gameId);


    /* ==================================================
       Game Not Found
    ================================================== */

    if (!game) {

        window.location.href =
            "games.html";

        return;
    }


    /* ==================================================
       Elements
    ================================================== */

    const title =
        document.getElementById("game-title");

    const meta =
        document.getElementById("game-meta");

    const description =
        document.getElementById("game-description");


    /* ==================================================
       Set Game Data
    ================================================== */

    if (title) {
        title.textContent = game.title;
    }

    if (meta) {
        meta.textContent =
            `${game.genre} / ${game.year}`;
    }

    if (description) {
        description.textContent =
            game.description;
    }


    /* ==================================================
       Browser Title
    ================================================== */

    document.title =
        `そむ。| ${game.title} `;

});