document.getElementById('switching-mode-button').onclick = () => {

}
let selectOtherCalculatorsButtons = Array.from(document.querySelectorAll('#other-calculators div'))
let calculators = Array.from(document.getElementsByClassName('calculator'))
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