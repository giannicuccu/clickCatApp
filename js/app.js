let appCats = ['micio','zoi','spike'];

(function CatApp(){

    const cats = [];

    const Cat = function (name,i) {
        this.id = i;
        this.name = name;
        this.pic = name;
        this.clickTotal = 0;
        this.addToDOM();

       
        // let div = parentEl.appendChild('div');
        // let img = div.appendChild('img');
        // let counter = div.insertBefore('p',null)
        // //this.template = `<div id="cat-${this.id}" class="cat"><img data-id='${this.id}' id="${this.name}-${this.id}" src="/img/${this.name}.jpg"><p>0</p></div>`; 
        // document.getElementById('main').innerHTML += (this.template);
        //this.addListener();
        // this.domElement = document.getElementById(`${this.name}-${this.id}`);
        // console.dir(this.domElement);
        // this.domElement.addEventListener('click',this.addListener.bind(this),false)
        //  this.el =  document.getElementById(`${this.name}-${this.id}`);
        // (function(el){
        //     console.dir(el)
        //     el.addEventListener('click',function(e){
        //        console.log('adding listent');
               
        //        cats[cats.length -1].updateClick();
        //     },false)
        // })(this.el)
    }

    Cat.prototype.addToDOM = function(){
        let parentEl = document.getElementById('main');

        let div = document.createElement("DIV"); 
        div.setAttribute('ID','cat-'+this.id);
        div.setAttribute('class','cat');
            let img = document.createElement("IMG");
            img.setAttribute("SRC",'/img/'+this.name+'.jpg');
            img.setAttribute("data-id",this.id);
            img.addEventListener('click',()=>{this.updateClick()})
            div.appendChild(img);
            let p = document.createElement('p');
            p.textContent = '0';            
            div.appendChild(p);
    
    parentEl.appendChild(div);
    this.p = p;
    }

    // Cat.prototype.addListener = function(){
    //     // document.getElementById(`${this.name}-${this.id}`).addEventListener('click',function(e){
    //     //     console.log('adding listent');
            
    //     //     //cats[cats.length -1].updateClick();
    //     //  },false)

    //      let el =  document.getElementById(`${this.name}-${this.id}`);
    //      (function(){
    //          el.addEventListener('click',function(e){
    //             console.log('adding listent');
                
    //             //cats[cats.length -1].updateClick();
    //          },false)
    //      })(el)
    // }

    Cat.prototype.updateClick = function(){
        this.clickTotal++;
        this.p.innerText = this.clickTotal;
    }


    let init = function(catNames){
        catNames.forEach((catName,i) => {
            
            cats[i] =  new Cat(catName,i);
            //cats.push(mycat);
            //console.log(this);

            // document.getElementById(`${cats[i].name}-${cats[i].id}`).addEventListener('click',function(e){
            //     console.log('adding listent');
                
            //     //cats[cats.length -1].updateClick();
            // },false)
        });

        // cats.forEach((cat) =>{
        //     console.log(this)
        //     document.getElementById(`${cat.name}-${cat.id}`).addEventListener('click',function(e){
        //     cats[this.getAttribute('data-id')].updateClick();           
        //  },false)
        // })
    }

    init(appCats);
    
})();
