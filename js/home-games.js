/* ==================================================
   Home Featured Game
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const container =
        document.getElementById("home-game");

    if (!container) {
        return;
    }


    /* ==================================================
       Game Check
    ================================================== */

    if (
        typeof games === "undefined" ||
        !Array.isArray(games) ||
        games.length === 0
    ) {

        container.innerHTML = `
            <a
                href="games.html"
                class="home-game-empty"
            >
                <span>COMING SOON</span>
            </a>
        `;

        return;
    }


    /* ==================================================
       Latest Game
    ================================================== */

    const game = games[0];


    /* ==================================================
       Create Card
    ================================================== */

    container.innerHTML = `

        <a
            href="${game.playUrl}"
            class="home-game-card"
        >

            <div class="home-game-thumbnail">

                <img
                    src="${game.thumbnail}"
                    alt="${game.title}"
                >

            </div>


            <div class="home-game-info">

                <div>

                    <p class="home-game-label">
                        LATEST GAME
                    </p>

                    <h3>
                        ${game.title}
                    </h3>

                    <p class="home-game-meta">
                        ${game.genre} / ${game.year}
                    </p>

                </div>


                <span class="home-game-play">
                    PLAY →
                </span>

            </div>

        </a>

    `;

});