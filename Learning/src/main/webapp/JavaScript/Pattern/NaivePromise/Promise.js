/** Final Goal To Execute This Asynchronously */
AsynchronousOperation(
		function(PromiseInput) {
			var Data = {
				"Id" : [ "Itachi", "Rikkudo", "Minato", "Hashirama", "Madara" ]
			};
			console.log('01.First Console Output Will Be Like This:{"Id":["Itachi","Rikkudo","Minato","Hashirama","Madara"]}');
			console.log('02.Second Console Output Will Be Like This:["Itachi","Rikkudo","Minato","Hashirama","Madara"]');
			setTimeout(function() {
				PromiseInput.Resolve(Data);
			}, 10000);
		}).Done(function(Data) {
	console.log('Inside Done:Asynchronously Comes After Synchronously:');
	console.log(Data);
	return Data.Id;
}).Done(function(Data) {
	console.log('Inside Done:Asynchronously Comes After Synchronously:');
	console.log(Data);
});
/** Final Goal To Execute This Synchronously */
AsynchronousOperation(
		function(PromiseInput) {
			var Data = {
				"Id" : [ 'Itachi', 'Rikkudo', 'Minato', 'Hashirama', 'Madara' ]
			};
			console.log('01.First Console Output Will Be Like This:{"Id":["Itachi","Rikkudo","Minato","Hashirama","Madara"]}');
			console.log('02.Second Console Output Will Be Like This:["Itachi","Rikkudo","Minato","Hashirama","Madara"]');
			PromiseInput.Resolve(Data);
		}).Done(function(Data) {
	console.log('Inside Done:Synchronously Comes B4 Asynchronously:');
	console.log(Data);
	return Data.Id;
}).Done(function(Data) {
	console.log('Inside Done:Synchronously Comes B4 Asynchronously:');
	console.log(Data);
});
AsynchronousOperation(Operation).Done(CallBack);
/**
 * The First Function AsynchronousOperation Is Invoked With One Parameter,Let's Call It Operation Which Is An Anonymous Callback Function.The Second Function Is A
 * Property Of Some Object Returned By AsynchronousOperation,Which Is Executed Right After The First One[AsynchronousOperation] Returns.And Again,Anonymous Function
 * CallBack Is Passed In It.Once Again,Done Function Does Not Wait Until AsynchronousOperation Takes Its Time To Fulfill Its Work,Done Runs Immediately After
 * AsynchronousOperation Returns.So This Is A Key To The Promise Pattern.It Is Pivotal That AsynchronousOperation Returns A New Object With Own Property Method
 * Done.Also Operation Anonymous Function Passed To AsynchronousOperation As A Parameter,Which[Operation] Is Another Function,Which[Operation] In Its Turn Expects
 * Some Promise Argument[PromiseInput]. Typically, Promise Object Has At Least Resolve Method.When Asynchronous Operation[setTimeout] Has Finished,
 * PromiseInput.Resolve Must Be Called To Notify Internal Promise Implementation That It's Time To Trigger Callback[s] Bound With Done(CallBack) Chain.
 */
/** AsynchronousOperation Function Definition:01 */
function AsynchronousOperation(OperationCallBack) {
	return {
		Done : function(DoneCallBack) {
		}
	}
}
/**
 * Now We Understand That Operation Is Executed With AsynchronousOperation,But DoneCallBack Should Wait Until Promise Is Fulfilled.It Means That We Need To Store
 * DoneCallBack For Later Use.For This Purpose It's Natural To Use Some Sort Of Queue,Simple Array Will Serve Well.When Done Is Executed(Immediately After
 * AsynchronousOperation Returns), It Pushes DoneCallBack Into Promise.InternalCallBackQueue.However,If The Promise Has Already Been Resolved(For Example,We Stored
 * Result Of AsynchronousOperation To Variable,And Call Done Later)DoneCallBack Fires Immediately Bypassing Queue Waiting Stage.Done Should Return The Same Object As
 * Itself,In Order To Allow Subsequent Chaining.
 */
