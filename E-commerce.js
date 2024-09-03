var status="regular customer"
var amount=80
if(status == "regular customer"){
    if(amount<100){
         amount -= amount*0;
    }
    else if(amount>=100 && amount<=500){
        amount -= amount*0.05;
    }
    else if( amount>500){
        amount -= amount*0.1;
    }
}
else if( status== "VIP customer"){
    if(amount<100){
        amount -= amount*0.1;
    }
    else if(amount>=100 && amount<=500){
        amount -= amount*0.15;
    }
    else if( amount>500){
        amount -= amount*0.2;
    }
}
console.log(amount)