import React from 'react';

import './Label.css';

function pickTextColorBasedOnBackground(color) {  //it takes the color string , breaks it down, line 8 9 10, 
    //convert hex values of string to base10 intergers 

    const r = parseInt(color.substring(0, 2), 16); //hexToR
    const g = parseInt(color.substring(2, 4), 16); //hexToG
    const b = parseInt(color.substring(4, 6), 16); //hexToB

    //calculate luminance
    const unicolors = [r / 255, g / 255, b / 255];
    const c = unicolors.map((col) => {
        if (col <= 0.03928) {
            return col /12.92;
        }
        return Math.pow((col + 0.055) / 1.055, 2.4); //magic numbers 
    });
    const L = (0.2126 * c[0]) + (0.7152 * c[1]) * (0.0722 * c[2]);  
    //return white or black based on luminance
    return (L > 0.179) ? '#000' : '#fff'; //it returns black or white based on the magic calculation above
}

export default function label(props) {
    const { name, color } = props.label;
    return (
        <a
        href={`https://github.com/facebook/create-react-app/issues?q=is%Aissue+label1%3A%22${name}%22`} //long url, this is how github structures their urls. 
        className="Label"
        style={{
            backgroundColor:`#${color}`,  //the background color comes back from the api
            color: pickTextColorBasedOnBackground(color) //from stackover flow, if the background color meets a certain level, it displays black or white
        }}
        >{name}</a>
    )
}