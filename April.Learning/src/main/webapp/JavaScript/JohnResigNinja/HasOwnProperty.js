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
var FirstGlobalInt=10;function FunctionDeclaration(){}(function FunctionExpression(){});
console.log('[this.FirstGlobalInt===FirstGlobalInt:',this.FirstGlobalInt===FirstGlobalInt,']','[window.FunctionDeclaration===FunctionDeclaration:',
		window.FunctionDeclaration===FunctionDeclaration,']');console.log(FunctionExpression);console.log(window.FunctionExpression);
/**Execution Context(Abbreviated Form—EC)Is The Abstract Concept Used By ECMA-262 Specification For Typification And Differentiation Of An Executable Code.Execution Context 
   Stack Works Like A Stack,Pushing Context When New Active Context Arrives,Pop Context When Active Context Finished/Thorw An Error.Reading JavaScript Source File From 
   External Source/Inline JavaScript Create Global Context(Global Code Does Not Include Any Parts Of Code Which Are In Bodies Of Function)*/
ExecutionContextStack=[/**Initially Empty*/];/**For Global Code*/
ExecutionContextStack=["GlobalExecutionContext"];/**The Code Of Concrete Function Does Not Include Codes Of The Inner Functions.*/
(function Example(Flag){if(Flag){return;}Example(true);})(false);/**ExecutionContextStack Modifies As First Invokation/Activation Of Example Function*/
ExecutionContextStack=["<Example>FunctionContext","GlobalExecutionContext"];/**Recursive Activation Of Example Function*/
ExecutionContextStack=["<Example>FunctionContext","<Example>FunctionContext","GlobalExecutionContext"];/**Throwing Error But Not Caught Error Can Cause Popping One Or More 
Execution Context*/
(function First(){(function Second(){throw 'Exit From Second & First ExecutionContexts';})();})();/**Eval Influence The Calling Context,Context From Where Eval Is Being Called*/
eval('var GlobalVariable=10');(function First(){/**Variable LocalVariable Is Created In The Local Context Of "First" Function*/eval('var LocalVariable=20');})();
console.log(GlobalVariable);console.log(LocalVariable);/**10|Undefined*//**Strict-Mode Of Es5, Eval Already Does Not Influence The Calling Context, But Instead 
Evaluates The Code In The Local Sandbox.ExecutionContextStack Modifies As Follows*/
ExecutionContextStack=["GlobalExecutionContext"];/**Influence Global Context*/
ExecutionContextStack=[{"Context":"EvalContext","CallingContext":"GlobalContext"},"GlobalExecutionContext"];
ExecutionContextStack=["GlobalExecutionContext"];ExecutionContextStack=["<First>FunctionContext","GlobalExecutionContext"];
ExecutionContextStack=[{"Context":"EvalContext","CallingContext":"<First>FunctionContext"},"<First>FunctionContext","GlobalExecutionContext"];
/**Global Context Corresponds To Evaluation Of The Script. Every Script Tag Enters Its Own Global Execution Context And Is Treated As Separate Program. However,
All Of These Scripts Are Share The Same Global Object.*/
AbstractExecutionContextMandatedProperties={
		"VariableObject":"A Variable Object Is A Container Of Data Associated With The Execution Context.It’S A Special Object That Stores Variables And Function " +
		"Declarations(Not Functional Expression) Defined In The Context. In The Global Context The Variable Object Is The Global Object Itself (That’S Why We Have An " +
		"Ability To Refer Global Variables Via Property Names Of The Global Object).Function Expression Is Not Included Into The Variable Object. That’S Why We Have A " +
		"ReferenceError When Trying To Access It Outside The Function Itself.Using Eval We Also Enter A New (Eval’S) Execution Context. However, Eval Uses Either Global’s " +
		"Variable Object, Or A Variable Object Of The Caller(A Function From Which Eval Is Called).And What About Functions And Their Variable Objects? In A Function " +
		"Context, A Variable Object Is Presented As An Activation Object.",
		"ScopeChain":"",
		"ThisValue":"ContextObject('[this]')"
};
/**VariableObject:A Variable Object (In Abbreviated Form — Vo)Is A Special Object Related With An Execution Context And Which Stores:Variables (Var,VariableDeclaration);
Function Declarations (FunctionDeclaration, In Abbreviated Form Fd);And Function Formal Parameters Declared In The Context.*/
ActiveExecutionContext={Vo:{"Has":"Variables (Var,VariableDeclaration);Function Declarations (FunctionDeclaration, In Abbreviated Form Fd);And Function Formal Parameters"}};
/**Indirect Referencing To Variables (Via Property Names Of Vo) Allows Only Variable Object Of The Global Context (Where The Global Object Is Itself The Variable Object). 
For Other Contexts Directly To Reference The Vo Is Not Possible, It Is Purely Mechanism Of Implementation.*/
var FirstGlobalVar=10;function FirstGlobalFunc(FuncArgs){var FuncLocalVar=20;};FirstGlobalFunc(50);
/**Variable Object Of The Global Context:Vo(globalContext)={FirstGlobalVar:10,FirstGlobalFunc:<Reference To Function>};|Variable Object Of The "FirstGlobalFunc" Function 
 * Context:Vo(FirstGlobalFunc FunctionContext)={FuncArgs:30,FuncLocalVar:20};|But At Implementation Level (And Specification) The Variable Object Is An Abstract Essence.
 * Physically, In Concrete Execution Contexts, Vo Is Named Differently And Has Different Initial Structure.|Global Object Is The Object Which Is Created Before Entering Any 
 * Execution Context; This Object Exists In The Single Copy, Its Properties Are Accessible From Any Place Of The Program, The Life Cycle Of The Global Object Ends With 
 * Program End.*/
