import React, { useCallback, useState } from "react";
import "../style/RegisterPage.scss";
import { Button, Icon, Input } from "semantic-ui-react";
import registerimage from "../image/register_image.png";
import { useDispatch } from 'react-redux';
import { register } from "../../../modules/register"; // Issue 에 등록하기
import { useNavigate } from 'react-router-dom';

function RegisterPage(props) {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordCheck,setPasswordCheck] = useState("");
    const [Personality, setPersonality] = useState("");
    const [PasswordError,setPasswordError] = useState(false);

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onPersonalityHandler = (event) => {
        setPersonality(event.currentTarget.value);
    };
    const onPasswordChkHandler = (event) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(event.currentTarget.value !== Password);
        setPasswordCheck(event.currentTarget.value);
    };
    // 
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== PasswordCheck){
            return setPasswordError(true);
        }
        console.log("Id",Id);
        console.log("Password", Password);
      
        const data ={
            name: "강병호호123",
            email: "12345555",
            id: Id,
            password: Password,

        }

        dispatch(register(data)) //register 라는 action
            .then(res => {
                if (res.payload.success) {
                    // props.history.push("/login");
                    // navigate("/login");
                } else {
                    alert(res.payload.err);
                }
            })
    };


    return (
        <div id="body">
            <div className="login-form">
                <div className="non-image" >
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
                        <div className="btn-area" onClick={onSubmitHandler} >
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
