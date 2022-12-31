var content2 = document.querySelector('.content2'),
    listCat= document.querySelector('#listCat'),
  
    rangeInput= document.querySelector('.form-range'),
    price= document.querySelector('.price');

 
   

//--------price Text--------//
price.textContent="value :"+rangeInput.value+"$";
rangeInput.oninput=function(){
    price.textContent="value :"+this.value+"$";
}    
//---------creationCours----------//
function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}


courses.forEach((el) => {
    creationCours(el.image, el.title, el.price);
})


//---------CREATION CATEGORIES--------//
let v=1;
function creationCategories(cat){
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    listCat.append(li);
    /////------Ajouter l'id au li--------/////
    if(v==1){
        
        li.setAttribute('id','all');
    }
    if(v==2){
        li.removeAttribute('id');
        li.setAttribute('id','js');
    }
    if(v==3){
        li.removeAttribute('id');
        li.setAttribute('id','html');
    }
    if(v==4){
        li.removeAttribute('id');
        li.setAttribute('id','css');
    }
    if(v==5){
        li.removeAttribute('id');
        li.setAttribute('id','php');
    }
    v++;
}
var categories = ['all', ...new Set(courses.map((v)=> v.category.toLowerCase()))];

categories.forEach((v) => {
    creationCategories(v);
    
})



//------searsh-------//
let search=document.getElementById("search");

search.addEventListener("keyup",()=>{
        content2.innerHTML="";
    let c=0;
    courses.forEach((e) => {
        if(e.title.toLowerCase().search(search.value.toLowerCase())>=0){
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
            c++;
        }
    })
    if(c===0)
        content2.innerHTML="<h3><b><u><i>try another name</i></u></b></h3>";
    }
)

//---range-----//

rangeInput.addEventListener("change",()=>{
    content2.innerHTML="";
    let c=0;
    courses.forEach((e) => {
        if(e.price<rangeInput.value){
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
            c++;
        }
    })
    if(c===0)
        content2.innerHTML="<h3><b><u><i>try another price</i></u></b></h3>";


})


//---------category----------//
let all=document.getElementById("all");
let js=document.getElementById("js");
let html=document.getElementById("html");
let css=document.getElementById("css");
let php=document.getElementById("php");

all.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})
js.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="JS")
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})
html.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="HTML")
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})
css.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="CSS")
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})
php.addEventListener("click",()=>{
    content2.innerHTML="";
    courses.forEach((e) => {
        if(e.category==="PHP")
            creationCours("."+(e.image).slice(1,e.image.length), e.title, e.price);
    })
})