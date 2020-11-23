// @ts-ignore
// import ReactFullpage, { fullpageProps } from '@fullpage/react-fullpage'
import { Card } from '~/components/Card'
import Fullpage, {
  FullPageSections,
  FullpageSection,
  // @ts-ignore
} from '@ap.cx/react-fullpage'
import { MainVisual } from '~/components/MainVisual'
import { CareerTimeline } from '~/components/CareerTimeline'

const IndexPage = () => (
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
          <h3>アピールポイント</h3>
          <div className="cards">
            <Card icon="⏳" title="経験からアピール" />
            <Card icon="📓" title="日々の意識からアピール" />
            <Card icon="📊" title="分析からアピール" />
          </div>
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

export default IndexPage
