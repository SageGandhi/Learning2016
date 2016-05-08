/**
 * Web Related Discussion:http://thewebahead.net/| JeremyKeith:http://adactio.com/| CssDesign:http://www.csszengarden.com|The Document Object Model (DOM) Is The
 * Model That Describes How All Elements In An HTML Page, Like Input Fields, Images, Paragraphs Etc., Are Related To The Topmost Structure: The Document Itself. By
 * Calling The Element By Its Proper DOM Name, We Can Influence It.Jquery.1.4 Reference Guide|Learning Jquery|Jquery CookBook|Jeremy Keith(Dom Scripting)|Peter Paul
 * Koch On JavaScript|Jonathon Snook-Advanced Dom Scripting,Ajax,Api,Library|Content(Html),Presentation(Css),Behavior(JavaScript)|Jquery:Find Something Then Do Something|
 * Xcanvas With Mordeniser|Vector Markup Language|CanIUse.com For Feature Detection|JsFiddle|JsBin|Minifier:JsMin,DojoShrinkSafe,DeanEdwardsPacker,YuiCompressor,Google
 * ClosureCompiler|Css Selectors Are One Based Index Like Array In JavaScript Is Zero Based Index|JavaScript First Introduced For Input Form Validation In Client Side To
 * Reduce RoundTrip Time At The Age Of Telephone Modem(28.8Kbps Digital Subscriber Line).Minutes To Learn But Years To Master.Mocha,LiveScript(Client),LiveWire(Server),
 * JavaScript.JavaScript In NetscapeNavigator,JScript In InternetExplorer.Standard Submitted To European Computer Manufacturers Association.Technical Committee #39(TC39)
 * Was Assigned To “standardize the syntax and semantics of a general purpose, cross-platform, vendor-neutral scripting language”.Defined New Scripting Language Ecma-262,
 * Pronounciated As(Ek-Ma).Adopted By International Organization For Standardization & International Electrotechnical Commission.JavaScript:=Core(EcmaScript)+Document 
 * Object Model(Dom)+Browser Object Model(Bom).A Host Environment Provides The Base Implementation Of ECMAScript & Implementation Extensions Designed To Interface With The 
 * Environment Itself.Host Environment Like Browser(ClientSide)/NodeJs(ServerSide)/AdobeFlash.JavaScripts Implements EcmaScript,As Well As Adobe ActionScript.Object Must Be
 * Platform Independent.DOM Was A Need,To Manipulate Dhtml In CrossBrowser Manner.Document|Element|ProcessingInstruction|Comment|DocumentType|DocumentFragment|Text|
 * CDATASection|EntityReference|Attr|Entity|Notation,Node|NodeList(Children Of A Node Ordered List)|NamedNodeMap(ElementsByTagName UnOrder Set Of Nodes).Live Copy.Use The 
 * Method Name "Remove" When The Method Changes The Structural Model, And The Method Name "Delete" When The Method Gets Rid Of Something Inside The Structure Model. The 
 * Thing That Is Deleted Is Not Returned. The Thing That Is Removed May Be Returned, When It Makes Sense To Return It.When A DocumentFragment Is Inserted Into A Document
 * (Or Indeed Any Other Node That May Take Children) The Children Of The DocumentFragment And Not The DocumentFragment Itself Are Inserted Into The Node.Document Interface 
 * Also Contains The Factory Methods Needed To Create These Objects.The Node Objects Created Have A OwnerDocument Attribute Which Associates Them With The Document Within 
 * Whose Context They Were Created.GetElementsByTagName Returns A NodeList Of All The Element With A Given Tag Name In The Order In Which They Would Be Encountered In A 
 * Preorder Traversal Of The Document Tree.[DOMString]nodeName;[DOMString]nodeValue;[IntShort]nodeType;[Node]parentNode;NodeList]childNodes;Node]firstChild;Node]lastChild;
 * [Node]previousSibling;[Node]nextSibling;[NamedNodeMap]attributes;[Document]ownerDocument;[Node]insertBefore([Node]newChild,[Node]refChild);[Node]cloneNode([Boolean] deep);
 * [Node]replaceChild([Node]newChild,[Node]oldChild);[Node]removeChild([Node]oldChild);[Node]appendChild([Node]newChild);[Boolean]hasChildNodes();NodeList[[Node]item(Method)];
 * NamedNodeMap[[Node]getNamedItem(DOMString);[Node]setNamedItem([Node]):Taken nodeName;[Node]removeNamedItem(DOMString);[Node]item(Index);],CharacterData[[DOMString[data],
 * [Int length],substringData(offset,count);appendData(DOMString);insertData(offset,DOMString);deleteData(offset,count);replaceData(offset,count,DOMString)]*/
