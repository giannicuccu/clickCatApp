 let myCats = ['micio','zoi','spike','tex','gatto'];

  const CatApp = ( function(appCats){

    const cats = [];
    console.log(this);


    const CatAppController = function(){
        console.log(cats);
        // this.cats = cats;
        this.initSidebar = function(){
            console.log(this);
            let parentEl = document.getElementById('catlist');
            cats.forEach((cat) => {
                let listEl = document.createElement("LI");
                let listElLink = document.createElement("A");
                    listElLink.setAttribute("data-id", cat.id);
                    listElLink.textContent = cat.name+' - ';
                    listElLink.addEventListener('click',(e)=>{cat.updateClick()})
                let listElLinkSpan = document.createElement("SPAN");
                    listElLinkSpan.textContent = cat.clickTotal;
                    listElLink.appendChild(listElLinkSpan);
                listEl.appendChild(listElLink);
                parentEl.appendChild(listEl);

                cat.sideTotal = listElLinkSpan;
                
            });
            
            }

            this.showCat = function(cat){
                console.log('show'+cat)
                let parentEl = document.getElementById('main');
                parentEl.innerHTML = '';
                let div = document.createElement("DIV"); 
                div.setAttribute('ID','cat-'+cat.id);
                div.setAttribute('class','cat');
                let img = document.createElement("IMG");
                img.setAttribute("SRC",'/img/'+cat.name+'.jpg');
                img.setAttribute("data-id",this.id);                
                div.appendChild(img);
                let counter = document.createElement('p');
                 counter.textContent = cat.name+' - '+cat.clickTotal;
                 div.appendChild(counter);
                 parentEl.appendChild(div);
                }
            
        }
    


    const Cat = function (name,i) {
        this.id = i;
        this.name = name;
        this.pic = name;
        this.clickTotal = 0;
        this.sideTotal = undefined;
        //this.addToDOM();

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
            let counter = document.createElement('p');
            counter.textContent = '0';
            div.appendChild(counter);
    
    parentEl.appendChild(div);
    this.counter = counter;
    }


    Cat.prototype.updateClick = function(){
        this.clickTotal++;
        this.sideTotal.innerText = this.clickTotal;
        controller.showCat(this)
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
    let controller = new CatAppController(cats);
    controller.initSidebar();
    
    
})(myCats);
