window.addEventListener("load",init);

function init(){
    tartalom=document.querySelectorAll("article");
    articleresz(tartalom);

}
function articleresz(tartalom){
    kiir=""
    const keplista=["kepek/DSC7365.jpg","kepek/DSC7371_1.jpg","kepek/DSC7444.jpg"];
    for (let index = 0; index < keplista.length; index++) {
        kiir+=` <div>
        <img src="${keplista[index]}" alt="" >
    </div>`
       
        
    }
    tartalom[0].innerHTML +=kiir;

    const Kiskepek=document.querySelectorAll("article div img")
    for (let index = 0; index < Kiskepek.length; index++) {
        Kiskepek[index].addEventListener("click", fnev)
            
        
    }
}

function fnev(){
    const Nagykep= document.querySelectorAll("section div img")
            Nagykep[0].src=Nagykep[index].src;
}