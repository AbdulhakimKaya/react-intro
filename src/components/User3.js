import React, { useState } from 'react';

function User3(props) {
    const [user, setUser] = useState({ name: "Abdulhakim", surname: "KAYA" });
    return (
        <div>
            <h2>User</h2>
            {user.name} {user.surname}
            <br/>
            <div>
                {/* değiştirilmek istenilen alanın dışındaki alanların sabit kalması için ...user (...değişkenAdı) yazıldı */}
                {/* ...user ifadesi user objesi içerisindeki bütün alanları yerleştirir ve ardından değiştirilmek istenilen alan girilir. */}
                <button onClick={() => setUser({...user, name: "Mehmet"})} >İsmi Değiştir</button>
                <button onClick={() => setUser((prev) => ({...prev, surname: "Seven"}))} >Soyismi Değiştir</button>
            </div>
        </div>

    );
}

export default User3;