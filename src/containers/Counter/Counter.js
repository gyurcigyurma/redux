import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';

export default class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler(action, value) {
        switch (action) {
            case 'increment': this.setState((prevState) => { return { counter: prevState.counter + 1 }}); break;
            case 'decrement': this.setState((prevState) => { return { counter: prevState.counter - 1 }}); break;
            case 'add': this.setState((prevState) => { return { counter: prevState.counter + value }}); break;
            case 'substract': this.setState((prevState) => { return { counter: prevState.counter - value }}); break;
            default: break;
        }
    }

    render() {
        return (
            <div>
                <CounterControl label="increment" clicked={() => this.counterChangedHandler('increment')} />
                <CounterControl label="decrement" clicked={() => this.counterChangedHandler('decrement')} />
                <CounterControl label="add 5" clicked={() => this.counterChangedHandler('add', 5)} />
                <CounterControl label="substract 5" clicked={() => this.counterChangedHandler('substract', 5)} />
                <CounterDisplay valueToDisplay={this.state.counter} />
            </div>
        )
    }
}
