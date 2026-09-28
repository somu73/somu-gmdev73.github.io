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

    const canvas =
        document.getElementById("unity-canvas");

    const loading =
        document.getElementById("unity-loading");

    const progressBar =
        document.getElementById("unity-progress-bar");

    const progressText =
        document.getElementById("unity-progress-text");

    const error =
        document.getElementById("unity-error");


    /* ==================================================
       Set Game Data
    ================================================== */

    if (title) {
        title.textContent =
            game.title;
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
        `そむ。｜ ${game.title}`;


    /* ==================================================
       WebGL Check
    ================================================== */

    if (!game.webgl) {

        showError();

        return;
    }


    /* ==================================================
       Build Paths
    ================================================== */

    const buildPath =
        game.webgl.buildPath;

    const buildName =
        game.webgl.buildName;

    const loaderUrl =
        `${buildPath}/${buildName}.loader.js`;


    /* ==================================================
       Unity Config
    ================================================== */

    const config = {

        dataUrl:
            `${buildPath}/${buildName}.data`,

        frameworkUrl:
            `${buildPath}/${buildName}.framework.js`,

        codeUrl:
            `${buildPath}/${buildName}.wasm`,

        streamingAssetsUrl:
            "StreamingAssets",

        companyName:
            "Somu",

        productName:
            game.title,

        productVersion:
            "1.0"
    };


    /* ==================================================
       Load Unity Loader
    ================================================== */

    const script =
        document.createElement("script");

    script.src =
        loaderUrl;


    /* ==================================================
       Loader Success
    ================================================== */

    script.onload = () => {

        if (typeof createUnityInstance !== "function") {

            showError();

            return;
        }


        createUnityInstance(

            canvas,

            config,

            (progress) => {

                const percent =
                    Math.round(progress * 100);


                /* Progress Bar */

                if (progressBar) {

                    progressBar.style.width =
                        `${percent}%`;

                }


                /* Progress Text */

                if (progressText) {

                    progressText.textContent =
                        `${percent}%`;

                }

            }

        )

        .then((unityInstance) => {

            /* ==================================================
               Unity Started
            ================================================== */

            if (loading) {

                loading.style.display =
                    "none";

            }


            console.log(
                "Unity WebGL started.",
                unityInstance
            );

        })

        .catch((message) => {

            console.error(
                "Unity WebGL Error:",
                message
            );

            showError();

        });

    };


    /* ==================================================
       Loader Error
    ================================================== */

    script.onerror = () => {

        console.error(
            `Failed to load: ${loaderUrl}`
        );

        showError();

    };


    /* ==================================================
       Add Loader
    ================================================== */

    document.body.appendChild(script);



    /* ==================================================
       Error Display
    ================================================== */

    function showError() {

        if (loading) {

            loading.style.display =
                "none";

        }

        if (error) {

            error.hidden =
                false;

        }

    }

});