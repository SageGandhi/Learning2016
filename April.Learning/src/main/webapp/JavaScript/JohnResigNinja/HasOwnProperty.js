/**
 * HasOwnProperty:Does Not Check Objects Prototype Chain Like In For In
 * Loop.Only Checks For Direct Properties Into The Current Object.Inherited From
 * Object,Can Be Overridden
 */
var HasOwn={hasOwnProperty:function(name){return HasOwn[name]?false:true;},LetHaveAnotherPoperty:'Changing Context Will Save You From Your Problem.'};
console.log("HasOwn.hasOwnProperty('SomethingSuspiciousGoingOn'):"+HasOwn.hasOwnProperty("SomethingSuspiciousGoingOn"),"HasOwn.hasOwnProperty('LetHaveAnotherPoperty'):"+HasOwn.hasOwnProperty("LetHaveAnotherPoperty"),"HasOwn.hasOwnProperty('hasOwnProperty'):"+HasOwn.hasOwnProperty("hasOwnProperty"));/**
																																																																											 * Cleaner
																																																																											 * Way
																																																																											 */
console.log("({}).hasOwnProperty.call(HasOwn,'SomethingSuspiciousGoingOn')"+({}).hasOwnProperty.call(HasOwn,"SomethingSuspiciousGoingOn"),"({}).hasOwnProperty.call(HasOwn,'LetHaveAnotherPoperty')"+({}).hasOwnProperty.call(HasOwn,"LetHaveAnotherPoperty"),"({}).hasOwnProperty.call(HasOwn,'hasOwnProperty')"+({}).hasOwnProperty.call(HasOwn,"hasOwnProperty"));
console.log("({}).hasOwnProperty.call(HasOwn,'SomethingSuspiciousGoingOn')"+({}).hasOwnProperty.call(HasOwn,"SomethingSuspiciousGoingOn"),"({}).hasOwnProperty.call(HasOwn,'LetHaveAnotherPoperty')"+({}).hasOwnProperty.call(HasOwn,"LetHaveAnotherPoperty"),"({}).hasOwnProperty.call(HasOwn,'hasOwnProperty')"+({}).hasOwnProperty.call(HasOwn,"hasOwnProperty"));
/** Jquery Understanding: *//** Exposing Jquery In Global Scope:In jQuery.js */window.jQuery=window.$=jQuery;
/**
 * Regular Expression For Trimming Spaces From The Start Or The
 * End:/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
 */
