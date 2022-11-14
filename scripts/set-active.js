function turnActive(element){
    console.log(`${element.id} and ${element.className}`);
    if(element.id==="icon" && element.className===" active"){
        element.className="";
    }
    else{
    element.className+=" active";
    siblingsLinks=getSiblings(element);
    for(sibling of siblingsLinks){
        sibling.className="";
    }
}
}

var getSiblings = function (obj) {
	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = obj.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== obj) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}
	return siblings;
};