import App from './App.svelte';

const app = new App({
	target: document.body,		//This injects the content in <main> into the <body> of the index.html
	//These props(properties) are used to parse data into the variables in the svelte <script> component.
	props: {
		name: 'world'
	}
});

export default app;