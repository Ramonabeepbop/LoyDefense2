/* =====================================================
   LOY - PROTECT THE RIVER
   COMPLETE TOWER DEFENCE GAME
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const startScreen = document.getElementById("startScreen");
const challengeScreen = document.getElementById("challengeScreen");
const tutorialScreen = document.getElementById("tutorialScreen");
const gameScreen = document.getElementById("gameScreen");

const playButton = document.getElementById("playButton");
const tutorialButton = document.getElementById("tutorialButton");

const challengeBack = document.getElementById("challengeBack");
const tutorialBack = document.getElementById("tutorialBack");
const tutorialPlay = document.getElementById("tutorialPlay");
const gameBack = document.getElementById("gameBack");

const messageBackButton =
    document.getElementById("messageBackButton");

const levelList =
    document.getElementById("levelList");

const gameMap =
    document.getElementById("gameMap");

const rangePreview =
    document.getElementById("rangePreview");

const pointsDisplay =
    document.getElementById("points");

const healthDisplay =
    document.getElementById("health");

const towerCountDisplay =
    document.getElementById("towerCount");

const towerLimitDisplay =
    document.getElementById("towerLimit");

const levelNumberDisplay =
    document.getElementById("levelNumber");

const levelNameDisplay =
    document.getElementById("levelName");

const waveLabel =
    document.getElementById("waveLabel");

const waveStatus =
    document.getElementById("waveStatus");

const countdownDisplay =
    document.getElementById("countdown");

const gameMessage =
    document.getElementById("gameMessage");

const messageTitle =
    document.getElementById("messageTitle");

const messageText =
    document.getElementById("messageText");

const nextStageButton =
    document.getElementById("nextStageButton");

const restartButton =
    document.getElementById("restartButton");

const stageProgressText =
    document.getElementById("stageProgressText");

const stageProgressFill =
    document.getElementById("stageProgressFill");

const leakText =
    document.getElementById("leakText");

const waveDots =
    document.querySelectorAll(".wave-dots span");


/* =====================================================
   GAME SETTINGS
===================================================== */

const MAX_LEAKS = 10;

const TOTAL_WAVES = 5;


/* =====================================================
   LEVEL DATA
===================================================== */

const levels = [

    {
        name: "RIVER SOURCE",
        description: "Stop rubbish before it enters the river.",
        startPoints: 160,
        health: 100,
        waves: 5,
        enemiesPerWave: 6,
        speed: 0.16,
        towerLimit: 10
    },

    {
        name: "POLLUTED STREAM",
        description: "Chemical pollution is entering the water.",
        startPoints: 190,
        health: 100,
        waves: 5,
        enemiesPerWave: 8,
        speed: 0.175,
        towerLimit: 10
    },

    {
        name: "BLOCKED DRAINS",
        description: "Rubbish is blocking community drains.",
        startPoints: 220,
        health: 95,
        waves: 5,
        enemiesPerWave: 9,
        speed: 0.19,
        towerLimit: 10
    },

    {
        name: "COMMUNITY RIVER",
        description: "Protect the river used by nearby communities.",
        startPoints: 250,
        health: 90,
        waves: 5,
        enemiesPerWave: 10,
        speed: 0.205,
        towerLimit: 10
    },

    {
        name: "LOY KRATHONG",
        description: "Protect the river during the festival.",
        startPoints: 280,
        health: 90,
        waves: 5,
        enemiesPerWave: 11,
        speed: 0.22,
        towerLimit: 10
    },

    {
        name: "TO THE OCEAN",
        description: "Protect the entire river system.",
        startPoints: 320,
        health: 85,
        waves: 5,
        enemiesPerWave: 13,
        speed: 0.24,
        towerLimit: 10
    }

];


/* =====================================================
   TUTORIAL
===================================================== */

const tutorialLevel = {

    name: "TOWER TUTORIAL",
    description: "Learn how each defence protects the river.",
    startPoints: 500,
    health: 100,
    waves: 5,
    enemiesPerWave: 1,
    speed: 0.13,
    towerLimit: 10,
    tutorial: true

};


/* =====================================================
   ENEMY DATA
===================================================== */

const enemyData = {

    rubbish: {
        hp: 45,
        speedMultiplier: 1,
        riverDamage: 1,
        reward: 8,
        image: "images/rubbish.png"
    },

    chemical: {
        hp: 90,
        speedMultiplier: 0.82,
        riverDamage: 2,
        reward: 13,
        image: "images/chemical.png"
    },

    drain: {
        hp: 135,
        speedMultiplier: 0.72,
        riverDamage: 2,
        reward: 18,
        image: "images/rubbish.png"
    },

    wateruse: {
        hp: 115,
        speedMultiplier: 0.78,
        riverDamage: 1,
        reward: 16,
        image: "images/water-use.png"
    },

    krathong: {
        hp: 260,
        speedMultiplier: 0.6,
        riverDamage: 3,
        reward: 30,
        image: "images/krathong.png"
    }

};


