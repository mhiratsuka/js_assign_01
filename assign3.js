const myVal1 = process.argv[2];
const myVal2 = process.argv[3];
const number1 =Number(myVal1);
const number2 =Number(myVal2);
const sum = number1+  number2;


if(sum > 10 && sum <100){
    console.log(sum);
} else if(sum > 100 && sum <1000){
    console.log(sum);1
}else{
    console.log(`none`);
}

