// note
// 

// const p = document.getElementById('message');
// console.log(p);


let btn = document.getElementById('btnRadio');
let output = document.getElementById('output');

btn.addEventListener(`click`, () => {
    let language =document.getElementsByName('language')
    language.forEach((language) => {
    if(language.checked) {
        output.innerText = `you code with : $(language.value)`
    }
    })
    })