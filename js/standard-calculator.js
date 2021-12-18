let Ans

let buttons = [Array.from(document.querySelectorAll('.calculator:nth-of-type(2) .numbers .button')), Array.from(document.querySelectorAll('.calculator:nth-of-type(2) .basic-symbols .button')), Array.from(document.querySelectorAll('.calculator:nth-of-type(2) .advance-symbols .button'))]
buttons.map((listOfButtons) => {
    listOfButtons.map((button) => {
        button.onclick = () => {
            let input = document.querySelector('.calculator:nth-of-type(2) .input')
            let output = document.querySelector('.calculator:nth-of-type(2) .output')
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

let equal = document.querySelector('.calculator:nth-of-type(2) .equal')
equal.onclick = () => {
    let output = document.querySelector('.calculator:nth-of-type(2) .output')
    let input = document.querySelector('.calculator:nth-of-type(2) .input')
    console.log(input.innerHTML);
    output.innerHTML = eval(input.innerHTML)
    Ans = Number(output.innerHTML)
}

let DELButtons = document.querySelector('.calculator:nth-of-type(2) .DEL')
DELButtons.onclick = () => {
    let input = document.querySelector('.calculator:nth-of-type(2) .input')
    let output = document.querySelector('.calculator:nth-of-type(2) .output')
    if (output.innerHTML === '')
        input.innerHTML = input.innerHTML.slice(0, -1)
}

let ACButtons = document.querySelector('.calculator:nth-of-type(2) .AC')
ACButtons.onclick = () => {
    let input = document.querySelector('.calculator:nth-of-type(2) .input')
    let output = document.querySelector('.calculator:nth-of-type(2) .output')
    input.innerHTML = ''
    output.innerHTML = ''
}