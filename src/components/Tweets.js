import React from "react"
import Tweetdata from "./tweetdata"
import Bar from "./bar.js"


const Tweets = (props) => {
    const tweets=[{name:'deved',tweet:'react uggg'},
{name:'terversy media',tweet:'poli mannn'}];
    
    return(
    <section>
        <Bar />
        <div> there are {tweets.length} tweets</div>
        {tweets.map((tweet) =>(
             <Tweetdata name={tweet.name} tweet={tweet.tweet}/>
            // {console.log("awesome");}
        ))}
        <Tweetdata name="thomas" tweet=" ia m jd khri" />
        <div> i am a disco dance    </div>
        <Tweetdata name={tweets[0].name} tweet={tweets.tweet}/>
        <Tweetdata name={tweets.name} tweet={tweets.tweet}/>


        <div> great</div>
    </section>
    );
    };
export default Tweets;