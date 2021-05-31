var progressBar;
var before;
var when;
var after;
var noFocus = true;
var submit;
var request_no_data = "GET";

window.mobilecheck = function() {
	  let check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
};

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function startDataTb(table, obj = null){
	if (obj == null){
		obj = {
			"bPaginate": false,
			"bLengthChange": false,
			"bFilter": true,
			"aaSorting": [[ 2, "desc" ]],
			"bInfo": false,
			"bAutoWidth": false,
			"searching": false,
		};
	}
	$(document).ready(function() { $('#'+table).DataTable(obj); });
	return true;
}

function ID(el){ return document.getElementById(el); }

var httpReqs = [];
function httpReq(url, exec = null, data = null, intialize = null, abort = null){
	if (intialize != null){ intialize(); }
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var resp = this.responseText;
			exec(resp);
		}
	};
	if (abort!= null){ xhttp.onabort = function(){ abort(); }; }
	if (data != null){ var formData = data(); xhttp.open("POST", url, true); xhttp.send(formData); }
	else 			 { xhttp.open(request_no_data, url, true); xhttp.send(); }
	return xhttp;
}
function cancelLoadReqs(){
	httpReqs.forEach(function(httpReq, i) { if(httpReq.readyState <= 3) httpReq.abort(); });
	httpReqs = [];
}

function submitForm(form, toEdit = false, id = null, tr = null){
	if (toEdit && id != null && tr != null){
		httpReq("submit/edit.php", 
			(resp)=>{ tr.innerHTML = resp; alert("Item Alterado!");
				tr.innerHTML = resp; tr.classList.add("table-l");
				ID('tbody').appendChild(tr);
			},
			()=>	{ var formData = new FormData(form); 
				formData.append("table", form.name); 
				formData.append("id"   , id);
				return formData;
			},
			()=>	{ ID('submit').disabled = true; }
		);
	} else {
		httpReq(form.action, 
			(resp)=>{ alert("Cadastro Realizado!"); }, 
			()=>	{ var formData = new FormData(form); 
				formData.append("table", form.name); 
				return formData;
			},
			()=>	{ ID('submit').disabled = true; }
		);
	}
}

function abrVal(valor){
	if 		(valor >= 1000000) { return (valor/1000000).toFixed(2) 	+'mi'  ;} 
	else if (valor > 100)      { return (valor/1000).toFixed(0)    	+'mil' ;}
	else if ((valor <= 100) && (valor >= -100)) { return (valor).toFixed(2)+'%';}
	else if (valor <= -1000000){ return (valor/1000000).toFixed(2) 	+'mi'  ;}
	else if (valor <= -10000)  { return (valor/1000).toFixed(0)    	+'mil' ;}
	else if (valor < -100)     { return (valor/1000).toFixed(0)   	+'mil' ;}
}

/// Create HTML
function createDiv(divId) {
	const _div = document.getElementById('div_'+divId);
	if (_div == null) {
		const form = document.createElement('div');
		form.style.margin = '0'; 			
		form.style.padding = '0'; 		
		form.id = 'div_'+divId;
		return form;
	} else {
		_div.remove();
		const form = document.createElement('div');
		form.style.margin = '0'; 			
		form.style.padding = '0'; 		
		form.id = 'div_'+divId;
		return form;
	}
}
function createLi(listId, i) {
	const item = document.createElement("li");
	item.id = listId+i;
	item.name = listId+i;
	item.style.border = "1px solid #cfcfd4";
	item.classList.add("list-group-item");
	return item;
}

/// Input Format
function currencyFormat(fld, milSep, decSep, e) {
	e.preventDefault();
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;
	if (whichCode == 13) return true;  /// Enter
	key = String.fromCharCode(whichCode);  /// Get key value from key code
	if (strCheck.indexOf(key) == -1) return false;  /// Not a valid key
	len = fld.value.length;
	for(i = 0; i < len; i++)
	if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
	aux = '';
	for(; i < len; i++)
	if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
	aux += key;
	len = aux.length;
	if (len == 0) fld.value = '';
	if (len == 1) fld.value = '0'+ decSep + '0' + aux;
	if (len == 2) fld.value = '0'+ decSep + aux;
	if (len > 2) {
	aux2 = '';
	for (j = 0, i = len - 3; i >= 0; i--) {
	if (j == 3) {
	aux2 += milSep;
	j = 0;
	}
	aux2 += aux.charAt(i);
	j++;
	}
	fld.value = '';
	len2 = aux2.length;
	for (i = len2 - 1; i >= 0; i--)
	fld.value += aux2.charAt(i);
	fld.value += decSep + aux.substr(len - 2, len);
	}
	return false;
}
function currencyFormatLtd(fld, milSep, decSep, e, limit) {
	if (fld.value.length > limit){
		e.preventDefault();
		fld.value = (fld.value.toString()).splice(0, -1);
		currencyFormat(fld, '.', ',', e); 
	} else { 
		currencyFormat(fld, '.', ',', e); 
	}
}