/* =====================================================
   TOWER DATA
===================================================== */

const towerData = {

    recycle: {

        cost: 35,
        range: 185,
        damage: 7,
        cooldown: 850,

        placement: "land",

        targets: [
            "rubbish",
            "drain"
        ],

        image: "images/recycling-bin.png"

    },


    filter: {

        cost: 55,
        range: 155,
        damage: 16,
        cooldown: 1500,

        placement: "water",

        targets: [
            "chemical"
        ],

        image: "images/water-filter.png"

    },


    garbage: {

        cost: 65,
        range: 160,
        damage: 8,
        cooldown: 650,

        placement: "water",

        targets: [
            "rubbish",
            "chemical",
            "drain"
        ],

        image: "images/garbage-net.png"

    },


    sign: {

        cost: 45,
        range: 190,
        damage: 1,
        cooldown: 1000,

        placement: "land",

        targets: [
            "wateruse",
            "rubbish"
        ],

        slowAmount: 0.45,
        slowDuration: 1800,

        image: "images/education-sign.png"

    },


    cleanup: {

        cost: 90,
        range: 205,
        damage: 20,
        cooldown: 1900,

        placement: "land",

        targets: [
            "rubbish",
            "chemical",
            "wateruse",
            "drain",
            "krathong"
        ],

        image: "images/cleanup-team.png"

    }

};


/* =====================================================
   TUTORIAL INFORMATION
===================================================== */

const towerTutorialInfo = {

    recycle: {

        title: "RECYCLING BIN",

        text:
            "A cheap land defence for basic rubbish. " +
            "Its range reaches into the river."

    },

    filter: {

        title: "WATER FILTER",

        text:
            "A specialised water defence that is " +
            "especially effective against chemicals."

    },

    garbage: {

        title: "GARBAGE NET",

        text:
            "A net placed in the river that catches " +
            "rubbish and other floating pollution."

    },

    sign: {

        title: "EDUCATIONAL SIGN",

        text:
            "Signs encourage better water behaviour " +
            "and slow down some pollution."

    },

    cleanup: {

        title: "COMMUNITY CLEAN-UP",

        text:
            "A powerful all-round defence that can " +
            "attack almost every type of pollution."

    }

};


/* =====================================================
   GAME STATE
===================================================== */

let currentLevel = 0;

let currentLevelData = null;

let isTutorial = false;

let points = 100;

let health = 100;

let leaks = 0;

let currentWave = 0;

let enemies = [];

let towers = [];

let enemyId = 0;

let towerId = 0;

let waveRunning = false;

let gameRunning = false;

let countdownTimer = null;

let waveTimer = null;

let gameLoop = null;

let selectedTowerType = null;

let waveSpawnComplete = false;

let placementSpots = [];

let heldTower = null;

let dragState = {

    active: false,
    type: null,
    pointerId: null,
    clone: null

};


/* =====================================================
   SCREEN MANAGEMENT
===================================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {
            item.classList.remove("active");
        });

    screen.classList.add("active");

}


/* =====================================================
   START BUTTONS
===================================================== */

playButton.addEventListener("click", () => {

    showLevelSelect();

});


tutorialButton.addEventListener("click", () => {

    showScreen(tutorialScreen);

});


challengeBack.addEventListener("click", () => {

    showScreen(startScreen);

});


tutorialBack.addEventListener("click", () => {

    showScreen(startScreen);

});


tutorialPlay.addEventListener("click", () => {

    startTutorial();

});


gameBack.addEventListener("click", () => {

    stopGame();

    gameMessage.classList.add("hidden");

    showLevelSelect();

});


messageBackButton.addEventListener("click", () => {

    stopGame();

    gameMessage.classList.add("hidden");

    showLevelSelect();

});


/* =====================================================
   LEVEL SELECT
===================================================== */

function showLevelSelect() {

    levelList.innerHTML = "";

    levels.forEach((level, index) => {

        const card =
            document.createElement("div");

        card.className = "level-card";

        card.innerHTML = `

            <div class="level-number">
                ${index + 1}
            </div>

            <div class="level-info">

                <h2>
                    ${level.name}
                </h2>

                <p>
                    ${level.description}
                </p>

            </div>

        `;

        card.addEventListener("click", () => {

            startLevel(index);

        });

        levelList.appendChild(card);

    });

    showScreen(challengeScreen);

}


/* =====================================================
   START TUTORIAL
===================================================== */

function startTutorial() {

    isTutorial = true;

    startGameWithData(
        tutorialLevel,
        -1
    );

}


/* =====================================================
   START LEVEL
===================================================== */

function startLevel(levelIndex) {

    isTutorial = false;

    startGameWithData(
        levels[levelIndex],
        levelIndex
    );

}


/* =====================================================
   START GAME
===================================================== */

