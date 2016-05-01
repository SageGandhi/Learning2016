/**
 * Web Related Discussion:http://thewebahead.net/| JeremyKeith:http://adactio.com/| CssDesign:http://www.csszengarden.com|The Document Object Model (DOM) Is The
 * Model That Describes How All Elements In An HTML Page, Like Input Fields, Images, Paragraphs Etc., Are Related To The Topmost Structure: The Document Itself. By
 * Calling The Element By Its Proper DOM Name, We Can Influence It.
 */
if (!Array.isArray) {
	Array.isArray = function(Args) {
		return Object.prototype.toString.call(Args) === '[object Array]';
	}
}