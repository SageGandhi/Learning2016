/**Now Requires Takes CallBack Function*/
Require('Batman',function(Batman){
	var BatInstance=new Batman();
	Require("MrRobot",function(MrRobot){
		var MrRobotInstance=new MrRobot();
		Require("Dwarf",function(Dwarf){
			var DwarfInstance=new Dwarf();
			Require("Joker",function(Joker){
				var JokerInstance=new Joker();
			});
		});
	});
});