function currencyFormat3(fld, milSep, decSep, e) {
	e.preventDefault();
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;
	if (whichCode == 13) return true;  /// Enter
	key = String.fromCharCode(whichCode);  /// Get key value from key code
	if (strCheck.indexOf(key) == -1) return false;  /// Not a valid key
	len = fld.value.length;
	if (len == 5) {
		var str;
		str = fld.value.charAt(2);
		str = str + ',';
		str = str + fld.value.substr(3,4);
		str = str + key;
		fld.value = str;
		return true;
	}
	for(i = 0; i < len; i++)
	if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
	aux = '';
	for(; i < len; i++)
	if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
	aux += key;
	len = aux.length;
	if (len == 0) fld.value = '';
	if (len == 1) fld.value = '0'+ decSep + '00' + aux;
	if (len == 2) fld.value = '0'+ decSep + '0'  + aux;
	if (len == 3) fld.value = '0'+ decSep + aux;
	if (len > 3) {
	aux2 = '';
	for (j = 0, i = len - 4; i >= 0; i--) {
	if (j == 3) {
	aux2 += milSep;
	j = 0;
	}
	aux2 += aux.charAt(i);
	j++;
	}
	fld.value = '';
	len2 = aux2.length;
	for (i = len2 - 1; i >= 0; i--)
	fld.value += aux2.charAt(i);
	fld.value += decSep + aux.substr(len - 3, len);
	}
	return false;
}
function cnpjMask(input){
	var str = (input.value).toString();
	str = str.replace('.','');
	str = str.replace('.',''); 	
	str = str.replace('/',''); 
	str = str.replace('-','');
	if(str.length >= 2) str = (str).splice(2, 0, ".");
	if(str.length >= 6) str = (str).splice(6, 0, ".");
	if(str.length >= 10) str = (str).splice(10, 0, "/");
	if(str.length >= 15) str = (str).splice(15, 0, "-");
	input.value = str;
}
function numberCheck(input, e, limit){
	var strCheck = '0123456789';
	var key 	 = String.fromCharCode(e.keyCode);  /// Get key value from key code
	if (strCheck.indexOf(key) == -1) return e.preventDefault();
	if (e.keyCode == 13) return true;  /// Enter
	if (input.value.length >= limit) return e.preventDefault();
}
function phoneMask(input, type){
	var str = (input.value).toString();
	str = str.replace('(',''); 
	str = str.replace(')',''); 
	str = str.replace('-','');
	str = (str).splice(0, 0, "(");
	str = (str).splice(3, 0, ")");
	if (type == 'fix')   if(str.length >= 6){str = (str).splice(8, 0, "-");}
	if (type == 'smart') if(str.length >= 7){str = (str).splice(9, 0, "-");}
	input.value = str;
}
function numberToMoney(valor){
	var str = (valor.toFixed(2)).toString();
	str = str.replace(',','');
	str = str.replace('.',',');
	
	var isN = false; if (str[0] == '-') isN = true;
	if (isN) str = str.slice(1);
	if	   (str.length == 7)  {str = (str).splice(1, 0, ".");}
	else if(str.length == 8)  {str = (str).splice(2, 0, ".");}
	else if(str.length == 9)  {str = (str).splice(3, 0, ".");}
	else if(str.length == 10) {str = (str).splice(1, 0, "."); str = (str).splice(5, 0, ".");}
	else if(str.length == 11) {str = (str).splice(2, 0, "."); str = (str).splice(6, 0, ".");}
	else if(str.length == 12) {str = (str).splice(3, 0, "."); str = (str).splice(7, 0, ".");}
	if (isN) str = '-'+str;
	return str;
}
					
