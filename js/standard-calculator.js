let Ans

let buttons = [Array.from(document.querySelectorAll('.numbers .button')), Array.from(document.querySelectorAll('.basic-symbols .button')), Array.from(document.querySelectorAll('.advance-symbols .button'))]
buttons.map((listOfButtons) => {
    listOfButtons.map((button) => {
        button.onclick = () => {
            let input = document.querySelector('.active .input')
            let output = document.querySelector('.active .output')
            if (input.innerHTML.length <= 19) {
                if (output.innerHTML !== '') {
                    output.innerHTML = ''
                    input.innerHTML = ''
                }
                input.innerHTML += button.innerHTML
            }
        }
    })
})

let equal = Array.from(document.getElementsByClassName('equal'))
equal.map((element) => {
    element.onclick = () => {
        let output = document.querySelector('.active .output')
        let input = document.querySelector('.active .input')
        output.innerHTML = eval(input.innerHTML)
        Ans = output.innerHTML
    }
})

let DELButtons = Array.from(document.getElementsByClassName('DEL'))
DELButtons.map((button) => {
    button.onclick = () => {
        let input = document.querySelector('.active .input')
        let output = document.querySelector('.active .output')
        if (output.innerHTML === '')
            input.innerHTML = input.innerHTML.slice(0, -1)
    }
})

let ACButtons = Array.from(document.getElementsByClassName('AC'))
ACButtons.map((button) => {
    button.onclick = () => {
        let input = document.querySelector('.active .input')
        let output = document.querySelector('.active .output')
        input.innerHTML = ''
        output.innerHTML = ''
    }
})