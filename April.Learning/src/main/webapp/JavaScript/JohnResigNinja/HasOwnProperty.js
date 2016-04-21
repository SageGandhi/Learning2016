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
/**Constructor Pattern:Besides Creation Of Objects By Specified Pattern, A Constructor Function Does Another Useful Thing — It Automatically Sets A Prototype Object For 
 Newly Created Objects. This Prototype Object Is Stored In The ConstructorFunction.Prototype Property.Often It Is Needed To Have Objects With The Same Or Similar State 
 Structure (The Same Set Of Properties), And With Different State Values. In This Case We May Use A Constructor Function Which Produces Objects By Specified Pattern.*/
PrajitExt=function(BirthPlace,BirthYear){this.BirthPlace=BirthPlace,this.BirthYear=BirthYear;};PrajitExt.prototype.Name='Prajit';
PrajitExt.prototype.getAge=function(){return 2016-this.BirthYear;};PrajitExt01=new PrajitExt('WestBengal',1988);PrajitExt02=new PrajitExt('Gujrat',1989);
/**__proto__:Finds Whose Instance Is This& Points To That.Prototype.PrajitExt Is A Function, So Its A Instance Of Function,So PrajitExt.__proto__===Function.prototype,Now
 *Function.prototype Is An Instance Of Object,So Function.prototype.__proto__===Object.prototype,Now Object.prototype Is Root Of All Object,So Its Object.prototype__proto__===null*/
console.log('[PrajitExt.__proto__===Function.prototype:',PrajitExt.__proto__===Function.prototype,']','[Function.prototype.__proto__===Object.prototype:',
		Function.prototype.__proto__===Object.prototype,']','[Object.prototype.__proto__===null:',Object.prototype.__proto__===null,']');
/**Same As*/
console.log('[PrajitExt.__proto__===Function.prototype:',PrajitExt.__proto__===Function.prototype,']','[PrajitExt.__proto__.__proto__===Object.prototype:',
PrajitExt.__proto__.__proto__===Object.prototype,']','[PrajitExt.__proto__.__proto__.__proto__===null:',PrajitExt.__proto__.__proto__.__proto__===null,']');
/**Imho,Prototype Is Always Points To Blueprint,Based On What Type Of Instance Is It.So Let <TypeObject> Be A Object Of <TypeObjectConstructor> Then 
 <TypeObjectConstructor.prototype> Is The Blueprint For <TypeObject>,And So <TypeObject.prototype>===<TypeObjectConstructor.prototype>.Now Here The Catch Line 
 Instance Don't Have Any "prototype" Property Untill Es6 Standardised It,But Any Object Have __proto__ Object.In Case Instance Is A Function Then It Will Have 
 "prototype" Property.Another Thing To Remember Instance.__proto__ Always Pointed To ConstructorFunction.prototype.This ConstructorFunction.prototype Have A 
 "constructor" Property Which Reference Back To Orginal ConstructorFunction.As PrajitExt.__proto__ Is Function.prototype,PrajitExt.__proto__.constructor===
 Function.prototype.constructor,Or Function Itself.Every "ConstructorFunction.prototype" Will Create This Property "constructor" In "prototype" Property.
 So In Conclusion,__proto__ Means Whose Instance Is This Point To That Constructor.prototype,& prototype Means What Is The BluePrint Base For Instances That 
 Will Be Shared Across All Instances.How These Instances Will Be Constructed Will Be Poited By Special Property "constructor" In This "prototype" Property.
 Its Kind Of Delegation Based Inheritence.Aha Moment*/
/**Runtime Program Execution:Execution Context Stack:3 Types EcmaScript:Global Code/Function Code/Eval Code.There Is Only One Global Context And May Be Many Instances Of 
  Function And Eval Execution Contexts. Every Call Of A Function, Enters The Function Execution Context And Evaluates The Function Code Type. Every Call Of Eval Function, 
  Enters The Eval Execution Context And Evaluates Its Code.That One Function May Generate Infinite Set Of Contexts, Because Every Call To A Function (Even If The Function 
  Calls Itself Recursively) Produces A New Context With A New Context State(May Each Invokation With Different Argument):An Execution Context May Activate Another Context,
  A Function Calls Another Function (Or The Global Context Calls A Global Function), And So On. Logically, This Is Implemented As A Stack, Which Is Called The Execution 
  Context Stack.A Context Which Activates Another Context Is Called A Caller. A Context Is Being Activated Is Called A Callee. A Callee At The Same Time May Be A Caller 
  Of Some Other Callee (A Function Called From The Global Context, Calls Then Some Inner Function).When A Caller Activates (Calls) A Callee, The Caller Suspends Its 
  Execution And Passes The Control Flow To The Callee. The Callee Is Pushed Onto The The Stack And Is Becoming A Running (Active) Execution Context. After The Callee’S 
  Context Ends, It Returns Control To The Caller, And The Evaluation Of The Caller’S Context Proceeds (It May Activate Then Other Contexts) Till The Its End, And So On.
  A Callee May Simply Return Or Exit With An Exception. A Thrown But Not Caught Exception May Exit (Pop From The Stack) One Or More Contexts.All The EcmsScript Program 
  Runtime Is Presented As The Execution Context Stack, Where Top Of This Stack Is An Active Context:When Program Begins It Enters The Global Execution Context, Which Is 
  The Bottom And The First Element Of The Stack. Then The Global Code Provides Some Initialization, Creates Needed Objects And Functions. During The Execution Of The 
  Global Context, Its Code May Activate Some Other (Already Created) Function, Which Will Enter Their Execution Contexts, Pushing New Elements Onto The Stack, And So On. 
  After The Initialization Is Done, The Runtime System Is Waiting For Some Event (User’S Mouse Click) Which Will Activate Some Function And Which Will Enter A New 
  Execution Context.Having Some Function Context As [Execution Context Pushed(Active)] And The Global Context As [Global Execution Context], We Have The Following Stack 
  Modification On Entering And Exiting [Execution Context Pushed(Active)] From The Global Context:Object Structure&Properties(State)For Each Execution Context Having:*/
AbstractExecutionContextMandatedProperties={
		"VariableObject":"A Variable Object Is A Container Of Data Associated With The Execution Context.It’S A Special Object That Stores Variables And Function " +
		"Declarations(Not Functional Expression) Defined In The Context. In The Global Context The Variable Object Is The Global Object Itself (That’S Why We Have An " +
		"Ability To Refer Global Variables Via Property Names Of The Global Object).Function Expression Is Not Included Into The Variable Object. That’S Why We Have A " +
		"ReferenceError When Trying To Access It Outside The Function Itself.",
		"ScopeChain":"",
		"ThisValue":"ContextObject('[this]')"
};
var FirstGlobalInt=10;function FunctionDeclaration(){}(function FunctionExpression(){});
console.log('[this.FirstGlobalInt===FirstGlobalInt:',this.FirstGlobalInt===FirstGlobalInt,']','[window.FunctionDeclaration===FunctionDeclaration:',
		window.FunctionDeclaration===FunctionDeclaration,']');console.log(FunctionExpression);console.log(window.FunctionExpression);