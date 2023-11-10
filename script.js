// let btn = document.getElementById("#btn");

// function changeSerif() {
//   let all = document.querySelectorAll("*");
//   for (let index = 0; index < all.length; index++) {
//     all[index].style.fontFamily = "Lora, serif";
//   }
// }

// function changeSansSerif() {
//   let all = document.querySelectorAll("*");
//   for (let index = 0; index < all.length; index++) {
//     all[index].style.fontFamily = "Inter, serif";
//   }
// }

// if (value == "serif") {
//   changeSansSerif();
// }

// if (value == "sans-serif") {
//   changeSansSerif();
// }


let input=document.getElementById("input");
let key_word=document.getElementById("key_word");
let key_speak=document.getElementById("key_speak");
let li1=document.getElementById("li1");
let li2=document.getElementById("li2");
let li3=document.getElementById("li3");
let sinonim=document.getElementById("sinonim");
let ul=document.querySelector("#ul");
let ul2=document.querySelector("#ul2");
let sinonimlar=document.querySelector("#sinonimlar");
let noun=document.getElementById("noun")
let verb=document.getElementById("verb");
let pronounce=document.getElementById("audioo")

function getData(word){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((res)=>{
        return res.json();

    })
    .then((data)=>{
        showui(data[0]);
    })
}


function showui(data){
    console.log(data);
    key_word.textContent=data.word;
    key_speak.textContent=data.phonetic;
    sinonim.textContent=data.meanings[0].synonyms[0];
    // noun.textContent=data.meanings[0].partOfSpeech;
    // verb.textContent=data.meanings[1].partOfSpeech;
    
    
    
    
    
    
    for (let i = 0; i < data.meanings.length; i++) {
        let k= data.meanings[i];
        for (let j = 0; j < k.definitions.length; j++) {
            let li=document.createElement("li");
            li.innerHTML=k.definitions[j].definition;
        ul.appendChild(li);
    }
    }

    for (let q = 0; q < data.meanings.length; q++) {
        let w=data.meanings[q];
        for (let r = 0; r <w.definitions.length; r++) {
            let li=document.createElement("li");
            li.innerHTML=w.definitions[r].definition;
            ul2.appendChild(li)
            
        }
    
    }

    for (let d = 0; d < data.meanings.length; d++) {
        let h=data.meanings[d];
        for (let v = 0; v <h.synonyms.length; v++) {
            let h3=document.createElement("h3");
            h3.innerHTML=h.synonyms[v];
            sinonimlar.appendChild(h3);
            console.log(h.synonyms[v]);
        }
        
    }











}


input.addEventListener("keyup",(event)=>{
    if(event.key=="Enter"){
        getData(input.value);
        input.value="";
    }
})













// li1.textContent=data.meanings[0].definitions[0].definition;
// li2.textContent=data.meanings[1].definitions[0].definition;



// let pronounceTxt=data.phonetics.filter((el)=>Boolean(el.text) !=false)[0]?.text;
// pronounce.textContent=pronounceTxt;

// let audioScr=data.phonetics.filter((el)=>Boolean(el.audio) !=false)[0]?.audio;

// audio.setAttribute("src", audioScr);

// pronounce.style.display=pronounceTxt?"block":"none";
// audioBtn.style.display=audioScr?"block":"none";
// audioBtn.addEventListener("click",()=>{
//     audio.play();
// })