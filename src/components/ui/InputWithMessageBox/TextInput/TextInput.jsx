/** @jsxImportSource @emotion/react */
import * as s from "./style.js";

function TextInput({ type, value, placeholder, handler, name, title, width, fontSize, height }) {
    return (
        <div css={s.inputBox(title, width, height, fontSize)}>
            <input type={type} value={value} placeholder={placeholder} onChange={handler} name={name} />
        </div>
    );
}

export default TextInput;
