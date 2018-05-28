 let myCats = ['micio','zoi','spike'];

 const CatApp = (function(appCats){

    const cats = [];
    console.log(this);
    const Cat = function (name,i) {
        this.id = i;
        this.name = name;
        this.pic = name;
        this.clickTotal = 0;
        this.addToDOM();

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


    Cat.prototype.updateClick = function(){
        this.clickTotal++;
        this.p.innerText = this.clickTotal;
    }


    let init = function(catNames){
        catNames.forEach((catName,i) => {            
            let cat =  new Cat(catName,i);
            cats.push(cat);          
        });

        // cats.forEach((cat) =>{
        //     console.log(this)
        //     document.getElementById(`${cat.name}-${cat.id}`).addEventListener('click',function(e){
        //     cats[this.getAttribute('data-id')].updateClick();           
        //  },false)
        // })
    }

    init(appCats);
    
})(myCats);