function startGameWithData(level, levelIndex) {

    stopGame();

    currentLevel = levelIndex;

    currentLevelData = level;

    points = level.startPoints;

    health = level.health;

    leaks = 0;

    currentWave = 0;

    enemies = [];

    towers = [];

    placementSpots = [];

    enemyId = 0;

    towerId = 0;

    gameRunning = true;

    waveRunning = false;

    waveSpawnComplete = false;

    clearMap();

    levelNumberDisplay.textContent =
        isTutorial
            ? "TUTORIAL"
            : `LEVEL ${currentLevel + 1}`;

    levelNameDisplay.textContent =
        level.name;

    towerLimitDisplay.textContent =
        level.towerLimit;

    gameMessage.classList.add("hidden");

    countdownDisplay.style.display =
        "block";

    updateUI();

    showScreen(gameScreen);

    requestAnimationFrame(() => {

        createPlacementSpots();

        beginCountdown();

        gameLoop =
            requestAnimationFrame(updateGame);

    });

}


/* =====================================================
   CLEAR MAP
===================================================== */

function clearMap() {

    gameMap
        .querySelectorAll(
            ".enemy, .tower, .placement-spot, " +
            ".tower-limit-message, .tower-info-message"
        )
        .forEach(element => {
            element.remove();
        });

}


/* =====================================================
   PLACEMENT SPOTS
   LAND SPOTS ARE CLOSE TO THE RIVER
===================================================== */

function createPlacementSpots() {

    placementSpots = [];


    /*
       River occupies roughly 44% - 63%.

       Land slots are deliberately positioned
       just above and below the river.
    */

    const landSpots = [

        { x: 12, y: 38 },
        { x: 30, y: 37 },
        { x: 50, y: 37 },
        { x: 70, y: 37 },
        { x: 88, y: 38 },

        { x: 12, y: 68 },
        { x: 30, y: 69 },
        { x: 50, y: 69 },
        { x: 70, y: 69 },
        { x: 88, y: 68 }

    ];


    const waterSpots = [

        { x: 15, y: 53 },
        { x: 32, y: 53 },
        { x: 50, y: 53 },
        { x: 68, y: 53 },
        { x: 85, y: 53 }

    ];


    landSpots.forEach((spot, index) => {

        createPlacementSpot(
            spot.x,
            spot.y,
            "land",
            `land-${index}`
        );

    });


    waterSpots.forEach((spot, index) => {

        createPlacementSpot(
            spot.x,
            spot.y,
            "water",
            `water-${index}`
        );

    });

}


/* =====================================================
   CREATE PLACEMENT SPOT
===================================================== */

function createPlacementSpot(
    xPercent,
    yPercent,
    type,
    id
) {

    const spot =
        document.createElement("div");

    spot.className =
        `placement-spot ${type} empty`;

    spot.dataset.spotId =
        id;

    spot.dataset.type =
        type;

    spot.style.left =
        `${xPercent}%`;

    spot.style.top =
        `${yPercent}%`;

    gameMap.appendChild(spot);

    placementSpots.push({

        id,
        type,
        xPercent,
        yPercent,

        occupied: false,

        element: spot

    });

}


/* =====================================================
   COUNTDOWN
===================================================== */

function beginCountdown() {

    clearInterval(countdownTimer);

    waveRunning = false;

    waveSpawnComplete = false;

    countdownDisplay.style.display =
        "block";

    let seconds = 3;

    countdownDisplay.textContent =
        seconds;

    waveStatus.textContent =
        "GET READY";

    countdownTimer =
        setInterval(() => {

            if (!gameRunning) {

                clearInterval(countdownTimer);

                return;

            }

            seconds--;

            countdownDisplay.textContent =
                seconds;

            if (seconds <= 0) {

                clearInterval(countdownTimer);

                countdownTimer = null;

                countdownDisplay.textContent =
                    "";

                countdownDisplay.style.display =
                    "none";

                startWave();

            }

        }, 1000);

}


/* =====================================================
   START WAVE
===================================================== */

function startWave() {

    if (!gameRunning) {
        return;
    }

    currentWave++;

    if (
        currentWave >
        currentLevelData.waves
    ) {

        finishLevel();

        return;

    }

    waveRunning = true;

    waveSpawnComplete = false;

    waveLabel.textContent =
        `WAVE ${currentWave}`;

    waveStatus.textContent =
        "POLLUTION INCOMING";

    updateProgress();

    spawnWave();

}


/* =====================================================
   WAVE COMPOSITION
===================================================== */

function getWaveComposition() {

    if (isTutorial) {

        const tutorialTypes = [

            "rubbish",
            "chemical",
            "rubbish",
            "wateruse",
            "krathong"

        ];

        return [
            tutorialTypes[currentWave - 1]
        ];

    }


    const composition = [];

    const amount =
        currentLevelData.enemiesPerWave;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        let type = "rubbish";


        if (
            currentWave >= 2 &&
            i % 4 === 1
        ) {

            type = "chemical";

        }


        if (
            currentWave >= 3 &&
            i % 5 === 2
        ) {

            type = "drain";

        }


        if (
            currentWave >= 3 &&
            i % 6 === 4
        ) {

            type = "wateruse";

        }


        composition.push(type);

    }


    return composition;

}


