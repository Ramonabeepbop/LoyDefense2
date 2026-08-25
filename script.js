/* =====================================================
   LOY RIVER DEFENCE
   TOWER DEFENCE GAME
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

const leakText =
    document.getElementById("leakText");

const progressFill =
    document.getElementById("progressFill");

const waveDots =
    document.getElementById("waveDots");


/* =====================================================
   LEVEL DATA
   5 WAVES PER STAGE
===================================================== */

const levels = [

    {
        name: "RIVER SOURCE",
        description: "Stop rubbish before it enters the river.",
        startPoints: 120,
        health: 100,
        waves: 5,
        enemiesPerWave: 6,
        speed: 0.22,
        towerLimit: 10,
        krathongWave: false
    },

    {
        name: "POLLUTED STREAM",
        description: "Chemical pollution is entering the water.",
        startPoints: 150,
        health: 100,
        waves: 5,
        enemiesPerWave: 7,
        speed: 0.24,
        towerLimit: 10,
        krathongWave: false
    },

    {
        name: "BLOCKED DRAINS",
        description: "Rubbish is blocking community drains.",
        startPoints: 180,
        health: 95,
        waves: 5,
        enemiesPerWave: 8,
        speed: 0.26,
        towerLimit: 10,
        krathongWave: false
    },

    {
        name: "COMMUNITY RIVER",
        description: "Protect the river for nearby communities.",
        startPoints: 210,
        health: 90,
        waves: 5,
        enemiesPerWave: 9,
        speed: 0.28,
        towerLimit: 10,
        krathongWave: false
    },

    {
        name: "LOY KRATHONG",
        description: "Protect the river during the festival.",
        startPoints: 240,
        health: 90,
        waves: 5,
        enemiesPerWave: 10,
        speed: 0.29,
        towerLimit: 10,
        krathongWave: true
    },

    {
        name: "TO THE OCEAN",
        description: "Protect the whole river system.",
        startPoints: 300,
        health: 85,
        waves: 5,
        enemiesPerWave: 12,
        speed: 0.31,
        towerLimit: 10,
        krathongWave: true
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
    speed: 0.18,
    towerLimit: 10,
    krathongWave: false,
    tutorial: true

};


/* =====================================================
   ENEMY DATA
===================================================== */

const enemyData = {

    rubbish: {
        hp: 45,
        speedMultiplier: 1,
        riverDamage: 5,
        reward: 8,
        image: "images/rubbish.png"
    },

    chemical: {
        hp: 90,
        speedMultiplier: 0.82,
        riverDamage: 10,
        reward: 13,
        image: "images/chemical.png"
    },

    drain: {
        hp: 135,
        speedMultiplier: 0.68,
        riverDamage: 14,
        reward: 18,
        image: "images/rubbish.png"
    },

    wateruse: {
        hp: 115,
        speedMultiplier: 0.75,
        riverDamage: 8,
        reward: 16,
        image: "images/water-use.png"
    },

    krathong: {
        hp: 260,
        speedMultiplier: 0.58,
        riverDamage: 18,
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
        cooldown: 1050,

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
        damage: 13,
        cooldown: 1850,

        placement: "water",

        targets: [
            "chemical"
        ],

        image: "images/water-filter.png"

    },

    garbageNet: {

        cost: 65,
        range: 145,
        damage: 5,
        cooldown: 700,

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
        range: 185,
        damage: 1,
        cooldown: 1200,

        placement: "land",

        targets: [
            "wateruse",
            "rubbish"
        ],

        slowAmount: 0.52,
        slowDuration: 1600,

        image: "images/education-sign.png"

    },

    cleanup: {

        cost: 90,
        range: 205,
        damage: 19,
        cooldown: 2100,

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
   TUTORIAL INFO
===================================================== */

const towerTutorialInfo = {

    recycle: {
        title: "RECYCLING BIN",
        text: "A cheap land defence for basic rubbish."
    },

    filter: {
        title: "WATER FILTER",
        text: "A specialised water defence that targets chemical pollution."
    },

    garbageNet: {
        title: "GARBAGE NET",
        text: "A water defence that catches rubbish and pollution moving through the river."
    },

    sign: {
        title: "EDUCATIONAL SIGN",
        text: "Slows rubbish and water-use pollution."
    },

    cleanup: {
        title: "COMMUNITY CLEAN-UP",
        text: "A powerful defence that can attack almost every enemy."
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

let currentWave = 0;

let enemies = [];
let towers = [];

let enemyId = 0;
let towerId = 0;

let waveRunning = false;
let gameRunning = false;

let countdownTimer = null;
let gameLoop = null;

let selectedTowerType = null;

let waveSpawnComplete = false;

let placementSpots = [];

let leakedRubbish = 0;
let totalRubbishAllowed = 0;

let waveSpawnTimeouts = [];


/* =====================================================
   DRAG STATE
===================================================== */

let dragState = {

    active: false,

    type: null,

    pointerId: null,

    clone: null

};


/* =====================================================
   SHOW SCREEN
===================================================== */

function showScreen(screen) {

    if (!screen) return;

    document
        .querySelectorAll(".screen")
        .forEach(screenItem => {

            screenItem.classList.remove("active");

        });

    screen.classList.add("active");

}


/* =====================================================
   BUTTONS
===================================================== */

if (playButton) {

    playButton.addEventListener("click", () => {

        showLevelSelect();

    });

}


if (tutorialButton) {

    tutorialButton.addEventListener("click", () => {

        showScreen(tutorialScreen);

    });

}


if (challengeBack) {

    challengeBack.addEventListener("click", () => {

        showScreen(startScreen);

    });

}


if (tutorialBack) {

    tutorialBack.addEventListener("click", () => {

        showScreen(startScreen);

    });

}


if (tutorialPlay) {

    tutorialPlay.addEventListener("click", () => {

        startTutorial();

    });

}


if (gameBack) {

    gameBack.addEventListener("click", () => {

        stopGame();

        if (gameMessage) {
            gameMessage.classList.add("hidden");
        }

        showLevelSelect();

    });

}


if (messageBackButton) {

    messageBackButton.addEventListener("click", () => {

        stopGame();

        gameMessage.classList.add("hidden");

        showLevelSelect();

    });

}


/* =====================================================
   LEVEL SELECT
===================================================== */

function showLevelSelect() {

    if (!levelList) return;

    levelList.innerHTML = "";

    levels.forEach((level, index) => {

        const card =
            document.createElement("div");

        card.className =
            "level-card";

        card.innerHTML = `

            <div class="level-number">
                ${index + 1}
            </div>

            <div class="level-info">

                <h2>${level.name}</h2>

                <p>${level.description}</p>

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

function startLevel(index) {

    isTutorial = false;

    startGameWithData(
        levels[index],
        index
    );

}


/* =====================================================
   START GAME
===================================================== */

function startGameWithData(
    level,
    levelIndex
) {

    stopGame();

    currentLevelData = level;
    currentLevel = levelIndex;

    points = level.startPoints;
    health = level.health;

    currentWave = 0;

    enemies = [];
    towers = [];
    placementSpots = [];

    enemyId = 0;
    towerId = 0;

    leakedRubbish = 0;

    totalRubbishAllowed =
        level.waves *
        level.enemiesPerWave;

    gameRunning = true;
    waveRunning = false;

    waveSpawnComplete = false;

    clearMap();

    if (levelNumberDisplay) {

        levelNumberDisplay.textContent =
            isTutorial
                ? "TUTORIAL"
                : `LEVEL ${currentLevel + 1}`;

    }

    if (levelNameDisplay) {

        levelNameDisplay.textContent =
            level.name;

    }

    if (towerLimitDisplay) {

        towerLimitDisplay.textContent =
            level.towerLimit;

    }

    if (gameMessage) {

        gameMessage.classList.add("hidden");

    }

    if (countdownDisplay) {

        countdownDisplay.style.display =
            "block";

    }

    updateUI();

    showScreen(gameScreen);

    requestAnimationFrame(() => {

        createPlacementSpots();
        createWaveDots();

        beginCountdown();

    });

    gameLoop =
        requestAnimationFrame(updateGame);

}


/* =====================================================
   CLEAR MAP
===================================================== */

function clearMap() {

    if (!gameMap) return;

    gameMap
        .querySelectorAll(
            ".enemy, " +
            ".tower, " +
            ".placement-spot, " +
            ".tower-limit-message, " +
            ".tower-info-message"
        )
        .forEach(element => {

            element.remove();

        });

}


/* =====================================================
   PLACEMENT SPOTS
===================================================== */

function createPlacementSpots() {

    placementSpots = [];

    const landSpots = [

        { x: 14, y: 37 },
        { x: 35, y: 36 },
        { x: 63, y: 36 },
        { x: 86, y: 37 },

        { x: 14, y: 68 },
        { x: 35, y: 67 },
        { x: 63, y: 67 },
        { x: 86, y: 68 }

    ];

    const waterSpots = [

        { x: 19, y: 47 },
        { x: 41, y: 48 },
        { x: 63, y: 50 },
        { x: 84, y: 48 },

        { x: 29, y: 56 },
        { x: 54, y: 56 },
        { x: 75, y: 55 }

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
    x,
    y,
    type,
    id
) {

    const spot =
        document.createElement("div");

    spot.className =
        `placement-spot ${type} empty`;

    spot.dataset.spotId = id;
    spot.dataset.type = type;

    spot.style.left = `${x}%`;
    spot.style.top = `${y}%`;

    gameMap.appendChild(spot);

    placementSpots.push({

        id: id,
        type: type,

        xPercent: x,
        yPercent: y,

        occupied: false,

        element: spot

    });

}


/* =====================================================
   WAVE DOTS
===================================================== */

function createWaveDots() {

    if (!waveDots) return;

    waveDots.innerHTML = "";

    for (
        let i = 0;
        i < currentLevelData.waves;
        i++
    ) {

        const dot =
            document.createElement("span");

        waveDots.appendChild(dot);

    }

    updateWaveDots();

}


function updateWaveDots() {

    if (!waveDots) return;

    const dots =
        waveDots.querySelectorAll("span");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index < currentWave
        );

    });

}


/* =====================================================
   COUNTDOWN
===================================================== */

function beginCountdown() {

    clearInterval(countdownTimer);

    waveRunning = false;

    waveSpawnComplete = false;

    if (countdownDisplay) {

        countdownDisplay.style.display =
            "block";

    }

    let seconds = 3;

    if (countdownDisplay) {

        countdownDisplay.textContent =
            seconds;

    }

    if (waveStatus) {

        waveStatus.textContent =
            "GET READY";

    }

    countdownTimer =
        setInterval(() => {

            if (!gameRunning) {

                clearInterval(countdownTimer);
                return;

            }

            seconds--;

            if (countdownDisplay) {

                countdownDisplay.textContent =
                    seconds;

            }

            if (seconds <= 0) {

                clearInterval(countdownTimer);

                countdownTimer = null;

                if (countdownDisplay) {

                    countdownDisplay.style.display =
                        "none";

                }

                startWave();

            }

        }, 1000);

}


/* =====================================================
   START WAVE
===================================================== */

function startWave() {

    if (!gameRunning) return;

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

    updateWaveDots();

    if (waveLabel) {

        waveLabel.textContent =
            isTutorial
                ? `TUTORIAL ${currentWave}/5`
                : `WAVE ${currentWave}/5`;

    }

    if (waveStatus) {

        waveStatus.textContent =
            isTutorial
                ? getTutorialTowerName(currentWave)
                : "WAVE ACTIVE";

    }

    spawnWave();

}


/* =====================================================
   WAVE COMPOSITION
===================================================== */

function getWaveComposition() {

    if (isTutorial) {

        return [
            [
                "rubbish"
            ],
            [
                "chemical"
            ],
            [
                "rubbish"
            ],
            [
                "wateruse"
            ],
            [
                "krathong"
            ]
        ][currentWave - 1];

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
   RANDOM INDIVIDUAL RUBBISH
===================================================== */

function spawnWave() {

    const composition =
        getWaveComposition();

    let index = 0;

    function spawnNext() {

        if (!gameRunning) return;

        if (
            index >=
            composition.length
        ) {

            waveSpawnComplete = true;

            spawnSpecialWaveIfNeeded();

            return;

        }

        spawnEnemy(
            composition[index]
        );

        index++;

        /*
         * RANDOM SPAWN SPEED
         * 250–650ms
         */
        const nextDelay =
            250 +
            Math.random() * 400;

        const timeout =
            setTimeout(
                spawnNext,
                nextDelay
            );

        waveSpawnTimeouts.push(timeout);

    }

    spawnNext();

}


/* =====================================================
   SPECIAL KRATHONG
===================================================== */

function spawnSpecialWaveIfNeeded() {

    if (
        !currentLevelData.krathongWave ||
        currentWave !==
        currentLevelData.waves
    ) {

        return;

    }

    for (
        let i = 0;
        i < 3;
        i++
    ) {

        const timeout =
            setTimeout(() => {

                if (gameRunning) {

                    spawnEnemy("krathong");

                }

            }, i * 800);

        waveSpawnTimeouts.push(timeout);

    }

}


/* =====================================================
   SPAWN ENEMY
===================================================== */

function spawnEnemy(type = "rubbish") {

    const data =
        enemyData[type];

    if (!data) return;

    const hpScale =
        isTutorial
            ? 1
            : 1 +
              (
                  (currentWave - 1) *
                  0.18
              );

    const hp =
        Math.round(
            data.hp *
            hpScale
        );

    const enemy = {

        id: enemyId++,

        type: type,

        x: -40,

        y: getRandomRiverY(),

        hp: hp,

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

    element.innerHTML = `

        <div class="enemy-hp">

            <div class="enemy-hp-fill"></div>

        </div>

        <img
            src="${data.image}"
            alt=""
            draggable="false"
        >

    `;

    gameMap.appendChild(element);

    enemy.element = element;

    enemy.hpFill =
        element.querySelector(
            ".enemy-hp-fill"
        );

    enemies.push(enemy);

    updateEnemyHP(enemy);

}


/* =====================================================
   RANDOM RIVER Y
===================================================== */

function getRandomRiverY() {

    const height =
        gameMap.clientHeight;

    const riverTop =
        height * 0.43;

    const riverBottom =
        height * 0.63;

    return (
        riverTop +
        Math.random() *
        (
            riverBottom -
            riverTop
        )
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

    if (gameRunning) {

        gameLoop =
            requestAnimationFrame(
                updateGame
            );

    }

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

            if (!enemy.element) return;

            let speed =
                enemy.speed;

            if (
                now <
                enemy.slowedUntil
            ) {

                speed *=
                    enemy.slowMultiplier;

            } else {

                enemy.slowMultiplier = 1;

            }

            enemy.x += speed;

            enemy.element.style.left =
                `${enemy.x}px`;

            enemy.element.style.top =
                `${enemy.y}px`;

            if (
                enemy.x >
                width + 45
            ) {

                damageRiver(enemy);

            }

        });

}


/* =====================================================
   RIVER DAMAGE
===================================================== */

function damageRiver(enemy) {

    const index =
        enemies.indexOf(enemy);

    if (index !== -1) {

        enemies.splice(index, 1);

    }

    if (enemy.element) {

        enemy.element.remove();

    }

    health -= enemy.riverDamage;

    if (enemy.type === "rubbish") {

        leakedRubbish++;

    }

    health =
        Math.max(
            0,
            health
        );

    updateUI();

    if (
        health <= 0 ||
        leakedRubbish >= getLeakLimit()
    ) {

        loseLevel();

    }

}


/* =====================================================
   LEAK LIMIT
===================================================== */

function getLeakLimit() {

    return Math.max(
        8,
        Math.ceil(
            totalRubbishAllowed *
            0.4
        )
    );

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

        if (!target) return;

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

    let target = null;

    let furthestProgress =
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
                furthestProgress
            ) {

                target = enemy;

                furthestProgress =
                    enemy.x;

            }

        }

    });

    return target;

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
        tower.slowAmount
    ) {

        enemy.slowedUntil =
            Date.now() +
            tower.slowDuration;

        enemy.slowMultiplier =
            tower.slowAmount;

    }

    updateEnemyHP(enemy);

    if (enemy.hp <= 0) {

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

        enemies.splice(index, 1);

    }

    if (enemy.element) {

        enemy.element.remove();

    }

}


/* =====================================================
   ENEMY HP
===================================================== */

function updateEnemyHP(enemy) {

    if (!enemy.hpFill) return;

    const percentage =
        Math.max(
            0,
            (
                enemy.hp /
                enemy.maxHp
            ) * 100
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

    if (!waveRunning) return;

    if (
        enemies.length === 0 &&
        waveSpawnComplete
    ) {

        waveRunning = false;

        if (isTutorial) {

            if (currentWave >= 5) {

                finishTutorial();

            } else {

                if (waveStatus) {

                    waveStatus.textContent =
                        "WAVE CLEARED";

                }

                setTimeout(() => {

                    if (gameRunning) {

                        beginCountdown();

                    }

                }, 1000);

            }

            return;

        }

        if (
            currentWave >=
            currentLevelData.waves
        ) {

            finishLevel();

        } else {

            if (waveStatus) {

                waveStatus.textContent =
                    "WAVE CLEARED";

            }

            setTimeout(() => {

                if (gameRunning) {

                    beginCountdown();

                }

            }, 1200);

        }

    }

}


/* =====================================================
   TUTORIAL TOWER NAME
===================================================== */

function getTutorialTowerName(wave) {

    const names = [

        "TRY RECYCLING BIN",
        "TRY WATER FILTER",
        "TRY GARBAGE NET",
        "TRY EDUCATIONAL SIGN",
        "TRY COMMUNITY CLEAN-UP"

    ];

    return (
        names[wave - 1] ||
        "TUTORIAL"
    );

}


/* =====================================================
   FINISH TUTORIAL
===================================================== */

function finishTutorial() {

    gameRunning = false;

    waveRunning = false;

    clearInterval(countdownTimer);

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
   FINISH LEVEL
===================================================== */

function finishLevel() {

    gameRunning = false;

    waveRunning = false;

    clearInterval(countdownTimer);

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
   LOSE
===================================================== */

function loseLevel() {

    if (!gameRunning) return;

    gameRunning = false;
    waveRunning = false;

    clearInterval(countdownTimer);

    waveSpawnTimeouts.forEach(
        timeout =>
            clearTimeout(timeout)
    );

    waveSpawnTimeouts = [];

    messageTitle.textContent =
        "THE RIVER NEEDS HELP";

    messageText.textContent =
        `Too much rubbish reached the end of the river. ` +
        `You allowed ${leakedRubbish} rubbish items to leak.`;

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

if (restartButton) {

    restartButton.addEventListener("click", () => {

        gameMessage.classList.add("hidden");

        if (isTutorial) {

            startTutorial();

        } else {

            startLevel(currentLevel);

        }

    });

}


/* =====================================================
   NEXT LEVEL
===================================================== */

if (nextStageButton) {

    nextStageButton.addEventListener("click", () => {

        gameMessage.classList.add("hidden");

        if (
            currentLevel <
            levels.length - 1
        ) {

            startLevel(
                currentLevel + 1
            );

        }

    });

}


/* =====================================================
   STOP GAME
===================================================== */

function stopGame() {

    gameRunning = false;
    waveRunning = false;

    clearInterval(countdownTimer);

    countdownTimer = null;

    waveSpawnTimeouts.forEach(
        timeout =>
            clearTimeout(timeout)
    );

    waveSpawnTimeouts = [];

    if (gameLoop) {

        cancelAnimationFrame(gameLoop);

        gameLoop = null;

    }

    endPointerDrag();

}


/* =====================================================
   UI
===================================================== */

function updateUI() {

    if (pointsDisplay) {

        pointsDisplay.textContent =
            Math.floor(points);

    }

    if (healthDisplay) {

        healthDisplay.textContent =
            Math.floor(health);

    }

    if (towerCountDisplay) {

        towerCountDisplay.textContent =
            towers.length;

    }

    updateLeakUI();
    updateTowerAvailability();

}


/* =====================================================
   STAGE PROGRESS
===================================================== */

function updateLeakUI() {

    const limit =
        getLeakLimit();

    if (leakText) {

        leakText.textContent =
            `RUBBISH LEAKS ${leakedRubbish}/${limit}`;

    }

    if (progressFill) {

        const percentage =
            Math.min(
                100,
                (
                    leakedRubbish /
                    limit
                ) * 100
            );

        progressFill.style.width =
            `${percentage}%`;

    }

}


/* =====================================================
   TOWER AVAILABILITY
===================================================== */

function updateTowerAvailability() {

    if (!currentLevelData) return;

    document
        .querySelectorAll(".tower-card")
        .forEach(card => {

            const type =
                card.dataset.type;

            const data =
                towerData[type];

            if (!data) return;

            const disabled =
                points < data.cost ||
                towers.length >=
                currentLevelData.towerLimit;

            card.classList.toggle(
                "disabled",
                disabled
            );

        });

}


/* =====================================================
   TOWER CARDS
   IMPORTANT:
   We use ONLY pointer dragging.
   This fixes Garbage Net on mobile.
===================================================== */

const towerCards =
    document.querySelectorAll(
        ".tower-card"
    );

towerCards.forEach(card => {

    /*
     * Prevent browser HTML drag system
     * from fighting our pointer system.
     */
    card.draggable = false;

    card.addEventListener(
        "dragstart",
        event => {

            event.preventDefault();

        }
    );

    card.addEventListener(
        "pointerdown",
        startPointerDrag
    );

});


/* =====================================================
   START POINTER DRAG
===================================================== */

function startPointerDrag(event) {

    /*
     * Only left click / touch.
     */
    if (
        event.button !== undefined &&
        event.button !== 0
    ) {

        return;

    }

    event.preventDefault();

    const card =
        event.currentTarget;

    const type =
        card.dataset.type;

    /*
     * Make sure this is a real tower.
     */
    if (
        !type ||
        !towerData[type] ||
        !currentLevelData
    ) {

        return;

    }

    const data =
        towerData[type];

    /*
     * Not enough points.
     */
    if (points < data.cost) {

        return;

    }

    /*
     * Tower limit.
     */
    if (
        towers.length >=
        currentLevelData.towerLimit
    ) {

        showLimitMessage();

        return;

    }

    /*
     * Prevent another drag.
     */
    if (dragState.active) {

        endPointerDrag();

    }

    dragState.active = true;

    dragState.type = type;

    dragState.pointerId =
        event.pointerId;

    /*
     * Capture pointer so dragging
     * continues even when finger
     * leaves the card.
     */
    try {

        card.setPointerCapture(
            event.pointerId
        );

    } catch (error) {
        // Safe fallback
    }

    card.classList.add(
        "dragging"
    );

    gameMap.classList.add(
        "placing"
    );

    createDragClone(type);

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

        if (!dragState.active) return;

        if (
            dragState.pointerId !== null &&
            event.pointerId !==
            dragState.pointerId
        ) {

            return;

        }

        event.preventDefault();

        updatePointerDrag(
            event.clientX,
            event.clientY
        );

    },
    {
        passive: false
    }
);


/* =====================================================
   POINTER UP
===================================================== */

document.addEventListener(
    "pointerup",
    event => {

        if (!dragState.active) return;

        if (
            dragState.pointerId !== null &&
            event.pointerId !==
            dragState.pointerId
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
   CREATE DRAG CLONE
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
            draggable="false"
        >

    `;

    document.body.appendChild(clone);

    dragState.clone =
        clone;

    if (rangePreview) {

        rangePreview.classList.remove(
            "hidden"
        );

    }

}


/* =====================================================
   REMOVE DRAG CLONE
===================================================== */

function removeDragClone() {

    if (dragState.clone) {

        dragState.clone.remove();

        dragState.clone = null;

    }

}


/* =====================================================
   UPDATE POINTER DRAG
===================================================== */

function updatePointerDrag(
    clientX,
    clientY
) {

    if (!dragState.active) return;

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

        if (rangePreview) {

            rangePreview.classList.add(
                "hidden"
            );

        }

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

    const draggedCards =
        document.querySelectorAll(
            ".tower-card.dragging"
        );

    draggedCards.forEach(card => {

        card.classList.remove(
            "dragging"
        );

    });

    dragState.active = false;

    dragState.type = null;

    dragState.pointerId = null;

    removeDragClone();

    if (rangePreview) {

        rangePreview.classList.add(
            "hidden"
        );

    }

    if (gameMap) {

        gameMap.classList.remove(
            "placing"
        );

    }

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

    if (
        !type ||
        !towerData[type] ||
        !rangePreview
    ) {

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
   GET NEAREST VALID SPOT
===================================================== */

function getNearestValidSpot(
    x,
    y,
    towerType
) {

    const tower =
        towerData[towerType];

    if (!tower) return null;

    let closest = null;

    let closestDistance =
        Infinity;

    placementSpots.forEach(spot => {

        if (spot.occupied) return;

        if (
            spot.type !==
            tower.placement
        ) {

            return;

        }

        const spotX =
            gameMap.clientWidth *
            (
                spot.xPercent /
                100
            );

        const spotY =
            gameMap.clientHeight *
            (
                spot.yPercent /
                100
            );

        const distance =
            getDistance(
                x,
                y,
                spotX,
                spotY
            );

        /*
         * 60px placement tolerance
         * makes mobile dragging easier.
         */
        if (
            distance < 60 &&
            distance < closestDistance
        ) {

            closest =
                spot;

            closestDistance =
                distance;

        }

    });

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

    placementSpots.forEach(
        candidate => {

            if (candidate.occupied) {
                return;
            }

            if (
                candidate.type !==
                towerData[type].placement
            ) {

                return;

            }

            const spotX =
                gameMap.clientWidth *
                (
                    candidate.xPercent /
                    100
                );

            const spotY =
                gameMap.clientHeight *
                (
                    candidate.yPercent /
                    100
                );

            const distance =
                getDistance(
                    x,
                    y,
                    spotX,
                    spotY
                );

            if (
                distance < 60 &&
                candidate !== spot
            ) {

                candidate.element.classList.add(
                    "invalid"
                );

            }

        }
    );

}


/* =====================================================
   CLEAR SPOT STATES
===================================================== */

function clearSpotStates() {

    placementSpots.forEach(
        spot => {

            if (!spot.element) return;

            spot.element.classList.remove(
                "valid",
                "invalid"
            );

        }
    );

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

    if (!data || !spot) return;

    if (points < data.cost) return;

    if (
        towers.length >=
        currentLevelData.towerLimit
    ) {

        showLimitMessage();
        return;

    }

    if (spot.occupied) return;

    if (
        data.placement !==
        spot.type
    ) {

        return;

    }

    points -= data.cost;

    const x =
        gameMap.clientWidth *
        (
            spot.xPercent /
            100
        );

    const y =
        gameMap.clientHeight *
        (
            spot.yPercent /
            100
        );

    const tower = {

        id: towerId++,

        type: type,

        x: x,
        y: y,

        range: data.range,

        damage: data.damage,

        cooldown: data.cooldown,

        targets: data.targets,

        slowAmount:
            data.slowAmount ||
            null,

        slowDuration:
            data.slowDuration ||
            0,

        lastAttack: 0,

        spot: spot,

        element: null

    };

    const element =
        document.createElement("div");

    element.className =
        "tower";

    element.dataset.id =
        tower.id;

    element.innerHTML = `

        <div
            class="range-circle"
            style="--range:${data.range}px"
        ></div>

        <img
            src="${data.image}"
            alt=""
            draggable="false"
        >

    `;

    element.style.left =
        `${x}px`;

    element.style.top =
        `${y}px`;

    gameMap.appendChild(element);

    tower.element =
        element;

    towers.push(tower);

    spot.occupied = true;

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
   TOWER TUTORIAL
===================================================== */

function showTowerTutorial(type) {

    const info =
        towerTutorialInfo[type];

    if (!info) return;

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

        <strong>${info.title}</strong>

        <span>${info.text}</span>

    `;

    message.classList.add("show");

    clearTimeout(
        message.hideTimer
    );

    message.hideTimer =
        setTimeout(() => {

            message.classList.remove(
                "show"
            );

        }, 4000);

}


/* =====================================================
   SHOW TOWER RANGE
===================================================== */

let heldTower = null;

document.addEventListener(
    "pointerdown",
    event => {

        const towerElement =
            event.target.closest(".tower");

        if (!towerElement) return;

        const id =
            Number(
                towerElement.dataset.id
            );

        const tower =
            towers.find(
                item =>
                    item.id === id
            );

        if (!tower) return;

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

    message.classList.add("show");

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
   INITIALISE
===================================================== */

updateUI();