var NodeType={
    Element:{NodeType:1,Child:[Element,ProcessingInstruction,Comment,Text,CDATASection,EntityReference]},
    Attribute:{NodeType:2,Child:[Text,EntityReference]},
    Text:{NodeType:3,Child:[]},
    CharacterDataSection:{NodeType:4,Child:[]},
    EntityReference:{NodeType:5,Child:[Element,ProcessingInstruction,Comment,Text,CDATASection,EntityReference]},
    Entity:{NodeType:6,Child:[Element,ProcessingInstruction,Comment,Text,CDATASection,EntityReference]},
    ProcessingInstruction:{NodeType:7,Child:[]},
    Comment:{NodeType:8,Child:[]},
    Document:{NodeType:9,Child:[Element,ProcessingInstruction,Comment,DocumentType]},
    DocumentType:{NodeType:10,Child:[]},
    DocumentFragment:{NodeType:11,Child:[Element,ProcessingInstruction,Comment,Text,CDATASection,EntityReference]},
    Notation:{NodeType:12,Child:[]}
};
!function(){
	for(var Internal in document){console.log("Owned Property",document.hasOwnProperty(Internal),":",typeof Internal,":",Internal);}
	for(var Internal in DOMException){if(/(.)*_ERR/.test(Internal)){console.log(DOMException[Internal],":",Internal);}}
	console.log(document.getElementsByTagName('body')[0].tagName===document.getElementsByTagName('body')[0].nodeName);
	console.log(document.doctype,document.documentElement,document.implementation.hasFeature('xml','1.0'),document.getElementsByTagName('*'));
}();
/**The Attr Interface Represents An Attribute In An Element Object.Typically The Allowable Values For The Attribute Are Defined In A Document Type Definition.Attr Objects 
 *Inherit The Node Interface, But Since They Are Not Actually Child Nodes Of The Element They Describe, The DOM Does Not Consider Them Part Of The Document Tree. Thus, The 
 * Node Attributes parentNode, previousSibling, And nextSibling Have A Null Value For Attr Objects. The DOM Takes The View That Attributes Are Properties Of Elements Rather 
 * Than Having A Separate Identity From The Elements They Are Associated With; This Should Make It More Efficient To Implement Such Features As Default Attributes Associated 
 * With All Elements Of A Given Type.Furthermore, Attr Nodes May Not Be Immediate Children Of A DocumentFragment.However, They Can Be Associated With Element Nodes Contained 
 * Within A DocumentFragment.In Short, Users And Implementors Of The DOM Need To Be Aware That Attr Nodes Have Some Things In Common With Other Objects Inheriting The Node 
 * Interface,But They Also Are Quite Distinct.The Attribute’S Effective Value Is Determined As Follows: If This Attribute Has Been Explicitly Assigned Any Value, That Value 
 * Is The Attribute’S Effective Value; Otherwise, If There Is A Declaration For This Attribute, And That Declaration Includes A Default Value, Then That Default Value Is The 
 * Attribute’s Effective Value; Otherwise, The Attribute Does Not Exist On This Element In The Structure Model Until It Has Been Explicitly Added. Note That The NodeValue 
 * Attribute On The Attr Instance Can Also Be Used To Retrieve The String Version Of The Attribute’S Value(s).
 * [Element:[DOMString tagName],[DOMString getAttribute(DOMString name)],[setAttribute(DOMString name,DOMString value)],[removeAttribute(DOMString name)],
 * [Attr getAttributeNode(DOMString name)],[Attr setAttributeNode(Attr newAttr)],[Attr removeAttributeNode(Attr oldAttr)],[NodeList getElementsByTagName(DOMString name)],
 * [normalize()]];[Text:[[Text]splitText(offset)]]*/
var WrapperDiv = document.createElement("div");
WrapperDiv.appendChild(document.createTextNode("Part.001"));
WrapperDiv.appendChild(document.createTextNode("Part.002"));
WrapperDiv.normalize();