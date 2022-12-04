import React, { useState, useEffect } from 'react';

function Counter() {
    // count -> state kullanılmak istendiğinde kullanıcak değişken olarak tanımlanmıştır.
    // setCount -> state'in değeri değiştirilmek istendiğinde kullanılacak fonksiyon olarak tanımlanmıştır.
    const [count, setCount] = useState(0);

    const [amount, setAmount] = useState(1)

    // bu yazım ile bu component üzerindeki herhangi bir state değiştiği anda tetiklenir ve fonksiyon çalıştırılır
    useEffect(() => {
        console.log("Bir state değişti")
    })

    // component ilk kez dom'a mount edildiği anın yakalanması işlemi için yazılır
    /*
     mesela sayfa ilk açıldığında component dom'a mount edildiğinde kullanıcıların bir liste görmesi istendiğinde,
     web socket bağlantısı oluşturulmak istendiğinde,
     asenkron bir görev çalıştırılmak istendiğinde,
     Interval çalıştırılmak istendiğinde,
     zamanlayıcı çalıştırılmak istendiğinde
    */
    useEffect(() => {
        console.log("Component mount edildi")
    }, [])

    // array'in içerisine yazılan state tetiklendiğinde içerisindeki fonksiyon tetiklenecektir
    useEffect(() => {
        console.log("Count state değişti")
    }, [count])

    // array'in içerisine yazılan statelerden biri tetiklendiğinde içerisindeki fonksiyon tetiklenecektir
    useEffect(() => {
        console.log("Count veya amount state değişti")
    }, [count, amount])



    // arka tarafta istenilen zaman aralığında tekrarlanma durumu yapıldı ve return kısmında interval unmount edilir
    useEffect(() => {
        let interval =  setInterval(() => {
            console.log("interval");
            setCount((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [])

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