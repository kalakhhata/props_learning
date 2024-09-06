import React from "react";

export default function Joke(props){
    return(
        <section>
            <h1>Setup : {props.setup}</h1>
            <h4>Punchline : {props.punchline} </h4>
            {props.upvote && <p>Upvotes : {props.upvote}</p>}
            {props.downvotes && <p>Downvotes : {props.downvote}</p>}
        </section>
    )
}