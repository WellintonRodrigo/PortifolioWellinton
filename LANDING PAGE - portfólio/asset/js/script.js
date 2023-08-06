function active_words(elemento){
    let arrText= elemento.innerHTML.split('')
    elemento.innerHTML=''
    arrText.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra
        }, 75 * i)
    })
}

const titulo= document.querySelector('.digitando')
active_words(titulo)