//LIVE CODING CHALLENGE PRACTICE

// tip calculator example using if/else conditional statement

let bill = 55
console.log('Bill amount: $', bill)
if(bill >= 1 && bill <= 100){
    bill*.22
    console.log('Tip amount will be $', bill.toFixed(2));
}else if(bill >= 101){
    bill*.20
    console.log('Tip amount will be $', bill.toFixed(2));
}else {
    console.log('No bill amount given.');
}

// Temperature/wardrobe picker using if/else conditional statement

let temperature = Math.random()*100;
console.log('Current Temperature: ', temperature.toFixed(2));

if(temperature < 60){
    console.log('It is cold outside, so I will wear some layers!: ', temperature.toFixed(2));
 } else if(temperature > 60){
        console.log('The weather is nice, we only need a light sweater.: ', temperature.toFixed(2))
    }else{
        console.log('Invalid temperature.');
    }

    // for loops
    // increment operator can be ++, --, +=, -=, *=, /=

    for(let i = 0.5; i <= 10; i+= 2){
        console.log(i);
    }

    let testNum = 2;

    console.log(testNum += 10);

    // arrays

    let array = [10, 100, 200, 300, 500];
    console.log(array.length)

    for(let i = 0; i < array.length; i++){
        console.log(array [i]);
    }