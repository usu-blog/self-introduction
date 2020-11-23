import React, { useState } from 'react'
import styled from 'styled-components'

const StyledLogoContent = styled.div`
  transition: 0.4s ease;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const H2 = styled.h2`
  margin: 0;
  font-size: 3rem;
  text-align: left;
`

const P = styled.p`
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
`

const Content = styled.div`
  margin: 0 0 16px 500px;
`

const StyledContent = styled.div`
  margin-right: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 2000px;
`

const StyledMainVisual = styled.div`
  background: url(/mainVisual_background.svg) right / contain no-repeat #18222d;
  height: 100%;
  width: 130%;
  transition: 0.4s ease;
`

export const MainVisual = () => {
  const [enter, setEnter] = useState(true)
  const animeMainVisual = {
    transform: enter ? 'translateX(0%)' : 'translateX(-16%)',
  }
  const animeLogoContent = {
    right: enter ? '50%' : '15%',
    top: enter ? '50%' : '10%',
    transform: enter ? 'translate(-50%, -50%)' : 'translate(0%,0%)',
  }
  const animeLogo = {
    width: enter ? '240px' : '120px',
    height: enter ? '240px' : '120px',
    transition: '0.4s ease',
  }

  const animeFade = {
    opacity: enter ? '0' : '1',
    transition: '0.4s ease',
    transform: enter ? 'translateY(50px)' : 'translateY(0px)',
  }
  const animeFade2 = {
    opacity: enter ? '0' : '1',
    transition: '0.4s ease 0.4s',
    transform: enter ? 'translateY(50px)' : 'translateY(0px)',
  }
  return (
    <>
      <StyledMainVisual
        style={animeMainVisual}
        onClick={() => setEnter(!enter)}
      >
        <StyledContent>
          <StyledLogoContent style={animeLogoContent}>
            <img src="/logo.svg" alt="logo" style={animeLogo} />
            <p
              className="logo__text"
              style={{ color: enter ? '#fff' : '#333' }}
            >
              Challenge
            </p>
          </StyledLogoContent>

          <Content style={animeFade}>
            <P>Akiyama Yusuke</P>
            <H2>秋山 裕介</H2>
            <P>Front end engineer</P>
          </Content>
          <Content style={animeFade2}>
            <P>年齢: 27歳(1993/04/24)</P>
            <P>出身: 広島県</P>
            <P>
              趣味: 読書 / プログラミングの勉強 / アニメ
              <br /> / 娘が寝た後、妻と二人でゲーム / 娘に遊んでもらうこと
            </P>
            <P>好きな技術: React, Nuxt.js, TypeScript, Storybook, Firebase</P>
            <P>好きなこと: 挑戦, 効率化, 自動化, デザイン</P>
          </Content>
        </StyledContent>
      </StyledMainVisual>
      <style jsx>{`
        p {
          margin: 0;
        }
        .logo__text {
          font-size: 4rem;
          margin-top: 8px;
          color: #fff;
        }
      `}</style>
    </>
  )
}
