(function CatApp() {
    let counter = 0;
    const btn = document.getElementById('addClick');
    const total = document.getElementById('clickCounter');
    btn.addEventListener('click',(ev)=>{
        counter++
        console.log('counter = '+counter);
        total.innerText = counter;
    },false);
    
})();