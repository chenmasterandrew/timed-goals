import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch} from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers.js';
import { goalsLoaded, goalFinished, goalDeleted, goalAdded } from './redux/actions';

import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

class App extends React.Component{
    constructor (props) {
        super(props)
        this.state={currentTime:Date.now()}
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({currentTime:Date.now()});
        },1000)
       
    }
    //goals = goals.filter((goal) => goal.complete)
    // converts object to sorted array of goal IDs
    render() {
        return (
            <div id = "react-container">
                < List currentTime={this.state.currentTime}/>
                <img id = "settings" src="https://i.ibb.co/RB57Dty/more.png" />
            </div>
        );
    }
    
};

const List = (props) =>{
    const goals = useSelector(state => state.goals)
    const dispatch = useDispatch()
    useEffect(()=>{
        vscode.postMessage({
            command: 'getTimedGoals'
        })
        window.addEventListener('message',event =>{
            const message = event.data
            switch (message.command) {
                case "getTimedGoals":
                    dispatch(goalsLoaded(message.payload.goals))
                    break;
                case "createTimedGoal":
                    dispatch(goalAdded(message.payload.name,message.payload.duration,message.payload.time,message.payload.id,message.payload.complete))
                    break;
                case "deleteTimedGoal":
                    dispatch(goalDeleted(message.payload.id))
                    break;
                case "completeTimedGoal":
                    dispatch(goalFinished(message.payload.id))
                    break;
            }
        })
    },[])
    let newGoals = Object.keys(goals).sort((a,b)=>b-a)
    newGoals = newGoals.map((goalID)=>(<ListItem key={goalID} id = {goalID} currentTime={props.currentTime}/>))
    return (
        <div id ="goal-list">
                <div id = "goal-title"> Your Goals </div>
                {newGoals}
                < AddItem />
            </div>
    )
}

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const domContainer = document.getElementById('react-content');
ReactDOM.render(
<Provider store={store}>
    < App />
</Provider>,
domContainer);