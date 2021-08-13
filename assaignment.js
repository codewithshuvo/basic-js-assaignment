// problem: 1 (SeerToMon)
function seerToMon(seer) {
    const mon = seer / 40;
    return mon;
}


// problem: 2 (totalsales)
function totalSales(shirtQuantity, pantQuantity, ShoeQuantity) {
    const shirtPrice = shirtQuantity * 100;
    const pantPrice = pantQuantity * 200;
    const ShoePrice = ShoeQuantity * 500;
    const totalPrice = shirtPrice + pantPrice + ShoePrice;
    return totalPrice;
}



// problem: 3 (deliveryCost)
function deliveryCost(tshirtQuantity) {
    const oneHunderdPrice = 10000;
    const twoHunderdPrice = 18000;
    let tshirtDeliveryCost;
    if (tshirtQuantity <= 100) {
        tshirtDeliveryCost = tshirtQuantity * 100;
    } else if (tshirtQuantity <= 200) {
        tshirtDeliveryCost = oneHunderdPrice + (tshirtQuantity - 100) * 80;
    } else {
        tshirtDeliveryCost = twoHunderdPrice + (tshirtQuantity - 200) * 50;
    }
    return tshirtDeliveryCost;
}




// problem: 4(findPerfectFriend)
function perfectFriend(friendArr) {
    for (let i = 0; i < friendArr.length; i++) {
        const friend = friendArr[i];
        if (friend.length == 5) {
            return friend;
        }
    }
}
