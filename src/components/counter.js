import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreator} from '../reducer';

const Counter = ({count, inc, dec, rnd}) => {
	return (
		<div className="jumbotron">
			<h2>{count}</h2>
			<button className="btn btn-primary btn-lg" onClick={dec}>
				DEC
			</button>
			<button className="btn btn-primary btn-lg" onClick={inc}>
				INC
			</button>
			<button className="btn btn-primary btn-lg" onClick={rnd}>
				RND
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		count: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(ActionCreator, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
