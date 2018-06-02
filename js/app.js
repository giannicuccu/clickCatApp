 let myCats = ['micio','zoi','spike','tex','gatto'];

  const CatApp = (function(appCats){
      

    const model = {

        cats: [],
        activeCat:{},

        init: (catNames) => {
            catNames.forEach((catName,i) => {            
                let cat =  new Cat(catName,i);
                model.cats.push(cat);          
            });
        },

        setActiveCat: (cat) => {
            model.activeCat = {};
            model.activeCat = cat;
        },

        getActiveCat: () => {
            return model.activeCat;           
        },

        saveModel: ()=>{

        },

        loadModel: () =>{

        }
    }

    const octopus = {

        initModel: (catNames) => {
            model.init(catNames)
        },

        initSidebar: () => {
            catList = model.cats;
            view.sidebar.initSidebar(catList)
        },

        initCatViewer: () => {
            view.catViewer.initCatViewer();
        },

        showCat: (cat) => {
            model.setActiveCat(cat);
            view.catViewer.showCat(model.getActiveCat());
        },

        addClick: (cat) => {
            cat.updateClick();
            view.catViewer.showCat(model.getActiveCat());            
        }

    }

    const view = {

        sidebar: {
            initSidebar: (cats) => {
               
                let parentEl = document.getElementById('catlist');
                cats.forEach((cat) => {
                    let listEl = document.createElement("LI");
                    let listElLink = document.createElement("A");
                        listElLink.setAttribute("data-id", cat.id);
                        listElLink.textContent = cat.name/*+' - '*/;
                        listElLink.addEventListener('click',(e)=>{octopus.showCat(cat)});
                    let listElLinkSpan = document.createElement("SPAN");
                        listElLinkSpan.textContent = cat.clickTotal;
                        //listElLink.appendChild(listElLinkSpan);
                    listEl.appendChild(listElLink);
                    parentEl.appendChild(listEl);

                    // INTERESTING - WORKS
                    //cat.sideTotal = listElLinkSpan; // SAVE THE REFERENCE OF THE DOME ELEMENT AS A PROPERTY IN THE CAT OBJECT
                    
                });
    
            }
        },

        catViewer:{

           initCatViewer: () => {
               console.log('cat wiewer init')
            },

           showCat: (cat) => {
            console.log(cat)
            let parentEl = document.getElementById('main');
            parentEl.innerHTML = ''; // CLEAN VIEWER AND REMOVE EVENT LISTENERS
            let div = document.createElement("DIV"); 
            div.setAttribute('ID','cat-'+cat.id);
            div.setAttribute('class','cat');
            let img = document.createElement("IMG");
            img.setAttribute("SRC",'/img/'+cat.name+'.jpg');
            img.setAttribute("data-id",this.id); 
            img.addEventListener('click',(e)=>{octopus.addClick(cat)});
            div.appendChild(img);
            let counter = document.createElement('p');
             counter.textContent = cat.name+' - '+cat.clickTotal;
             div.appendChild(counter);
             parentEl.appendChild(div);
            }

        }        
        
    }


    const Cat = function (name,i) {
        this.id = i;
        this.name = name;
        this.pic = name;
        this.clickTotal = 0;
        this.sideTotal = undefined;
    }

    Cat.prototype.updateClick = function(){
        this.clickTotal++;
        // INTERESTING - WORKS
        //this.sideTotal.innerText = this.clickTotal; // update the DOM element using the reference saved as cat object property
    }



    octopus.initModel(appCats);
    octopus.initSidebar();
    octopus.initCatViewer();


})(myCats);
