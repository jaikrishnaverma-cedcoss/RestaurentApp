import React from 'react';
function Review(props) {
    console.log(props.data)
    return (
        <>
            <div className="col reviews">
                <table style={{ width: "100%" }}>
                    <tr><td><h3 style={{ textAlign: "left" }}>Reviews</h3></td></tr>
                    {
                        props.data.map((rev) => <tr><td><div className="col reviewn"><div className="row" style={{ justifyContent: 'space-between' }}><div className="col"><h4><i class="fa fa-user" aria-hidden="true"></i>{rev.name}</h4><span className='rating'>{rev.rating}<i class="fa fa-star" aria-hidden="true"></i></span></div><h5> {rev.date}</h5></div><div><p className='comments'>{rev.comments}</p></div></div></td></tr>
                        )
                    }

                </table>
            </div>
        </>
    );
}

export default Review;