let otherCalculatorsList = document.getElementById('other-calculators')
let selectOtherCalculatorsButtons = Array.from(document.querySelectorAll('#other-calculators div'))
let calculators = Array.from(document.getElementsByClassName('calculator'))

document.getElementById('switching-mode-button').onclick = () => {
    Array.from(document.querySelectorAll('*')).map((element) => {
        if (!element.classList.contains('darkmode'))
            element.classList.add('darkmode')
        else
            element.classList.remove('darkmode')
    })
}

let otherCalculatorsBars = Array.from(document.getElementsByClassName('other-calculators-bar'))
otherCalculatorsBars.map((element) => {
    element.onclick = () => {
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
        curentCalculator.classList.add('active')
        calculators.map((calculator) => {
            if (calculator !== curentCalculator)
                calculator.classList.remove('active')
        })
        if (selectOtherCalculatorsButtons.indexOf(button) !== 0)
            historyList.style.display = 'none'
    }
})

let historyButton = document.querySelector('.history-button')
let historyList = document.getElementById('history')
let historyContent = document.getElementById('history-content')
historyButton.onclick = () => {
    if (historyList.style.display === 'block')
        historyList.style.display = 'none'
    else
        historyList.style.display = 'block'
}

let deleteHistoryButton = document.querySelector('.delete-history-button')

deleteHistoryButton.onclick = () => {
    historyContent.innerHTML = ''
    localStorage.historyInputs = ''
    localStorage.historyOutputs = ''
    historyInputs = (localStorage.historyInputs == '') ? [] : localStorage.historyInputs
    historyOutputs = (localStorage.historyOutputs == '') ? [] : localStorage.historyOutputs
}

window.onclick = (event) => {
    if (window.innerWidth <= 800) {
        let element = event.target
        if (!(element == historyList || historyList.contains(element) || element == historyButton || historyButton.contains(element))) {
            historyList.style.display = 'none'
        }
        let currentOtherCalculatorsBar = document.querySelector('.calculator.active .other-calculators-bar')
        if (!(element == otherCalculatorsList || otherCalculatorsList.contains(element) || element == currentOtherCalculatorsBar || currentOtherCalculatorsBar.contains(element))) {
            otherCalculatorsList.style.display = 'none'
        }
    }
}

window.onkeydown = (event) => {
    if (document.querySelector('.converter.active')) {
        let key = event.key
        if (!isNaN(key) || key == '.' || key == 'Backspace' || key == 'Delete') {
            if (input.innerHTML.length <= 19) {
                if (key == 'Backspace')
                    document.querySelector('.converter.active .DEL').click()
                else if (key == 'Delete')
                    document.querySelector('.converter.active .AC').click()
                else if (key == '.')
                    document.querySelectorAll('.converter.active .numbers .button')[10].click()
                else if (!isNaN(key))
                    document.querySelectorAll('.converter.active .numbers .button')[9 - key].click()
            }
        }
    }
    if (document.querySelector('.calculator:nth-of-type(2).active')) {
        let key = event.key
        let basicSymbols = Array.from(document.querySelectorAll('.calculator:nth-of-type(2) .basic-symbols .button'))
        let advanceSymbols = Array.from(document.querySelectorAll('.calculator:nth-of-type(2) .advance-symbols .button'))
        let symbolButtons = []
        basicSymbols.map((button) => {
            symbolButtons.push(button)
        })
        advanceSymbols.map((button) => {
            symbolButtons.push(button)
        })
        let symbols = []
        symbolButtons.map((button) => {
            symbols.push(button.innerText)
        })
        if (!isNaN(key) || symbols.indexOf(key) > -1 || key == '.' || key == 'Backspace' || key == 'Delete' || key == '=' || key == 'Enter') {
            if (key == 'Backspace')
                document.querySelector('.calculator:nth-of-type(2) .DEL').click()
            else if (key == 'Delete')
                document.querySelector('.calculator:nth-of-type(2) .AC').click()
            else if (key == '.')
                document.querySelectorAll('.calculator:nth-of-type(2) .numbers .button')[10].click()
            else if (!isNaN(key))
                document.querySelectorAll('.calculator:nth-of-type(2) .numbers .button')[9 - key].click()
            else if (symbols.indexOf(key) > -1)
                symbolButtons[symbols.indexOf(key)].click()
            else if (key = 'Enter' || key == '=')
                equal.click()
        }
    }
}