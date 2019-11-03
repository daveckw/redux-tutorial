import React from 'react'
import { render } from 'react-dom'
import { createStore } from "redux";

//counter REDUCER
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

//Counter REACT COMPONENT taking PROPS of value, onIncrement and onDecrement
const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

//Create REDUX STORE
const store = createStore(counter);

//Main APP to be rendered
const App = () => (
   
        <Counter 
            value = {store.getState()}
            onIncrement = { ()=>  
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement = { ()=> 
                store.dispatch({
                    type: 'DECREMENT'
                })
            }  
        />
);

const renderApp = () => (
    render(
    <App />,
    document.getElementById('root')
  )
)

//if there is any changes to the state, re-render
store.subscribe(renderApp);
renderApp();
