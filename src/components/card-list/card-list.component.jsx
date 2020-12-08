import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => (
    <div className='card-list'>
        {props.child_co_names.map(co => 
            <Card key={co.id} company={co}/>
        )}
    </div>
);
