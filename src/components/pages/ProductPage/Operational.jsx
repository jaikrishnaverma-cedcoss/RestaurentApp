import React from 'react';
function Oper(props) {
    return (
        <>
            <div className="col otherhalf">
                {props.data.map((x) => <span className='row span'><span>{x[0]}</span><p>{x[1]}</p></span>)}
            </div>
        </>
    );
}

export default Oper;