async function getCnpj(input, exec){
	var cnpj = input.value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const resp = this.responseText;
			var json   = JSON.parse(resp);
			if(json.status == "ERROR") { alert ("CNPJ Inválido"); return false; }
			exec(json);	return true;
		}
	};
	xhttp.open("GET", "../../Project_R/buys/submit/getCnpj.php?cnpj="+cnpj, true);
	xhttp.send();
}
/// Event:: Collapse
function checkmCollapse(act, time, targetId){
	const target = document.getElementById(targetId);
	if (target.classList.contains("disabled-div")){
		
	} else {
		mCollapse(act, time, targetId);
	}
}
function mCollapse(act, time, targetId){
	setTimeout(function(){  
		(function($) {
			$('#'+targetId).collapse(act);
		}).apply(this, [jQuery]);
	}, time);
} 

/// Event:: OnLoad
function loadingBar(dimension, strokeW, type, color, id){
	var bar = document.createElement('div');
	bar.id = id+'_ldBar';
	bar.classList.add('ldBar');
	if (type == 'line'){
		bar.style.width = '100%';
		bar.style.height = dimension;
		bar.style.marginBottom = '-40px';
		bar.style.border = '0';
	} else {
		bar.style.width = dimension;
		bar.style.height = dimension;
		bar.style.marginBottom = '40px';
	}
	bar.setAttribute('data-stroke-width', strokeW);
	bar.setAttribute('data-duration',"0.65");
	bar.setAttribute('data-preset', type);
	bar.setAttribute('data-stroke', color);
	return bar;
}
function loadingIo(target, type = null){
	const io = document.getElementById(target.id+'io_');
	var ioObj = null;
	if (io != null){
		io.remove(); 
		return ioObj;
	} else {
		const io_ = document.createElement('div'); 
		io_.classList.add("vh-center"); 
		io_.style.zIndex = '98'; 
		io_.id = target.id+'io_';
		target.appendChild(io_);
		switch (type) {
			default : 
				var bar = loadingBar('120px', '7', 'circle', '#f02019', target.id);
				io_.innerHTML = "Em progresso...";
				io_.classList.add('text-center', 'font-md', 'font-bold');
				io_.appendChild(bar);
				ioObj = new ldBar('#'+target.id+'_ldBar');
		break;
			case 'ping'	: 
				io_.innerHTML = '<div class="pulseOut"><div class="pulseIn"><div></div><div></div></div></div>';
		break;
			case 'line'	: 
				var bar = loadingBar("65px", "1", "line", "#f02019", target.id);
				io_.innerHTML = "";
				io_.classList.add('text-center');
				io_.style.marginTop = "-40px";
				io_.style.border = "0";
				io_.appendChild(bar);
				ioObj = new ldBar('#'+target.id+'_ldBar');
		break;
		}
	return ioObj;
	}
}

/// Event:: FOCUS DIV
function setFocus(target){
	const global = document.getElementById("global").checked;
	if (target.focus === true){
		
	} else {
		if (noFocus){ 
			if (global){
				
			} else {
				target.classList.add('focus-div');
				noFocus = false;
				/// função -> setFilters
			}
		}
	}
}
function unsetFocus(target){
	target.classList.remove('focus-div');
	noFocus = true;
}

/// Left Menu	
function leftbtn_config(divId){
	const btn = document.getElementById(divId);
	const btn_ = document.getElementById('_'+divId);
	if (btn_ == null){
		btn.onclick = function(){ leftBtnTrigger(divId, this); reloadUI = false; }
	} else {
		for (let i = 1; i <= btn_.children.length; i++){
			var id = '_'+divId+i;
			document.getElementById(id).onclick = function(){ leftBtnTrigger(divId, this); reloadUI = false; };
		}
		btn.onmouseenter = 	function(){ mCollapse('show', 0, '_'+divId);};
		btn.onmouseleave = 	function(){ mCollapse('hide', 300, '_'+divId);};
	}
}
function leftBtnTrigger(divId, btn, ext = '.php') {
	progressBar = loadingIo(document.getElementById('body')); 
	const ROOT = document.getElementById('container');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 1) {progressBar.set(this.status/6); ROOT.style.opacity = "0.5";}
		if (this.readyState == 2) {progressBar.set(this.status/3);}
		if (this.readyState == 4 && this.status == 200) {
			progressBar.set(this.status/2);
			var resp = this.responseText;
			$('#bodyio_').fadeOut(299);
			setTimeout(function(){
				ROOT.innerHTML = "";
				ROOT.style.opacity = "1";
				const div = createDiv(divId);
				ROOT.appendChild(div);
				document.getElementById('div_'+divId).innerHTML = resp;
				getScript(divId, btn);
				$('#bodyio_').remove();
			}, 300);
		}
	};
	if (window.mobilecheck()){ xhttp.open("POST", 'mobile/ajax/'+btn.id+ext, true);  } 
	else 					 { xhttp.open("POST", 'ajax/'+btn.id+ext, true);			}
	var formData = globalParams();
	xhttp.send(formData); /// xhttp.send()
}
function getScript(divId, btn) {
	const _div = document.getElementById('div_'+divId);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var script = document.createElement('script');
			script.innerHTML = this.responseText;
			_div.appendChild(script);
		}
	};
	if (window.mobilecheck()){xhttp.open("POST", 'mobile/js/'+btn.id+'.js', true);	} 
	else 					 {xhttp.open("POST", 'js/'+btn.id+'.js', true);			}
	xhttp.send();
}

