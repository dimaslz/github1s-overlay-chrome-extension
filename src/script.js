const isPrivate = /<span[^>]+>Private<\/span>/g.test(document.body.innerHTML);

function onClickCloseButton() {
	const github1sIframeButtonClose = document.getElementById('github1s-iframe-button-close');
	github1sIframeButtonClose.removeEventListener('click', onClickCloseButton);

	const github1sIframeWrapper = document.getElementById('github1s-iframe-wrapper');
	document.body.removeChild(github1sIframeWrapper);
}

function onClickOpenEditorButton() {
	// create a wrapper container for the iframe
	const div = document.createElement('div');
	div.id = 'github1s-iframe-wrapper';
	div.style = 'position: absolute; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; z-index: 999999999;';

	// create the iframe element
	const iframe = document.createElement('iframe');
	iframe.style = 'width: 100%; height: 100%; border: 0;';
	const pathname = document.location.pathname;
	iframe.src = `https://github1s.com${pathname}`;

	// create a close button
	const button = document.createElement('button');
	button.id = 'github1s-iframe-button-close';
	button.className = 'btn';
	button.style = 'position: absolute; right: 20px; bottom: 20px; z-index: 9999999999; color: white; padding: 3px 12px; font-size: 12px; line-height: 20px;';
	button.addEventListener('click', onClickCloseButton);


	button.textContent = 'close';

	div.appendChild(iframe);
	div.appendChild(button);

	document.body.appendChild(div);
}

if (!isPrivate) {
	// create list
	const list = document.querySelector('.pagehead-actions');
	if (!list) return;

	// create the new element in the list
	const li = document.createElement('li');
	li.innerHTML = `<a class="btn ml-2 d-none d-md-block" style="
	padding: 3px 12px;
	font-size: 12px;
	line-height: 20px;
	">
	Open code viewer overlay
	</a>`;

	li.addEventListener('click', onClickOpenEditorButton);

	list.appendChild(li);
}
