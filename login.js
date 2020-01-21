import React,{Component} from 'react';
import {render} from 'react-dom';


class Login extends Component{
  constructor(props){
    super();
   // this.addList.bind(this);
     this.state={
      store:props.store
     };

  }


  render(){
    return (
      <div>Chethan 
      <button onClick={()=>{this.state.store.dispatch({type:"sdf",value:3})}}>CLICK</button>
      </div>
    );
  }
}

export default Login;