/** ZeroWidthNoBreakingSpace/NoBreakSpace/ZeroWidthSpace/ZeroWidthNoBreak/ByteOrderMark(Bom):\UFEFF,NoBreakSpace:\XA0 */
/** Specifies A Version Number When Build Is Being Performed */
var version="@VERSION",
define(["./var/deletedIds","./var/document","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],
	function(deletedIds,document,slice,concat,push,indexOf,class2type,toString,hasOwn,support){});
/** Jquery Code */
/** Initializing New Object Based On Selector&Context(this)Passed. */jQuery=function(selector,context){return new jQuery.fn.init(selector,context);};
/**
 * Understanding Prototype/PrototypeChain/PrototypalInheritence/EcmaScript
 * Standard[[Prototype]]Or <<__proto__>> Object.An Object Is A Collection Of
 * Properties&Has A Single (Prototype) Object.By Parenthesis I Am Given It A
 * Special Semantic Meaning,So That We Have An Abtract Structure/Generic Object
 * That Might Be Represented In Different Way(EcmaScriptStandard[[Prototype]]Or
 * Browser Deprecated __proto__).The (Prototype) May Be Either An Object Or The
 * Null Value.Prototype Objects Are Also Just Simple Objects &May Have Their Own
 * Prototypes.If A Prototype Has A Non-Null Reference To Its Prototype,&So
 * On,This Is Called The Prototype Chain.A Prototype Chain Is A Finite Chain Of
 * Objects Which Is Used To Implement Inheritance&Shared Properties.Two Types Of
 * Inheritence:ClassBasedInheritence As In Java/Inheritence Achieved Via
 * Prototype Chain,Delegation Based Inheritence/Prototype Based Inheritence.Todo
 * The Linking We Have To Use [[Prototype]]/__proto__ Property.
 */
var IMeMyself={Name:'Prajit Gandhi',BirthPlace:'Asansol',Language:'EcmaScript'},Prajit={Name:'Prajit',BirthYear:1988,getAge:function(){return 2016-this.BirthYear;}},
	PrajitExt01={BirthPlace:'WestBengal',__proto__:Prajit},PrajitExt02={BirthPlace:'Gujrat',__proto__:Prajit};
Prajit={Name:'Prajit',getAge:function(){return 2016-this.BirthYear;}},PrajitExt01={BirthPlace:'WestBengal',BirthYear:1988,__proto__:Prajit},
PrajitExt02={BirthPlace:'Gujrat',BirthYear:1998,__proto__:Prajit};
/**
 * The Rule Is Simple: If A Property Or A Method Is Not Found In The Object
 * Itself(The Object Has No Such An Own Property),Then There Is An Attempt To
 * Find This Property/ Method In The Prototype Chain.If The Property Is Not
 * Found In The Prototype, hen A Prototype Of The Prototype Is Considered, And
 * So On,The Whole Prototype Chain(Absolutely The Same Is Made In Class-Based
 * Inheritance, When Resolving An Inherited Method — There We Go Through The
 * Class Chain). The First Found Property/Method With The Same Name Is Used.
 * Thus, A Found Property Is Called Inherited Property. If The Property Is Not
 * Found After The Whole Prototype Chain Lookup, Then Undefined Value Is
 * Returned.This( Context)Value In Using An Inherited Method Is Set To The
 * Original Object, But Not To The (Prototype) Object In Which The Method Is
 * Found.Name Property Is Found By Following Prototype Chain.
 */
var Prajit={Name:'Prajit',getAge:function(){return 2016-this.BirthYear;}},Gandhi={Name:'Gandhi',getAge:function(){return 2015-this.BirthYear;}};
/**
 * If A Prototype Is Not Specified For An Object Explicitly, Then The Default
 * Value For __proto__ Is Taken — Object.prototype. Object Object.prototype
 * Itself Also Has A __proto__, Which Is The Final Link Of A Chain And Is Set To
 * Null.So It Might Not Shown Up In Browser Dir Command.
 */
Prajit={Name:'Prajit',getAge:function(){return 2016-this.BirthYear;}},PrajitExt01={BirthPlace:'WestBengal',BirthYear:1988,__proto__:Prajit},
/** This Can Also Be Done By Object.create Method */
PrajitExt02={BirthPlace:'Gujrat',BirthYear:1998,__proto__:Prajit};
PrajitExt01=Object.create(Prajit,{BirthPlace:{value:'WestBengal'},BirthYear:{value:1988}});PrajitExt02=Object.create(Prajit,{BirthPlace:{value:'Gujrat'},BirthYear:{value:1988}});
/**
 * Constructor Pattern:Besides Creation Of Objects By Specified Pattern, A
 * Constructor Function Does Another Useful Thing — It Automatically Sets A
 * Prototype Object For Newly Created Objects. This Prototype Object Is Stored
 * In The ConstructorFunction.Prototype Property.Often It Is Needed To Have
 * Objects With The Same Or Similar State Structure (The Same Set Of
 * Properties), And With Different State Values. In This Case We May Use A
 * Constructor Function Which Produces Objects By Specified Pattern.
 */
PrajitExt=function(BirthPlace,BirthYear){this.BirthPlace=BirthPlace,this.BirthYear=BirthYear;};PrajitExt.prototype.Name='Prajit';
PrajitExt.prototype.getAge=function(){return 2016-this.BirthYear;};PrajitExt01=new PrajitExt('WestBengal',1988);PrajitExt02=new PrajitExt('Gujrat',1989);
/**
 * __proto__:Finds Whose Instance Is This& Points To That.Prototype.PrajitExt Is
 * A Function, So Its A Instance Of Function,So
 * PrajitExt.__proto__===Function.prototype,Now Function.prototype Is An
 * Instance Of Object,So Function.prototype.__proto__===Object.prototype,Now
 * Object.prototype Is Root Of All Object,So Its
 * Object.prototype__proto__===null
 */
console.log('[PrajitExt.__proto__===Function.prototype:',PrajitExt.__proto__===Function.prototype,']','[Function.prototype.__proto__===Object.prototype:',
		Function.prototype.__proto__===Object.prototype,']','[Object.prototype.__proto__===null:',Object.prototype.__proto__===null,']');
/** Same As */
console.log('[PrajitExt.__proto__===Function.prototype:',PrajitExt.__proto__===Function.prototype,']','[PrajitExt.__proto__.__proto__===Object.prototype:',
PrajitExt.__proto__.__proto__===Object.prototype,']','[PrajitExt.__proto__.__proto__.__proto__===null:',PrajitExt.__proto__.__proto__.__proto__===null,']');
/**
 * Imho,Prototype Is Always Points To Blueprint,Based On What Type Of Instance
 * Is It.So Let <TypeObject> Be A Object Of <TypeObjectConstructor> Then
 * <TypeObjectConstructor.prototype> Is The Blueprint For <TypeObject>,And So
 * <TypeObject.prototype>===<TypeObjectConstructor.prototype>.Now Here The
 * Catch Line Instance Don't Have Any "prototype" Property Untill Es6
 * Standardised It,But Any Object Have __proto__ Object.In Case Instance Is A
 * Function Then It Will Have "prototype" Property.Another Thing To Remember
 * Instance.__proto__ Always Pointed To ConstructorFunction.prototype.This
 * ConstructorFunction.prototype Have A "constructor" Property Which Reference
 * Back To Orginal ConstructorFunction.As PrajitExt.__proto__ Is
 * Function.prototype,PrajitExt.__proto__.constructor===
 * Function.prototype.constructor,Or Function Itself.Every
 * "ConstructorFunction.prototype" Will Create This Property "constructor" In
 * "prototype" Property. So In Conclusion,__proto__ Means Whose Instance Is This
 * Point To That Constructor.prototype,& prototype Means What Is The BluePrint
 * Base For Instances That Will Be Shared Across All Instances.How These
 * Instances Will Be Constructed Will Be Poited By Special Property
 * "constructor" In This "prototype" Property. Its Kind Of Delegation Based
 * Inheritence.Aha Moment.
 */
/**
 * Runtime Program Execution:Execution Context Stack:3 Types EcmaScript:Global
 * Code/Function Code/Eval Code.There Is Only One Global Context And May Be Many
 * Instances Of Function And Eval Execution Contexts. Every Call Of A Function,
 * Enters The Function Execution Context And Evaluates The Function Code Type.
 * Every Call Of Eval Function, Enters The Eval Execution Context And Evaluates
 * Its Code.That One Function May Generate Infinite Set Of Contexts, Because
 * Every Call To A Function (Even If The Function Calls Itself Recursively)
 * Produces A New Context With A New Context State(May Each Invokation With
 * Different Argument):An Execution Context May Activate Another Context, A
 * Function Calls Another Function (Or The Global Context Calls A Global
 * Function), And So On. Logically, This Is Implemented As A Stack, Which Is
 * Called The Execution Context Stack.A Context Which Activates Another Context
 * Is Called A Caller. A Context Is Being Activated Is Called A Callee. A Callee
 * At The Same Time May Be A Caller Of Some Other Callee (A Function Called From
 * The Global Context, Calls Then Some Inner Function).When A Caller Activates
 * (Calls) A Callee, The Caller Suspends Its Execution And Passes The Control
 * Flow To The Callee. The Callee Is Pushed Onto The The Stack And Is Becoming A
 * Running (Active) Execution Context. After The Callee’S Context Ends, It
 * Returns Control To The Caller, And The Evaluation Of The Caller’S Context
 * Proceeds (It May Activate Then Other Contexts) Till The Its End, And So On. A
 * Callee May Simply Return Or Exit With An Exception. A Thrown But Not Caught
 * Exception May Exit (Pop From The Stack) One Or More Contexts.All The
 * EcmsScript Program Runtime Is Presented As The Execution Context Stack, Where
 * Top Of This Stack Is An Active Context:When Program Begins It Enters The
 * Global Execution Context, Which Is The Bottom And The First Element Of The
 * Stack. Then The Global Code Provides Some Initialization, Creates Needed
 * Objects And Functions. During The Execution Of The Global Context, Its Code
 * May Activate Some Other (Already Created) Function, Which Will Enter Their
 * Execution Contexts, Pushing New Elements Onto The Stack, And So On. After The
 * Initialization Is Done, The Runtime System Is Waiting For Some Event (User’S
 * Mouse Click) Which Will Activate Some Function And Which Will Enter A New
 * Execution Context.Having Some Function Context As [Execution Context
 * Pushed(Active)] And The Global Context As [Global Execution Context], We Have
 * The Following Stack Modification On Entering And Exiting [Execution Context
 * Pushed(Active)] From The Global Context:Object Structure&Properties(State)For
 * Each Execution Context Having:
 */
var FirstGlobalInt=10;function FunctionDeclaration(){}(function FunctionExpression(){});
console.log('[this.FirstGlobalInt===FirstGlobalInt:',this.FirstGlobalInt===FirstGlobalInt,']','[window.FunctionDeclaration===FunctionDeclaration:',
		window.FunctionDeclaration===FunctionDeclaration,']');console.log(FunctionExpression);console.log(window.FunctionExpression);
/**
 * Execution Context(Abbreviated Form—EC)Is The Abstract Concept Used By
 * ECMA-262 Specification For Typification And Differentiation Of An Executable
 * Code.Execution Context Stack Works Like A Stack,Pushing Context When New
 * Active Context Arrives,Pop Context When Active Context Finished/Thorw An
 * Error.Reading JavaScript Source File From External Source/Inline JavaScript
 * Create Global Context(Global Code Does Not Include Any Parts Of Code Which
 * Are In Bodies Of Function)
 */
ExecutionContextStack=[/** Initially Empty */];/** For Global Code */
/** The Code Of Concrete Function Does Not Include Codes Of The Inner Functions. */
ExecutionContextStack=["GlobalExecutionContext"];
/**
 * ExecutionContextStack Modifies As First Invokation/Activation Of Example
 * Function
 */
(function Example(Flag){if(Flag){return;}Example(true);})(false);
/** Recursive Activation Of Example Function */
ExecutionContextStack=["<Example>FunctionContext","GlobalExecutionContext"];
/**
 * Throwing Error But Not Caught Error Can Cause Popping One Or More Execution
 * Context
 */
ExecutionContextStack=["<Example>FunctionContext","<Example>FunctionContext","GlobalExecutionContext"];
/** Eval Influence The Calling Context,Context From Where Eval Is Being Called */
(function First(){(function Second(){throw 'Exit From Second & First ExecutionContexts';})();})();
/** Variable LocalVariable Is Created In The Local Context Of "First" Function */
eval('var GlobalVariable=10');(function First(){eval('var LocalVariable=20');})();
/**
 * Strict-Mode Of Es5, Eval Already Does Not Influence The Calling Context, But
 * Instead Evaluates The Code In The Local Sandbox.ExecutionContextStack
 * Modifies As Follows
 */
console.log(GlobalVariable);console.log(LocalVariable);/** 10|Undefined */
ExecutionContextStack=["GlobalExecutionContext"];/** Influence Global Context */
ExecutionContextStack=[{"Context":"EvalContext","CallingContext":"GlobalContext"},"GlobalExecutionContext"];
ExecutionContextStack=["GlobalExecutionContext"];ExecutionContextStack=["<First>FunctionContext","GlobalExecutionContext"];
ExecutionContextStack=[{"Context":"EvalContext","CallingContext":"<First>FunctionContext"},"<First>FunctionContext","GlobalExecutionContext"];
/**
 * Global Context Corresponds To Evaluation Of The Script. Every Script Tag
 * Enters Its Own Global Execution Context And Is Treated As Separate Program.
 * However, All Of These Scripts Are Share The Same Global Object.
 */
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
/**
 * VariableObject:A Variable Object (In Abbreviated Form — Vo)Is A Special
 * Object Related With An Execution Context And Which Stores:Variables
 * (Var,VariableDeclaration); Function Declarations (FunctionDeclaration, In
 * Abbreviated Form Fd);And Function Formal Parameters Declared In The Context.
 */
ActiveExecutionContext={Vo:{"Has":"Variables (Var,VariableDeclaration);Function Declarations (FunctionDeclaration, In Abbreviated Form Fd);And Function Formal Parameters"}};
/**
 * Indirect Referencing To Variables (Via Property Names Of Vo) Allows Only
 * Variable Object Of The Global Context (Where The Global Object Is Itself The
 * Variable Object). For Other Contexts Directly To Reference The Vo Is Not
 * Possible, It Is Purely Mechanism Of Implementation.
 */
var FirstGlobalVar=10;function FirstGlobalFunc(FuncArgs){var FuncLocalVar=20;};FirstGlobalFunc(50);
/**
 * Variable Object Of The Global
 * Context:Vo(globalContext)={FirstGlobalVar:10,FirstGlobalFunc:<Reference To
 * Function>};|Variable Object Of The "FirstGlobalFunc" Function
 * Context:Vo(FirstGlobalFunc
 * FunctionContext)={FuncArgs:30,FuncLocalVar:20};|But At Implementation Level
 * (And Specification) The Variable Object Is An Abstract Essence. Physically,
 * In Concrete Execution Contexts, Vo Is Named Differently And Has Different
 * Initial Structure.|Global Object Is The Object Which Is Created Before
 * Entering Any Execution Context; This Object Exists In The Single Copy, Its
 * Properties Are Accessible From Any Place Of The Program, The Life Cycle Of
 * The Global Object Ends With Program End.
 */
Global={Math:"Math(Property&Function)Definition",String:"String(Property&Function)Definition",Window:Global};
/**
 * Variable Object Of The Global Context — Here Variable Object Is The Global
 * Object Itself:It Is Necessary To Understand Accurately This Fact Since For
 * This Reason Declaring A Variable In The Global Context, We Have Ability To
 * Reference It Indirectly Via Property Of The Global Object (For Ex.When The
 * Variable Name Is Unknown In Advance):
 */
/**
 * Regarding The Execution Context Of Functions—There Vo Is Inaccessible
 * Directly,And Its Role Plays So-Called An Activation Object (In Abbreviated
 * Form—Ao). Vo(FunctionContext)===Ao;An Activation Object Is Created On
 * Entering The Context Of A Function And Initialized By Property Arguments
 * Which Value Is The Arguments Object: Ao={arguments:<Argments>};Arguments
 * Object Is A Property Of The Activation Object. It Contains The Following
 * Properties:Callee — The Reference To The Current Function; Length — Quantity
 * Of Real Passed Arguments;Properties-Indexes (Integer, Converted To String)
 * Which Values Are The Values Of Function’S Arguments (From Left To Right In
 * The List Of Arguments). Quantity Of These Properties-Indexes ==
 * Arguments.Length. Values Of Properties-Indexes Of The Arguments Object And
 * Present (Really Passed) Formal Parameters Are Shared.
 */
(function SampleFunc(_$1,_$2,_$3){
	/** Quantity Of Defined Function Arguments(_$1,_$2,_$3) */
	console.log("SampleFunc.length[3]:",SampleFunc.length);
	/** Quantity Of Really Passed Arguments(Only _$1,_$2) */console.log("arguments.length[2]:",arguments.length);
	/** Reference Of A Function To Itself */console.log("arguments.callee===SampleFunc[true]:",arguments.callee===SampleFunc);
	/** Parameters Sharing */console.log("_$1===arguments[0][true]:",_$1===arguments[0]);console.log("_$1[10]:",_$1);arguments[0]=20;console.log("_$1[20]:",_$1);
	_$1=30;console.log("arguments[0][30]:",arguments[0]);
	/**
	 * However, For Not Passed Argument _$3,Related Index-Property Of The
	 * Arguments Object Is Not Shared
	 */
	_$3=40;console.log("arguments[2][undefined]:",arguments[2]);arguments[2]=50;console.log("_$3[40]:",_$3);	  
})(10,20);
/**
 * Processing Of The Execution Context Code Is Divided On Two Basic
 * Stages:1)Entering The Execution Context;2)Code Execution.Modifications Of The
 * Variable Object Are Closely Related With These Two Phases.That Processing Of
 * These Two Stages Are The General Behavior And Independent From The Type Of
 * The Context (Fair For Both: Global And Function Contexts).
 */
/**
 * Entering The Execution Context:On Entering The Execution Context (But Before
 * The Code Execution), Vo Is Filled With The Following Properties: For Each
 * Formal Parameter Of A Function (If We Are In Function Execution Context)— A
 * Property Of The Variable Object With A Name And Value Of Formal Parameter Is
 * Created; For Not Passed Parameters — Property Of Vo With A Name Of Formal
 * Parameter And Value Undefined Is Created; For Each Function Declaration
 * (FunctionDeclaration)— A Property Of The Variable Object With A Name And
 * Value Of A Function-Object Is Created; If The Variable Object Already
 * Contains A Property With The Same Name, Replace Its Value And Attributes; For
 * Each Variable Declaration(Var,VariableDeclaration)— A Property Of The
 * Variable Object With A Variable Name And Value Undefined Is Created; If The
 * Variable Name Is The Same As A Name Of Already Declared Formal Parameter Or A
 * Function, The Variable Declaration Does Not Disturb The Existing Property.
 */
(function ExecContext(_$1,_$2){
	var Local$01=10;/** VariableDeclaration */function Local$02(){}/** FunctionDeclaration */
	var Local$03=function Local$04(){};/** VariableDeclaration|FunctionExpression */(function Local$05(){});/** FunctionExpression */
})(10);
Ao["ExecContext"]={_$1:10,_$2:undefined,Local$01:undefined,Local$02:"Reference To FunctionDeclaration Local$02",Local$03:undefined};
/** CodeExecutionPhase:&Example */
Ao["ExecContext"]={_$1:10,_$2:undefined,Local$01:10,Local$02:"Reference To FunctionDeclaration Local$02",Local$03:"Reference To FunctionDeclaration Local$04"};
console.log("Function",AnyVar);var AnyVar=10;console.log("10",AnyVar);AnyVar=20;function AnyVar(){}console.log("20",AnyVar);
/** Entering The Execution Context */Ao["AnyVarInGlobalContext"]={AnyVar:"Reference To FunctionDeclaration AnyVar"}
/**
 * Entering The Execution Context Do Following Steps In Order:1)Formal Parameter
 * Of A Function|2)For Each Function Declaration|3)Each Variable Declaration(If
 * The Variable Name Is The Same As A Name Of Already Declared Formal Parameter
 * Or A Function, The Variable Declaration Does Not Disturb The Existing
 * Property).So Function Value Retained.
 */ 
Ao["AnyVarInGlobalContext"]={};Ao["AnyVarInGlobalContext"]={AnyVar:"Reference To FunctionDeclaration AnyVar"};
/**
 * Found AnyVar=10,But As Rule Says Above Not Changes Its Value & Still A
 * Function
 *//** CodeExecutionPhase: *//** Found AnyVar=20 */
/** Found AnyVar=10 */Ao["AnyVarInGlobalContext"]={AnyVar:10};Ao["AnyVarInGlobalContext"]={AnyVar:20}
/**
 * Undefined,But Not "_$2 Is Not Defined",Already Defined With Undefined Value
 * In Entering The Execution Context Phase.But CodeExecutionPhase Never Occur
 */
if(true){var _$1=1;}else{var _$2=2;}
/**
 * Claim:“It Is Possible To Declare Global Variables Using Var Keyword (In The
 * Global Context) And Without Using Var Keyword (In Any Place)”. It Is Not
 * So.Remember:Variables Are Declared Only With Using Var Keyword.Just Create
 * The New Property (But Not The Variable) Of The Global Object. “Not The
 * Variable” Is Not In The Sense That It Cannot Be Changed, But “Not The
 * Variable” In Concept Of Variables In EcmaScript (Which Then Also Become
 * Properties Of The Global Object Because Of Vo(GlobalContext)===Global.
 */
AnyVarDeclInGlobalScope=10;
/**
 * A Property In GlobalContext===In Global Object,So We Can Access,See Reason
 * Mentioned Above
 */
console.log(AnyVar01);/** Undefined When Executing */console.log(AnyVar02);
/** AnyVar02 Is Not Defined As It Is Without Var Declaration */
AnyVar02=10;var AnyVar01=20;
/** AnyVar02 Is Defined In Execution Phase */
console.log(AnyVar01);/** Undefined When Executing */AnyVar02=10;console.log(AnyVar02);
var AnyVar01=20;console.log(AnyVar01);
/**
 * There Is One More Important Point Concerning Variables,Variables,In Contrast
 * With Simple Properties,Have Attribute {DontDelete},Meaning Impossibility To
 * Remove A Variable Via The Delete Operator:ES5{DontDelete} Is Renamed Into The
 * [[Configurable]] And Can Be Manually Managed Via Object.DefineProperty
 * Method.
 */
/** Property Can Be Deletable */
AnyVar03=10;console.log("10:",window.AnyVar03);console.log("True:",delete AnyVar03);console.log("Undefined",window.AnyVar03);
/** Variables Can't Be Deletable */
var AnyVar04=10;console.log("10:",window.AnyVar04);console.log("False:",delete AnyVar04);console.log("10",window.AnyVar04);
/**
 * this Is A Property Of The Execution Context. It’S A Special Object In Which
 * Context A Code Is Executed.this Is Directly Related To The Type Of Executable
 * Code Of The Context. The Value Is Determined On Entering The Context And Is
 * Immutable While The Code Is Running In The Context.
 */
ActiveExecutionContext={Vo:"VariableObject",this: "thisValue"};
/**
 * In The Global Code, This Value Is Always The Global Object Itself.It Is
 * Possible To Reference It Indirectly:
 */
/** Explicit Property Definition Of The Global Object:Window.AnyVar$1 */this.AnyVar$1=10;console.log("10",AnyVar$1);
/** Implicit Definition Via Assigning To Unqualified Identifier */AnyVar$2=20;console.log("20",this.AnyVar$1);
/**
 * Also Implicit Via Variable Declaration Because Variable Object Of The Global
 * Context Is The Global Object Itself
 */var AnyVar$3=30;console.log("30",this.AnyVar$3);
var Foo={AnyVar$1:10},Bar={AnyVar$1:20,AnyVar$1Test:function(){console.log("True",this===Bar);console.log("20",this.AnyVar$1);console.log("20",this.AnyVar$1);}};
/** this Will Refer To Foo,Although We Are Calling Same Function */
Bar.AnyVar$1Test();/** this Is Bar Object */Foo.AnyVar$1Test=Bar.AnyVar$1Test;Foo.AnyVar$1Test();
/**
 * The First (And, Probably, The Main) Feature Of this Value In This Type Of
 * Code Is That Here It Is Not Statically Bound To A Function.this Value Is
 * Determined On Entering The Context, And In Case With A Function Code The
 * Value Can Be Absolutely Different Every Time.First, In A Usual Function Call,
 * this Is Provided By The Caller Which Activates The Code Of The Context,The
 * Parent Context Which Calls The Function. And The Value Of this Is Determined
 * By The Form Of A Call Expression (In Other Words By The Form How
 * Syntactically The Function Is Called).
 */function GlobalFunction$1(){console.dir(this);}GlobalFunction$1();/** Global(this) */
console.log(GlobalFunction$1===GlobalFunction$1.prototype.constructor);
/**
 * With Another Form Of The Call Expression Of The Same Function,this Value Is
 * Different
 */
GlobalFunction$1.prototype.constructor();/** GlobalFunction$1.prototype */
var Global$1={Function$1:function(){console.dir(this);console.log(this===Global$1);}};Global$1.Function$1();var GlobalFunction$2=Global$1.Function$1;
console.log("True:",GlobalFunction$2===Global$1.Function$1);GlobalFunction$2();
/**
 * With Another Form Of The Call Expression Of The Same Function,Have Different
 * this Value
 */
/**
 * Internal Reference Type UnderStanding:Needed When Deal With An
 * Identifier(Done By ScopeChain:Identifier Resolution)/Property Accessor
 */
var ValueOfReferenceType={Base:"Object To Which Property Belongs",PropertyName:"Name Of The Property In This Base."};
/**
 * ScopeChain:Is Known That Every Context Has Its Own Variables Object:For The
 * Global Context It Is Global Object Itself,For Functions It Is The Activation
 * Object.And The Scope Chain Is Exactly This List Of All (Parent) Variable
 * Objects For The Inner Contexts. This Chain Is Used For Variables Lookup.Scope
 * Chain Of “Bar” Context Includes ActivationObejct(Bar),ActivationObejct(Foo)
 * And VariableObject(Global).Scope Chain Is Related With An Execution Context A
 * Chain Of Variable Objects Which Is Used For Variables Lookup At Identifier
 * Resolution.The Scope Chain Of A Function Context Is Created At Function Call
 * And Consists Of The Activation Object And The Internal [[Scope]] Property Of
 * This Function.
 */
ActiveExecutionContext={VoAo:"VariableObjectOrActivationObject",this:"ThisValue",Scope:[]};
/** Scope Chain List Of All Variable Objects For Identifiers Lookup&Resolution */
var $Global01=10;function Foo(){var $Local02=20;function Bar(){console.log($Global01+$Local02);}return Bar;}Foo()();
/**
 * FunctionLifeCycle:(Stage Of Creation & Stage Of Activation(Call))|Definition
 * Of Scope:Scope=ActivationObject+[[Scope]],Represented As Array[<<(Activation|Variable)Object>>,...],
 * Or May Be Hierarchical var VariableObject$1={__Parent__:null,...<<Data>>},VariableObject$2={__Parent__:VariableObject$1,...<<Data>>},...;.Function
 * Declarations Are Put Into Variable/Activation Object On Entering The Context
 * Stage.A Variable And A Function Declaration In The Global Context (Where
 * Variable Object Is The Global Object Itself:
 */
var $Global03=10;function $GloblFunc01(){var $Local01=20;console.log($Local01+$Global03);}$GloblFunc01();
/**
 * Before This Moment We Spoke Only About Variable Object Of The Current
 * Context.Here We See That “$Local01” Variable Is Defined In Function
 * “$GloblFunc01” (Which Means It Is In The ActivationObject Of “$GloblFunc01”
 * Context), But Variable “$Global03” Is Not Defined In Context Of
 * “$GloblFunc01” And Accordingly Is Not Added Into The ActivationObject Of
 * “$GloblFunc01”.At First Glance “$Global03” Variable Does Not Exist At All For
 * Function “$GloblFunc01”; Only “At First Glance”. The Activation Object Of
 * “$GloblFunc01” Context Contains Only One Property — Property “$Local01”:
 */
$GloblFunc01.ActivationObject={$Local01:undefined};
/** Undefined–On Entering The Context,20–At Activation */
/**
 * How Does Function “$GloblFunc01” Have Access To “$Global03” Variable?It Is
 * Logical To Assume That Function Should Have Access To The Variable Object Of
 * A Higher Context. In Effect,It Is Exactly So And, Physically This Mechanism
 * Is Implemented Via The Internal [[Scope]] Property Of A Function.[[Scope]] Is
 * A Hierarchical Chain Of All Parent Variable Objects, Which Are Above The
 * Current Function Context; The Chain Is Saved To The Function At Its
 * Creation.[[Scope]] Is Saved At Function Creation — Statically (Always),Once
 * And Forever—Until Function Destruction.Function Can Be Never Called,But
 * [[Scope]] Property Is Already Written And Stored In Function Object.Another
 * Moment Which Should Be Considered Is That [[Scope]]In Contrast With Scope
 * (Scope Chain) Is The Property Of A Function Instead Of A Context. Above
 * Example, [[Scope]] Of The “$GloblFunc01” Function Is The Following:
 */$GloblFunc01["[[Scope]]"]=[GlobalContext.VariableObject/** Global */];
/**
 * As It Has Been Said In Definition,On Entering The Context And After Creation
 * Of ActivationObject/VariableObject,Scope Property Of The Context(Which Is A
 * Scope Chain For Variables Lookup)Is Defined As
 * Follows:Scope=ActivationObject/VariableObject+[[Scope Property Of A
 * Function]].The Activation Object Is The First Element Of The Scope
 * Array,Added To The Front Of Scope
 * Chain:Scope=[ActivationObject].Concat([[Scope]]);Process Of Identifier
 * Resolution:Identifier Resolution Is A Process Of Determination To Which
 * Variable Object In Scope Chain The Variable (Or The Function Declaration)
 * Belongs.On Return From This Algorithm We Have Always A Value Of Type
 * Reference, Which Base Component Is The Corresponding Variable Object (Or Null
 * If Variable Is Not Found), And A Property Name Component Is The Name Of The
 * Looked Up (Resolved) Identifier.
 */
 ValueOfReferenceType={Base:"Object To Which Property Belongs",PropertyName:"Name Of The Property In This Base."};
 /**
	 * This Process Of Identifier Resolution Includes Lookup Of The Property
	 * Corresponding To The Name Of The Variable,There Is A Consecutive
	 * Examination Of Variable Objects In The Scope Chain, Starting From The
	 * Deepest Context And Up To The Top Of The Scope Chain.Thus, Local
	 * Variables Of A Context At Lookup Have Higher Priority Than Variables From
	 * Parent Contexts, And In Case Of Two Variables With The Same Name But From
	 * Different Contexts, The First Is Found The Variable Of Deeper Context.
	 */
 var GlobalVar$1=10;
 function GlobalFunc$1(){var LocalGlobalFunc$1=20;function InnerFunc$1(){var LocalInnerFunc$1=30;console.log(LocalInnerFunc$1+LocalGlobalFunc$1+GlobalVar$1);}InnerFunc$1();}
 GlobalFunc$1();
/**
 * The Following Variable/Activation Objects,[[Scope]] Properties Of Functions
 * And Scope Chains Of Contexts:
 */
/** Variable Object Of The Global Context Is: */
 GlobalContext.VariableObject={GlobalVar$1:10,GlobalFunc$1:"Refererence To GlobalFunc$1"}
/** At GlobalFunc$1 Creation,The [[Scope]] Property Of GlobalFunc$1 Is: */
 /** All Parent Context VariableObject|ActivationObject */
 GlobalFunc$1["[[Scope]]"]=[GlobalContext.VariableObject];
 /** At GlobalFunc$1 Call,The Activation Context Of GlobalFunc$1 Is: */
 GlobalFunc$1["ActivationObject"]={LocalGlobalFunc$1:20,InnerFunc$1:"Refererence To InnerFunc$1"};
 /**
	 * At GlobalFunc$1,On Entering The Context And After Creation Of
	 * ActivationObject/VariableObject,Scope Property Of The Context For
	 * GlobalFunc$1:
	 */
 GlobalFunc$1["ScopeChain"]=GlobalFunc$1["ActivationObject"]+GlobalFunc$1["[[Scope]]"];
 GlobalFunc$1["ScopeChain"]=[GlobalFunc$1["ActivationObject"],GlobalFunc$1["[[Scope]]"]];
 GlobalFunc$1["ScopeChain"]=[{LocalGlobalFunc$1:20,InnerFunc$1:"Refererence To InnerFunc$1"},GlobalContext.VariableObject];
 GlobalFunc$1["ScopeChain"]=[{LocalGlobalFunc$1:20,InnerFunc$1:"Refererence To InnerFunc$1"},{GlobalVar$1:10,GlobalFunc$1:"Refererence To GlobalFunc$1"}];
 /** At InnerFunc$1 Creation,The [[Scope]] Property Of InnerFunc$1 Is: */
 InnerFunc$1["[[Scope]]"]=[GlobalFunc$1.ActivationObject,GlobalContext.VariableObject];
 /** All Parent Context VariableObject|ActivationObject */
 /** At InnerFunc$1 Call,The Activation Context Of InnerFunc$1 Is: */
 InnerFunc$1["ActivationObject"]={LocalInnerFunc$1:30};
 /**
	 * At InnerFunc$1,On Entering The Context And After Creation Of
	 * ActivationObject/VariableObject,Scope Property Of The Context For
	 * InnerFunc$1:
	 */
 InnerFunc$1["ScopeChain"]=InnerFunc$1["ActivationObject"]+InnerFunc$1["[[Scope]]"];
 InnerFunc$1["ScopeChain"]=[{LocalInnerFunc$1:30},GlobalFunc$1.ActivationObject,GlobalContext.VariableObject];
 InnerFunc$1["ScopeChain"]=[{LocalInnerFunc$1:30},{LocalGlobalFunc$1:20,InnerFunc$1:"Refererence To InnerFunc$1"},{GlobalVar$1:10,GlobalFunc$1:"Refererence To GlobalFunc$1"}];
 /**
	 * IdentiferResolution Becomes
	 * Simple:GlobalVar$1-->InnerFunc$1["ScopeChain"]-->InnerFunc$1["ActivationObject"]:NotFound+InnerFunc$1["[[Scope]]"]-->Find
	 * In InnerFunc$1["[[Scope]]"]
	 * -->GlobalFunc$1.ActivationObject,GlobalContext.VariableObject-->{LocalGlobalFunc$1:20,InnerFunc$1:"Refererence
	 * To InnerFunc$1"}:NotFound+GlobalContext.VariableObject--> Find In
	 * GlobalContext.VariableObject-->{GlobalVar$1:10,GlobalFunc$1:"Refererence
	 * To GlobalFunc$1"}:Found(10)
	 */
 /**
	 * Closures In EcmaScript Are Directly Related With The [[Scope]] Property
	 * Of Functions.As It Has Been Noted, [[Scope]] Is Saved At Function
	 * Creation And Exists Until The Function Object Is Destroyed. Actually, A
	 * Closure Is Exactly A Combination Of A Function Code And Its [[Scope]]
	 * Property.Thus,[[Scope]] Contains That Lexical Environment (The Parent
	 * Variable Object) In Which Function Is Created. Variables From Higher
	 * Contexts At The Further Function ActivationObject Will Be Searched In
	 * This Lexical ( Statically Saved At Creation) Chain Of Variable
	 * Objects.GlobalVar$4 Variable Is Found In The [[Scope]] Of Example$1
	 * Function,For Variables Lookup The Lexical(Closured) Chain Defined At The
	 * Moment Of Function Creation, But Not The Dynamic Chain Of The Call (At
	 * Which Value Of GlobalVar$4 Variable Would Be Resolved To 20) Is Used.
	 */
var GlobalVar$4=10;function Example$1(){console.log(GlobalVar$4);};(function(){var GlobalVar$4=20;Example$1();})();
 /**
	 * Again For The Identifier Resolution The Lexical Scope Chain Defined At
	 * Function Creation Is Used — The Variable GlobalVar$5 Is Resolved To 10,
	 * But Not To 30. Moreover, This Example Clearly Shows That [[Scope]] Of A
	 * Function (In This Case Of The Anonymous Function Returned From Function
	 * Example$2) Continues To Exist Even After The Context In Which A Function
	 * Is Created Is Already Finished.
	 */var GlobalVar$5=30;var Example$3=Example$2();Example$3();
function Example$2(){var GlobalVar$5=10,GlobalVar$6=20;return function(){console.log([GlobalVar$5,GlobalVar$6]);};}
/**
 * [[Scope]] Of Functions Created Via Function Constructor:In The Examples Below
 * Function At Creation Gets The [[Scope]] Property And Via This Property It
 * Accesses Variables Of All Parent Contexts.However,In This Rule There Is One
 * Important Exception, And It Concerns Functions Created Via The Function
 * Constructor.For Function Example$1FuncCons Which Is Created Via The Function
 * Constructor The Variable ExampleLocal$1 Is Not Accessible.But It Does Not
 * Mean That Function BarFn Has No Internal [[Scope]] Property (Else It Would
 * Not Have Access To The Variable ExampleGlobal$1).And The Matter Is That
 * [[Scope]] Property Of Functions Created Via The Function Constructor Contains
 * Always Only The Global Object.Consider It Since, For Example, To Create
 * Closure Of Upper Contexts, Except Global, Via Such Function Is Not Possible.
 */
var ExampleGlobal$1=10;
(function ExampleGlobalFunc$1(){
  var ExampleLocal$1=20;
  function Example$1FunctionDeclaration(){console.log(ExampleGlobal$1);console.log(ExampleLocal$1);}
  var Example$1FunctionExpression=function(){console.log(ExampleGlobal$1);console.log(ExampleLocal$1);};
  var Example$1FuncCons=Function('console.log(ExampleGlobal$1);console.log(ExampleLocal$1);');/** FunctionConstructor */
  Example$1FunctionDeclaration();Example$1FunctionExpression();Example$1FunctionConstructor();  
})();
/**
 * Two-Dimensional Scope Chain Lookup:Also, An Important Point At Lookup In
 * Scope Chain Is That Prototypes (If They Are) Of Variable Objects Can Be Also
 * Considered — Because Of Prototypical Nature Of EcmaScript:If Property Is Not
 * Found Directly In The Object, Its Lookup Proceeds In The Prototype Chain.Some
 * Kind Of 2Dimensional-Lookup Of The Chain: (1) On Scope Chain Links, (2) And
 * On Every Of Scope Chain Link — Deep Into On Prototype Chain Links.The Scope
 * Chain Of The Global Context Contains Only Global Object. The Context With
 * Code Type “Eval” Has The Same Scope Chain As A Calling Context.
 */GlobalContext.Scope=[Global];EvalContext.Scope===CallingContext.Scope;
 /**
	 * Affecting On Scope Chain During Code Execution:In EcmsScript There Are
	 * Two Statements Which Can Modify Scope Chain At Runtime Code Execution
	 * Phase.These Are With Statement And Catch Clause.Both Of Them Add To The
	 * Front Of Scope Chain The Object Required For Lookup Identifiers Appearing
	 * Within These Statements.If One Of These Case Takes Place, Scope Chain Is
	 * Schematically Modified As Follows:
	 */Scope=WithObject|CatchObject+(ActivationObject|VariableObject)+[[Scope]];
var With$1={With$1Prop$1:10,With$1Prop$2:20};with(With$1){console.log(With$1Prop$1);console.log(With$1Prop$2);}
Scope=With$1+(ActivationObject|VariableObject)+[[Scope]];
/** ScopeChain Modification */
/**
 * On Entering The Context Phase, “With$1Prop$1” And “With$1Prop$2” Identifiers
 * Have Been Added Into The Variable Object.Further,Already At Runtime Code
 * Executions Stage, Following Modifications Have Been
 * Made:1)With$1Prop$1=10,With$1Prop$2=10;2)The Object{With$1Prop$1: 20} Is
 * Added To The Front Of Scope Chain;3)The Met var Statement Inside With, Of
 * Course,Created Nothing, Because All Variables Have Been Parsed And Added On
 * Entering The Context Stage;4)There Is Only Modification Of “With$1Prop$1”
 * Value,And Exactly That “With$1Prop$1” Which Is Resolved Now In The Object
 * Added To The Front Of Scope Chain At Second Step; Value Of This
 * “With$1Prop$1” Was 20, And Became 30;5)Also There Is Modification Of
 * “With$1Prop$2” Which Is Resolved In Variable Object Above; Accordingly,Was
 * 10,Became 30;6)After With Statement Is Finished, Its Special Objects Is
 * Removed From The Scope Chain(And The Changed Value “With$1Prop$1” – 30 Is
 * Removed Also With That Object),Scope Chain Structure Is Restored To The
 * Previous State Which Was Before With Statement Augmentation;The Value Of
 * “With$1Prop$1” In Current Variable Object Remains The Same And The Value Of
 * “With$1Prop$2” Is Equal Now To 30 And Has Been Changed At With Statement
 * Work.Also,A Catch Clause In Order To Have Access To The Parameter-Exception
 * Creates An Intermediate Scope Object With The Only Property—Exception
 * Parameter Name,And Places This Object In Front Of The Scope Chain.
 * Schematically It Looks So:After The Work Of Catch Clause Is Finished, Scope
 * Chain Is Also Restored To The Previous State.
 */try{}catch(Error){console.log(Error);};CatchObject={Ex:"<Exception Object>"};
var With$1Prop$1=10,With$1Prop$2=10;with({With$1Prop$1:20}){var With$1Prop$1=30,With$1Prop$2=30;console.log(With$1Prop$1);console.log(With$1Prop$2);}
console.log(With$1Prop$1);console.log(With$1Prop$2);
var ValueOfReferenceType={Base:"Object To Which Property Belongs",PropertyName:"Name Of The Property In This Base."};