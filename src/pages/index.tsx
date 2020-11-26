// @ts-ignore
// import ReactFullpage, { fullpageProps } from '@fullpage/react-fullpage'
import { useState } from 'react'
import { Card } from '~/components/Card'
import Fullpage, {
  FullPageSections,
  FullpageSection,
  // @ts-ignore
} from '@ap.cx/react-fullpage'
import { MainVisual } from '~/components/MainVisual'
import { CareerTimeline } from '~/components/CareerTimeline'
import styled from 'styled-components'

const H3 = styled.h3`
  margin-bottom: 100px;
`

const Last = styled.h3`
  margin-top: 400px;
`

const IndexPage = () => {
  return (
    <>
      <Fullpage>
        <FullPageSections>
          <FullpageSection
            style={{
              height: '100vh',
            }}
          >
            <MainVisual />
          </FullpageSection>

          <FullpageSection
            className="section"
            style={{
              height: '100vh',
            }}
          >
            <h3>Career</h3>
            <CareerTimeline />
          </FullpageSection>
          <FullpageSection
            className="section"
            style={{
              backgroundColor: '#F7BD18',
            }}
          >
            <H3>アピールポイント</H3>
            <div className="cards">
              <Card icon="⏳" title="経験" />
              <Card icon="📓" title="意識" />
              <Card icon="📊" title="分析" />
            </div>
          </FullpageSection>
          <FullpageSection className="section">
            <Last>最後に</Last>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
      <style jsx>
        {`
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 8px;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}
export default IndexPage
