import React, { useState } from 'react';

function Form(props) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [gender, setGender] = useState("0")
    return (
        <div>
            <div>
                <div>İsim - Soyisim</div>
                <input type="text" placeholder={"isim"} value={name} onChange={(event) => setName(event.target.value)}/>
                <input type="text" placeholder={"soyisim"} value={surname} onChange={(event) => setSurname(event.target.value)}/>
                <div>
                    <div>Cinsiyet</div>
                    <select value={gender} onChange={(event) => setGender(event.target.value)} >
                        <option value="0">Erkek</option>
                        <option value="1">Kadın</option>
                    </select>
                </div>
                <hr/>
                <div>
                    İsim-Soyisim: <strong>{name} {surname}</strong>
                </div>
                <div>
                    Cinsiyet: <strong>{gender === "0" ? "Erkek" : "Kadın"}</strong>
                </div>
            </div>
        </div>
    );
}

export default Form;