 let myCats = ['micio', 'zoi', 'spike', 'tex', 'gatto'];

 const CatApp = (function (appCats) {


     const model = {
         cats: []
     }



     const octopus = {

         activeCat:{},

         initModel: (catNames) => {
            catNames.forEach((catName, i) => {
                let cat = new Cat(catName, i);
                model.cats.push(cat);
            });
         },

         initSidebar: () => {
             catList = model.cats;
             view.sidebar.initSidebar(catList);
         },

         renderSidebar: () => {
            catList = model.cats;
            view.sidebar.renderSidebar(catList);
         },

         initCatViewer: () => {
             view.catViewer.initCatViewer();
         },

         showCat: (cat) => {
             octopus.setActiveCat(cat);
             view.catViewer.showCat(octopus.getActiveCat());
         },

         addClick: (cat) => {
             cat.updateClick();
             view.catViewer.showCat(octopus.getActiveCat());
         },

         setActiveCat: (cat) => {
             octopus.activeCat = {};
             octopus.activeCat = cat;
         },

         getActiveCat: () => {
             return octopus.activeCat;
         },

         updateCat: (cat,eventTarget)=>{
            // console.log('UPDATING');
            // console.dir(cat);
            let name = eventTarget[1].value || cat.name;
            let imgUrl = eventTarget[2].value || cat.imgUrl;
            let clickTotal = eventTarget[3].value || cat.clickTotal;

            cat.updateCat(name,imgUrl,clickTotal);
            octopus.showCat(cat);
            octopus.renderSidebar();
         },

         saveModel: () => {
            // TODO:
         },

         loadModel: () => {
            // TODO:
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
                     listElLink.setAttribute("class", "catLink");
                     listElLink.textContent = cat.name /*+' - '*/ ;
                     listElLink.addEventListener('click', (e) => {
                         octopus.showCat(cat)
                     });
                     let listElLinkSpan = document.createElement("SPAN");
                     listElLinkSpan.textContent = cat.clickTotal;
                     //listElLink.appendChild(listElLinkSpan);
                     listEl.appendChild(listElLink);
                     parentEl.appendChild(listEl);

                     // INTERESTING - WORKS
                     //cat.sideTotal = listElLinkSpan; // SAVE THE REFERENCE OF THE DOME ELEMENT AS A PROPERTY IN THE CAT OBJECT

                 });

             },

             renderSidebar: (cats) =>{
                let parentEl = document.getElementById('catlist');
                parentEl.innerHTML = '';
                cats.forEach((cat) => {
                    let listEl = document.createElement("LI");
                    let listElLink = document.createElement("A");
                    listElLink.setAttribute("data-id", cat.id);
                    listElLink.setAttribute("class", "catLink");
                    listElLink.textContent = cat.name /*+' - '*/ ;
                    listElLink.addEventListener('click', (e) => {
                        octopus.showCat(cat)
                    });
                    let listElLinkSpan = document.createElement("SPAN");
                    listElLinkSpan.textContent = cat.clickTotal;
                    //listElLink.appendChild(listElLinkSpan);
                    listEl.appendChild(listElLink);
                    parentEl.appendChild(listEl);

                    // INTERESTING - WORKS
                    //cat.sideTotal = listElLinkSpan; // SAVE THE REFERENCE OF THE DOME ELEMENT AS A PROPERTY IN THE CAT OBJECT
                })
             }
         },

         catViewer: {

             initCatViewer: () => {
                 console.log('cat wiewer init')
             },

             showCat: (cat) => {
                 console.log(cat)
                 let parentEl = document.getElementById('main');
                 parentEl.innerHTML = ''; // CLEAN VIEWER AND REMOVE EVENT LISTENERS
                 let div = document.createElement("DIV");
                 div.setAttribute('ID', 'cat-' + cat.id);
                 div.setAttribute('class', 'cat');
                 let img = document.createElement("IMG");
                 img.setAttribute("SRC", '/img/' + cat.imgUrl + '.jpg');
                 img.setAttribute("data-id", this.id);
                 img.addEventListener('click', (e) => {
                     octopus.addClick(cat)
                 });
                 div.appendChild(img);
                 let counter = document.createElement('p');
                 counter.textContent = cat.name + ' - ' + cat.clickTotal;
                 div.appendChild(counter);
                 parentEl.appendChild(div);
                 let editbtn = document.createElement("button");
                 editbtn.setAttribute("value", this.id);
                 editbtn.innerText ='edit';
                 editbtn.addEventListener('click', (e) => {
                    view.showEditForm(cat)
                });
                 parentEl.appendChild(editbtn);
             }

         },

          showEditForm : (cat)=>{
            view.removeEditForm();
            let parentEl = document.getElementById('main');
            let form = document.createElement("FORM");
            form.setAttribute('id','editform');
            for (const prop in cat) {
                if (cat.hasOwnProperty(prop)) {
                //   console.log(`cat.${prop} = ${cat[prop]}`);
                  let inputEl = document.createElement('input');
                        inputEl.setAttribute("type", 'text');
                        inputEl.setAttribute('placeholder',cat[prop]);
                        form.appendChild(inputEl)
                } 
              }
              let saveBtn = document.createElement('button');
                  saveBtn.innerText ='Save';
                  saveBtn.setAttribute("type", 'submit');
                  form.addEventListener('submit',(e)=>{ e.preventDefault(); console.log(e.target.elements); octopus.updateCat(cat,e.target.elements) });
              let closeBtn = document.createElement('button');
                  closeBtn.innerText ='Close';
                  closeBtn.addEventListener('click',(e)=>{ e.preventDefault(); view.removeEditForm() });
              form.appendChild(saveBtn);
              form.appendChild(closeBtn);
              parentEl.appendChild(form);
         },

         removeEditForm : () => {
            let form = document.getElementById('editform');
            form ? form.remove(): false;
         }

     }



     // THE CAT OBJECT 
     const Cat = function (name, i) {
         this.id = i;
         this.name = name;
         this.imgUrl = name;
         this.clickTotal = 0;
         
     }

     Cat.prototype.updateClick = function () {
         this.clickTotal++;
         // INTERESTING - WORKS
         //this.sideTotal.innerText = this.clickTotal; // update the DOM element using the reference saved as cat object property
     }

     Cat.prototype.updateCat = function (name,imgUrl,clickTotal) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.clickTotal = clickTotal;
        // INTERESTING - WORKS
        //this.sideTotal.innerText = this.clickTotal; // update the DOM element using the reference saved as cat object property
    }



     octopus.initModel(appCats);
     octopus.initSidebar();
     octopus.initCatViewer();


 })(myCats);