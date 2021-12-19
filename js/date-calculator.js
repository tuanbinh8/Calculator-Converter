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

let dayInputs = Array.from(document.getElementsByClassName('day'))
let monthInputs = Array.from(document.getElementsByClassName('month'))
let yearInputs = Array.from(document.getElementsByClassName('year'))
dayInputs.map((input) => {
    input.onkeydown = (event) => {
        event.preventDefault()
    }
})
monthInputs.map((monthInput) => {
    monthInput.onchange = () => {
        let month = monthInput.selectedIndex + 1
        dayInputs.map((dayInput) => {
            if (month % 2 == 0) {
                changeMaxDay(30)
                if (month >= 8) {
                    changeMaxDay(31)
                }
            }
            if (month % 2 == 1) {
                changeMaxDay(31)
                if (month >= 8) {
                    changeMaxDay(30)
                }
            }
            //tính năm nhuận
            function changeMaxDay(maxDay) {
                dayInput.value = ''
                dayInput.max = maxDay
            }
        })
    }
})