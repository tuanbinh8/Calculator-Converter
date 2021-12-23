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

Array.from(document.querySelectorAll('.calculator:nth-of-type(3) input[type=\'date\']')).map((input) => {
    input.valueAsDate = new Date()
})

let startingDate = document.getElementById('starting-date')
let endingDate = document.getElementById('ending-date')

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
    if (dateDifferenceAsDay % 365 == 0 && dateDifferenceAsDay / 365 !== 0)
        dateDifference = [dateDifferenceAsDay / 365 + ' year(s)']
    else
        dateDifference = [Math.floor(dateDifferenceAsDay / 365) + ' year(s)', Math.floor(dateDifferenceAsDay % 365 / 30) + ' month(s)', Math.floor(dateDifferenceAsDay % 365 % 30 / 7) + ' week(s)', dateDifferenceAsDay % 365 % 30 % 7 + ' day(s)']
    if (dateDifference.join(', ') == 'NaN year(s), NaN month(s), NaN week(s), NaN day(s)')
        dateDifference = []
    document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(2) .result').innerText = dateDifference.join(', ')
    document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(2) .result-as-day').innerText = dateDifferenceAsDay + ' day(s)'
}

let firstAddendDate = document.getElementById('first-addend-date')
let secondAddendYear = document.getElementById('second-addend-year')
let secondAddendMonth = document.getElementById('second-addend-month')
let secondAddendWeek = document.getElementById('second-addend-week')
let secondAddendDay = document.getElementById('second-addend-day')
let secondAddendDates = [secondAddendYear, secondAddendMonth, secondAddendWeek, secondAddendDay]
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let today = new Date()
document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(3) .result').innerText = `${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`

secondAddendDates.map((secondAddendDate) => {
    secondAddendDate.onkeydown = (event) => {
        event.preventDefault()
    }
    secondAddendDate.onchange = () => {
        addOrSubtractDays(new Date(firstAddendDate.value), Number(secondAddendYear.value), Number(secondAddendMonth.value), Number(secondAddendWeek.value), Number(secondAddendDay.value))
    }
})

firstAddendDate.onchange = () => {
    addOrSubtractDays(new Date(firstAddendDate.value), Number(secondAddendYear.value), Number(secondAddendMonth.value), Number(secondAddendWeek.value), Number(secondAddendDay.value))
}

document.getElementById('plus-date').onclick = () => {
    addOrSubtractDays(new Date(firstAddendDate.value), Number(secondAddendYear.value), Number(secondAddendMonth.value), Number(secondAddendWeek.value), Number(secondAddendDay.value))
}
document.getElementById('subtract-date').onclick = () => {
    addOrSubtractDays(new Date(firstAddendDate.value), Number(secondAddendYear.value), Number(secondAddendMonth.value), Number(secondAddendWeek.value), Number(secondAddendDay.value))
}

function addOrSubtractDays(firstAddendDate, secondAddendYear, secondAddendMonth, secondAddendWeek, secondAddendDay) {
    let daysAdded = secondAddendYear * 365 + secondAddendMonth * 30 + secondAddendWeek * 7 + secondAddendDay
    let result
    if (document.getElementById('plus-date').checked)
        result = new Date(firstAddendDate.setDate(firstAddendDate.getDate() + daysAdded))
    else
        result = new Date(firstAddendDate.setDate(firstAddendDate.getDate() - daysAdded))
    document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(3) .result').innerText = `${days[result.getDay()]}, ${months[result.getMonth()]} ${result.getDate()}, ${result.getFullYear()}`
}