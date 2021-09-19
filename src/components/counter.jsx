import { useState } from "react";

export function Counter() {

    const [ counter, setCounter ] = useState(0);

    function Increment() {
        setCounter(counter + 10 );
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment} >Increment + 10</button>
        </div>
    );
}