/* =====================================================
   SPAWN WAVE
   RANDOM TIMING SO RUBBISH DOES NOT CLUMP
===================================================== */

function spawnWave() {

    const composition =
        getWaveComposition();

    let index = 0;


    function spawnNext() {

        if (!gameRunning) {
            return;
        }


        if (
            index >=
            composition.length
        ) {

            waveSpawnComplete = true;

            waveTimer = null;

            return;

        }


        spawnEnemy(
            composition[index]
        );

        index++;


        /*
           Random delay keeps enemies spread out.
        */

        const delay =
            650 +
            Math.random() * 950;


        waveTimer =
            setTimeout(
                spawnNext,
                delay
            );

    }


    spawnNext();

}


/* =====================================================
   SPAWN ENEMY
===================================================== */

function spawnEnemy(type = "rubbish") {

    const data =
        enemyData[type];

    if (!data) {
        return;
    }


    const hpScale =
        isTutorial
            ? 1
            : 1 +
                ((currentWave - 1) * 0.16);


    const hp =
        Math.round(
            data.hp * hpScale
        );


    const enemy = {

        id: enemyId++,

        type,

        x: -30,

        y: getRandomRiverY(),

        hp,

        maxHp: hp,

        speed:
            currentLevelData.speed *
            data.speedMultiplier,

        riverDamage:
            data.riverDamage,

        reward:
            data.reward,

        slowedUntil: 0,

        slowMultiplier: 1,

        element: null,

        hpFill: null

    };


    const element =
        document.createElement("div");

    element.className =
        `enemy ${type}`;

    element.dataset.id =
        enemy.id;

    element.dataset.type =
        type;


    element.innerHTML = `

        <div class="enemy-hp">
            <div class="enemy-hp-fill"></div>
        </div>

        <img
            src="${data.image}"
            alt="${type}"
        >

    `;


    gameMap.appendChild(element);


    enemy.element =
        element;

    enemy.hpFill =
        element.querySelector(
            ".enemy-hp-fill"
        );


    enemies.push(enemy);

    updateEnemyHP(enemy);

}


/* =====================================================
   RANDOM RIVER Y
   KEEPS RUBBISH INSIDE THE STRAIGHT RIVER
===================================================== */

function getRandomRiverY() {

    const height =
        gameMap.clientHeight;

    const riverTop =
        height * .45;

    const riverBottom =
        height * .62;


    return (
        riverTop +
        Math.random() *
        (riverBottom - riverTop)
    );

}


/* =====================================================
   GAME LOOP
===================================================== */

function updateGame() {

    if (gameRunning) {

        updateEnemies();

        updateTowers();

        checkWaveComplete();

    }

    gameLoop =
        requestAnimationFrame(
            updateGame
        );

}


/* =====================================================
   ENEMY MOVEMENT
===================================================== */

function updateEnemies() {

    const width =
        gameMap.clientWidth;

    const now =
        Date.now();


    enemies
        .slice()
        .forEach(enemy => {

            if (!enemy.element) {
                return;
            }


            let speed =
                enemy.speed;


            if (
                now <
                enemy.slowedUntil
            ) {

                speed *=
                    enemy.slowMultiplier;

            } else {

                enemy.slowMultiplier =
                    1;

            }


            enemy.x += speed;


            enemy.element.style.left =
                `${enemy.x}px`;

            enemy.element.style.top =
                `${enemy.y}px`;


            if (
                enemy.x >
                width + 35
            ) {

                damageRiver(enemy);

            }

        });

}


/* =====================================================
   RIVER DAMAGE / LEAK
===================================================== */

function damageRiver(enemy) {

    const index =
        enemies.indexOf(enemy);


    if (index !== -1) {

        enemies.splice(
            index,
            1
        );

    }


    if (enemy.element) {

        enemy.element.remove();

    }


    leaks++;

    health -=
        enemy.riverDamage;


    if (health < 0) {
        health = 0;
    }


    updateUI();


    /*
       Stage ends when 10 pollution items leak.
    */

    if (
        leaks >= MAX_LEAKS
    ) {

        loseLevel();

    }

}


/* =====================================================
   TOWER UPDATE
===================================================== */

function updateTowers() {

    const now =
        Date.now();


    towers.forEach(tower => {

        if (
            now -
            tower.lastAttack <
            tower.cooldown
        ) {

            return;

        }


        const target =
            findTarget(tower);


        if (!target) {
            return;
        }


        attackEnemy(
            tower,
            target
        );


        tower.lastAttack =
            now;

    });

}


/* =====================================================
   FIND TARGET
===================================================== */

function findTarget(tower) {

    let bestTarget = null;

    let bestProgress =
        -Infinity;


    enemies.forEach(enemy => {

        if (
            !tower.targets.includes(
                enemy.type
            )
        ) {

            return;

        }


        const distance =
            getDistance(
                tower.x,
                tower.y,
                enemy.x,
                enemy.y
            );


        if (
            distance <=
            tower.range
        ) {

            if (
                enemy.x >
                bestProgress
            ) {

                bestTarget =
                    enemy;

                bestProgress =
                    enemy.x;

            }

        }

    });


    return bestTarget;

}


