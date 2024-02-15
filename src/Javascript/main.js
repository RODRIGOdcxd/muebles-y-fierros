window.addEventListener('scroll',function(){
    const imgPortada = document.querySelector('.img-portada')
    var keyframes = [{ filter: 'brightness(15%)' } , { filter: 'brightness(100%)' }]
    var efectonegro = new KeyframeEffect(imgPortada,keyframes[0],{duration: 2000})
    var efectoblanco = new KeyframeEffect(imgPortada,keyframes[1],{duration: 2000})
    if(this.window.scrollY < 100){
        var animacion = new Animation(efectoblanco,document.timeline)
    }
    if(this.window.scrollY > 100){
        var animacion = new Animation(efectonegro,document.timeline)
    }
    animacion.play();
})
function asf(el){
    var ec = el.getBoundingClientRect()
    return {
        top: ec.top,
        left: ec.left,
        bottom: ec.bottom,
        right: ec.right
    }
}
document.addEventListener('DOMContentLoaded',function(){
    var divna = document.querySelector('#div-restaurante')
    var posicion = asf(divna)
    console.log(`Posicion de top: ${posicion}`)
})
