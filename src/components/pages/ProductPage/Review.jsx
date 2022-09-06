import React from 'react';
function Review(props) {
    console.log(props.data)
    return ( 
        <>
        <div className="col reviews">
            <table style={{width:"100%"}}>
                <tr><td><h3 style={{textAlign:"left"}}>Reviews</h3></td></tr>
                {
                    props.data.map((rev)=><tr><td><div className="col reviewn"><div className="row" style={{justifyContent:'space-between'}}><div className="col"><h4><i class="fa fa-user" aria-hidden="true"></i>{rev.name}</h4><span className='rating'>{rev.rating}<i class="fa fa-star" aria-hidden="true"></i></span></div><h5> {rev.date}</h5></div><div><p className='comments'>{rev.comments}</p></div></div></td></tr>
                    )
                }
             
            </table>
        </div>
        </>
     );

      // {
            //     "reviews": [
            //         {
            //             "name": "Steve",
            //             "date": "October 26, 2016",
            //             "rating": 4,
            //             "comments": "Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."
            //         },
            //         {
            //             "name": "Gabriel",
            //             "date": "October 26, 2016",
            //             "rating": 5,
            //             "comments": "I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"
            //         },
            //         {
            //             "name": "Shivi",
            //             "date": "October 26, 2016",
            //             "rating": 4,
            //             "comments": "Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly."
            //         }
            //     ]
            // }
}

export default Review;