/* =====================================================
   ATTACK
===================================================== */

function attackEnemy(
    tower,
    enemy
) {

    enemy.hp -=
        tower.damage;


    if (
        tower.slowAmount &&
        tower.targets.includes(
            enemy.type
        )
    ) {

        enemy.slowedUntil =
            Date.now() +
            tower.slowDuration;

        enemy.slowMultiplier =
            tower.slowAmount;

    }


    updateEnemyHP(enemy);


    if (
        enemy.hp <= 0
    ) {

        destroyEnemy(enemy);

        points +=
            enemy.reward;

        updateUI();

    }

}


/* =====================================================
   DESTROY ENEMY
===================================================== */

function destroyEnemy(enemy) {

    const index =
        enemies.indexOf(enemy);


    if (index !== -1) {

        enemies.splice(
            index,
            1
        );

    }


    if (enemy.element) {

        enemy.element.remove();

    }

}


/* =====================================================
   ENEMY HP
===================================================== */

function updateEnemyHP(enemy) {

    if (!enemy.hpFill) {
        return;
    }


    const percentage =
        Math.max(
            0,
            (enemy.hp /
                enemy.maxHp) *
                100
        );


    enemy.hpFill.style.width =
        `${percentage}%`;

}


/* =====================================================
   DISTANCE
===================================================== */

function getDistance(
    x1,
    y1,
    x2,
    y2
) {

    const dx =
        x2 - x1;

    const dy =
        y2 - y1;


    return Math.sqrt(
        dx * dx +
        dy * dy
    );

}


/* =====================================================
   WAVE COMPLETE
===================================================== */

function checkWaveComplete() {

    if (!waveRunning) {
        return;
    }


    if (
        enemies.length === 0 &&
        waveSpawnComplete
    ) {

        waveRunning = false;


        if (isTutorial) {

            if (
                currentWave >= 5
            ) {

                finishTutorial();

            } else {

                waveStatus.textContent =
                    "WAVE CLEARED";

                setTimeout(() => {

                    if (gameRunning) {
                        beginCountdown();
                    }

                }, 1200);

            }

            return;

        }


        if (
            currentWave >=
            currentLevelData.waves
        ) {

            finishLevel();

        } else {

            waveStatus.textContent =
                "WAVE CLEARED";

            setTimeout(() => {

                if (gameRunning) {
                    beginCountdown();
                }

            }, 1200);

        }

    }

}


/* =====================================================
   PLACE TOWER
===================================================== */

function placeTower(
    type,
    spot
) {

    const data =
        towerData[type];


    if (!data) {
        return;
    }


    if (
        points <
        data.cost
    ) {

        return;

    }


    if (
        towers.length >=
        currentLevelData.towerLimit
    ) {

        showLimitMessage();

        return;

    }


    if (spot.occupied) {
        return;
    }


    if (
        data.placement !==
        spot.type
    ) {

        return;

    }


    points -=
        data.cost;


    const x =
        gameMap.clientWidth *
        (spot.xPercent / 100);


    const y =
        gameMap.clientHeight *
        (spot.yPercent / 100);


    const tower = {

        id:
            towerId++,

        type,

        x,

        y,

        range:
            data.range,

        damage:
            data.damage,

        cooldown:
            data.cooldown,

        targets:
            data.targets,

        slowAmount:
            data.slowAmount || null,

        slowDuration:
            data.slowDuration || 0,

        lastAttack: 0,

        spot,

        element: null

    };


    const element =
        document.createElement("div");


    element.className =
        "tower";


    element.dataset.id =
        tower.id;


    element.style.left =
        `${x}px`;

    element.style.top =
        `${y}px`;


    element.innerHTML = `

        <div
            class="range-circle"
            style="--range:${data.range}px"
        ></div>

        <img
            src="${data.image}"
            alt="${type}"
        >

    `;


    gameMap.appendChild(element);


    tower.element =
        element;


    towers.push(tower);


    spot.occupied =
        true;


    spot.element.classList.remove(
        "empty"
    );


    spot.element.classList.add(
        "occupied"
    );


    updateUI();


    if (isTutorial) {

        showTowerTutorial(type);

    }

}


/* =====================================================
   TOWER TUTORIAL MESSAGE
===================================================== */

function showTowerTutorial(type) {

    const info =
        towerTutorialInfo[type];


    if (!info) {
        return;
    }


    let message =
        document.querySelector(
            ".tower-info-message"
        );


    if (!message) {

        message =
            document.createElement("div");

        message.className =
            "tower-info-message";

        gameMap.appendChild(message);

    }


    message.innerHTML = `

        <strong>
            ${info.title}
        </strong>

        <span>
            ${info.text}
        </span>

    `;


    message.classList.add(
        "show"
    );


    clearTimeout(
        message.hideTimer
    );


    message.hideTimer =
        setTimeout(() => {

            message.classList.remove(
                "show"
            );

        }, 4500);

}


