window.onload = function(){
    document.querySelector('.botao').addEventListener('click', function(){
        document.querySelector('.container').classList.toggle('invisible');
        document.querySelector('.container_texto').classList.toggle('mninv');
        this.classList.toggle('mif-chevron-right');
    });
}
