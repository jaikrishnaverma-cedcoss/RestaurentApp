import React, { Component } from 'react';
import Oper from './Operational';
import Review from './Review';
import './productpage.css';
class ProductPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {}

    render() {
        const oper = Object.entries(this.props.data[0].operating_hours)

        return (

            <>
                <div className="boxcard" style={{ marginTop: "90px", color: "white", minWidth: "100vh", width: "75%" }}>
                    <div className="row" >
                        <img src="burger.webp" alt="" />
                        <div className="col" style={{ width: "60%" }}>
                            <div className="row data" style={{ justifyContent: "flex-start", width: "80%", marginLeft: "5%" }}><h3>Dish Name:</h3><p className='otherhalf'>{this.props.data[0].name}</p></div>
                            <div className="row data" style={{ justifyContent: "flex-start", width: "80%", marginLeft: "5%" }}><h3>Address:</h3><p className='otherhalf'>{this.props.data[0].address}</p></div>
                            <div className="row data" style={{ justifyContent: "flex-start", width: "80%", marginLeft: "5%" }}><h3>Cuisine Type:</h3><p className='otherhalf'>{this.props.data[0].cuisine_type}</p></div>
                            <div className="row data" style={{ justifyContent: "flex-start", width: "80%", marginLeft: "5%" }}><h3>Operating Hours:</h3>
                                <Oper data={oper} />
                            </div>


                        </div>
                    </div>
                    <Review data={this.props.data[0].reviews} />
                </div>
            </>
        );
    }
}

export default ProductPage;