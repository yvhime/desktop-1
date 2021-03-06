console.log("helloworld");

const valorant = {
    agent: "Brimstone",
    country: "USA",
    role: "Controller",
    bestOf: 13,
    unrated() {
        console.log(this);
    },
    gameMode: function competitive() {
        console.log("Game will be race to " + this.bestOf);
    }
};

console.log("Agent " + valorant.agent);
valorant.unrated();
// console.log(valorant.gameMode);

function spikeRush() {
    console.log(this);
}

spikeRush();

const scores = [50, 25, 0, 30, 100, 20, 10];
for(let i = 0; i < scores.length; i++) {
    console.log("score list " + scores[i]);
    if(scores[i] === 100) {
        console.log("you got the top score of 100" + scores[i]);
        break;
    }
}