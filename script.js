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
        curentCalculator.classList.add('active')
        calculators.map((calculator) => {
            if (calculator !== curentCalculator)
                calculator.classList.remove('active')
        })
        if (selectOtherCalculatorsButtons.indexOf(button) !== 0)
            historyList.style.display='none'
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

deleteHistoryButton.onclick = ()=>{
    historyContent.innerHTML=''
    localStorage.historyInputs = ''
    localStorage.historyOutputs = ''
    historyInputs = (localStorage.historyInputs == '') ? [] : localStorage.historyInputs
    historyOutputs = (localStorage.historyOutputs == '') ? [] : localStorage.historyOutputs
}