let selectOtherCalculatorsButtons = Array.from(document.querySelectorAll('#other-calculators div'))
let calculators = Array.from(document.getElementsByClassName('calculator'))

document.getElementById('switching-mode-button').onclick = () => {
    Array.from(document.querySelectorAll('*')).map((elmt) => {
        if (!elmt.classList.contains('darkmode'))
            elmt.classList.add('darkmode')
        else
            elmt.classList.remove('darkmode')
    })
}

let otherCalculatorsBar = Array.from(document.getElementsByClassName('other-calculators-bar'))
otherCalculatorsBar.map((element) => {
    element.onclick = () => {
        let otherCalculatorsList = document.getElementById('other-calculators')
        if (otherCalculatorsList.style.display === 'none')
            otherCalculatorsList.style.display = 'block'
        else
            otherCalculatorsList.style.display = 'none'
    }
})

selectOtherCalculatorsButtons.map((button) => {
    let clickedButton = button
    clickedButton.onclick = () => {
        selectOtherCalculatorsButtons.map((button) => {
            if (button !== clickedButton)
                button.classList.remove('active')
            else
                button.classList.add('active')
        })
        let curentCalculator = calculators[selectOtherCalculatorsButtons.indexOf(button)]
        calculators.map((calculator) => {
            if (calculator !== curentCalculator)
                calculator.classList.remove('active')
            else
                calculator.classList.add('active')
        })
    }
})

let historyButtons = Array.from(document.getElementsByClassName('fa-history'))
console.log(historyButtons);
let history = document.getElementById('history')
historyButtons.map((button) => {
    button.onclick = () => {
        alert(true)
        if (history.style.display === 'block')
            history.style.display = 'none'
        else
            history.style.display = 'block'
    }
})