Global={Math:"Math(Property&Function)Definition",String:"String(Property&Function)Definition",Window:Global};
/**Variable Object Of The Global Context — Here Variable Object Is The Global Object Itself:It Is Necessary To Understand Accurately This Fact Since For This Reason 
 Declaring A Variable In The Global Context, We Have Ability To Reference It Indirectly Via Property Of The Global Object (For Ex.When The Variable Name Is Unknown 
 In Advance):*/
/**Regarding The Execution Context Of Functions—There Vo Is Inaccessible Directly,And Its Role Plays So-Called An Activation Object (In Abbreviated Form—Ao).
 * Vo(FunctionContext)===Ao;An Activation Object Is Created On Entering The Context Of A Function And Initialized By Property Arguments Which Value Is The Arguments Object:
 * Ao={arguments:<Argments>};Arguments Object Is A Property Of The Activation Object. It Contains The Following Properties:Callee — The Reference To The Current Function;
 * Length — Quantity Of Real Passed Arguments;Properties-Indexes (Integer, Converted To String) Which Values Are The Values Of Function’S Arguments (From Left To Right In 
 * The List Of Arguments). Quantity Of These Properties-Indexes == Arguments.Length. Values Of Properties-Indexes Of The Arguments Object And Present (Really Passed) Formal 
 * Parameters Are Shared.*/
(function SampleFunc(_$1,_$2,_$3){/**Quantity Of Defined Function Arguments(_$1,_$2,_$3)*/console.log("SampleFunc.length[3]:",SampleFunc.length);
	  /**Quantity Of Really Passed Arguments(Only _$1,_$2)*/console.log("arguments.length[2]:",arguments.length);
	  /**Reference Of A Function To Itself*/console.log("arguments.callee===SampleFunc[true]:",arguments.callee===SampleFunc);
	  /**Parameters Sharing*/console.log("_$1===arguments[0][true]:",_$1===arguments[0]);console.log("_$1[10]:",_$1);arguments[0]=20;console.log("_$1[20]:",_$1);
	  _$1=30;console.log("arguments[0][30]:",arguments[0]);/**However, For Not Passed Argument _$3,Related Index-Property Of The Arguments Object Is Not Shared*/
	  _$3=40;console.log("arguments[2][undefined]:",arguments[2]);arguments[2]=50;console.log("_$3[40]:",_$3);	  
})(10,20);
/**Processing Of The Execution Context Code Is Divided On Two Basic Stages:1)Entering The Execution Context;2)Code Execution.Modifications Of The Variable Object Are 
 * Closely Related With These Two Phases.That Processing Of These Two Stages Are The General Behavior And Independent From The Type Of The Context (Fair For Both:
 * Global And Function Contexts).*/
/**Entering The Execution Context:On Entering The Execution Context (But Before The Code Execution), Vo Is Filled With The Following Properties:
For Each Formal Parameter Of A Function (If We Are In Function Execution Context)— A Property Of The Variable Object With A Name And Value Of Formal Parameter Is Created;
For Not Passed Parameters — Property Of Vo With A Name Of Formal Parameter And Value Undefined Is Created;
For Each Function Declaration (FunctionDeclaration)— A Property Of The Variable Object With A Name And Value Of A Function-Object Is Created; If The Variable Object 
Already Contains A Property With The Same Name, Replace Its Value And Attributes;
For Each Variable Declaration(Var,VariableDeclaration)— A Property Of The Variable Object With A Variable Name And Value Undefined Is Created; If The Variable Name Is The 
Same As A Name Of Already Declared Formal Parameter Or A Function, The Variable Declaration Does Not Disturb The Existing Property.*/
(function ExecContext(_$1,_$2){
	var Local$01=10;/**VariableDeclaration*/function Local$02(){}/**FunctionDeclaration*/
	var Local$03=function Local$04(){};/**VariableDeclaration|FunctionExpression*/(function Local$05(){});/**FunctionExpression*/
})(10);
Ao["ExecContext"]={_$1:10,_$2:undefined,Local$01:undefined,Local$02:"Reference To FunctionDeclaration Local$02",Local$03:undefined};
/**CodeExecutionPhase:&Example*/
Ao["ExecContext"]={_$1:10,_$2:undefined,Local$01:10,Local$02:"Reference To FunctionDeclaration Local$02",Local$03:"Reference To FunctionDeclaration Local$04"};
console.log("Function",AnyVar);var AnyVar=10;console.log("10",AnyVar);AnyVar=20;function AnyVar(){}console.log("20",AnyVar);
/**Entering The Execution Context*/Ao["AnyVarInGlobalContext"]={AnyVar:"Reference To FunctionDeclaration AnyVar"}
/**Entering The Execution Context Do Following Steps In Order:1)Formal Parameter Of A Function|2)For Each Function Declaration|3)Each Variable Declaration(If The Variable 
 * Name Is The Same As A Name Of Already Declared Formal Parameter Or A Function, The Variable Declaration Does Not Disturb The Existing Property).So Function Value Retained.*/ 
