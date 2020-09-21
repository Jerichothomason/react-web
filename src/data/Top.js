import React,{useState} from 'react';

function Top() {
    return(
        <div className="navbar">
            <div className="elements">
                <div className="leftbar">
                      <div className="logo">
                      Jerry Todos
                          </div> 

                </div>
                
                <ul className="rightbar">
                    <li> home</li>
                    <li>contact</li>
                    <li>location</li>
                </ul>
            </div>
        </div>
    );   
};

export default Top;