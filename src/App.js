import React, { Component } from 'react';

import Home from './components/pages/Home';
import './BaseUI.css';
import './App.css';
import Login from './components/login';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={sessionId:-1,Credentials:[]}
  }
  SignUpHandler=(obj)=>{
    this.state.Credentials.push(obj)
    // this.setState({Credentials:this.state.Credentials})
  }
  LogOutHandler=()=>{
    this.setState({sessionId:-1})
  }
  HandleSession=(ide)=>{
    
       
       if(ide!==-1)
       {
       this.setState({sessionId:ide},()=>{
        console.log(this.state.sessionId)

       })
       }
      }
    
  state = {  }
  render() { 
    if(this.state.sessionId===-1)
  {
  return (
    <div className="App">
      
      <Login Credentials={this.state.Credentials}   auth={this.HandleSession} SignupHandler={this.SignUpHandler}/>

    </div>
  );
  }
  else{
    return (
      <div className="App">
    <Home sessionId={this.state.sessionId} LogOutHandler={this.LogOutHandler} userData={this.state.Credentials[this.state.sessionId]}/>
    </div>
    )
  }
}
  }

 
export default App;
// function App() {
//   const [page, setPage] = useState('Auth');
//   const [sessionId, setSessionId]=useState(-1);
//   function HandleSession(ide){
    
//    console.log(ide)
//    if(ide!==-1)
//    {
//    setSessionId(ide)
//    }
//   }

//   if(sessionId===-1)
//   {
//   return (
//     <div className="App">
      
//       <Login auth={HandleSession}/>

//     </div>
//   );
//   }
//   else{
//     <Home sessionId={sessionId}/>
//   }
// }

// export default App;
