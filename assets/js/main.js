IconJson = `{
	"icon_1": {
		"name":"Human assistance",
		"desc":"Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure",
		"price":"100",
		"any":"text"
	},
	
	"icon_2": {
		"name":"Internet security",
		"desc":"Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you're using the Internet.",
		"price":"200",
		"any":"text123"
	},
	
	"icon_3": {
		"name":"Anti-theft",
		"desc":"If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",
		"price":"300",
		"any":"tex12312t"
	}
}`;

window.onload = function() {

var icons = JSON.parse(IconJson);
	
//верстаем
var IconsActions = new Object();

IconsActions.selected = null;	
IconsActions.selected_obj = null;		
IconsActions.showInfo = function (obj) {
	var main_container = container;
	//console.log(obj);
	for (let i in obj) {
		//создали контейнер
		let tbl_item = document.createElement("div");
		tbl_item.className = "item"
		main_container.appendChild(tbl_item);
		
		//tbl_item.innerHTML = obj[i]["name"];
		
		let tbl = document.createElement("table");
		tbl.className = "tbl";
		tbl.setAttribute("data-obj", i);
		//tbl.setAttribute("border","1");
		tbl_item.appendChild(tbl);
		
		let tbl_row = document.createElement("tr");
		tbl.appendChild(tbl_row);
		for (let item in obj[i]) {
			let tbl_td = document.createElement("td");
			tbl_td.setAttribute("data-type", item);
			tbl_td.innerHTML = obj[i][item];
			tbl_row.appendChild(tbl_td);
		
			
			tbl_td.addEventListener("contextmenu", function (e) {
				IconsActions.selected = this.getAttribute("data-type");
				IconsActions.selected_obj = this.parentNode.parentNode.getAttribute("data-obj");
				e.preventDefault();
				var textarea = document.getElementById("edit_text");
				textarea.value = this.innerHTML;
			});
			
		}
		
		
	}
}

IconsActions.setInfo = function() {
	var btn_set = document.getElementById("setInfo");
	var textarea = document.getElementById("edit_text");
	icons[IconsActions.selected_obj][IconsActions.selected] = textarea.value;
	console.log(icons);

	container.innerHTML= '';
	IconsActions.showInfo(icons);
	textarea.innerHTML = '';
	textarea.value = '';
	console.log(textarea.value);
	textarea.value = '';
}
//console.log(icons);
btn_set = document.getElementById("setInfo");
btn_set.addEventListener("click", IconsActions.setInfo);
	
	
var container = document.getElementById("main");
	
var btn_show = document.getElementById("show");
btn_show.addEventListener("click", function(e){
	//console.log(e);
	container.innerHTML= '';
	IconsActions.showInfo(icons);
});

	
}