alert("The amount of money you can borrow is based on your monthly income and pay duration")
function limit() {

    const loan = document.getElementById("Cloan")

    const income = document.getElementById("Cincome")
    const period = document.getElementById("Cperiod")
    let loanR = document.getElementById("loanR")
    let interest = document.getElementById("interest")
    let repay = document.getElementById("repay")
    let incomeAdd = income.value / 4;
    let freeAmount = 500 + incomeAdd
    //read vars
    loanR.value = parseInt(freeAmount);
    interest.value = 0.05 * parseInt(loan.value) * period.value;
    repay.value = parseInt(interest.value) + parseInt(freeAmount);

    if (interest.value == "NaN" && repay.value == "NaN" && loan.value == "") {
        interest.value = "Fill in all the spaces"
        loanR.value = 'Fill in all the spaces'
        repay.value = 'Fill in all spaces'
    }
    if (loan.value.length > 6 && income.value.length > 6 && period.value.length > 13) {
        loanR.value = "Please enter a valid amount"
        interest.value = "Please enter a valid amount"
        repay.value = "Please enter a valid amount"
    }
}
function refresh() {
    location.reload()
}



//if user wants 5000 loan,,limit is = users + freeAmount 10k;15k,,,,,if income = 15k,,,divide by 2 and add the other half to free amount

//if loan period = 1yr ,,interest = 0.3 * loan.value

