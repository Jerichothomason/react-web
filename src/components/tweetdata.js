import React from 'react';

const Tweetdata = (props) => {
        console.log("inside core");
 return(
    <div>
        <div>{props.name} {props.tweet}</div>
        {/* <div> huuray</div> */}
    </div>
 );
};

export default Tweetdata;