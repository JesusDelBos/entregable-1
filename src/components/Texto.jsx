import React from 'react';



const Texto = ({galletaSuerte}) => {
    console.log(galletaSuerte)
    return (
        <div>
           <p>{ galletaSuerte.phrase }</p>
        </div>
    );
};

export default Texto;