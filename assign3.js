const sum = (Number(process.argv[2])) +  (Number(process.argv[3]));
/*Number("10");
Number("100");
Number("1000");
*/

if(Number("10") < sum< Number("100")){
    console.log(sum);
    
}else if(Number("100") < sum < Number("1000")){
    console.log(sum);
    
}else {
    console.log(`none`);
}


/*if(10 < sum< 100){
    console.log(sum);
    
}else if(100 < sum < 1000){
    console.log(sum);
    
}else {
    
}*/