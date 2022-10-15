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
/* output below:
0  x  0  =  0
1  x  0  =  0
2  x  0  =  0
3  x  0  =  0
4  x  0  =  0
5  x  0  =  0
6  x  0  =  0
7  x  0  =  0
8  x  0  =  0
9  x  0  =  0
10  x  0  =  0
0  x  1  =  0
1  x  1  =  1
2  x  1  =  2
3  x  1  =  3
4  x  1  =  4
5  x  1  =  5
6  x  1  =  6
7  x  1  =  7
8  x  1  =  8
9  x  1  =  9
10  x  1  =  10
0  x  2  =  0
1  x  2  =  2
2  x  2  =  4
3  x  2  =  6
4  x  2  =  8
5  x  2  =  10
6  x  2  =  12
7  x  2  =  14
8  x  2  =  16
9  x  2  =  18
10  x  2  =  20
0  x  3  =  0
1  x  3  =  3
2  x  3  =  6
3  x  3  =  9
4  x  3  =  12
5  x  3  =  15
6  x  3  =  18
7  x  3  =  21
8  x  3  =  24
9  x  3  =  27
10  x  3  =  30
0  x  4  =  0
1  x  4  =  4
2  x  4  =  8
3  x  4  =  12
4  x  4  =  16
5  x  4  =  20
6  x  4  =  24
7  x  4  =  28
8  x  4  =  32
9  x  4  =  36
10  x  4  =  40
0  x  5  =  0
1  x  5  =  5
2  x  5  =  10
3  x  5  =  15
4  x  5  =  20
5  x  5  =  25
6  x  5  =  30
7  x  5  =  35
8  x  5  =  40
9  x  5  =  45
10  x  5  =  50
0  x  6  =  0
1  x  6  =  6
2  x  6  =  12
3  x  6  =  18
4  x  6  =  24
5  x  6  =  30
6  x  6  =  36
7  x  6  =  42
8  x  6  =  48
9  x  6  =  54
10  x  6  =  60
0  x  7  =  0
1  x  7  =  7
2  x  7  =  14
3  x  7  =  21
4  x  7  =  28
5  x  7  =  35
6  x  7  =  42
7  x  7  =  49
8  x  7  =  56
9  x  7  =  63
10  x  7  =  70
0  x  8  =  0
1  x  8  =  8
2  x  8  =  16
3  x  8  =  24
4  x  8  =  32
5  x  8  =  40
6  x  8  =  48
7  x  8  =  56
8  x  8  =  64
9  x  8  =  72
10  x  8  =  80
0  x  9  =  0
1  x  9  =  9
2  x  9  =  18
3  x  9  =  27
4  x  9  =  36
5  x  9  =  45
6  x  9  =  54
7  x  9  =  63
8  x  9  =  72
9  x  9  =  81
10  x  9  =  90
0  x  10  =  0
1  x  10  =  10
2  x  10  =  20
3  x  10  =  30
4  x  10  =  40
5  x  10  =  50
6  x  10  =  60
7  x  10  =  70
8  x  10  =  80
9  x  10  =  90
10  x  10  =  100
*/

// multiplication chart using 'row'
for(let y = 1; y<= 10; y++){
    let row = ' ';
    for(let x = 1; x <= 10; x++){
        row +=(x*y) + ' ';
    }  console.log(row)

/* output below:
1 2 3 4 5 6 7 8 9 10
 2 4 6 8 10 12 14 16 18 20
 3 6 9 12 15 18 21 24 27 30
 4 8 12 16 20 24 28 32 36 40
 5 10 15 20 25 30 35 40 45 50
 6 12 18 24 30 36 42 48 54 60
 7 14 21 28 35 42 49 56 63 70
 8 16 24 32 40 48 56 64 72 80
 9 18 27 36 45 54 63 72 81 90
 10 20 30 40 50 60 70 80 90 100
 */