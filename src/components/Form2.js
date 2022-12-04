import React, { useState } from 'react';

function Form2(props) {
    const [form, setForm] = useState({name: '', surname: '', gender: ''})

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    return (
        <div>
            <div>
                <div>İsim - Soyisim</div>
                <input name="name" type="text" placeholder={"isim"} value={form.name} onChange={handleChange}/>
                <input name="surname" type="text" placeholder={"soyisim"} value={form.surname} onChange={handleChange}/>
                <div>
                    <div>Cinsiyet</div>
                    <select name="gender" value={form.gender} onChange={handleChange} >
                        <option value="0">Erkek</option>
                        <option value="1">Kadın</option>
                    </select>
                </div>
                <hr/>
                <div>
                    İsim-Soyisim: <strong>{form.name} {form.surname}</strong>
                </div>
                <div>
                    Cinsiyet: <strong>{form.gender === "0" ? "Erkek" : "Kadın"}</strong>
                </div>
            </div>
        </div>
    );
}

export default Form2;