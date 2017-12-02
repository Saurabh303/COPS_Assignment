document.getElementById("selector").addEventListener("click", throttle(callback, 2000));
		
//Function to implement throttle function

function throttle(fn, wait) {
	var i = false;
	return function(){
		if ( !i ){
			fn();
			i = true;
			setTimeout(function(){
			i = false;
			}, wait);
		}
	};
}

function callback() {
  var target = document.getElementById('count');	//Select the id:count
  target.textContent=parseInt(target.textContent)+1;	// Increase count by 1
}
