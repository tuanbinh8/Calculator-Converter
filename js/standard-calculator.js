let Ans = localStorage.ans

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
    let characters = input.innerText.split('')
    characters.map((character) => {
        let place = characters.indexOf(character)
        let nextPlace = place + 1
        while (!isNaN(characters[nextPlace]) || characters[nextPlace] == '.') {
            let nextCharacter = characters[nextPlace]
            console.log(characters);
            if (!isNaN(character) || character == '.') {
                characters[place] += nextCharacter
                characters.splice(place + 1, 1)
            } else {
                break
            }
        }
        if (character == 'A' && characters[place + 1] == 'n' && characters[place + 2] == 's') {
            characters[place] += characters[place + 1] + characters[place + 2]
            characters.splice(place + 1, 2)
            characters.splice(place, 1, Ans)
        }
        if (character == 'π')
            characters[place] = Math.PI
        if (character == '^')
            characters[place] = '**'
        if (character == '√') {
            characters[place] = 'Math.sqrt('
            console.log(characters);
            characters.splice(place + 2, 0, ')')
        }
    })
    console.log(characters);
    try {
        if (characters.length !== 0) {
            let result = eval(characters.join(''))
            console.log(result);
            if (isNaN(result)) {
                throw 'SyntaxError'
            }
            else {
                output.innerHTML = result
                Ans = result
                localStorage.ans = Ans
                historyContent.innerHTML += `<div><p class='input'>${input.innerHTML}</p><p class='output'>${output.innerHTML}</p>`
                let history = Array.from(document.querySelectorAll('#history #history-content div'))
                history.map((element) => {
                    element.onclick = () => {
                        element.classList.add('active')
                        console.log(document.querySelector('#history div.active'));
                        input.innerText = document.querySelector('#history div.active .input').innerText
                        output.innerText = document.querySelector('#history div.active .output').innerText
                        Ans = Number(output.innerHTML)
                        localStorage.ans = Ans
                        element.classList.remove('active')
                    }
                })
            }
        }
    } catch (error) {
        output.innerHTML = error.name || 'SyntaxError'
        console.log(error);
    }
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