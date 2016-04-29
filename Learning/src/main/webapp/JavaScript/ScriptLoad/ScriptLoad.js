/**Loading Script File:*/
if(window.console&&window.console.log){LogMsg=function(Msg){window.console.log(Msg);};}else{LogMsg=function(){}}
function LoadingScript(Url,CallBack){
	var IeStatuc={
			UnInitialized:{Key:'uninitialized',Description:'Object Is Not Initialized With Data.'},
			Loading:{Key:'loading',Description:'Object Is Loading Its Data.'},
			Loaded:{Key:'loaded',Description:'Object Has Finished Loading Its Data.'},
			Interactive:{Key:'interactive',Description:'User Can Interact With The Object Even Though It Is Not Fully Loaded.'},
			Complete:{Key:'complete',Description:'Object Is Completely Initialized.'},
			Url:{Key:'https://msdn.microsoft.com/en-us/library/ms534359(VS.85).aspx',Description:'Resource'}},
		ElmScript=document.createElement('script');ElmScript.type="text/javascript";
	if(ElmScript.readyState){
		ElmScript.onreadystatechange=function(){
			switch(ElmScript.readyState) {
				case IeStatuc.UnInitialized.Key:LogMsg('Script UnInitialized For Url:['+Url+']['+IeStatuc.UnInitialized.Description+']');break;
				case IeStatuc.Loading.Key:LogMsg('Script Loading From Url:['+Url+']['+IeStatuc.Loading.Description+']');break;
				case IeStatuc.Loaded.Key:LogMsg('Script Loaded From Url:['+Url+']['+IeStatuc.Loaded.Description+']');break;
				case IeStatuc.Interactive.Key:LogMsg('Script Interactive For Url:['+Url+']['+IeStatuc.Interactive.Description+']');break;
				case IeStatuc.Complete.Key:LogMsg('Script Complete From Url:['+Url+']['+IeStatuc.Complete.Description+']');break;
			}
			if(CallBack&&ElmScript.readyState===IeStatuc.Loaded.Key||ElmScript.readyState===IeStatuc.Complete.Key){
				CallBack(ElmScript.readyState);/**ElmScript.onreadystatechange=null;*//**Invoked Multiple Times*/
			}
		}
	}else{
		ElmScript.onload=function(){LogMsg('Script Loaded From Url:['+Url+']');CallBack();}
	}
	ElmScript.src=Url;document.body.appendChild(ElmScript);
}
var GlobalLoadingUrls=['https://code.jquery.com/jquery-2.2.3.js','https://code.jquery.com/jquery-migrate-1.4.0.js','https://code.jquery.com/jquery-1.12.3.js','https://code.jquery.com/ui/1.11.4/jquery-ui.js'];
while(GlobalLoadingUrls.length)LoadingScript(GlobalLoadingUrls.shift(),LogMsg);