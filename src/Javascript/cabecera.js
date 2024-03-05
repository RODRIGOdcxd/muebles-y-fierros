window.addEventListener('scroll',function(){
    var header = document.querySelector('header')
    if(this.window.scrollY > 10){
        header.style.top = '0'
        header.style.position = 'fixed'
        header.style.backgroundColor = '#282434'
    }
    if(this.window.scrollY < 10){
        header.style.top = '5%'
        header.style.position = 'absolute'
        header.style.backgroundColor = 'transparent'
    }
})