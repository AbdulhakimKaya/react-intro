import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
    return (
        <div>User
            <div>Name: {props.name}</div>
            <div>SurName: {props.surname}</div>
            <div>Age: {props.age}</div>
            <div>City: {props.city}</div>
            <hr/>
        </div>
    );
}

// girilen verilerin tiplerinin ve girilmesinin zorunlu olup olmadığının tanımlanması yapılır
User.propTypes = {
    name: PropTypes.string.isRequired, // isRequired ile name alanının girilmesi zorunlu hale getirilir
    surname: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
}

export default User;