var PubSubModule=(function(){
	var Topics={Data:{}};
	return{
		Publish:function(TopicName,DataAvail){
			Topics['Data'][TopicName]=Topics['Data'][TopicName]||[];
			Topics['Data'][TopicName].push(DataAvail);
			if(Topics&&Topics[TopicName]){
				for(var Indx=0;Indx<Topics[TopicName].length;Indx++){
					for(var InIndx=0;InIndx<Topics['Data'][TopicName].length;InIndx++){
						Topics[TopicName][Indx](TopicName,Topics['Data'][TopicName][InIndx]);
						console.dir({'Publisher Publish':{'TopicName':TopicName,'DataAvail':Topics['Data'][TopicName][InIndx]}});
					}
				}
			}			
		},
		Subscribe:function(TopicName,Listener){
			Topics[TopicName]=Topics&&Topics[TopicName]?Topics[TopicName]:[];
			Topics[TopicName].push(Listener);
			var ListenerIndx=Topics[TopicName].length-1;
			return{
				UnSubscribe:function(){
					Topics[TopicName].splice(ListenerIndx,1);/**Join|Connect(A Rope|Ropes)By InterWeaving The Strands At The Ends.*/
				}
			}
		},
		Print:function(){console.dir(Topics);}
	}
}());
var SubscriptionFirst=PubSubModule.Subscribe('ChannelFirst',function(Topic,Data){console.dir({'Subscriber Subscribe':{'TopicName':Topic,'Data':Data}});});PubSubModule.Print();
var SubscriptionSecond=PubSubModule.Subscribe('ChannelSecond',function(Topic,Data){console.dir({'Subscriber Subscribe':{'TopicName':Topic,'Data':Data}});});PubSubModule.Print();
PubSubModule.Publish('ChannelFirst',{Data:'Any Data To Be Provided ChannelFirst'});PubSubModule.Print();SubscriptionFirst.UnSubscribe();
PubSubModule.Publish('ChannelSecond',{Data:'Any Data To Be Provided ChannelSecond'});PubSubModule.Print();SubscriptionSecond.UnSubscribe();