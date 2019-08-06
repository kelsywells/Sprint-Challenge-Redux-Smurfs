import React from 'react';
import Smurfs from './Smurfs';

const SmurfsList = props => {
    console.log('props', props);
    return (
        <ul>
            {props.smurfs.map(smurfs => {
                return <Smurfs key= {smurfs.name} smurfs={smurfs} />;
            })}
        </ul> 
    );
};

export default SmurfsList;