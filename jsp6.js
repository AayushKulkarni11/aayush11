print poem

function printPoem() {
    console.log("Poem")
}

printPoem();


avg of three number

function average(a , b , c ) {
    console.log((a + b + c) / 3);
}

average(2 , 4, 6);

print table

function printtable(n){
    for ( let i=n; i<=n*10; i+=n){
    console.log(i);
    }
}

printtable(2);

sum value from 1 to n

function sum(n) {
    let sum = 0;
    for( i=1; i<= n; i++) {
        sum+=i;
    }

    return sum;
}

sum(10);