/** AsynchronousOperation Function Definition:02 */
function AsynchronousOperation(OperationCallBack) {
	var Promise = {
		IsResolved : false/** Status Of The Promise */
		,
		InternalCallBackQueue : [],
		/** Storing All Done CallBack Chain */
		Resolve : function(Data) {
		}
	/** Resolve Function Definition */
	};
	OperationCallBack(Promise);
	/** Invoking Actual Asynchronous Operation,You Know The Rest(WebApi,EventLoop,CallBackQueue) */
	var Deferred = {
		Done : function(DoneCallBack) {
			if (Promise.IsResolved) {
				DoneCallBack();
			} else {
				Promise.InternalCallBackQueue.push(DoneCallBack);
			}
			return Deferred;
		}
	};
	return Deferred;
}
/** AsynchronousOperation Function Definition:03 */
function AsynchronousOperation(OperationCallBack) {
	var Promise = {
		IsResolved : false/** Status Of The Promise */
		,
		InternalCallBackQueue : [],
		/** Storing All Done CallBack Chain */
		Resolve : function(Data) {
			Promise.Data = Data;
			ExecuteInternalCallBackQueue(Data);
			Promise.IsResolved = true;
		}
	/** Resolve Function Definition */
	};
	function ExecuteInternalCallBackQueue(Data) {
		while (Promise.InternalCallBackQueue.length) {
			/**
			 * Promise.Data Property Is Used To Remember Intermediate Data To Pass Into The Next Callback.This Allows Promise To Be Modified Inside Done Callback And
			 * Return New Version Of The Promise.
			 */
			Promise.Data = Promise.InternalCallBackQueue.shift()(Promise.Data)
					|| Promise.Data;
		}
	}
	OperationCallBack(Promise);
	/** Invoking Actual Asynchronous Operation,You Know The Rest(WebApi,EventLoop,CallBackQueue) */
	var Deferred = {
		Done : function(DoneCallBack) {
			if (Promise.IsResolved) {
				DoneCallBack();
			} else {
				Promise.InternalCallBackQueue.push(DoneCallBack);
			}
			return Deferred;
		}
	};
	return Deferred;
}
/** AsynchronousOperation Function Definition:04 */
function AsynchronousOperation(OperationCallBack) {
	var Promise = {
		IsResolved : false/** Status Of The Promise */
		,
		InternalCallBackQueue : [],
		/** Storing All Done CallBack Chain */
		Resolve : function(Data) {
			Promise.Data = Data;
			ExecuteInternalCallBackQueue(Data);
			Promise.IsResolved = true;
		}
	/** Resolve Function Definition */
	};
	function ExecuteInternalCallBackQueue(Data) {
		while (Promise.InternalCallBackQueue.length) {
			/**
			 * Promise.Data Property Is Used To Remember Intermediate Data To Pass Into The Next Callback.This Allows Promise To Be Modified Inside Done Callback And
			 * Return New Version Of The Promise.
			 */
			Promise.Data = Promise.InternalCallBackQueue.shift()(Promise.Data)
					|| Promise.Data;
		}
	}
	OperationCallBack(Promise);
	/** Invoking Actual Asynchronous Operation,You Know The Rest(WebApi,EventLoop,CallBackQueue) */
	var Deferred = {
		Done : function(DoneCallBack) {
			if (Promise.IsResolved) {
				/**
				 * The Last Thing Missing Is That If Promise.IsResolved Is A Case[WithOut Any Asynchronous Part],Then Callback Must Be Called With Proper
				 * Promise.Data, And Possibly Modify It.
				 */
				Promise.Data = DoneCallBack(Promise.Data) || Promise.Data;
			} else {
				Promise.InternalCallBackQueue.push(DoneCallBack);
			}
			return Deferred;
		}
	};
	return Deferred;
}