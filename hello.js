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