import React, {useState} from 'react'
import Video from './videos/video.mp4'
import { FrontContainer, FrontBackground, VideoBackground, FrontContent, FrontH1, FrontP, FrontBtnWrapper, PigIcon, WaveIcon } from './FrontHomeElements'
import {Button} from './ButtonElement'

const FrontHome = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <FrontContainer id="home">
        <FrontBackground>
            <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
        </FrontBackground>
        <FrontContent>
            <FrontH1>Christine's Portfolio</FrontH1>
            <FrontP>Welcome to my website</FrontP>
            <FrontBtnWrapper>
                <Button to="contact" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Say hi<br></br>to Turnips
                {hover ? <PigIcon /> : <WaveIcon />}
                </Button>
            </FrontBtnWrapper>
        </FrontContent>
    </FrontContainer>
  )
}

export default FrontHome
