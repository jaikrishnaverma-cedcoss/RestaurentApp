import React, { Component } from 'react';
import Navbar from './Nav/Navbar';
import Header from './Header/Header';
import HomePage from './Homepage/homepage';
import databases from '../../Database/test';
import ProductPage from './ProductPage/ProductPage';
import './home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { database: databases, databases: databases.restaurants, searchString: "",ProductPage:false }
    }
   onProduct=(args)=>{
    if(args===-1)
       this.setState({ProductPage:false})
    else
    this.setState({ProductPage:args},()=>{

    })
       
   }
    FindData = (event) => {
        let res = []

        // console.log(databases)
        let input_text = event.target.value.toLowerCase();

        this.setState({ searchString: input_text }, () => {
            if (input_text === "") {
                let res1 = this.state.database;
                res1.restaurants = this.state.databases;
                this.setState({
                    database: databases
                })
            } else {
                res = this.state.databases.filter((osx, i) => {

                    return (this.state.databases[i].name.toLowerCase().startsWith(this.state.searchString)|| this.state.databases[i].neighborhood.toLowerCase().startsWith(this.state.searchString)||this.state.databases[i].cuisine_type.toLowerCase().startsWith(this.state.searchString))
                })

                let res1 = this.state.database;
                res1.restaurants = res;
                this.setState({
                    database: res1
                })
            }
        })
    }

    render() {
        if(!this.state.ProductPage)
        {
        return (
            <>
                {/* <div className="div">Hello Id:{this.props.sessionId}</div> */}
                 
                <Navbar sessionId={this.props.sessionId}  onProduct={this.onProduct} LogOutHandler={this.props.LogOutHandler} userData={this.props.userData} searchString={this.state.searchString} FindData={this.FindData} />
                <Header />
                <HomePage database={this.state.database} onProduct={this.onProduct}/>
                
            </>
        );
        }
        else{
            return (
                <>
            <Navbar  onProduct={this.onProduct} sessionId={this.props.sessionId} LogOutHandler={this.props.LogOutHandler} userData={this.props.userData} searchString={this.state.searchString} FindData={this.FindData} />
               
            <ProductPage data={this.state.databases.filter((x)=> parseInt(x.id)===this.state.ProductPage)}/>
            </>);
        }
    }
}

export default Home;