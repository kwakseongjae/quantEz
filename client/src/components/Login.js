import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import * as Components from './LoginComp';

export const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const [usernameReg, setUsernameReg] = useState('');
  const [passReg, setPasswordReg] = useState('');
  const [userEmailReg, setUserEmailReg] = useState('');
  
  return (
    <Components.Wrap>
      <Components.Container>
        <Components.SignUpContainer signinIn = {signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" required="" onChange={(e) => {setUsernameReg(e.target.value);
            }} />
            <Components.Input type="email" placeholder="Email" required="" onChange={(e) => setUserEmailReg(e.target.value)}/>
            <Components.Input type="password" placeholder="Password" required="" onChange={(e) => {setPasswordReg(e.target.value);
            }}/>
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>      
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn = {signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email"/>
            <Components.Input type="password" placeholder="Password"/>
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn = {signIn}>
          <Components.Overlay signinIn = {signIn}>

            <Components.LeftOverlayPanel signinIn = {signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                로그인하고 퀀티지가 제공하는<br></br>다양한 서비스를 경험하세요!
              </Components.Paragraph>
              <Components.GhostButton onClick = {() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn = {signIn}>
              <Components.Title>Hello, QuantEZ</Components.Title>
              <Components.Paragraph>
                세상에서 가장 쉬운 투자, QuantEZ
              </Components.Paragraph>
                <Components.GhostButton onClick = {() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
            </Components.RightOverlayPanel>
            

          </Components.Overlay>
        </Components.OverlayContainer>

      </Components.Container>
    </Components.Wrap>
  )
}