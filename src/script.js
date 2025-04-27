const divs = document.querySelectorAll('div')
var titulo = document.getElementById('titulo')
titulo.style.cursor = 'pointer'
titulo.addEventListener('click', () => {
    divs[0].style.display = 'none'
    divs[1].style.display = 'none'
    titulo.style.display = 'none'
})

c = 0

while (c <= 1) {
    divs[c].style.cursor = 'pointer'
    c++
}

//mesma coisa que...>
//divs[0].addEventListener('click', escuro {
divs[0].addEventListener('click', () => {
    //ativa o modo escuro ao clicar na primeira div
    let main = document.getElementsByTagName('main')[0]
    main.style.backgroundColor = 'black'
    var c = 0
    while (c <= 1) {
        Object.assign(divs[c].style, {
            color: 'white',
            backgroundColor: 'black',
            border: '2px solid white'
        })
        c++
    }
})

divs[1].addEventListener('click', () => {
    const main = document.getElementsByTagName('main')[0]
    main.style.backgroundColor = 'blue'
    c = 0
    while (c <= 1) {
        Object.assign(divs[c].style, {
            color: 'black',
            backgroundColor: 'white',
            border: 'none'
        })
        c++
    }
})

//mesma coisa que...>
//divs[1].addEventListener('click', claro {
divs[1].addEventListener('click', () => {
    //ativa o modo claro
})

/*
const divs = document.querySelectorAll('div')
const div1 = divs[0]
const div2 = divs[1]

let c = 0
var cc = 0

while (c <= 1) {
    divs[c].style.cursor = 'pointer'
    c++
}

while (cc <= 1) {
    divs[cc].addEventListener('click', escuro)
    cc++
}

function escuro() {
    const main = document.getElementsByTagName('main')[0]

    main.style.backgroundColor = 'black'

    let contador = 0

    while (contador <= 1) {
        Object.assign(divs[contador].style, {
            color: 'white',
            backgroundColor: 'black',
            border: '3px solid white',
        })
        contador ++
    }
   
}

    const div1 = document.getelementbyid(div1)
    const div2 = document.getelemtbyid(div2)

A T I V A   O   M O D O   E S C U R O  A O   C L I C A R   E M   C A D A   D I V 

const divs = document.querySelectorAll('div')

divs.forEach(div => {
    div.style.cursor = 'pointer'
    div.addEventListener('click', () => {
        const main = document.getElementsByTagName('main')[0]
        window.alert('modo escuro ativado')
        main.style.backgroundColor = 'black'
        div.style.border = '3px solid white'
        div.style.backgroundColor = 'black'
        div.style.color = 'white'
    })
})
*/