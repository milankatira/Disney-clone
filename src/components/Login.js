import React from 'react'
import styled from 'styled-components';
const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis beatae iste fugiat sunminima,accusantium
                    ducimus error quidem dicta dolorum asperiores. Eum alias dolores inventore iusto at vero iure? Eveniet vitae rerum architecto eligendi saepe, corporis non voluptates repellat.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
display: flex;
align-items: top;
justify-content:center;
position: relative;
height:calc(100vh - 70px);
background-image: url("/images/login-background.jpg");

&:before {
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("images/login-background.jpg");
position: absolute;
top: 0;
bottom:0;
left: 0;
right: 0;
z-index: -1;
}
`

const CTA = styled.div`
max-width:650px;
padding:80px 40px;
width:90%;
display: flex;
flex-direction:column;
align-items: center;
`
const CTALogoOne = styled.img`

`

const CTALogoTwo = styled.img`
width:90%;

`


const SignUp = styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px solid;
text-align:center;
font-size:18px;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25, 0.45,0.45, 0.94)0s;
letter-spacing:0.5px;
margin-top: 8px;
margin-bottom:12px;

&:hover{
background-color:#0483ee;
}
`

const Description = styled.p`
font-size:11px;
letter-spacing:0.5px;
text-align:center;
line-height:1.5;
`