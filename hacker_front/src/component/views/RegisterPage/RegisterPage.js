import React, { useState } from "react";
import "../style/RegisterPage.scss";
import { Icon, Input } from "semantic-ui-react"
import registerimage from "../image/register_image.png";

function RegisterPage() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Id", Id);
        console.log("Password", Password);
    };
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
                            value={Id}
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
                    </div>
                    <div className="btn-area">
                        <button >Register</button>
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
