
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";

	// using javascript
	// 1. find the content div
	var content = document.getElementById("content");
	console.log( content );
	// 2. modify its html attribute by adding items_html
	content.innerHTML = items_html;

	// Create the node
	var create = document.createElement("p");
	// Create the text
	var monica = document.createTextNode("Monica");
	// Insert the text in the node
	create.appendChild(monica);
	// Insert the node in the div
	content.appendChild(create);


}

function removeLastEntry (){

	// Get the list that contains the three html entries
	var duckList = document.getElementsByTagName("li");
	duckList[duckList.length-1].remove();

	// Sergio's WRONG way
	//duckList[2].innerHTML = "";
	// Get the last element of that list

	// Remove that entry

}
