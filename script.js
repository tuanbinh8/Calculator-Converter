document.getElementById('switching-mode-button').onclick = () => {

}
let selectOtherCalculatorsButtons = Array.from(document.querySelectorAll('#other-calculators div'))
for (let i = 0; i < selectOtherCalculatorsButtons.length; i++) {
    let clickedButton = selectOtherCalculatorsButtons[i]
    clickedButton.onclick = () => {
        selectOtherCalculatorsButtons.map((button) => {
            if (button !== clickedButton)
                button.classList.remove('active')
            else
                button.classList.add('active')
        })
    }

}