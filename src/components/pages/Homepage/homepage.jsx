import React from 'react';
import './homepage.css';

function HomePage(props) {
    let modified_collection = []
    if (props.database.restaurants.length > 0) {
        modified_collection = props.database.restaurants.reduce((rows, key, index) => {
            return (index % 3 === 0 ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows;
        }, []);

    }

    return (
        <>
            <div className="grid" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "97%" }}>

                    {
                        modified_collection.map((row) =>
                            <div className="row carder" style={{ width: "100%" }}>
                                {row.map(col => (<div className="col" onClick={()=>props.onProduct(parseInt(col.id))}>
                                    <h3>{col.name}</h3>
                                    <h4>{`Cuisine Type: ${col.cuisine_type}`}</h4>
                                    <p>{`Neighborhood: ${col.neighborhood}`}</p>
                                </div>))}
                            </div>
                        )
                    }

                </div>
            </div>

        </>
    );
}

export default HomePage;