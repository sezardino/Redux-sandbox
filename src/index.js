import {createStore} from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return state - action.payload;

		default:
			return state;
	}
};

const store = createStore(reducer);

const incButton = document.querySelector('#inc');
const decButton = document.querySelector('#dec');
const rndButton = document.querySelector('#rnd');
const counter = document.querySelector('#counter');

store.subscribe(() => (counter.textContent = store.getState()));

incButton.addEventListener('click', () => {
	store.dispatch({type: 'INC'});
});
decButton.addEventListener('click', () => {
	store.dispatch({type: 'DEC'});
});
rndButton.addEventListener('click', () => {
	const payload = Math.floor(Math.random() * 10);
	store.dispatch({type: 'RND', payload});
});
