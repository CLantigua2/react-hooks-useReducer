import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'reset':
			return initialState;
		case 'increment':
			return { count: state.count + 1 };
		case 'incrementByFive':
			return { count: state.count + 5 };
		case 'decrement':
			return { count: state.count - 1 };
		case 'decrementByFive':
			return { count: state.count - 5 };
		default:
			// A reducer must always return a valid state.
			// Alternatively you can throw an error if an invalid action is dispatched.
			return state;
	}
}

function Counter({ initialCount }) {
	const [ state, dispatch ] = useReducer(reducer, { count: initialCount });
	return (
		<div>
			<p>Count: {state.count === undefined ? (state.count = 0) : state.count}</p>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatch({ type: 'incrementByFive' })}>+ 5</button>
			<button onClick={() => dispatch({ type: 'decrementByFive' })}>- 5</button>
		</div>
	);
}

export default Counter;
