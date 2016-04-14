;(function(window,document,undefined){
	var CallBackDomReadyQueue=[];
	function Rasengan(Selector){
		console.log('Inside Rasengan Constructor.');
		if(!(this instanceof Rasengan)){
			console.log('If Rasengan Invoked As Function.');
			return new Rasengan(Selector);
		}
		if(typeof Selector==='function'){
			return AddFunctionToDomReady(Selector);
		}
		this.SelectorLength=0,this.SelectorNode=[];
		if(Selector instanceof HTMLElement||Selector instanceof NodeList){
			/**Same As Array.prototype.slice.call===[].slice.call,Instantiate An Array Extra*/
			this.SelectorNode=Selector.length>1?Array.prototype.slice.call(Selector):[Selector];
		}else if(typeof Selector==='string'){
			 if(Selector[0]==='<'&&Selector[Selector.length-1]===">"){
				 this.SelectorNode=[CreateDivNode(Selector)];
			 }else{
				 this.SelectorNode=[].slice.call(document.querySelectorAll(Selector));
			 }
		}
		if(this.SelectorNode.length){
			this.SelectorLength=this.SelectorNode.length;
			for(var Indx=0;Indx<this.SelectorLength;Indx++){
				this[Indx]=this.SelectorNode[Indx];
			}
		}
	};
	function CreateDivNode(HtmlString) {var div=document.createElement('div');div.innerHTML=HtmlString;return div.firstChild;}
	function AddFunctionToDomReady(CallBackDomReady){
		return document.readyState==='complete'?CallBackDomReady.call(document,'Summoning Demonic Statue Of The Outer Path:Gedo Mazo'):CallBackDomReadyQueue.push(CallBackDomReady);
	}
	document.addEventListener('DOMContentLoaded',function DomContentLoadedHandler(){
		document.removeEventListener('DOMContentLoaded',DomContentLoadedHandler);
		while(CallBackDomReadyQueue.length){
			CallBackDomReadyQueue.shift().call(document,'Summoning The Original');
		}
	});
	Rasengan.ExtendingFunctionPrototype=Rasengan.prototype;
	Rasengan.ExtendingFunctionPrototype.forEach=function(CallBack){
		for(var Indx=0;Indx<this.SelectorLength;Indx++){
	        CallBack.call(this[Indx],this[Indx],Indx);
	    }
	    return this;
	};
	Rasengan.ExtendingFunctionPrototype.addClass=function(ClassNames){
		return this.forEach(function(){
			this.className=((this.className&&this.className.length>0)?(this.className.trim()+' '+ClassNames):(ClassNames));
		});		
	};
	Rasengan.ExtendingFunctionPrototype.removeClass=function(ClassNames){
        return this.forEach(function() {
            this.className=this.className.replace(new RegExp('\\b'+ClassNames+'\\b','g'),'');
        });        
    };
	Rasengan.ExtendingFunctionPrototype.setText=function(SetTextString) {
	    if(SetTextString){
	        return this.forEach(function(){
	            this.innerText=SetTextString;
	            this.innerHTML=SetTextString;
	        });
	    }	    
	};	
	window.Rasengan=Rasengan;
})(window,document);