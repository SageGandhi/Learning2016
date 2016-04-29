var Array01 = [];
Array01[0] = "AnyContent02";
Array01['Size'] = "AnyContent01";
Array01.push({
	'Name' : "AnyContent03"
});
for (var LpIndx01 = 0; LpIndx01 < Array01.length; LpIndx01++) {
	console.log("[", LpIndx01, ":", Array01[LpIndx01], "]");
}
for ( var LpIndx02 in Array01) {
	console.log("[", LpIndx02, ":", Array01[LpIndx02], "]");
}/**
	 * Array Push/Pop Works At End Of An Array.Shift/UnSshift At The Starting Of
	 * The Array.Push(UnShift):Push An Element At The End(Begining) Of An
	 * Array,Pop(Shift):Pop An Element At The End(Begining) Of An Array
	 */
var Fruits = [ "Apple", "Orange" ];
var PoppedItemFromBegining = Fruits.shift();
console.log(PoppedItemFromBegining, Fruits);
var PoppedItemAtEnd = Fruits.pop();
console.log(PoppedItemAtEnd, Fruits);
var PushedItemFromBegining = Fruits.unshift("Lemon");
console.log(PushedItemFromBegining, Fruits);
var PushedItemAtEnd = Fruits.push("Mango");
console.log(PushedItemAtEnd, Fruits);
/**
 * Join&Split Are ViceVersa Method:Join Joins The Element With Provided
 * Delimiter,Split Splits A String Based On Provided Delimiter
 */
var SpliceArray = [
		"Splice Is The Opposite Of Slice,If You Slice,You Cut,If You Splice,You Join.",
		"Index At Which To Start Changing The Array (With Origin 0).If Greater Than The Length Of The Array, Actual Starting Index Will Be Set To The Length Of The Array. If Negative, Will Begin That Many Elements From The End.",
		"DeleteCount:An Integer Indicating The Number Of Old Array Elements To Remove. If DeleteCount Is 0, No Elements Are Removed.In This Case, Specify At Least One New Element.If DeleteCount Is Greater Than The Number Of Elements Left In The Array Starting At Start, Then All Of The Elements Through The End Of The Array Will Be Deleted.If DeleteCount Is Omitted, DeleteCount Will Be Equal To (Arr.Length - Start).",
		"<<Item>>,...The Elements To Add To The Array, Beginning At The Start Index. If Not Specify Any Elements, Splice() Will Only Remove Elements From The Array.",
		"An Array Containing The Deleted Elements. If Only One Element Is Removed, An Array Of One Element Is Returned. If No Elements Are Removed, An Empty Array Is Returned." ];
var SplicableArray = [ 'Angel', 'Clown', 'Mandarin', 'Surgeon' ];
var RemovedItem = SplicableArray.splice(2, 0, 'Drum');
/** Removes 0 Elements From Index 2, And Inserts 'Drum' */
console.log(SplicableArray, RemovedItem);
/**
 * SplicableArray:["Angel", "Clown", "Drum", "Mandarin",
 * "Surgeon"],RemovedItem:[],No Elements Removed
 */
RemovedItem = SplicableArray.splice(3, 1);
console.log(SplicableArray, RemovedItem);
/**
 * SplicableArray:["Angel", "Clown", "Drum",
 * "Surgeon"],RemovedItem:["Mandarin"]:Removes 1 Element From Index 3
 */
RemovedItem = SplicableArray.splice(2, 1, 'Trumpet');
console.log(SplicableArray, RemovedItem);
/**
 * SplicableArray:["Angel", "Clown", "Trumpet",
 * "Surgeon"],RemovedItem:["Drum"],Removes 1 Element From Index 2, And Inserts
 * 'Trumpet'
 */
RemovedItem = SplicableArray.splice(0, 2, 'Parrot', 'Anemone', 'Blue');
console.log(SplicableArray, RemovedItem);
/**
 * SplicableArray:["Parrot", "Anemone", "Blue", "Trumpet",
 * "Surgeon"],RemovedItem:["Angel", "Clown"]Removes 2 Elements From Index 0, And
 * Inserts 'Parrot', 'Anemone' And 'Blue'
 */
RemovedItem = SplicableArray.splice(SplicableArray.length - 3, 2);
/**
 * SplicableArray:["Parrot","Anemone","Surgeon"],RemovedItem:["Blue","Trumpet"]Removes
 * 2 Elements From Index 2
 */
console.log(SplicableArray, RemovedItem);
/**
 * The Slice() Method Returns A Shallow Copy Of A Portion Of An Array Into A New
 * Array Object.Parameters:[[Begin]]:Zero-Based Index At Which To Begin
 * Extraction.As A Negative Index, Begin Indicates An Offset From The End Of The
 * Sequence.Slice(-2) Extracts The Last Two Elements In The Sequence Same As
 * Slice(Arr.length-2,Arr.length).If Begin Is Undefined, Slice Begins From Index
 * 0.[[End]]:Zero-Based Index At Which To End Extraction. Slice Extracts Up To
 * But Not Including End.Slice(1,4) Extracts The Second Element Through The
 * Fourth Element (Elements Indexed 1,2,And 3).As A Negative Index, End
 * Indicates An Offset From The End Of The Sequence. Slice(2,-1)(Same As
 * Slice(2,Arr.length-1)) Extracts The Third Element Through The Second-To-Last
 * Element In The Sequence.If End Is Omitted, Slice Extracts Through The End Of
 * The Sequence (Arr.Length).Slice Does Not Alter.It Returns A Shallow Copy Of
 * Elements From The Original Array. Elements Of The Original Array Are Copied
 * Into The Returned Array As Follows:For Object References (And Not The Actual
 * Object), Slice Copies Object References Into The New Array. Both The Original
 * And New Array Refer To The Same Object. If A Referenced Object Changes, The
 * Changes Are Visible To Both The New And Original Arrays. For Strings And
 * Numbers (Not String And Number Objects), Slice Copies Strings And Numbers
 * Into The New Array. Changes To The String Or Number In One Array Does Not
 * Affect The Other Array. If A New Element Is Added To Either Array, The Other
 * Array Is Not Affected.
 */
function ListingArgumentAsArray() {
	return Array.prototype.slice.call(arguments);
};
ListingArgumentAsArray("First", "Second", 007);/** ["First","Second",7] */
