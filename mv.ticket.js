let week="saturday";
let age= 66;
let afterDiscount;
let originalPrice;
switch((week=="monday"||week=="tuesday"||week=="wednesday"||week=="thursday"||week=="friday") && (age>=65||age<=12)){
case true:originalPrice="standard price is 12$";
          afterDiscount ="After discount the price is 6$"; 
          break;
    case false:switch((week=="saturday"||week=="sunday") && (age>=65||age<=12)){
               case true: originalPrice="standard price is 15$";
                          afterDiscount ="After discount the price is 4.5$";
    }
}
console.log(originalPrice);
console.log(afterDiscount)