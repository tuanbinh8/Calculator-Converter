let selectDateCalculator = document.getElementById('select-date-calculator')
let dateCalculators = document.getElementsByClassName('date-calculator')
selectDateCalculator.onchange = () => {
    let selectedOptionNumber = selectDateCalculator.selectedIndex
    if (selectedOptionNumber) {
        dateCalculators[1].classList.add('active')
        dateCalculators[0].classList.remove('active')
    } else {
        dateCalculators[0].classList.add('active')
        dateCalculators[1].classList.remove('active')
    }
}

let startingDate = document.querySelector('.starting-date:nth-of-type(1)')
let endingDate = document.querySelector('.ending-date')

startingDate.onchange = () => {
    checkDatesDifference(startingDate.value, endingDate.value)
}
endingDate.onchange = () => {
    checkDatesDifference(startingDate.value, endingDate.value)
}
function checkDatesDifference(startingDate, endingDate) {
    let dateDifferenceAsMillisecond = Math.abs(new Date(startingDate) - new Date(endingDate))
    let dateDifferenceAsDay = dateDifferenceAsMillisecond / (1000 * 60 * 60 * 24)
    let dateDifference = []
    if (dateDifferenceAsDay % 7 == 0)
        dateDifference = [dateDifferenceAsDay / 7 + ' week(s)']
    else
        dateDifference = [Math.floor(dateDifferenceAsDay / 7) + ' week(s)', dateDifferenceAsDay % 7 + ' day(s)']
    if (dateDifferenceAsDay % 365 == 0)
        dateDifference = [dateDifferenceAsDay / 365 + ' year(s)']
    else
        dateDifference = [Math.floor(dateDifferenceAsDay / 365) + ' year(s)', Math.floor(dateDifferenceAsDay % 365 / 7) + ' week(s)', dateDifferenceAsDay % 365 % 7 + ' day(s)']
    document.querySelector('.calculator:nth-of-type(3) .result').innerText = dateDifference.join(', ')
    document.querySelector('.calculator:nth-of-type(3) .result-as-day').innerText = dateDifferenceAsDay + ' day(s)'
}