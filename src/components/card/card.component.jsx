import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt='company' src={`https://robohash.org/${props.company.id}?set=set2&size=180x180`} ></img>
        <h2>{props.company.name}</h2>
        <p>{props.company.email}</p> 
    </div>
)