/// Alerts
function stickyAlert(msg, styleClass){
	clearStickyAlert(document.getElementById('alerta'));
	const ROOT = document.getElementById("container");
	var alerta = document.createElement('div');
	alerta.classList.add("collapse", styleClass);
	alerta.id = "alerta";
	alerta.onclick = function(){ $('#alerta').fadeOut(500); setTimeout(function(){ clearStickyAlert(alerta); }, 500); };
	alerta.innerHTML = msg;
	ROOT.appendChild(alerta);
	before 	= setTimeout(function(){ $('#alerta').fadeIn(300);  }, 100);
	when 	= setTimeout(function(){ $('#alerta').fadeOut(300); }, 3000);
	after 	= setTimeout(function(){ alerta.remove();			}, 3301);
}
function clearStickyAlert(alerta){
	if (alerta != null){
		clearTimeout(before);
		clearTimeout(after);
		clearTimeout(when);
		alerta.remove();
	}
}

/// Tips
var tipsTimeOut;
function showTips(el){
	const tips = document.getElementById(el.id+"T");
	if(tips.classList.contains("invisible2")){
		tips.classList.remove("invisible2");
		tips.style.display = "none";
		tipsTimeOut = setTimeout(function(){ $("#"+tips.id).fadeIn(150); }, 250);
	} 
}
function hideTips(el){
	const authT = $("#"+el.id+"T");
	clearTimeout(tipsTimeOut);
	authT.stop();
	authT.fadeOut(149);
	setTimeout(function(){ authT.addClass("invisible2");}, 150);
}

/// SelectInput
function searchP(input, e, id, action = null, maxEls = 10){
	const list 	  = document.getElementById('list'+id).children;
	const pattern = RegExp(input.value, 'i');
	if (e.keyCode == 13){ /// if -> Enter
		onClick(list, action);
	} else {
		for (let i = 0; i < list.length; i++){
			if (list[i].innerHTML.search(pattern) == -1){  	list[i].classList.add('invisible2');	} 
			else {											list[i].classList.remove('invisible2');	}
		}
		maxElsList(list, pattern, maxEls);
	}
}
function maxElsList(list, pattern, max){
	var count = 0;
	for (let i = 0; i < list.length; i++){
		if (list[i].innerHTML.search(pattern) == -1){  	list[i].classList.add('invisible2');	} 
		else {	
			count = count + 1; if (count > max) { list[i].classList.add('invisible2'); }
		}
	}
}
function addMark(list, li, id){
	const input = document.getElementById('input'+id);
	const data  = document.getElementById('data'+id);
	for (let i = 0; i < list.length; i++){ list[i].classList.remove('marked'+id); }; li.classList.add('marked'+id);
	input.value = li.innerHTML;	
	data.value  = li.value; ///only Number
	input.blur();
}
function toInput(li, id){
	const list  = document.getElementById('list'+id).children;
	const input = document.getElementById('input'+id);
	addMark(list, li, id);
}
function onClick(list, action){
	for (let i = 0; i < list.length; i++){
		if (list[i].classList.contains('invisible2') == false) {
			list[i].click(); if (action != null) action();  
			break;
		}
	}
}

/// GetForms
function getForm(file){
	const _div = document.getElementById('_'+file);
	const btn = document.getElementById(file+'Btn');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var div = document.createElement('div');
			div.innerHTML = this.responseText;
			_div.appendChild(div);
			
			var xhttp2 = new XMLHttpRequest();
			xhttp2.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var script = document.createElement('script');
					script.innerHTML = this.responseText;
					_div.appendChild(script);
					btn.onclick = function() { mCollapse('toggle', 49, file+'_'); }
				}
			};
			if (window.mobilecheck()){xhttp2.open("POST", 'mobile/forms/'+file+'.js', true);	} 
			else 					 {xhttp2.open("POST", 'forms/'+file+'.js', true);		}
			xhttp2.send();
		}
	};
	if (window.mobilecheck()){xhttp.open("POST", 'mobile/forms/'+file+'.php', true);	} 
	else 					 {xhttp.open("POST", 'forms/'+file+'.php', true);		}
	xhttp.send();
}

