var ModuleStorage={};/**Hash For Containing All Module Factory,What Is A Factory?To Create An Object Constructor Needed.Based On The Option Passed,Concrete Instantiation Will 
Be Done.So Define An Interface For Creating Object(Factory Method),Find Appropriate Constructor Using Option Passed To Factory Method.Option Can Be Null Also.*/
function Define(Name,Factory){ModuleStorage[Name]=Factory;}/**Factory As Its Construct Object In A Naive Way,No Dependency Added*/
function Require(Name){/**Just Look Up The Registry,Invoke The Wrapper Anonymous Function That Will Return The Constructor*/
	var FactoryModule=ModuleStorage[Name];
	if(!ModuleStorage[Name]){
		/**No Path Defined Where Js Should Be Located.Simply Default Current Directory Assumed*/
		/**Synchronous Request Send So That It Will Block Main Thread & Execute Sequentially*/
		var Req=new XMLHttpRequest();Req.open('GET',Name+'.js',false);Req.send(null);
		/**Once Response Received Module Will Be Defined So We Can Retrieved It From Registry*/
		if(Req.status===200){eval(Req.responseText);FactoryModule=ModuleStorage[Name];}		
	}
	return FactoryModule();
}