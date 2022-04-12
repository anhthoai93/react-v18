import React from "react";
import {describeArc} from "../../utils/Utils";

const SVGCircle = (radius: any) => {
    console.log(radius);
    return (<svg className='countdown-svg'>
        <path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 48, 0, radius.radius)}/>
    </svg>)
}

export default SVGCircle;