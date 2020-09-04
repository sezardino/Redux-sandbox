import React from 'react';
import ReactDom from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import reducer, {ActionCreator} from './reducer';
import Counter from './counter';

const store = createStore(reducer);
const {dispatch} = store;
const {inc, dec, rnd} = bindActionCreators(ActionCreator, dispatch);

const update = () => {
	ReactDom.render(
		<Counter
			count={store.getState()}
			inc={inc}
			dec={dec}
			rnd={() => {
				const payload = Math.floor(Math.random() * 10);
				rnd(payload);
			}}
		/>,
		document.querySelector('#root')
	);
};

update();
store.subscribe(update);
