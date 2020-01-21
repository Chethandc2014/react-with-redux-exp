import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Login from './login';
import { createStore } from 'redux';
class App extends Component {
  constructor() {
    super();
    let store=createStore(this.addList);
    this.state = {
      name: 'React',
      store
    };
    store.subscribe(()=>{
      console.log(store.getState());
    });
  }
  
   addList(state=0,action){
     debugger
     console.log(action)
     if(action.value){
      return state+action['value'];
     }
     
  }

  render() {
    return (
      <div>
        // <Hello name={this.state.name} />
        // <p>
        //   Start editing to see some magic happen :)
        // </p>
        <Login store={this.state.store}></Login>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
