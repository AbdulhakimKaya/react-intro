import React from 'react';
import PropTypes from 'prop-types';

function User2({ title, data: {name, surname, age, city}, friends }) {
    return (
        <div>
            <strong>{title}</strong>
            <div>Name: {name}</div>
            <div>SurName: {surname}</div>
            <div>Age: {age}</div>
            <div>City: {city}</div>

            <h3>Friends</h3>
            {
                friends.map((friend, i) => (
                    //key değerinde pk yerine dizinin index numarısı verildi onun yerine dizi id değeri içerseydi o da key olarak verilebilirdi
                    <div key={i}>{friend}</div>
                ))
            }
            <hr/>
        </div>
    );
}

User2.propTypes = {
    title: PropTypes.string.isRequired, // defaultProps tanımlandığı için girilmesi zorunlu yapılsa da uyarı almayız
    data: PropTypes.exact({
        name: PropTypes.string,
        surname: PropTypes.string,
        age: PropTypes.number,
        city: PropTypes.string,
    }),
    friends: PropTypes.array
};

User2.defaultProps = {
    title: "User2",
};

export default User2;