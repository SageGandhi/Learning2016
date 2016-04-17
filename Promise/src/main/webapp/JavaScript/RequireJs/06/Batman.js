Define('Batman', function() {
	console.log('Returns Factory Batman');
	var Batman=function(){
		console.log(["Batman: Then why do you want to kill me?"]);var _Self=this;
		Require(['Joker'],function(Joker){_Self.Villain=new Joker();});console.dir(_Self);		
	};
	return Batman;
});