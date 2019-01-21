import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';
import { connect } from 'react-redux';
//import * as ACTION_TYPES from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler(action, value) {
        switch (action) {
            case 'increment': this.setState((prevState) => { return { counter: prevState.counter + 1 } }); break;
            case 'decrement': this.setState((prevState) => { return { counter: prevState.counter - 1 } }); break;
            case 'add': this.setState((prevState) => { return { counter: prevState.counter + value } }); break;
            case 'substract': this.setState((prevState) => { return { counter: prevState.counter - value } }); break;
            default: break;
        }
    }

    render() {
        return (
            <div>
                <CounterControl label="increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="substract 7" clicked={this.props.onSubstractCounter} />                
                <CounterDisplay valueToDisplay={this.props.ctr} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //gives us the part of data what we need from the global big store, and maps to specific key ('ctr' here)
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}


const mapDispatchToProps = dispatch => {
    //this is equivalent to store.dispatch in redux-base.js, but here we have no direct access to store, we have access only from connect()
    //this tell which kinds of actions do I want to dispatch from this container (component)
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubstractCounter: () => dispatch(actionCreators.substract(10)),
        onStoreResult: (result) => { dispatch(actionCreators.storeResult(result)) },
        onDeleteResult: (id) => { dispatch(actionCreators.deleteResult(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
