console.clear()

import Tone from 'tone'

let synth = new Tone.Synth().toMaster()

const notes = 'C4 D4 E4 F4 G4 A4 B4 C5 D5 E5 F5'.split(' ')
const keyboardKeys = '65 83 68 70 71 72 74 75 76 186 222'.split(' ').map(num => parseInt(num))
const keys = keyboardKeys.reduce((obj, k, i) => ({...obj, [k]: notes[i]}), {})
const keyBoard = document.querySelector("#keyboard");

notes.forEach(note => {
    let button = document.createElement('button')
    let content = document.createTextNode(note)
    button.appendChild(content)
    button.setAttribute('id', note)
    button.addEventListener("click", () => {
        synth.triggerAttackRelease(note, "4n")
    })
    keyBoard.appendChild(button)
})

document.addEventListener('keydown', (e) => {
    if (!keyboardKeys.includes(e.keyCode)) {
        return
    }
    let key = document.querySelector(`#${keys[e.keyCode]}`)
    synth.triggerAttack(keys[e.keyCode])
    key.setAttribute('class', 'clicked')  
})

document.addEventListener('keyup', (e) => {
    if (!keyboardKeys.includes(e.keyCode)) {
        return
    }
    let key = document.querySelector(`#${keys[e.keyCode]}`)
    synth.triggerRelease()
    key.setAttribute('class', '')
})

document.querySelector('#instrument select').addEventListener("change", (e) => {
    synth = new Tone[e.target.value]().toMaster()
})