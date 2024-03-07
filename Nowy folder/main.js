const add=document.getElementById(`add`)
const tab=[]
add.addEventListener('click', function(evt){
    evt.preventDefault()
    const name=document.querySelector('#name')
    const age=document.getElementById('age')
    const city=document.getElementById('city')
    const dane={
        imie: name.value,
        wiek: age.value,
        miasto: city.value
    }
    tab.push(dane)
    console.log(tab)
    const user_list=document.getElementById('user_list')
    user_list.innerHTML=""
    tab.forEach(elem => {
        user_list.innerHTML+=`<li class="list-group-item"><strong>${elem.imie}</strong> lat <strong>${elem.wiek} </strong>z miasta <strong> ${elem.miasto} </strong><button type="button" id="del" class="btn btn-outline-danger">X</button></li>`
    });
    })

    const del=document.getElementById('del')
    del.addEventListener('click',function(ev){
        ev.preventDefault()
        tab.pop(this)
    })
// const see=document.getElementById('see')
// see.addEventListener('click', function(ev){
//     ev.preventDefault()
//     const adult=document.getElementById('adult')
//     const ice=document.getElementById('ice').checked
//     const Name_E=document.getElementById('eric').checked
//     const display=document.getElementById('dis')
//     if(adult.checked){
//     tab.forEach(element => {
//         if(element.wiek>=18){
//         display.innerHTML+=`imie ${element.imie} wiek: ${element.wiek} miasto: ${element.miasto}`+"<br>"}
//     });
//     }
//     if(ice.checked){
//         tab.forEach(elem => {
//             if(elem.miasto="ice")
//         })
//     }
// })