let lengthUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(4) select:nth-of-type(1) option')).map((element) => {
    lengthUnits.push(element.innerText)
})
let lengthConversionRate = [1, 10, 1000, 1000000, 25.4, 304.8, 914.4, 1609344, 1852000]

let areaUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(5) select:nth-of-type(1) option')).map((element) => {
    areaUnits.push(element.innerText)
})
let areaConversionRate = [1, 100, 1000000, 10000000000, 1000000000000, 645.16, 92903.04, 836127.36, 2589988110336, 4046856422.4]

let volumeUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(6) select:nth-of-type(1) option')).map((element) => {
    volumeUnits.push(element.innerText)
})
let volumeConversionRate = [0.001, 1, 1000, 1000000, 16.387064, 28316.846592, 764554.857984]

let massUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(7) select:nth-of-type(1) option')).map((element) => {
    massUnits.push(element.innerText)
})
let massConversionRate = [0.001, 0.01, 0.1, 1, 10, 100, 1000, 1000000]

let tempUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(8) select:nth-of-type(1) option')).map((element) => {
    tempUnits.push(element.innerText)
})

let speedUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(9) select:nth-of-type(1) option')).map((element) => {
    speedUnits.push(element.innerText)
})
let speedConversionRate = [1, 100, 100000, 27.7777778, 44.704, 51.44, 34.03]

let timeUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(10) select:nth-of-type(1) option')).map((element) => {
    timeUnits.push(element.innerText)
})
let timeConversionRate = [1 / 86400000000, 1 / 86400000, 1 / 86400, 1 / 1440, 1 / 24, 1, 7, 365]

let dataUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(11) select:nth-of-type(1) option')).map((element) => {
    dataUnits.push(element.innerText)
})
let dataConversionRate = [8, 1, 8 * 2 ** 10, 2 ** 10, 8 * 2 ** 20, 2 ** 20, 8 * 2 ** 30, 2 ** 30, 8 * 2 ** 40, 2 ** 40, 8 * 2 ** 50, 2 ** 50, 8 * 2 ** 60, 2 ** 60, 8 * 2 ** 70, 2 ** 70, 8 * 2 ** 80, 2 ** 80]

let converterButtons = Array.from(document.querySelectorAll('.converter .buttons .button'))

converterButtons.map((button) => {
    button.onclick = () => {
        let input = document.querySelector('.converter.active .input')
        let output = document.querySelector('.converter.active .output')
        if (button.innerText == 'AC') {
            input.innerText = ''
            output.innerText = ''
        } else if (button.innerText == 'DEL') {
            input.innerText = input.innerText.slice(0, -1)
        } else {
            if (input.innerText.length <= 16)
                input.innerText += button.innerText
        }
        let measurement = document.querySelector('.converter.active .top-bar h4').innerText
        let fromUnit = document.querySelector('.converter.active select:nth-of-type(1)').selectedOptions[0].innerText
        let toUnit = document.querySelector('.converter.active select:nth-of-type(2)').selectedOptions[0].innerText
        let result = convert(measurement, fromUnit, toUnit, Number(input.innerText))
        console.log(result);
        if (!isNaN(result))
            output.innerText = result
        if (input.innerText == '')
            output.innerText = ''
    }
})
let converterSelectsMeasurement = Array.from(document.querySelectorAll('.converter select'))
converterSelectsMeasurement.map((element) => {
    element.onchange = () => {
        let input = document.querySelector('.converter.active .input')
        let output = document.querySelector('.converter.active .output')
        let measurement = document.querySelector('.converter.active .top-bar h4').innerText
        let fromUnit = document.querySelector('.converter.active select:nth-of-type(1)').selectedOptions[0].innerText
        let toUnit = document.querySelector('.converter.active select:nth-of-type(2)').selectedOptions[0].innerText
        let result = convert(measurement, fromUnit, toUnit, Number(input.innerText))
        if (result !== NaN)
            output.innerText = result
        if (input.innerText == '')
            output.innerText = ''
    }
})

function convert(measurement, fromUnit, toUnit, inputNumber) {
    if (measurement == 'Length') {
        return inputNumber * lengthConversionRate[lengthUnits.indexOf(fromUnit)] / lengthConversionRate[lengthUnits.indexOf(toUnit)]
    }
    if (measurement == 'Area') {
        return inputNumber * areaConversionRate[areaUnits.indexOf(fromUnit)] / areaConversionRate[areaUnits.indexOf(toUnit)]
    }
    if (measurement == 'Volume') {
        return inputNumber * volumeConversionRate[volumeUnits.indexOf(fromUnit)] / volumeConversionRate[volumeUnits.indexOf(toUnit)]
    }
    if (measurement == 'Weight & Mass') {
        return inputNumber * massConversionRate[massUnits.indexOf(fromUnit)] / massConversionRate[massUnits.indexOf(toUnit)]
    }
    if (measurement == 'Temperature') {
        let Celsius
        if (fromUnit == 'Fahrenheit')
            Celsius = (inputNumber - 32) * (5 / 9)
        else if (fromUnit == 'Kelvin')
            Celsius == inputNumber - 273.15
        else
            Celsius = inputNumber
        if (toUnit == 'Fahrenheit')
            return Celsius * (9 / 5) + 32
        else if (toUnit == 'Kelvin')
            return Celsius + 273.15
        else
            return Celsius
    }
    if (measurement == 'Speed') {
        return inputNumber * speedConversionRate[speedUnits.indexOf(fromUnit)] / speedConversionRate[speedUnits.indexOf(toUnit)]
    }
    if (measurement == 'Time') {
        return inputNumber * timeConversionRate[timeUnits.indexOf(fromUnit)] / timeConversionRate[timeUnits.indexOf(toUnit)]
    }
    if (measurement == 'Data') {
        return inputNumber * dataConversionRate[dataUnits.indexOf(fromUnit)] / dataConversionRate[dataUnits.indexOf(toUnit)]
    }
}