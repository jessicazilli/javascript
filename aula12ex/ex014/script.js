function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#88a0b8'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE 
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#c77952'
    } else {
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#001736'
    }
}

