function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'  
            if (idade >= 0 && idade < 10) {
                // bebe
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // idoso
                img.setAttribute('src', 'veinho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // bebe
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'veinha.png')
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}