/* =====================================================
   SHOW RANGE
===================================================== */

document.addEventListener(
    "pointerdown",
    event => {

        const towerElement =
            event.target.closest(
                ".tower"
            );


        if (!towerElement) {
            return;
        }


        const id =
            Number(
                towerElement.dataset.id
            );


        const tower =
            towers.find(
                item =>
                    item.id === id
            );


        if (!tower) {
            return;
        }


        heldTower =
            towerElement;


        towerElement.classList.add(
            "show-range"
        );

    }
);


document.addEventListener(
    "pointerup",
    () => {

        if (heldTower) {

            heldTower.classList.remove(
                "show-range"
            );

            heldTower = null;

        }

    }
);


/* =====================================================
   LIMIT MESSAGE
===================================================== */

function showLimitMessage() {

    let message =
        document.querySelector(
            ".tower-limit-message"
        );


    if (!message) {

        message =
            document.createElement("div");

        message.className =
            "tower-limit-message";

        gameMap.appendChild(message);

    }


    message.textContent =
        `TOWER LIMIT: ${currentLevelData.towerLimit}`;


    message.classList.add(
        "show"
    );


    clearTimeout(
        message.hideTimer
    );


    message.hideTimer =
        setTimeout(() => {

            message.classList.remove(
                "show"
            );

        }, 1400);

}


/* =====================================================
   UPDATE UI
===================================================== */

function updateUI() {

    pointsDisplay.textContent =
        Math.floor(points);

    healthDisplay.textContent =
        Math.floor(health);

    towerCountDisplay.textContent =
        towers.length;

    leakText.textContent =
        `LEAKS ${leaks} / ${MAX_LEAKS}`;


    updateProgress();

    updateTowerAvailability();

}


/* =====================================================
   STAGE PROGRESS
===================================================== */

function updateProgress() {

    if (!currentLevelData) {
        return;
    }


    const totalWaves =
        currentLevelData.waves;


    const progress =
        Math.min(
            100,
            (
                (currentWave /
                    totalWaves) *
                100
            )
        );


    stageProgressFill.style.width =
        `${progress}%`;


    stageProgressText.textContent =
        `WAVE ${Math.min(
            currentWave || 1,
            totalWaves
        )} OF ${totalWaves}`;


    waveDots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index <
                currentWave
            );

        }
    );

}


/* =====================================================
   TOWER AVAILABILITY
===================================================== */

function updateTowerAvailability() {

    document
        .querySelectorAll(".tower-card")
        .forEach(card => {

            const type =
                card.dataset.type;


            const data =
                towerData[type];


            if (!data) {
                return;
            }


            if (
                points <
                data.cost ||
                towers.length >=
                currentLevelData.towerLimit
            ) {

                card.classList.add(
                    "disabled"
                );

            } else {

                card.classList.remove(
                    "disabled"
                );

            }

        });

}


/* =====================================================
   DESKTOP DRAG
===================================================== */

const towerCards =
    document.querySelectorAll(
        ".tower-card"
    );


towerCards.forEach(card => {

    card.addEventListener(
        "dragstart",
        event => {

            const type =
                card.dataset.type;


            if (
                !currentLevelData ||
                points <
                towerData[type].cost
            ) {

                event.preventDefault();

                return;

            }


            if (
                towers.length >=
                currentLevelData.towerLimit
            ) {

                event.preventDefault();

                showLimitMessage();

                return;

            }


            selectedTowerType =
                type;


            card.classList.add(
                "dragging"
            );


            gameMap.classList.add(
                "placing"
            );


            event.dataTransfer.effectAllowed =
                "copy";


            event.dataTransfer.setData(
                "text/plain",
                type
            );

        }
    );


    card.addEventListener(
        "dragend",
        () => {

            selectedTowerType =
                null;

            card.classList.remove(
                "dragging"
            );

            gameMap.classList.remove(
                "placing"
            );

            rangePreview.classList.add(
                "hidden"
            );

            clearSpotStates();

        }
    );


    card.addEventListener(
        "pointerdown",
        startPointerDrag
    );

});


/* =====================================================
   DESKTOP DRAG OVER
===================================================== */

gameMap.addEventListener(
    "dragover",
    event => {

        event.preventDefault();


        if (!selectedTowerType) {
            return;
        }


        const position =
            getMapPosition(
                event.clientX,
                event.clientY
            );


        updateRangePreview(
            position.x,
            position.y,
            selectedTowerType
        );


        highlightNearestSpot(
            position.x,
            position.y,
            selectedTowerType
        );

    }
);


/* =====================================================
   DESKTOP DROP
===================================================== */

