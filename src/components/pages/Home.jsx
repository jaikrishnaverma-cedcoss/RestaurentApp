import React, { Component } from 'react';
import Navbar from './Nav/Navbar';
import Header from './Header/Header';
import HomePage from './Homepage/homepage';

import databases from '../../Database/test';
// import database from '../../Database/test';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { database:databases,searchString:""}
    }
      
    FindData=(event)=>{
        let res=[]

        console.log(databases)
        let input_text = event.target.value.toLowerCase();
        this.setState({searchString:input_text},()=>{

             res = databases.restaurants.filter((osx,i)=>{
                
                return databases.restaurants[i].name.toLowerCase().startsWith(this.state.searchString)
            })
            console.log(this.state.searchString)
            console.log(res)
            
            let res1 = this.state.database;
            res1.restaurants = res;
            this.setState({
                database: res1,
            })
        })
    }
    
    render() { 
        return ( 
            <>
            {/* <div className="div">Hello Id:{this.props.sessionId}</div> */}
          
            <Navbar sessionId={this.props.sessionId} LogOutHandler={this.props.LogOutHandler} userData={this.props.userData} searchString={this.state.searchString} FindData={this.FindData}/>
        <Header />
        <HomePage database={this.state.database}/>
            </>
         );
    }
}
 
export default Home;