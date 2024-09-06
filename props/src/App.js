import React from "react";
import Joke from "./components/Joke";

export default function App()
{
    return(
        <section>
            <Joke setup="Why don’t skeletons fight each other?" punchline="They don’t have the guts!" upvotes={2} downvotes={0}  />
            <Joke setup="Why was the math book sad?" punchline="It had too many problems." />
            <Joke setup="Why don’t eggs tell jokes?" punchline="They’d crack each other up!" />
            <Joke setup="Why did the scarecrow win an award?" punchline="Because he was outstanding in his field!" />
        </section>
    )
}