var ModuleStorage={};/**Hash For Containing All Module Factory,What Is A Factory?To Create An Object Constructor Needed.Based On The Option Passed,Concrete Instantiation Will 
Be Done.So Define An Interface For Creating Object(Factory Method),Find Appropriate Constructor Using Option Passed To Factory Method.Option Can Be Null Also.*/
function Define(Name,Factory){ModuleStorage[Name]=Factory;}/**Factory As Its Construct Object In A Naive Way,No Dependency Added*/
function Require(Name,CallBackForModuleFactory){/**Just Look Up The Registry,Invoke The Wrapper Anonymous Function That Will Return The Constructor*/
	if(!ModuleStorage[Name]){
		/**No Path Defined Where Js Should Be Located.Simply Default Current Directory Assumed*/
		/**ASynchronous Request Send So It Will Requires CallBack Function CallBackForModuleFactory*/
		/**Once Response Received Module Will Be Defined So We Can Retrieved It From Registry*/
		/**Here We Can Use Enhamced Version Of Basket.js LoadingScript With Additional Functionality*/
		var ScriptElem=document.createElement('script');ScriptElem.setAttribute('src',Name+'.js');
		ScriptElem.onload=function(){CallBackForModuleFactory(ModuleStorage[Name]());}
		document.body.appendChild(ScriptElem);
	}else{
		CallBackForModuleFactory(ModuleStorage[Name]())
	}	
}