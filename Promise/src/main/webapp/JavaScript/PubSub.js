var PubSubModule=(function(){
	var Topics={},HasOwnProp=Topics.hasOwnProperty;
	return{
		Publish:function(TopicName,DataAvail){
			if(window.console&&console.log){console.log('Publisher Publish:[TopicName:'+TopicName+'][DataAvail:'+DataAvail+']');}
			if(HasOwnProp.call(Topics,TopicName)){
				for(var Indx=0;Indx<Topics[TopicName].length;Indx++){
					Topics[TopicName][Indx](TopicName,DataAvail);	
				}
			}
		},
		Subscribe:function(TopicName,Listener){
			if(!HasOwnProp.call(Topics,TopicName)){Topics[TopicName]=[];}
			var ListenerIndx=Topics[TopicName].push(Listener)-1;
			if(window.console&&console.log){console.log('[TopicName:'+TopicName+'][Listener:'+Listener+'][ListenerIndx:'+ListenerIndx+']');}
			return{
				UnSubscribe:function(){
					Topics[TopicName].splice(ListenerIndx,1);/**Join|Connect(A Rope|Ropes)By InterWeaving The Strands At The Ends.*/
				}
			}
		}
	}
}());
var SubscriptionFirst=PubSubModule.Subscribe('ChannelFirst',function(Topic,Data){
	if(window.console&&console.log){console.log('Subscriber Subscribe:[TopicName:'+Topic+'][Data:'+Data+']');}
}),SubscriptionSecond=PubSubModule.Subscribe('ChannelSecond',function(Topic,Data){
	if(window.console&&console.log){console.log('Subscriber Subscribe:[TopicName:'+Topic+'][Data:'+Data+']');}
});
PubSubModule.Publish('ChannelFirst',{Data:'Any Data To Be Provided ChannelFirst'});
PubSubModule.Publish('ChannelSecond',{Data:'Any Data To Be Provided ChannelSecond'});
SubscriptionFirst.UnSubscribe();SubscriptionSecond.UnSubscribe();
