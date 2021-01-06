import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);

    const bg = rgb.join(",");
    // const hex = rgbToHex(...rgb);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <article
            className={`color ${index > 10 && "color-light"}`}
            style={{ backgroundColor: `rgb(${bg})` }}
            onClick={() => {
                setAlert(!alert);
                navigator.clipboard.writeText(`#${hexColor}`);
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hexColor}</p>
            {alert && <p className="alert"> coppied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