gameMap.addEventListener(
    "drop",
    event => {

        event.preventDefault();


        const type =
            event.dataTransfer.getData(
                "text/plain"
            );


        if (!type) {
            return;
        }


        const position =
            getMapPosition(
                event.clientX,
                event.clientY
            );


        const spot =
            getNearestValidSpot(
                position.x,
                position.y,
                type
            );


        if (spot) {

            placeTower(
                type,
                spot
            );

        }


        selectedTowerType =
            null;


        gameMap.classList.remove(
            "placing"
        );


        rangePreview.classList.add(
            "hidden"
        );


        clearSpotStates();

    }
);


/* =====================================================
   MOBILE POINTER DRAG
===================================================== */

function startPointerDrag(event) {

    if (
        event.pointerType === "mouse"
    ) {

        return;

    }


    const card =
        event.currentTarget;


    const type =
        card.dataset.type;


    if (
        !currentLevelData ||
        points <
        towerData[type].cost
    ) {

        return;

    }


    if (
        towers.length >=
        currentLevelData.towerLimit
    ) {

        showLimitMessage();

        return;

    }


    event.preventDefault();


    dragState.active =
        true;

    dragState.type =
        type;

    dragState.pointerId =
        event.pointerId;


    card.setPointerCapture(
        event.pointerId
    );


    createDragClone(type);


    gameMap.classList.add(
        "placing"
    );


    updatePointerDrag(
        event.clientX,
        event.clientY
    );

}


/* =====================================================
   POINTER MOVE
===================================================== */

document.addEventListener(
    "pointermove",
    event => {

        if (
            !dragState.active
        ) {

            return;

        }


        updatePointerDrag(
            event.clientX,
            event.clientY
        );

    }
);


/* =====================================================
   POINTER UP
===================================================== */

document.addEventListener(
    "pointerup",
    event => {

        if (
            !dragState.active
        ) {

            return;

        }


        const type =
            dragState.type;


        const rect =
            gameMap.getBoundingClientRect();


        const insideMap =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;


        if (insideMap) {

            const position =
                getMapPosition(
                    event.clientX,
                    event.clientY
                );


            const spot =
                getNearestValidSpot(
                    position.x,
                    position.y,
                    type
                );


            if (spot) {

                placeTower(
                    type,
                    spot
                );

            }

        }


        endPointerDrag();

    }
);


/* =====================================================
   POINTER CANCEL
===================================================== */

document.addEventListener(
    "pointercancel",
    () => {

        if (dragState.active) {

            endPointerDrag();

        }

    }
);


/* =====================================================
   DRAG CLONE
===================================================== */

function createDragClone(type) {

    removeDragClone();


    const clone =
        document.createElement("div");


    clone.className =
        "drag-clone";


    clone.innerHTML = `

        <img
            src="${towerData[type].image}"
            alt=""
        >

    `;


    document.body.appendChild(
        clone
    );


    dragState.clone =
        clone;


    rangePreview.classList.remove(
        "hidden"
    );

}


/* =====================================================
   REMOVE DRAG CLONE
===================================================== */

function removeDragClone() {

    if (
        dragState.clone
    ) {

        dragState.clone.remove();

        dragState.clone =
            null;

    }

}


/* =====================================================
   UPDATE POINTER DRAG
===================================================== */

function updatePointerDrag(
    clientX,
    clientY
) {

    if (!dragState.active) {
        return;
    }


    if (dragState.clone) {

        dragState.clone.style.left =
            `${clientX}px`;

        dragState.clone.style.top =
            `${clientY}px`;

    }


    const rect =
        gameMap.getBoundingClientRect();


    const insideMap =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;


    if (!insideMap) {

        rangePreview.classList.add(
            "hidden"
        );

        clearSpotStates();

        return;

    }


    const position =
        getMapPosition(
            clientX,
            clientY
        );


    updateRangePreview(
        position.x,
        position.y,
        dragState.type
    );


    highlightNearestSpot(
        position.x,
        position.y,
        dragState.type
    );

}


/* =====================================================
   END POINTER DRAG
===================================================== */

function endPointerDrag() {

    dragState.active =
        false;

    dragState.type =
        null;

    dragState.pointerId =
        null;


    removeDragClone();


    rangePreview.classList.add(
        "hidden"
    );


    gameMap.classList.remove(
        "placing"
    );


    clearSpotStates();

}


/* =====================================================
   MAP POSITION
===================================================== */

function getMapPosition(
    clientX,
    clientY
) {

    const rect =
        gameMap.getBoundingClientRect();


    return {

        x:
            clientX -
            rect.left,

        y:
            clientY -
            rect.top

    };

}


/* =====================================================
   RANGE PREVIEW
===================================================== */

function updateRangePreview(
    x,
    y,
    type
) {

    if (!type) {
        return;
    }


    const data =
        towerData[type];


    rangePreview.style.left =
        `${x}px`;

    rangePreview.style.top =
        `${y}px`;

    rangePreview.style.width =
        `${data.range}px`;

    rangePreview.style.height =
        `${data.range}px`;


    rangePreview.classList.remove(
        "hidden"
    );


    const spot =
        getNearestValidSpot(
            x,
            y,
            type
        );


    rangePreview.classList.toggle(
        "valid",
        !!spot
    );


    rangePreview.classList.toggle(
        "invalid",
        !spot
    );

}


