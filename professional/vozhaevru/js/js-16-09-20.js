function getChangeCicle(coin) {
    while(coin >=1){
        if (coin >= 10){
            console.log(10);
            coin = coin - 10 ;
            continue;
        }else if(coin >= 5) {
            console.log(5);
            coin = coin - 5 ;
            continue;
        }else if(coin >= 2) {
            console.log(2);
            coin = coin - 2 ;
            continue;
        }else{
            console.log(1);
            coin--;
            continue;
        }
    }
}
getChangeCicle(18)