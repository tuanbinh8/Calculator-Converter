let Ans = localStorage.ans
let input = document.querySelector('.calculator:nth-of-type(2) .input')
let output = document.querySelector('.calculator:nth-of-type(2) .output')

try {
    var historyInputs = localStorage.historyInputs.split(',')
    var historyOutputs = localStorage.historyOutputs.split(',')
} catch {
    var historyInputs = []
    var historyOutputs = []
}

historyInputs.map((index) => {
    let input = index
    historyOutputs.map((index) => {
        let output = index
        if (historyOutputs.indexOf(output) == historyInputs.indexOf(input))
            historyContent.innerHTML = `<div><p class='input'>${input}</p><p class='output'>${output}</p></div>` + historyContent.innerHTML
    })
})

let history = Array.from(document.querySelectorAll('#history #history-content div'))
history.map((element) => {
    element.onclick = () => {
        element.classList.add('active')
        input.innerText = document.querySelector('#history div.active .input').innerText
        output.innerText = document.querySelector('#history div.active .output').innerText
        Ans = Number(output.innerHTML)
        localStorage.ans = Ans
        element.classList.remove('active')
    }
})

let standardCalculatorButtons = [Array.from(document.querySelectorAll('.calculator:nth-of-type(2) .numbers .button')), Array.from(document.querySelectorAll('.calculator:nth-of-type(2) .basic-symbols .button')), Array.from(document.querySelectorAll('.calculator:nth-of-type(2) .advance-symbols .button'))]
standardCalculatorButtons.map((listOfButtons) => {
    listOfButtons.map((button) => {
        button.onclick = () => {
            if (button.innerText == 'AC') {
                input.innerText = ''
                output.innerText = ''
            } else if (button.innerText == 'DEL')
                input.innerText = input.innerText.slice(0, -1)
            else {
                if (input.innerHTML.length <= 19) {
                    if (output.innerHTML !== '') {
                        output.innerHTML = ''
                        input.innerHTML = ''
                    }
                    input.innerHTML += button.innerHTML
                }
            }
        }
    })
})

let equal = document.querySelector('.calculator:nth-of-type(2) .equal')
equal.onclick = () => {
    let characters = input.innerText.split('')
    characters.map((character,place) => {
        while (!isNaN(character) || character == '.') {
            let nextCharacter = characters[place+1]
            if (!isNaN(nextCharacter) || nextCharacter == '.') {
                characters[place] += nextCharacter
                characters.splice(place + 1, 1)
                console.log(characters);
            } else {
                break
            }
        }
        if (character == 'A' && characters[place + 1] == 'n' && characters[place + 2] == 's') {
            characters[place] += characters[place + 1] + characters[place + 2]
            characters.splice(place + 1, 2)
            characters[place] = `(${Ans})`
        }
        if (character == 'π')
            characters[place] = `(${Math.PI})`
        if (character == '^')
            characters[place] = '**'
        if (character == '√') {
            characters[place] = 'Math.sqrt('
            console.log(characters);
            characters.splice(place + 2, 0, ')')
        }
        if (character == '!') {
            characters[place] = Number(characters[place - 1])
            for (let i = characters[place - 1] - 1; i > 0; i--) {
                characters[place] *= i
            }
            characters.splice(place - 1, 1)
        }
        console.log(characters);
    })
    console.log(characters);
    try {
        if (characters.length !== 0) {
            let result = eval(characters.join(' '))
            if (isNaN(result)) {
                throw 'SyntaxError'
            } else if (result == Infinity) {
                throw 'MathError'
            } else {
                console.log(result);
                if (String(result).includes('e+'))
                    output.style.fontSize = '23px'
                else
                    output.style.fontSize = '25px'
                output.innerHTML = result
                Ans = result
                localStorage.ans = Ans
                historyContent.innerHTML = `<div><p class='input'>${input.innerHTML}</p><p class='output'>${output.innerHTML}</p></div>` + historyContent.innerHTML
                let history = Array.from(document.querySelectorAll('#history #history-content div'))
                history.map((element) => {
                    element.onclick = () => {
                        element.classList.add('active')
                        input.innerText = document.querySelector('#history div.active .input').innerText
                        output.innerText = document.querySelector('#history div.active .output').innerText
                        Ans = Number(output.innerHTML)
                        localStorage.ans = Ans
                        element.classList.remove('active')
                    }
                })
                historyInputs.push(input.innerText)
                historyOutputs.push(result)
                localStorage.historyInputs = historyInputs
                localStorage.historyOutputs = historyOutputs
            }
        }
    } catch (error) {
        output.innerHTML = error.name || error
        console.log(error);
    }
}