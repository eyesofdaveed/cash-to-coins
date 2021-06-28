dollar = document.querySelector("#dollar");
quarter = document.querySelector("#quarter");
dime = document.querySelector("#dime");
nickel = document.querySelector("#nickel");
penny = document.querySelector("#penny");


/* Returns the least possible combination of coins for the given amount */
function getCoins() {
    var dollarValue = dollar.value.trim();

    if (dollarValue != "") {
        coins = parseFloat(dollarValue) * 100;
        console.log(coins);
        quarter.innerText = Math.floor(coins / 25); 
        let remainder = coins % 25;
        dime.innerText = Math.floor(remainder / 10);
        remainder = remainder % 10;
        nickel.innerText = Math.floor(remainder / 5);
        remainder = remainder % 5;
        penny.innerText = Math.ceil(remainder);
    }
    else {
        return;
    }
}