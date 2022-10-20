import React from "react";

function Card({item}){
    const {login,avatar_url,html_url,id} =item;
    // console.log(login,avatar_url,html_url,id);
       return(
        <div className="card" key={id}>
            <img src={avatar_url} alt={login} className="img" />
            <h2 className="user-name">{login}</h2>
            <a href={html_url} target="_blank" rel="noopener noreferrer" className="profile">profile</a>
        </div>
    );
}

export default  Card;