var ModuleStorage={};/**Hash For Containing All Module Factory,What Is A Factory?To Create An Object Constructor Needed.Based On The Option Passed,Concrete Instantiation Will 
Be Done.So Define An Interface For Creating Object(Factory Method),Find Appropriate Constructor Using Option Passed To Factory Method.Option Can Be Null Also.*/
function Define(Name,Factory){ModuleStorage[Name]=Factory;}/**Factory As Its Construct Object In A Naive Way,No Dependency Added*/
function Require(NamesArray,CallBackForModuleFactory){/**Just Look Up The Registry,Invoke The Wrapper Anonymous Function That Will Return The Constructor*/
	/**Now Require Takes Module Names Array*/
	var AvailableModuleNames=[];/**Track Already Available Modules In Registry*/
	NamesArray.forEach(function(ModuleName){
		if(ModuleStorage[ModuleName]){
			AvailableModuleNames.push(ModuleName)
		}else{/**If Module Not Loaded/Not Already Exists In The Dom Tree*/
			if(!document.querySelectorAll('[Data-Module-Name='+ModuleName+']').length){ 
				var ScriptElem=document.createElement('script');ScriptElem.setAttribute('src',ModuleName+'.js');
				ScriptElem.setAttribute("Data-Module-Name",ModuleName);
				ScriptElem.onload=function(){/**Once Response Received Module Is Defined In ModuleStorage*/
					Require(NamesArray,CallBackForModuleFactory);/**But We Can Not Call CallBack Now As Array Of Modules
					Passed To Require & We Only Resolve Current Module.So This Time Module {ModuleName}Available In ModuleStorage,
					So Moved To AvailableModuleNames.We Have To Provide Termination Condition For This Recursive Invocation Of 
					Require Function Based On ModuleStorage Might Contain Other Modules Than NamesArray.*/
				}
				document.body.appendChild(ScriptElem);
			}			
		}
	});
	if(AvailableModuleNames.length===NamesArray.length){
		/**Simple Way To Get Values As Array From Specific Key Array,Passing Array,Have To Use Apply,
		 * Context Is Window Global Object,Check CallBackForModuleFactory Is Function Or Not*/
		if(CallBackForModuleFactory&&{}.toString.call(CallBackForModuleFactory)==='[object Function]'){
			CallBackForModuleFactory.apply(this,NamesArray.map(function(ModuleKey){return ModuleStorage[ModuleKey]();}));			
		}
	}
}