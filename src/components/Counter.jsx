import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)


    const increaseHandler = () =>{
        setCount(count => count + 1
        )
    }

    const decreaseHandler = () =>{
        setCount(previousState=> previousState - 1)
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={increaseHandler}>+</button>
            <button onClick={decreaseHandler}>-</button>
        </div>
    )

}

export default Counter