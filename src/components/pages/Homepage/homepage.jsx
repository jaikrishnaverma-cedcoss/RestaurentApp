import React from 'react';
import './homepage.css';

function HomePage(props) {
    // const data = JSON.parse(database);
    // console.log(data)
    let modified_collection=[]
    if (props.database.restaurants.length>0) {
             modified_collection = props.database.restaurants.reduce( (rows, key, index) =>{ 
                return (index % 3 === 0 ? rows.push([key]) 
                  : rows[rows.length-1].push(key)) && rows;
              }, []);
            
        }
  
    return ( 
       



        <>
                    <div className="grid" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "97%" }}>
                
        {
            modified_collection.map((row) =>
            <div className="row carder" style={{ width: "100%" }}>
                {row.map(col => (                 <div className="col">
                <h3>{col.name}</h3>
                            <h4>Delivery Soon</h4>
                            <p>Free delivery with InstaCart+</p>
                </div>))}
            </div>
            )
        }
          {/* "id": 1,
            "name": "Mission Chinese Food",
            "neighborhood": "Manhattan",
            "photograph": "1.jpg",
            "address": "171 E Broadway, New York, NY 10002",
            "latlng": {
                "lat": 40.713829,
                "lng": -73.989667
            },
            "cuisine_type": "Asian",
            "operating_hours": { */}
        </div>
        </div>
            
        </>
    );
}

export default HomePage;