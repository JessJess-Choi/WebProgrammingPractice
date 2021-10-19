function init(){
	var name = "Mozilla";
	function displayName(){
		console.log(name);
	}
	return displayName;
}
var myfunc = init();
myfunc();
