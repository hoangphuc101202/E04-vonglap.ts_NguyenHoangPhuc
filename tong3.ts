let n : number = 10;
let sum : number = 0;
for (let i : number = 1; i <= n ; i++){
    if(i%2 == 0){
        sum = sum + i;
    }
}
console.log(sum);