import React from "react";

function TextInput({ type, value, placeholder, handler, name }) {
    return (
        <div>
            <input type={type} value={value} placeholder={placeholder} onChange={handler} name={name} />
        </div>
    );
}

export default TextInput;
