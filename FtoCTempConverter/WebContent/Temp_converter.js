var $ = function (id) {
    return document.getElementById(id); 
}
//This function sets $ equal to the command 'document.getElementById(id)' so that you don't have to type it every time


var convert_click = function(temp){
	var temp = parseFloat($("temp").value); 
	
	if ($("start").checked)
	{
		var result = temp * 9/5 + 32
		$("converted").value=result
	}
	
	else{
		
		var result = (temp - 32) * 5/9
		$("converted").value=result
	}
	
	
}
window.onload = function () {
	 $("convert").onclick = convert_click;
	 $("converted").focus; 
	 }