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
/**Sample Feature Detection:*/
var Simpleton=(function(){
    var Exist={};
    if(!document.getElementsByTagName){
        Exist["getElementsByTagName"]=false;
    }else{
        Exist["getElementsByTagName"]=true;
    }
    return{
        hasFeature:function(key){
            return Exist[key];/**||true-->FallBack,Better Than IfElse For Each Property To Check*/
        }
    };
})();
console.log('getElementsByTagName Feature Available:',Simpleton.hasFeature('getElementsByTagName'));
/**BackSlash-->Tilt Toward SmallCase B(First Letter) Curve,
Slash-->Tilt Towards SmallCase(For S It Is Case Insensitive,To Match With Previous Analogy)S(First Letter)Curve*/