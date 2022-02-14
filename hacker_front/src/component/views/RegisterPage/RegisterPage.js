import React, { useCallback, useState } from "react";
import "../style/RegisterPage.scss";
import { Button, Icon, Input } from "semantic-ui-react";
import registerimage from "../image/register_image.png";
import { useDispatch } from "react-redux";
import { register } from "../../../modules/register"; // Issue 에 등록하기
import { useNavigate } from "react-router-dom";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Tel, setTel] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [PasswordError, setPasswordError] = useState(false);

  const [checkNameError, setCheckNameError] = useState(false);
  const [checkTelError, setCheckTelError] = useState(false);
  const [checkIdError, setCheckIdError] = useState(false);
  const [checkPasswordError, setCheckPasswordError] = useState(false);
  const [checkRegisterError, setCheckRegisterError] = useState(false);

  const idRegex = /[0-9]{10}/;
  const telRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-?])(?=.*[0-9]).{8,25}$/;

  const onIdHandler = useCallback((event) => {
    setId(event.currentTarget.value);

    // 학번 유효성 검사
    if (!idRegex.test(event.currentTarget.value) || event.currentTarget.value.length != 10) {
      setCheckIdError(true);
    }
    else {
      setCheckIdError(false);
    }

  }, [checkIdError]);

  const onNameHandler = useCallback((event) => {
    setName(event.currentTarget.value);
    if (event.currentTarget.value.length < 2) {
      setCheckNameError(true);
    }
    else {
      setCheckNameError(false);
    }
  }, [checkNameError]);

  const onTelHandler = useCallback((event) => {
    setTel(event.currentTarget.value);

    // 휴대폰 번호 유효성 검사
    if (!telRegex.test(event.currentTarget.value) ) {
      setCheckTelError(true);
    }
    else {
      setCheckTelError(false);
    }
  }, [checkTelError]);

  const onPasswordHandler = useCallback((event) => {
    setPassword(event.currentTarget.value);

    // 비밀번호 유효성 검사
    if (!passwordRegex.test(event.currentTarget.value)) {
      setCheckPasswordError(true);
    }
    else {
      setCheckPasswordError(false);
    }
  }, [checkPasswordError]);

  const onPasswordChkHandler = useCallback((event) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(event.currentTarget.value !== Password);
    setPasswordCheck(event.currentTarget.value);
  },[PasswordError]);

  const onSubmitHandler = useCallback((event) => {
    event.preventDefault();

    if (checkNameError || Name == "") {
      setCheckRegisterError(true);
    }
    else if (checkTelError|| Tel == "") {
      setCheckRegisterError(true);
    }
    else if (checkIdError || Id == "") {
      setCheckRegisterError(true);
    }
    else if (checkPasswordError || Password == "") {
      setCheckRegisterError(true);
    }
    else if (Password !== PasswordCheck) {
      setCheckRegisterError(true);
    }
    else {
      setCheckRegisterError(false);
    }

    if (!checkRegisterError) {
      const data = {
        name: Name,
        tel: Tel,
        id: Id,
        password: Password,
      };
  
      dispatch(register(data)) //register 라는 action
        .then((res) => {
          if (res.payload.success) {
            navigate("/login");
          } else {
            alert(res.payload.err);
          }
        });
    }
  }, [checkRegisterError, checkIdError, checkNameError, checkPasswordError, checkTelError, Password, PasswordCheck]);

  return (
    <div id="body">
      <div className="login-form">
        <div className="non-image">
          <h1>Welcome!</h1>
          <div className="input-area">
            <Input
              icon={<Icon name="male" />}
              iconPosition="left"
              placeholder="이름"
              type="text"
              value={Name}
              autoComplete="off"
              onChange={onNameHandler}
            />
          </div>
          {checkNameError && <div style={{color : 'red'}}>이름을 두글자 이상 입력해 주세요.</div>}
          <div className="input-area">
            <Input
              icon={<Icon name="phone" />}
              iconPosition="left"
              placeholder="휴대폰 번호"
              type="text"
              value={Tel}
              autoComplete="off"
              onChange={onTelHandler}
            />
          </div>
          {checkTelError && <div style={{color : 'red'}}>-을 제외한 11자리 숫자를 입력해주세요.</div>}
          <div className="input-area">
            <Input
              icon={<Icon name="at" />}
              iconPosition="left"
              placeholder="학번"
              type="text"
              value={Id}
              autoComplete="off"
              onChange={onIdHandler}
            />
          </div>
          {checkIdError && <div style={{color : 'red'}}>10자리 숫자를 입력해주세요.</div>}
          <div className="input-area">
            <Input
              icon={<Icon name="lock" />}
              iconPosition="left"
              placeholder="비밀번호"
              type="password"
              value={Password}
              autoComplete="off"
              onChange={onPasswordHandler}
            />
          </div>
          {checkPasswordError && <div style={{color : 'red'}}>알파벳과 숫자, 특수문자를 포함하여 8자리 이상 입력해주세요.</div>}
          <div className="input-area">
            <Input
              icon={<Icon name="check" />}
              iconPosition="left"
              placeholder="비밀번호 재입력"
              type="password"
              value={PasswordCheck}
              autoComplete="off"
              onChange={onPasswordChkHandler}
            />
          </div>
          {PasswordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
          <div className="btn-area">
            <div className="btn-area" onClick={onSubmitHandler}>
              <Button
                className="register-btn"
                content="Sign up"
                icon="signup"
                size="small"
                iconPosition="left"
              />
            </div>
          </div>
          {checkRegisterError && <div style={{color : 'red'}}>정보를 제대로 입력해주세요.</div>}
        </div>
        <div className="image-wrapper">
          <img alt="image" src={registerimage} />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
