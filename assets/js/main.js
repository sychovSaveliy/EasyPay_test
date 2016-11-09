IconJson = `{
	"icon_1": {
		"name":"Human assistance",
		"desc":"Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure",
		"price":"100"
	},
	
	"icon_2": {
		"name":"Internet security",
		"desc":"Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you're using the Internet.",
		"price":"200"
	},
	
	"icon_3": {
		"name":"Anti-theft",
		"desc":"If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",
		"price":"300"
	}
}`;

window.onload = function() {

var icons = JSON.parse(IconJson);
	
//верстаем
var IconsActions = new Object();
IconsActions.showInfo = function (obj) {
	var main_container = container;
	console.log(obj);
	for (let i in obj) {
		//создали контейнер
		let tbl_item = document.createElement("div");
		tbl_item.className = "item"
		tbl_item.innerHTML = obj[i]["name"];
		
		main_container.appendChild(tbl_item);
	}
}
//console.log(icons);
	
	
var container = document.getElementById("main");

	
var btn_show = document.getElementById("show");
btn_show.addEventListener("click", function(e){
	//console.log(e);
	IconsActions.showInfo(icons);

	
});

	
}