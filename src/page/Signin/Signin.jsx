/** @jsxImportSource @emotion/react */
import TextInput from "../../components/ui/InputWithMessageBox/TextInput/TextInput.jsx";
import { useInput } from "../../hooks/useInput.js";
import * as s from "./style.js";

function Signin() {
    const [username, handleUsernameChange] = useInput();
    const [password, handlePasswordChange] = useInput();

    return (
        <div css={s.layout}>
            <div css={s.loginBox}>
                <h1>로그인</h1>
                <div css={s.inputBox}>
                    <TextInput
                        width={"300px"}
                        title={"ID"}
                        fontSize={"30px"}
                        type={"text"}
                        placeholder={"아이디"}
                        name={"username"}
                        value={username}
                        handler={handleUsernameChange}
                    />
                    <TextInput
                        width={"300px"}
                        title={"PW"}
                        fontSize={"30px"}
                        type={"password"}
                        placeholder={"패스워드"}
                        name={"password"}
                        value={password}
                        handler={handlePasswordChange}
                    />
                </div>
                <div css={s.messageBox}>
                    <h4></h4>
                    <button css={s.loginBtn}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Signin;
