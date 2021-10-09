import React from 'react'
import styled from 'styled-components';
const Detail = () => {
    return (
        <Container>
            <Background>
            <img src="https://images.unsplash.com/photo-1501560379-05951a742668?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
            </Background>
            <ImageTitle>
            <img src="https://images.unsplash.com/photo-1573488803425-3bacfbd64340?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2073&q=80" />
            </ImageTitle>
            <Controls>
            <PlayButton>
            <img src="/images/play-icon-black.png"/>
            <span>PLAY</span>
            </PlayButton>
            
            <TrailerButton>
            <img src="/images/play-icon-white.png"/>
            <span>Trailer</span>
            </TrailerButton>
            
            <AddButton>
            <span>+</span>
            </AddButton>
            
            <GroupWatchButton>
            <img src="/images/group-icon.png"/>
            </GroupWatchButton>
            </Controls>
            
            <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam?
            </SubTitle>
            
            <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur amet impedit! Obcaecati laborum dolorum neque hic eum minima facere, quia aut, sunt tempore est!
            </Description>
        </Container>
    )
}

export default Detail

const Container=styled.div`
min-height:calc(100vh - 70px);
padding: calc(3.5vh + 5px);
position: relative;
`

const Background = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
z-index:-1;
opacity:0.1;
`

const ImageTitle = styled.div`
height:30vh;
width:35vh;
min-width:200px;
min-height:170px;

img{
width:100%;
height:100%;
object-fit:contain;
}
`

const Controls = styled.div`
display:flex;
align-items: center;
`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height:56px;
background: rgb(249,249,249);
border:none;
padding: 0 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;

&:hover{
background:rgb(198,198,198);
}
`
const TrailerButton=styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgba(249,249,249);
color: rgb(249,249,249);
text-transform: uppercase;
`

const AddButton = styled.button`
margin-right: 16px;
width:44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background:rgba(0,0,0,0.6);
cursor: pointer;

span{
font-size:30px;
color:white;
}
`

const GroupWatchButton=styled(AddButton)`
background:rgb(0, 0, 0);
`

const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
`

const Description=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);
`