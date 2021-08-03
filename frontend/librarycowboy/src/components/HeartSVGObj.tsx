import React from "react";

const HeartSVGObj: React.FC<{ fillColor: string }> = (props: {fillColor: string}) => {
    return (
        <div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='14px' height='14px' fill={props.fillColor} className="heartImg">
                <path 
                    d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" stroke="grey"/>
            </svg>
        </div>
    )
}

export default HeartSVGObj;