var lemonadeChange = function(bills) {
    let fiveNumber = 0,
        tenNumber = 0
    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i]
        if (bill===5){
            fiveNumber += 1

        }else if (bill === 10){
            if (fiveNumber>0){
                fiveNumber -= 1
                tenNumber += 1
            }else {
                return false
            }
        }else {
            if (fiveNumber>0 && tenNumber>0){
                fiveNumber -= 1
                tenNumber -= 1
            }else if (fiveNumber > 2){
                fiveNumber -= 3
            }else
                return false
        }
    }
    return true
};