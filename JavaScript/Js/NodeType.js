var NodeType={Element:"",Attribute:"",Text:"",CDATASection:"",EntityReference:"",Entity:"",ProcessingInstruction:"",Comment:"",Document:"",
              DocumentType:"",DocumentFragment:"",Notation:""};
NodeType["Element"]={"NodeTypeCode":1,"Child":[NodeType["Element"],NodeType["ProcessingInstruction"],NodeType["Comment"],NodeType["Text"], NodeType["CDATASection"],NodeType["EntityReference"]]};
NodeType["Attribute"]={"NodeTypeCode":2,"Child":[NodeType["Text"],NodeType["EntityReference"]]},
NodeType["Text"]={"NodeTypeCode":3,"Child":[]},
NodeType["CDATASection"]={"NodeTypeCode":4,"Child":[]},
NodeType["EntityReference"]={"NodeTypeCode":5,"Child":[NodeType["Element"],NodeType["ProcessingInstruction"],NodeType["Comment"],NodeType["Text"],NodeType["CDATASection"],NodeType["EntityReference"]]},
NodeType["Entity"]={"NodeTypeCode":6,"Child":[NodeType["Element"],NodeType["ProcessingInstruction"],NodeType["Comment"],NodeType["Text"],NodeType["CDATASection"],NodeType["EntityReference"]]},
NodeType["ProcessingInstruction"]={"NodeTypeCode":7,"Child":[]},
NodeType["Comment"]={"NodeTypeCode":8,"Child":[]},
NodeType["Document"]={"NodeTypeCode":9,"Child":[NodeType["Element"],NodeType["ProcessingInstruction"],NodeType["Comment"],NodeType["DocumentType"]]},
NodeType["DocumentType"]={"NodeTypeCode":10,"Child":[]},
NodeType["DocumentFragment"]={"NodeType":11,"Child":[NodeType["Element"],NodeType["ProcessingInstruction"],NodeType["Comment"],NodeType["Text"],NodeType["CDATASection"],NodeType["EntityReference"]]},
NodeType["Notation"]={"NodeTypeCode":12,"Child":[]}
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