import React from 'react';

const Counter = ({count, inc, dec, rnd}) => {
	return (
		<div className="jumbotron">
			<h2>{count}</h2>
			<button className="btn btn-primary btn-lg" onClick={inc}>
				DEC
			</button>
			<button className="btn btn-primary btn-lg" onClick={dec}>
				INC
			</button>
			<button className="btn btn-primary btn-lg" onClick={rnd}>
				RND
			</button>
		</div>
	);
};

export default Counter;
