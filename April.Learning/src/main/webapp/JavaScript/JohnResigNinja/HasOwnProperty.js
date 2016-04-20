/**HasOwnProperty:Does Not Check Objects Prototype Chain Like In For In Loop.Only Checks For Direct Properties Into The Current Object.Inherited From Object,Can Be Overridden*/
var HasOwn={hasOwnProperty:function(name){return HasOwn[name]?false:true;},LetHaveAnotherPoperty:'Changing Context Will Save You From Your Problem.'};
console.log("HasOwn.hasOwnProperty('SomethingSuspiciousGoingOn'):"+HasOwn.hasOwnProperty("SomethingSuspiciousGoingOn"),"HasOwn.hasOwnProperty('LetHaveAnotherPoperty'):"+HasOwn.hasOwnProperty("LetHaveAnotherPoperty"),"HasOwn.hasOwnProperty('hasOwnProperty'):"+HasOwn.hasOwnProperty("hasOwnProperty"));/**Cleaner Way*/
console.log("({}).hasOwnProperty.call(HasOwn,'SomethingSuspiciousGoingOn')"+({}).hasOwnProperty.call(HasOwn,"SomethingSuspiciousGoingOn"),"({}).hasOwnProperty.call(HasOwn,'LetHaveAnotherPoperty')"+({}).hasOwnProperty.call(HasOwn,"LetHaveAnotherPoperty"),"({}).hasOwnProperty.call(HasOwn,'hasOwnProperty')"+({}).hasOwnProperty.call(HasOwn,"hasOwnProperty"));
console.log("({}).hasOwnProperty.call(HasOwn,'SomethingSuspiciousGoingOn')"+({}).hasOwnProperty.call(HasOwn,"SomethingSuspiciousGoingOn"),"({}).hasOwnProperty.call(HasOwn,'LetHaveAnotherPoperty')"+({}).hasOwnProperty.call(HasOwn,"LetHaveAnotherPoperty"),"({}).hasOwnProperty.call(HasOwn,'hasOwnProperty')"+({}).hasOwnProperty.call(HasOwn,"hasOwnProperty"));
/**Jquery Understanding:*//**Exposing Jquery In Global Scope:In jQuery.js*/window.jQuery=window.$=jQuery;
/**Regular Expression For Trimming Spaces From The Start Or The End:/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g*/
/**ZeroWidthNoBreakingSpace/NoBreakSpace/ZeroWidthSpace/ZeroWidthNoBreak/ByteOrderMark(Bom):\UFEFF,NoBreakSpace:\XA0*/
var version="@VERSION",/**Specifies A Version Number When Build Is Being Performed*/
define(["./var/deletedIds","./var/document","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],
	function(deletedIds,document,slice,concat,push,indexOf,class2type,toString,hasOwn,support){/**Jquery Code*/});
/**Initializing New Object Based On Selector&Context(this)Passed.*/jQuery=function(selector,context){return new jQuery.fn.init(selector,context);};
/**Understanding Prototype/PrototypeChain/PrototypalInheritence/EcmaScript Standard[[Prototype]]Or <<__proto__>> Object.An Object Is A Collection Of Properties&Has A Single 
 (Prototype) Object.By Parenthesis I Am Given It A Special Semantic Meaning,So That We Have An Abtract Structure/Generic Object That Might Be Represented In Different 
 Way(EcmaScriptStandard[[Prototype]]Or Browser Deprecated __proto__).The (Prototype) May Be Either An Object Or The Null Value.Prototype Objects Are Also Just Simple Objects 
 &May Have Their Own Prototypes.If A Prototype Has A Non-Null Reference To Its Prototype,&So On,This Is Called The Prototype Chain.A Prototype Chain Is A Finite Chain Of 
 Objects Which Is Used To Implement Inheritance&Shared Properties.Two Types Of Inheritence:ClassBasedInheritence As In Java/Inheritence Achieved Via Prototype Chain,Delegation
 Based Inheritence/Prototype Based Inheritence.Todo The Linking We Have To Use [[Prototype]]/__proto__ Property.*/
var IMeMyself={Name:'Prajit Gandhi',BirthPlace:'Asansol',Language:'EcmaScript'},Prajit={Name:'Prajit',BirthYear:1988,getAge:function(){return 2016-this.BirthYear;}},
	PrajitExt01={BirthPlace:'WestBengal',__proto__:Prajit},PrajitExt02={BirthPlace:'Gujrat',__proto__:Prajit};/**We Are Not Here To Calculate The Age*/
Prajit={Name:'Prajit',getAge:function(){return 2016-this.BirthYear;}},PrajitExt01={BirthPlace:'WestBengal',BirthYear:1988,__proto__:Prajit},
PrajitExt02={BirthPlace:'Gujrat',BirthYear:1998,__proto__:Prajit};/**We Are Not Here To Calculate The Age*/
/**The Rule Is Simple: If A Property Or A Method Is Not Found In The Object Itself(The Object Has No Such An Own Property),Then There Is An Attempt To Find This Property/
Method In The Prototype Chain.If The Property Is Not Found In The Prototype, hen A Prototype Of The Prototype Is Considered, And So On,The Whole Prototype Chain(Absolutely 
The Same Is Made In Class-Based Inheritance, When Resolving An Inherited Method — There We Go Through The Class Chain). The First Found Property/Method With The Same Name 
Is Used. Thus, A Found Property Is Called Inherited Property. If The Property Is Not Found After The Whole Prototype Chain Lookup, Then Undefined Value Is Returned.This(
Context)Value In Using An Inherited Method Is Set To The Original Object, But Not To The (Prototype) Object In Which The Method Is Found.Name Property Is Found By Following 
Prototype Chain.*/
var Prajit={Name:'Prajit',getAge:function(){return 2016-this.BirthYear;}},Gandhi={Name:'Gandhi',getAge:function(){return 2015-this.BirthYear;}};
/**If A Prototype Is Not Specified For An Object Explicitly, Then The Default Value For __proto__ Is Taken — Object.prototype. Object Object.prototype Itself Also Has A 
__proto__, Which Is The Final Link Of A Chain And Is Set To Null.So It Might Not Shown Up In Browser Dir Command.*/
Prajit={Name:'Prajit',getAge:function(){return 2016-this.BirthYear;}},PrajitExt01={BirthPlace:'WestBengal',BirthYear:1988,__proto__:Prajit},
PrajitExt02={BirthPlace:'Gujrat',BirthYear:1998,__proto__:Prajit};/**This Can Also Be Done By Object.create Method*/
PrajitExt01=Object.create(Prajit,{BirthPlace:{value:'WestBengal'},BirthYear:{value:1988}});PrajitExt02=Object.create(Prajit,{BirthPlace:{value:'Gujrat'},BirthYear:{value:1988}});