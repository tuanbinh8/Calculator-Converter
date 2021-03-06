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
let numberOfDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

startingDate.onchange = () => {
    checkDatesDifference(startingDate.value, endingDate.value)
}
endingDate.onchange = () => {
    checkDatesDifference(startingDate.value, endingDate.value)
}
function checkDatesDifference(startingDate, endingDate) {
    // let largerDate = new Date(Math.max(new Date(startingDate), new Date(endingDate)))
    // let smallerDate = new Date(Math.min(new Date(startingDate), new Date(endingDate)))
    // let dateDifferenceAsMillisecond = Math.abs(new Date(startingDate) - new Date(endingDate))
    // let dateDifferenceAsDay = dateDifferenceAsMillisecond / (1000 * 60 * 60 * 24)
    // let dateDifference = [Math.floor(dateDifferenceAsDay / 365) + ' year(s)', Math.floor(dateDifferenceAsDay % 365 / 30) + ' month(s)', Math.floor(dateDifferenceAsDay % 365 % 30 / 7) + ' week(s)', dateDifferenceAsDay % 365 % 30 % 7 + ' day(s)']
    // if (dateDifference.join(', ') == 'NaN year(s), NaN month(s), NaN week(s), NaN day(s)')
    //     dateDifference = []
    // document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(2) .result').innerText = dateDifference.join(', ')
    // document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(2) .result-as-day').innerText = dateDifferenceAsDay + ' day(s)'
    let result = moment.duration(moment(new Date(startingDate)).diff(moment(new Date(endingDate))))
    let weekDifference
    if (new Date(startingDate) > new Date(endingDate))
        weekDifference = Math.abs(Math.floor(result._data.days / 7))
    else
        weekDifference = Math.abs(Math.ceil(result._data.days / 7))
    document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(2) .result').innerText = `${Math.abs(result._data.years)} year(s) ${Math.abs(result._data.months)} month(s) ${weekDifference} week(s) ${Math.abs(result._data.days % 7)} day(s)`
    document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(2) .result-as-day').innerText = Math.abs(result.as('days')) + ' day(s)'
}

let firstAddendDate = document.getElementById('first-addend-date')
let secondAddendYear = document.getElementById('second-addend-year')
let secondAddendMonth = document.getElementById('second-addend-month')
let secondAddendWeek = document.getElementById('second-addend-week')
let secondAddendDay = document.getElementById('second-addend-day')
let secondAddendDates = [secondAddendYear, secondAddendMonth, secondAddendWeek, secondAddendDay]
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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
    let result
    if (document.getElementById('plus-date').checked)
        result = new Date(moment(firstAddendDate, "mm-dd-yyyy").add(secondAddendDay, 'days').add(secondAddendMonth, 'months').add(secondAddendWeek, 'weeks').add(secondAddendYear, 'years'))
    else
        result = new Date(moment(firstAddendDate, "mm-dd-yyyy").subtract(secondAddendDay, 'days').subtract(secondAddendMonth, 'months').subtract(secondAddendWeek, 'weeks').subtract(secondAddendYear, 'years'))
    document.querySelector('.calculator:nth-of-type(3) .date-calculator:nth-of-type(3) .result').innerText = `${days[result.getDay()]}, ${months[result.getMonth()]} ${result.getDate()}, ${result.getFullYear()}`
}