let  GPA=3.5;
let  activities=2;
let  csp=100;
if(GPA>=3.5 && (activities>=2 && GPA>=3.0) && (csp>=100 && GPA>=2.5)){
    console.log("eligible for all")
}
else if(GPA>=3.5 && (activities>=2 && GPA>=3.0)){
    console.log("both 1 and 2")
}
else if(GPA>=3.5 && (csp>=100 && GPA>=2.5)){
    console.log("both 1 and 3")
}
else if((activities>=2 && GPA>=3.0) && (csp>=100 && GPA>=2.5)){
    console.log("both 2 and 3")
}
else if(GPA>=3.5){
    console.log("only 1")
}
else if(activities>=2 && GPA>=3.0){
    console.log("only 2")
}
else if(csp>=100 && GPA>=2.5){
    console.log("only 3")
}
else {
    console.log("none")
}
