const brain = require('brain.js')
const cancerData = require('./cancerData.json')

let net = new brain.NeuralNetwork(); 
let riskFactorArray = []; 
 
for (let i = 1; i < cancerData.length; i++) {

    riskFactorArray.push({  
    
        input: { 
            //ag: cancerData[i].age / 100,
            yrsSmoking: cancerData[i].yearsSmoking / 100,
        },
        output: {
            //yrsSmoking: cancerData[i].yearsSmoking ,
            ag: cancerData[i].age / 100,
            yc: cancerData[i].yearsContracep / 100,
            cncr: cancerData[i].cancer / 100,
        }
    })
}

net.train(riskFactorArray, {
    iterations: 5000, // the maximum times to iterate the training data --> number greater than 0
    errorThresh: 0.0005, // the acceptable error percentage from training data --> number between 0 and 1
    log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
});


let result = net.run({
    //age: 30,
    yrsSmoking: 20,
    //cncr: 0.0,
    // yc: 0.0,
});

console.log(result)