/// Event:: FOCUS LI
function checksetLiFocus(e, ul){ 
	const li = e.target;
	if ((li === ul) || (li.classList.contains("b-collapse-title"))) {
		
	} else {
		setLiFocus(ul,li);
	}
}
function setLiFocus(ul,li){
	clearFocus(ul);
	li.classList.add("focus-li");
	setHiddenParam(ul.id, li.value);
	reloadUI = true;
}
function clearFocus(ul){
	const li_ = ul.children;
	for (let i = 0; i < li_.length; i++){
		if (li_[i].classList.contains("focus-li")){
			li_[i].classList.remove("focus-li");
		};
	}
}
function setHiddenParam(id, valor){
	var hidden = document.getElementById(id.split('_')[1]);
	hidden.value = valor;
}

/// Event:: FOCUS SLCT
function slctFocus(ul, li){
	const list = ul.children;
	var focusI = 0;
	var clickI = 0;
	var values = "";
	
	for (let i = 0; i < list.length; i++){ 
		if (list[i].classList.contains("focus-li"))	{ focusI = i; }
		if (list[i].value == li.value)				{ clickI = i; } 
	}
	
	if (clickI >= focusI) { for (let i = focusI; i <= clickI; i++){ list[i].classList.add("focus-slct"); if(i == focusI) { values = list[i].value; } else { values = values + ',' + list[i].value; }} } 
	else 				  { for (let i = clickI; i <= focusI; i++){ list[i].classList.add("focus-slct"); if(i == clickI) { values = list[i].value; } else { values = values + ',' + list[i].value; }} } 
	
	setHiddenParam(ul.id, values);
	reloadUI = true;
}
function clearSlct(ul){
	const li_ = ul.children;
	for (let i = 0; i < li_.length; i++){
		if (li_[i].classList.contains("focus-slct")){
			li_[i].classList.remove("focus-slct");
		};
	}
}
function swtDate(m){
	var mes = "";
	switch (m){
		case 1  : mes = 'Janeiro'; 	 break;
		case 2  : mes = 'Fevereiro'; break;
		case 3  : mes = 'Março'; 	 break;
		case 4  : mes = 'Abril'; 	 break;
		case 5  : mes = 'Maio'; 	 break;
		case 6  : mes = 'Junho'; 	 break;
		case 7  : mes = 'Julho'; 	 break;
		case 8  : mes = 'Agosto'; 	 break;
		case 9  : mes = 'Setembro';  break;
		case 10 : mes = 'Outubro'; 	 break;
		case 11 : mes = 'Novembro';  break;
		case 12 : mes = 'Dezembro';  break;
	}
	return mes;
}

function sqlToDate(date){
	const strDate = date.split('-');
	date = strDate[2]+'/'+strDate[1]+'/'+strDate[0];
	return date;
}

function getFirstName(nome){
	nome = nome.split(' ');
	return nome[0];
}

function sqlToInput(valor, decs = 2){
	return valor.toLocaleString('pt-br', {minimumFractionDigits: decs, maximumFractionDigits: decs});
}

function inputToSql(valor){
	valor = valor.replace('.','' ,valor);
	valor = valor.replace(',','.',valor);
	return parseFloat(valor);
}

function intVal(valor){
	return (valor).toFixed(0);
}

function floatVal(valor){
	return (valor).toFixed(2);
}

function abrVal(valor){
	if 	(valor >= 1000000) 	   { return sqlToInput(valor/1000000, 1)+'mi';		 } 
	else if (valor > 100)      { return sqlToInput(valor/1000, 0)+'mil';		 }
	else if ((valor <= 100) && (valor >= -100)) { return sqlToInput($valor, 0);	 }
	else if (valor <= -1000000){ return sqlToInput(valor/1000000, 1)+'mi';		 }
	else if (valor <= -10000)  { return sqlToInput(valor/1000, 0)+'mil';		 }
	else if (valor < -100)     { return sqlToInput(valor/1000, 0)+'mil';		 }
}