Ao["AnyVarInGlobalContext"]={};Ao["AnyVarInGlobalContext"]={AnyVar:"Reference To FunctionDeclaration AnyVar"};
/**Found AnyVar=10,But As Rule Says Above Not Changes Its Value & Still A Function*//**CodeExecutionPhase:*/
/**Found AnyVar=10*/Ao["AnyVarInGlobalContext"]={AnyVar:10};/**Found AnyVar=20*/Ao["AnyVarInGlobalContext"]={AnyVar:20}
/**Undefined,But Not "_$2 Is Not Defined",Already Defined With Undefined Value In Entering The Execution Context Phase.But CodeExecutionPhase Never Occur*/
if(true){var _$1=1;}else{var _$2=2;}
/**Claim:“It Is Possible To Declare Global Variables Using Var Keyword (In The Global Context) And Without Using Var Keyword (In Any Place)”. It Is Not So.Remember:Variables 
Are Declared Only With Using Var Keyword.Just Create The New Property (But Not The Variable) Of The Global Object. “Not The Variable” Is Not In The Sense That It Cannot Be 
Changed, But “Not The Variable” In Concept Of Variables In EcmaScript (Which Then Also Become Properties Of The Global Object Because Of Vo(GlobalContext)===Global.*/
AnyVarDeclInGlobalScope=10;/**A Property In GlobalContext===In Global Object,So We Can Access,See Reason Mentioned Above*/
console.log(AnyVar01);/**Undefined When Executing*/console.log(AnyVar02);/**AnyVar02 Is Not Defined As It Is Without Var Declaration*/AnyVar02=10;var AnyVar01=20;
console.log(AnyVar01);/**Undefined When Executing*/AnyVar02=10;console.log(AnyVar02);/**AnyVar02 Is Defined In Execution Phase*/var AnyVar01=20;console.log(AnyVar01);
/**There Is One More Important Point Concerning Variables,Variables,In Contrast With Simple Properties,Have Attribute {DontDelete},Meaning Impossibility To Remove A 
Variable Via The Delete Operator:ES5{DontDelete} Is Renamed Into The [[Configurable]] And Can Be Manually Managed Via Object.DefineProperty Method.*/
AnyVar03=10;console.log("10:",window.AnyVar03);console.log("True:",delete AnyVar03);/**Property Can Be Deletable*/console.log("Undefined",window.AnyVar03);
var AnyVar04=10;console.log("10:",window.AnyVar04);console.log("False:",delete AnyVar04);/**Variables Can't Be Deletable*/console.log("10",window.AnyVar04);
/**this Is A Property Of The Execution Context. It’S A Special Object In Which Context A Code Is Executed.this Is Directly Related To The Type Of Executable Code Of The 
 * Context. The Value Is Determined On Entering The Context And Is Immutable While The Code Is Running In The Context.*/
ActiveExecutionContext={Vo:"VariableObject",this: "thisValue"};
/**In The Global Code, This Value Is Always The Global Object Itself.It Is Possible To Reference It Indirectly:*/
/**Explicit Property Definition Of The Global Object:Window.AnyVar$1*/this.AnyVar$1=10;console.log("10",AnyVar$1);
/**Implicit Definition Via Assigning To Unqualified Identifier*/AnyVar$2=20;console.log("20",this.AnyVar$1);
/**Also Implicit Via Variable Declaration Because Variable Object Of The Global Context Is The Global Object Itself*/var AnyVar$3=30;console.log("30",this.AnyVar$3);
var Foo={AnyVar$1:10},Bar={AnyVar$1:20,AnyVar$1Test:function(){console.log("True",this===Bar);console.log("20",this.AnyVar$1);console.log("20",this.AnyVar$1);}};
Bar.AnyVar$1Test();/**this Is Bar Object*/Foo.AnyVar$1Test=Bar.AnyVar$1Test;/**this Will Refer To Foo,Although We Are Calling Same Function*/Foo.AnyVar$1Test();