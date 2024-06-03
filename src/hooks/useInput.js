import { useState } from "react";

export const useInput = () => {
    const [value, setValue] = useState("");
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValue(() => value);
    };

    return [value, handleOnChange];
};
