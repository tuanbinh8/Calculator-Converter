let lengthUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(4) select:nth-of-type(1) option')).map((element) => {
    lengthUnits.push(element.innerText)
})
// console.log(lengthUnits);

let areaUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(5) select:nth-of-type(1) option')).map((element) => {
    areaUnits.push(element.innerText)
})
// console.log(areaUnits);

let volumeUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(6) select:nth-of-type(1) option')).map((element) => {
    volumeUnits.push(element.innerText)
})
// console.log(volumeUnits);

let massUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(7) select:nth-of-type(1) option')).map((element) => {
    massUnits.push(element.innerText)
})
// console.log(massUnits);

let temperatureUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(8) select:nth-of-type(1) option')).map((element) => {
    temperatureUnits.push(element.innerText)
})
// console.log(temperatureUnits);

let speedUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(9) select:nth-of-type(1) option')).map((element) => {
    speedUnits.push(element.innerText)
})
// console.log(speedUnits);

let timeUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(10) select:nth-of-type(1) option')).map((element) => {
    timeUnits.push(element.innerText)
})
// console.log(timeUnits);

let dataUnits = []
Array.from(document.querySelectorAll('.converter:nth-of-type(11) select:nth-of-type(1) option')).map((element) => {
    dataUnits.push(element.innerText)
})
// console.log(dataUnits);

function convert(measurement, firstUnits, secondUnits) {
    let baseUnit
    if (measurement = 'length') {
        baseUnit = 'Meter(s)'
    }
    if (measurement = 'area') {
        baseUnit = 'Square meter(s)'
    }
    if (measurement = 'volume') {
        baseUnit = 'Liter(s)'
    }
    if (measurement = 'mass') {
        baseUnit = 'Kilogram(s)'
    }
    if (measurement = 'temperature') {
        baseUnit = 'Celsius'
    }
    if (measurement = 'speed') {
        baseUnit = 'Kilometer(s) per hour'
    }
    if (measurement = 'time') {
        baseUnit = 'Hour(s)'
    }
    if (measurement = 'data') {
        baseUnit = 'Bit(s)'
    }
}