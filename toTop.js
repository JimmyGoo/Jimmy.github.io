function moveToTop(length){
	var len = length;
	if(window.pageYOffset > len){
		window.scrollTo(0,window.pageYOffset - len);
		var mes = "moveToTop("+length+");";
		animate = setTimeout(mes, 20);
	}
	else{
		window.scrollTo(0,0);
	}
}

function toTop(){
	var animate;
	moveToTop(50);
	clearTimeout(animate);
}

function Listen(btn){
	if(window.pageYOffset > 0){
		document.getElementById(btn).style.visibility = 'visible';
	}
	else{
		document.getElementById(btn).style.visibility = 'hidden';
	}
}