const tabuleiro = document.getElementById('tabuleiro')
const quadrado = document.querySelectorAll('.quadrado')
const span = document.querySelector('span')
const p = document.querySelector('p')
const btn = document.querySelector('button')

const jogadorX = []
const jogadorY = []
let cont = 1
let play = false

const NomeJogadorX = prompt("Digite o nome do Jogador 1")
const NomeJogadorY = prompt("Digite o nome do Jogador 2")



const ganhador = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

if(NomeJogadorX !== null && NomeJogadorY !== null){
    span.innerText =": " + NomeJogadorX
} else {
    play = true
}


quadrado.forEach((item, index) => {
    
    item.addEventListener('click', function() {    

        
        if(play)
        return


        
        if(cont % 2 === 0) {
            
            if(item.textContent === '') {
                item.textContent = 'O'
                span.innerText = ": " + NomeJogadorX
                cont++

                jogadorY.push(index+1)
                
            }

        } else {
            // COMECA POR AQUI, NOSSO X
            /* cont comeca com 1, entao seu resto é 1 (1 % 2 = 1) */
            if(item.textContent === '') {
                item.textContent = 'X'
                span.innerText = ": " + NomeJogadorY
                cont++

                jogadorX.push(index+1)
            }
        }
        

        if((jogadorX.length + jogadorY.length) >= 5) {
            // JOGADOR X
            // jogadorX.sort()
            // console.log("JOGADOR X")
            // console.log(jogadorX)
            
            
            // JOGADOR Y
            // jogadorY.sort()
            // console.log("JOGADOR Y")
            // console.log(jogadorY)

                
            const avaliacao = ganhador.forEach((arrGanhador,index) => {
                
                const comparacaoX = arrGanhador.every(value => jogadorX.includes(value))

                if(comparacaoX) {
                    console.log(index + " - " + arrGanhador)
                    console.log('JOGADOR X GANHOU')

                    
                arrGanhador.forEach((arrG) => {
                    quadrado[arrG-1].id = 'quadrado-v'
                 })

                 p.innerText = NomeJogadorX.toUpperCase() + " VENCEU!"

                    // PARAR DE FUNCIONAR
                    play = true
                }

                const comparacaoY = arrGanhador.every(value => jogadorY.includes(value))

                if(comparacaoY) {
                    console.log(index + " - " + arrGanhador)
                    console.log('JOGADOR O GANHOU')
                    
                arrGanhador.forEach((arrG) => {
                    quadrado[arrG-1].id = 'quadrado-v'
                 })

                  p.innerText = NomeJogadorY.toUpperCase() + " VENCEU!"
                    
                    // PARAR DE FUNCIONAR
                    play = true

                }

                if((jogadorX.length + jogadorY.length) === 9) {
                    
                    const analise = document.querySelector('#quadrado-v')
                    if(analise === null) {
                        p.innerText = "EMPATE!"
                        play = true
                    }
                   
                }

                





                // console.log('AQUI '+comparacaoX)
            })
           


        }

    })

   
})



btn.addEventListener('click', reiniciar)

function reiniciar() {
   location.reload()
}



















