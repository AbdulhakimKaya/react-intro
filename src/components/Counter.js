import React, { useState } from 'react';

function Counter(props) {
    // count -> state kullanılmak istendiğinde kullanıcak değişken olarak tanımlanmıştır.
    // setCount -> state'in değeri değiştirilmek istendiğinde kullanılacak fonksiyon olarak tanımlanmıştır.
    const [count, setCount] = useState(0);

    const [amount, setAmount] = useState(3)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + amount)} >{amount} Arttır</button>
            <button onClick={() => setCount((prev) => prev + amount)} >{amount} Arttır</button>
            <hr/>
            <div>Arttırma: {amount}</div>
            <button onClick={() => setAmount(1)} >+1</button>
            <button onClick={() => setAmount(3)} >+3</button>
            <button onClick={() => setAmount(10)} >+10</button>

        </div>
    );
}

export default Counter;