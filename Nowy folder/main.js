// let tab = [
// 	{
// 		userID: '36b8f84d-df4e-ad32-b662-bcde71a8764f',
// 		userName: 'Jasia',
// 		userCity: 'Gliwice',
// 		userAge: 16,	
// 	},
// 	{
// 		userID: '36b8f84d-df4e-4d49-b662-bcde71a87623',
// 		userName: 'Michał',
// 		userCity: 'Zabrze',
// 		userAge: 19,
// 	},
// 	{
// 		userID: '36b8f84d-df4e-s3ae-b662-bcde71a876aa',
// 		userName: 'Olga',
// 		userCity: 'Knurów',
// 		userAge: 23,
// 	},
// 	{
// 		userID: '36b8f84d-df4e-a43w-b662-bcde71a876b3',
// 		userName: 'Marek',
// 		userCity: 'Gliwice',
// 		userAge: 17,
// 	},
// 	{
// 		userID: '36b8f84d-df4e-zfdr-b662-bcde71a876a2',
// 		userName: 'Józefa',
// 		userCity: 'Pyskowice',
// 		userAge: 42,
// 	},
// 	{
// 		userID: '36b8f84d-df4e-adz3-b662-bcde71a87622',
// 		userName: 'Janek',
// 		userCity: 'Gliwice',
// 		userAge: 30,
// 	},
// 	{
// 		userID: '36b8f84d-df4e-bfr3-b662-bcde71a87635',
// 		userName: 'Hania',
// 		userCity: 'Toszek',
// 		userAge: 12,
// 	},
// 	{
// 		userID: '36b8f84d-df4e-n2er-b662-bcde71a87644',
// 		userName: 'Benek',
// 		userCity: 'Warszawa',
// 		userAge: 45,
// 	},
// 	{
// 		userID: '36b8f84d-df4e-ke4q-b662-bcde71a876fa',
// 		userName: 'Gosia',
// 		userCity: 'Gliwice',
// 		userAge: 30,
// 	},
// 	{
// 		userID: '36b8f84d-df4e-s3ae-b662-bcde71a876aa',
// 		userName: 'Olga',
// 		userCity: 'Toszek',
// 		userAge: 23,
// 	},
// ];
const add=document.getElementById(`add`)
tab=[]
add.addEventListener('click', function(evt){
    evt.preventDefault()
    const user=document.querySelector('#name')
    const age=document.querySelector('#age')
    const city=document.querySelector('#city')
    const dane={
        userName: user.value,
        userAge: age.value,
        userCity: city.value,
		userID: crypto.randomUUID()
    }
    tab.push(dane)
	console.log(dane)
    console.log(tab)
    const user_list=document.querySelector('#user_list')
    user_list.innerHTML=""
    tab.forEach(elem => {
		user_list.innerHTML+=`<li class="list-group-item  d-flex justify-content-between"><span><strong>${elem.userName}</strong> lat <strong>${elem.userAge} </strong>z miasta <strong> ${elem.userCity} </strong></span></li>`});
		const bt=document.createElement('button')
		bt.classList="btn btn-outline-danger"
		bt.setAttribute('id','del')
		bt.append('del')
		bt.appendChild(user_list)
		// `<button type="button" id="del" class="btn btn-outline-danger">X</button></li>`
		user_list.appendChild(bt)
	})

const del=document.getElementById('del')
del.addEventListener('click',function(ev){
        ev.preventDefault()
		lonsol
		this.parentNode.removeChild(this)
    })



	const UserName=document.querySelector('#search')
	const button = document.querySelector('#sir')
	const display= document.querySelector('#display')
	button.addEventListener('click', function(){
		display.innerHTML=''
		console.log(this.innerHTML)
		tab.forEach(element => {
			if(UserName.value==element.userName){
				display.innerHTML+=`<li class="list-group-item">${element.userName} z ${element.userCity} </li><br>`
		}});
	})


	function displayusers(tab){
		display.innerHTML=''
		display.innerHTML=''
		tab.forEach((elem)=>{
			display.innerHTML+=`<li class="list-group-item">${elem.userName} z ${elem.userCity} </li><br>`
		}
		)
	}
displayusers(tab)

// button.addEventListener('click', function (){
// 	display.innerHTML=''
// 	tab.forEach(element => {
// 		const userNameval=userName.value
// 	displayusers(tab.filter((user) => user.userName === userNameval))
// 	});
// })
const ends = document.querySelector('#end')
ends.addEventListener('click', function(){
	console.log(this.innerHTML)
	display.innerHTML=''
	const userNameval=UserName.value
	displayusers(tab.filter((user)=>user.userName.endsWith(userNameval)))
})
