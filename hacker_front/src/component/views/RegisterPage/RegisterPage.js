import React, { useCallback, useState } from "react";
import "../style/RegisterPage.scss";
import { Button, Icon, Input } from "semantic-ui-react"
import registerimage from "../image/register_image.png";

function RegisterPage() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordCheck,setPasswordCheck] = useState("");
    const [Personality, setPersonality] = useState("");
    const [PasswordError,setPasswordError] = useState(false);

    const onIdHandler = (event) => {
        setEmail(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onPersonalityHandler = (event) => {
        setPersonality(event.currentTarget.value);
    };
    const onPasswordChkHandler = useCallback((event) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(event.currentTarget.value !== Password);
        setPasswordCheck(event.currentTarget.value);
    },[PasswordCheck]);
    const onSubmitHandler = useCallback((event) => {
        event.preventDefault();
        if(Password !== PasswordCheck){
            return setPasswordError(true);
        }
        console.log("Email",Email);
        console.log("Password", Password);
    },[Password,PasswordCheck]);
    return (
        <div id="body">
            <div className="login-form">
                <div className="non-image" onSubmit={onSubmitHandler}>
                    <h1>Welcome!</h1>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='at'/>}
                            iconPosition='left'
                            placeholder="Email"
                            type="text"
                            value={Email}
                            autoComplete="off"
                            onChange={onIdHandler}/>
                    </div>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='lock'/>}
                            iconPosition='left'
                            placeholder="Password"
                            type="password"
                            value={Password}
                            autoComplete="off"
                            onChange={onPasswordHandler}/>
                        {PasswordError && <div style={{color : 'red'}}>!</div>}
                    </div>
                    <div className="input-area">
                        <Input
                            icon={<Icon name='check'/>}
                            iconPosition='left'
                            placeholder="Check your Password"
                            type="password"
                            value={PasswordCheck}
                            autoComplete="off"
                            onChange={onPasswordChkHandler}/>
                    </div>
                    <div className="btn-area">
                        <div className="btn-area" >
                            <Button className='register-btn'
                                    content='Sign up'
                                    icon='signup'
                                    size='small'
                                    iconPosition='left'/>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img alt="image" src={registerimage}/>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
