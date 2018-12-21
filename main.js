const brain = require('brain.js')
const cancerData = require('./cancerData.json')
const SCALAR = 100;

let net = new brain.NeuralNetwork();
let riskFactorArray = [];

for (let i = 1; i < cancerData.length; i++) {

    riskFactorArray.push({
        input: {
            yrsSmoking: cancerData[i].yearsSmoking / 100,
        },
        output: {

            //yrsSmoking: cancerData[i].yearsSmoking ,
            ag: cancerData[i].age / 100,
            ctrsPY: cancerData[i].contrasPerYear / 100,
            cncr: cancerData[i].cancer / 10,


        }
    })
}

net.train(riskFactorArray, {
    iterations: 5000, // the maximum times to iterate the training data --> number greater than 0
    errorThresh: 0.00005, // the acceptable error percentage from training data --> number between 0 and 1
    log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
    logPeriod: 10, // iterations between logging out --> number greater than 0
    learningRate: 0.3, // scales with delta to effect training rate --> number between 0 and 1
    momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
    callback: null, // a periodic call back that can be triggered while training --> null or function
    callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
    timeout: Infinity // the max number of milliseconds to train for --> number greater than 0});

});


let result = net.run({
    //age: 30,
    yrsSmoking: 20,
    //cncr: 0.0,
    // ctrsPY: 0.9,
});

console.log(result)