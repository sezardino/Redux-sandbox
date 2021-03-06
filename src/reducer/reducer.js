const initialState = 0;

const ActionCreator = {
	inc: () => ({type: 'INC'}),
	dec: () => ({type: 'DEC'}),
	rnd: () => ({type: 'RND', payload: Math.floor(Math.random() * 10)}),
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return state + action.payload;

		default:
			return state;
	}
};

export {ActionCreator};
export default reducer;
