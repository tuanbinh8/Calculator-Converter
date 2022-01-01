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
    let characters = input.innerText.split('')
    characters.map((character) => {
        let place = characters.indexOf(character)
        let nextCharacter = characters[place + 1]
        while (!isNaN(nextCharacter) || nextCharacter == '.') {
            if (!isNaN(character)) {
                characters[place] += nextCharacter
                characters.splice(place + 1, 1)
            }
            break
        }
        if (character == 'A' && characters[place + 1] == 'n' && characters[place + 2] == 's') {
            characters[place] += characters[place + 1] + characters[place + 2]
            characters.splice(place + 1, 2)
        }
        if (character == '√') {
            characters[place] = 'Math.sqrt('
            characters.splice(place + 2, 0, ')')
        }
        if (character == 'π')
            characters[place] = Math.PI
        if (character == '^')
            character = '**'
    })
    console.log(characters);
    output.innerHTML = eval(characters.join(''))
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