// for loop
let value = 1
console.log('value = ', value); // prints value
console.log('value++ = ', value++); // will print as 1 and then becomes 2 as it prints the value first and then adds
console.log('++value = ', (++value)); // adds first to last known value (see above) and then prints
/* above code prints like this:
value =  1
value++ =  1
++value =  3
*/
/*
for ( <initialization> ; <conditional> ; <increment/decrement/next>) {
    <code statements to repeat>
}
*/

for(let i = 0; i < 5; i++){
    console.log('Goodbye');
}

// while loops
/*
<initialization>
while (<conditional>){
    <code statements to repeat>
    <increment/decrement/next>
}
*/

let i = 0
while(i<5){
    console.log('Goodbye');
    i++;
}
// multiplication facts
for(let y = 0; y<= 10; y++){
    for(let x = 0; x <= 10; x++){
        console.log(x, ' x ', y, ' = ', x * y)
    }
}

// multiplication chart using 'row'
for(let y = 1; y<= 10; y++){
    let row = ' ';
    for(let x = 1; x <= 10; x++){
        row +=(x*y) + ' ';
    }  console.log(row)
}