/* =====================================================
   GET VALID SPOT
===================================================== */

function getNearestValidSpot(
    x,
    y,
    towerType
) {

    const tower =
        towerData[towerType];


    if (!tower) {
        return null;
    }


    let closest =
        null;


    let closestDistance =
        Infinity;


    placementSpots.forEach(
        spot => {

            if (
                spot.occupied
            ) {

                return;

            }


            if (
                spot.type !==
                tower.placement
            ) {

                return;

            }


            const spotX =
                gameMap.clientWidth *
                (spot.xPercent / 100);


            const spotY =
                gameMap.clientHeight *
                (spot.yPercent / 100);


            const distance =
                getDistance(
                    x,
                    y,
                    spotX,
                    spotY
                );


            if (
                distance < 50 &&
                distance <
                closestDistance
            ) {

                closest =
                    spot;

                closestDistance =
                    distance;

            }

        }
    );


    return closest;

}


/* =====================================================
   HIGHLIGHT SPOT
===================================================== */

function highlightNearestSpot(
    x,
    y,
    type
) {

    clearSpotStates();


    const spot =
        getNearestValidSpot(
            x,
            y,
            type
        );


    if (spot) {

        spot.element.classList.add(
            "valid"
        );

    }

}


/* =====================================================
   CLEAR SPOT STATES
===================================================== */

function clearSpotStates() {

    placementSpots.forEach(
        spot => {

            spot.element.classList.remove(
                "valid",
                "invalid"
            );

        }
    );

}


/* =====================================================
   FINISH TUTORIAL
===================================================== */

function finishTutorial() {

    gameRunning = false;

    waveRunning = false;


    clearInterval(
        countdownTimer
    );

    clearTimeout(
        waveTimer
    );


    messageTitle.textContent =
        "TUTORIAL COMPLETE";


    messageText.textContent =
        "You have learned how all five defences work. You are ready to protect the river.";


    nextStageButton.style.display =
        "none";


    restartButton.style.display =
        "block";


    messageBackButton.style.display =
        "block";


    gameMessage.classList.remove(
        "hidden"
    );

}


/* =====================================================
   LEVEL COMPLETE
===================================================== */

function finishLevel() {

    gameRunning = false;

    waveRunning = false;


    clearInterval(
        countdownTimer
    );

    clearTimeout(
        waveTimer
    );


    countdownTimer = null;

    waveTimer = null;


    messageTitle.textContent =
        "RIVER PROTECTED";


    messageText.textContent =
        `You completed ${currentLevelData.name}. ` +
        `The river finished with ${health}% HP and ${points} points.`;


    restartButton.style.display =
        "block";


    messageBackButton.style.display =
        "block";


    if (
        currentLevel <
        levels.length - 1
    ) {

        nextStageButton.style.display =
            "block";

    } else {

        nextStageButton.style.display =
            "none";

    }


    gameMessage.classList.remove(
        "hidden"
    );

}


/* =====================================================
   LOSE LEVEL
===================================================== */

function loseLevel() {

    if (!gameRunning) {
        return;
    }


    gameRunning = false;

    waveRunning = false;


    clearInterval(
        countdownTimer
    );

    clearTimeout(
        waveTimer
    );


    countdownTimer = null;

    waveTimer = null;


    messageTitle.textContent =
        "THE RIVER NEEDS HELP";


    messageText.textContent =
        `Too much rubbish and pollution escaped. ` +
        `You allowed ${leaks} pollution leaks. ` +
        `The limit is ${MAX_LEAKS}.`;


    nextStageButton.style.display =
        "none";


    restartButton.style.display =
        "block";


    messageBackButton.style.display =
        "block";


    gameMessage.classList.remove(
        "hidden"
    );

}


/* =====================================================
   RESTART
===================================================== */

restartButton.addEventListener(
    "click",
    () => {

        gameMessage.classList.add(
            "hidden"
        );


        if (isTutorial) {

            startTutorial();

        } else {

            startLevel(
                currentLevel
            );

        }

    }
);


/* =====================================================
   NEXT LEVEL
===================================================== */

nextStageButton.addEventListener(
    "click",
    () => {

        gameMessage.classList.add(
            "hidden"
        );


        if (
            currentLevel <
            levels.length - 1
        ) {

            startLevel(
                currentLevel + 1
            );

        }

    }
);


/* =====================================================
   STOP GAME
===================================================== */

function stopGame() {

    gameRunning = false;

    waveRunning = false;


    clearInterval(
        countdownTimer
    );

    clearTimeout(
        waveTimer
    );


    countdownTimer = null;

    waveTimer = null;


    if (gameLoop) {

        cancelAnimationFrame(
            gameLoop
        );

        gameLoop = null;

    }


    removeDragClone();

}


/* =====================================================
   INITIAL UI
===================================================== */

updateUI();