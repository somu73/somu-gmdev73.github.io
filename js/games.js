/* ==================================================
   Game List
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const gameList = document.getElementById("game-list");
    const gamesEmpty = document.getElementById("games-empty");

    /* ==================================================
       Check
    ================================================== */

    if (!gameList) {
        return;
    }

    if (
        typeof games === "undefined" ||
        !Array.isArray(games) ||
        games.length === 0
    ) {
        if (gamesEmpty) {
            gamesEmpty.hidden = false;
        }

        return;
    }

    /* ==================================================
       Create Game Cards
    ================================================== */

    games.forEach((game, index) => {

        const article = document.createElement("article");

        article.classList.add("game-card");

        const gameNumber =
            String(index + 1).padStart(2, "0");

        article.innerHTML = `
            <a
                href="${game.playUrl}"
                class="game-thumbnail"
                aria-label="${game.title}をプレイ"
            >
                <img
                    src="${game.thumbnail}"
                    alt="${game.title}"
                    loading="lazy"
                >
            </a>

            <div class="game-info">

                <p class="game-number">
                    ${gameNumber}
                </p>

                <h2 class="game-title">
                    ${game.title}
                </h2>

                <p class="game-meta">
                    ${game.genre} / ${game.year}
                </p>

                <p class="game-description">
                    ${game.description}
                </p>

                <a
                    href="${game.playUrl}"
                    class="game-play"
                >
                    PLAY →
                </a>

            </div>
        `;

        gameList.appendChild(article);

    });

});
