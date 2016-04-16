var PubSubModule=(function(){
	var Topics={Data:{}},HasOwnProp=Topics.hasOwnProperty;
	return{
		Publish:function(TopicName,DataAvail){
			Topics['Data'][TopicName]=Topics['Data'][TopicName]||[];Topics['Data'][TopicName].push(DataAvail);
			if(HasOwnProp.call(Topics,TopicName)){
				for(var Indx=0;Indx<Topics[TopicName].length;Indx++){
					for(var InIndx=0;InIndx<Topics['Data'][TopicName].length;InIndx++){
						Topics[TopicName][Indx](TopicName,Topics['Data'][TopicName][InIndx]);
						JSON.stringify({'Publisher Publish':{'TopicName':TopicName,'DataAvail':Topics['Data'][TopicName][InIndx]}});
					}
				}
			}
		},
		Subscribe:function(TopicName,Listener){
			if(!HasOwnProp.call(Topics,TopicName)){
				Topics[TopicName]=[];
			}
			var ListenerIndx=Topics[TopicName].push(Listener)-1;
			return{
				UnSubscribe:function(){
					Topics[TopicName].splice(ListenerIndx,1);/**Join|Connect(A Rope|Ropes)By InterWeaving The Strands At The Ends.*/
				}
			}
		}
	}
}());
var SubscriptionFirst=PubSubModule.Subscribe('ChannelFirst',function(Topic,Data){
	JSON.stringify({'Subscriber Subscribe':{'TopicName':Topic,'Data':Data}});
}),SubscriptionSecond=PubSubModule.Subscribe('ChannelSecond',function(Topic,Data){
	JSON.stringify({'Subscriber Subscribe':{'TopicName':Topic,'Data':Data}});
});
PubSubModule.Publish('ChannelFirst',{Data:'Any Data To Be Provided ChannelFirst'});
PubSubModule.Publish('ChannelSecond',{Data:'Any Data To Be Provided ChannelSecond'});
SubscriptionFirst.UnSubscribe();SubscriptionSecond.UnSubscribe();
/**Observer Pattern**/
function Observer(){this.HandlerChain=[];}
Observer.prototype.Subscribe=function(Fn){this.HandlerChain.push(Fn);};
Observer.prototype.UnSubscribe=function(Fn){this.HandlerChain=this.HandlerChain.filter(function(EachFn){if(EachFn!==Fn){
	return EachFn;
}})};
Observer.prototype.Trigger=function(Event,Scope){
	Scope=Scope||window;
	this.HandlerChain.forEach(function(Fn){Fn.call(Scope,Event);});
};
function Log(Arg){JSON.stringify({'Message':Arg})}
var Handler=function(EventData){Log("Fired:"+JSON.stringify(EventData));};
var Obsrvr=new Observer();
Obsrvr.Subscribe(Handler);
Obsrvr.Trigger('Event007');
Obsrvr.UnSubscribe(Handler);
Obsrvr.Trigger('Event008');
Obsrvr.Subscribe(Handler);
Obsrvr.Trigger('Event009');
Obsrvr.UnSubscribe(Handler);