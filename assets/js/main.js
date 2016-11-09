IconJson = `{
	"icon_1": {
		"num": "12",
		"name":"Human assistance",
		"desc":"Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure",
		"price":"100",
		"any":"text"
	},
	
	"icon_2": {
		"num": "1",
		"name":"Internet security",
		"desc":"Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you're using the Internet.",
		"price":"200",
		"any":"text123"
	},
	
	"icon_3": {
		"num": "1",
		"name":"Anti-theft",
		"desc":"If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",
		"price":"300",
		"any":"tex12312t"
	},
	
	"icon_4": {
		"num": "3",
		"name":"Anti-theft",
		"desc":"If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",
		"price":"300",
		"any":"tex12312t"
	},
	
	"icon_5": {
		"num": "7",
		"name":"Anti-theft",
		"desc":"If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",
		"price":"300",
		"any":"tex12312t"
	}
}`;

window.onload = function() {

var icons = JSON.parse(IconJson);
	

var IconsActions = new Object();

IconsActions.selected = null;	
IconsActions.selected_obj = null;		
IconsActions.showInfo = function (obj) {
	var main_container = container;
	//console.log(obj);
	for (let i in obj) {
		//верстаем
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
			
			//для отслеживания текущего значения
			if (item == "num") {
				var parent = tbl_td.parentNode.parentNode.parentNode;
				parent.setAttribute("data-num", obj[i][item]);
			}
			
			tbl_td.addEventListener("contextmenu", function (e) {
				IconsActions.selected = this.getAttribute("data-type");
				if (IconsActions.selected == "num") {
					var parent = tbl_td.parentNode.parentNode.parentNode;
					parent.setAttribute("data-num", obj[i][item]);
				}
				IconsActions.selected_obj = this.parentNode.parentNode.getAttribute("data-obj");
				e.preventDefault();
				var textarea = document.getElementById("edit_text");
				textarea.value = this.innerHTML;
				
				var form = document.getElementById("edit");
				form.setAttribute("style","visibility:visible; opacity:1;");
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
	//console.log(textarea.value);
	textarea.value = '';
	var form = document.getElementById("edit");
	form.removeAttribute("style");
	IconsActions.currentVal();
}


IconsActions.currentVal = function () {
	IconsActions.numArr = [];
	for (let i in icons) {
		IconsActions.numArr.push(icons[i]["num"]);
	}
	//console.log(IconsActions.numArr);
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
	IconsActions.currentVal();
	
});
	

	
var btn_sort = document.getElementById("sort");
btn_sort.addEventListener("click", function() {
	
	var arr = document.getElementsByClassName("item");
	console.log(arr);
	
	for (let j = 0; j < arr.length; j++) {
		var min = +arr[j].getAttribute("data-num");
		var min_pos = j;
		for (let i = j+1; i < arr.length; i++) {
			var check = +arr[i].getAttribute("data-num") <= min;
			if (check) {
				min = arr[i];
				min_pos = i;
			}
		}
		
		//arr[min_pos].remove();
		
		container.insertBefore(arr[min_pos], arr[j]);
	
	}
});

	
}