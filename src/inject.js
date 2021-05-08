function inject() {
	let path = location.pathname;

	let element = document.querySelector("[href$='/discussions/new']") // [data-hotkey="c", #js-repo-pjax-container a[role=button]]
	let category = path.split('/')[5];

	if (!element)
		return;

	// console.log(element);
	// console.log(path);

	var currentHref = element.getAttribute('href').split('?')[0];

	element.setAttribute('href', `${currentHref}${category ? '?category=' + category : ''}`);

	console.log("'New Discussion' action updated for current category (%s)", category || '');
}

let updatedRecently = false;

for (let eventKey of ['DOMContentLoaded', 'DOMNodeInserted']) {
	document.addEventListener(eventKey, (event) => {
		if (
			!updatedRecently &&
			document.readyState === 'complete' &&
			location.origin === 'https://github.com'
		) {
			updatedRecently = true;
			inject();
			setTimeout(() => updatedRecently = false, 100);
		}
	})
}