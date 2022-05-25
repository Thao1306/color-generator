import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = (props) => {
    const { rgb, weight, index, hexColor, numColor } = props;
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    // const hex = rgbToHex(...rgb);
    const hex = `#${hexColor}`;
    const midIndex = Math.round(numColor/2) -1;
    useEffect(() => {
       const timeout = setTimeout(() => {
            setAlert(false)
        },2000)
        return () => clearTimeout(timeout)

    }, [alert])
    const coppyColor = () => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
    }

    return <article className={`color ${index > midIndex && 'dark-color'} ${index === midIndex && 'main-color'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={coppyColor}>
        <p>{weight}%</p>
        <p >{hex}</p>
        {alert && <p>Copied to clipboard</p>}
    </article>
}

export default SingleColor