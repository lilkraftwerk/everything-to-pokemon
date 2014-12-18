walk(document.body);

// if (window.MutationObserver) {
// 	var observer = new MutationObserver(function (mutations) {
// 		Array.prototype.forEach.call(mutations, function (m) {
// 			if (m.type === 'childList') {
// 				walk(m.target);
// 			} else if (m.target.nodeType === 3) {
// 				handleText(m.target);
// 			}
// 		});
// 	});

// 	observer.observe(document.body, {
// 		childList: true,
// 		attributes: false,
// 		characterData: true,
// 		subtree: true
// 	});
// }

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}


function getCatchphrase(){
	var adlibs = ["Based", "Brrrrrr", "Skrrt Skrrt Skrrt", "Swag", "Cook", "Woop", "Bang Bang", "Flocka", "Truuuuu", "Three Hunna", "Style", "Swerve", "Soul", "Hanh", "2 Chaaaaainz", "Eeeuugh", "Yawk Yawk Yawk"]
	var index = Math.floor(Math.random() * adlibs.length)
	return adlibs[index]
}

function handleText(textNode)
{
	if (textNode.parentElement.tagName.toLowerCase() === "script" || textNode.parentElement.isContentEditable === true) {
		return false;
	}

	var oldValue = textNode.nodeValue;
	var v = oldValue;

	// v = v.replace(/\b/ig, getCatchphrase());
	v = v.replace(/(\w{3,})([.!?;])/ig, "$1," + " " + getCatchphrase() + "$2");

	// v = v.replace(/\w+/ig, getCatchphrase);
	// (\w+)([.!?;])
	v = v.replace(/\b(a)n (skeletons?)\b/ig, "$1 $2");
	v = v.replace(/\b(s)ocial justice (warriors?)/ig, "$1keleton $2");

	if (v !== oldValue) {
		textNode.nodeValue = v;
	}
}