import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import SchoolIcon from '@material-ui/icons/School'
import BusinessIcon from '@material-ui/icons/Business'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

const StyledTimeline = styled(Timeline)`
  max-height: 750px;
  width: 100%;
  max-width: 900px;
  overflow: auto;
`

const StyledTimelineItem = styled(TimelineItem)`
  min-height: auto !important;
`

const H3 = styled.h3`
  margin: 0 0 16px;
  font-size: 1.2rem;
  color: #18222d;
`

const StyledPaper = styled(Paper)`
  padding: 16px;
  text-align: left;
`

const Date = styled.p`
  color: #fff;
`

export const CareerTimeline = () => {
  return (
    <StyledTimeline align="alternate">
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2017/03</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>同志社大学 理工学部 卒業</H3>
            <Typography>
              卒業研究テーマ「Twitterで観光地のデータ分析」
            </Typography>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2017/04 - 2018/12</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BusinessIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>株式会社 アルプス技研 入社</H3>
            <Typography>入社した理由</Typography>
            <ul>
              <li>プログラミングスキルを東京の企業で学ぶこと</li>
              <li>プログラミングを活かせる好きな業界を見つけること</li>
            </ul>
            <Typography>
              派遣は日立研究所に決まり転職まで同じ場所で働いていました。
            </Typography>
            <Typography>業務内容「IoTのセキュリティ管理システム」</Typography>
            <Typography>使用した技術</Typography>
            <ul>
              <li>
                Linux, Raspi, Bash, Python, Java, C, C++, PHP, Node-RED,
                Node.js, HTML/CSS, PostgreSQL, Vagrant
              </li>
            </ul>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2019/01 - 現在</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BusinessIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>ハコレコドットコム 株式会社</H3>
            <Typography>転職した理由</Typography>
            <ul>
              <li>妻が妊娠し、実家の函館に引っ越し</li>
              <li>WEBがやりたいことだと気づいた！</li>
              <li>ReactやVue.jsを取り扱っていたので成長できると感じた点</li>
            </ul>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2019/02 - 2019/04(2ヶ月)</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalOfferIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>幼稚園のサイトのYoutubeLive管理画面の構築</H3>
            <Typography>使用技術: Laravel, MySQL, HTML/CSS</Typography>
            <Typography>担当: フロントエンド/サーバーサイド</Typography>
            <Typography>業務内容</Typography>
            <ul>
              <li>3種類の文字コードを1つ(UTF-8)に統一</li>
              <li>複数の既存の管理ページを１つに統一</li>
              <li>データの保存をテキストファイルからMySQLに変更</li>
              <li>権限つきユーザのログイン機能の開発</li>
              <li>YoutubeLiveのデータ管理ページの制作</li>
            </ul>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2019/05 - 2019/06(2ヶ月)</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalOfferIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>プランの選定システム</H3>
            <Typography>
              使用技術: HTML/CSS/JavaScript, Pug, Stylus, Vue.js
            </Typography>
            <Typography>担当: フロントエンド</Typography>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2019/07 - 2020/06(11ヶ月)</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalOfferIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>
              ネットワーク機器の管理者のユーザと権限を 管理するシステムの構築
            </H3>
            <Typography>
              使用技術: Nuxt.js, TypeScript, Storybook, AWS
            </Typography>
            <Typography>担当: フロントエンド</Typography>
            <Typography>業務内容</Typography>
            <ul>
              <li>SPAのサーバーレスの環境で構築</li>
              <li>サイトの数としては4サイト構築</li>
            </ul>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2019/11 - 2020/01(3ヶ月)</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalOfferIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>ギャラリーサイト</H3>
            <Typography>使用技術: Nuxt.js, TypeScript</Typography>
            <Typography>担当: フロントエンド</Typography>
            <Typography>業務内容</Typography>
            <ul>
              <li>SPAの環境で構築</li>
            </ul>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2020/07 - 2020/08(2ヶ月)</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalOfferIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>量産コーディングのディレクション</H3>
            <Typography>使用技術: HTML</Typography>
            <Typography>担当: ディレクション</Typography>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2020/09(1ヶ月)</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalOfferIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>HubSpotでWEBサイト制作</H3>
            <Typography>使用技術: HubSpot, HTML/SCSS/JavaScript</Typography>
            <Typography>担当: フロントエンド/サーバーサイド</Typography>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <TimelineOppositeContent>
          <Date>2020/10(1ヶ月)</Date>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalOfferIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <H3>センサー情報を可視化するダッシュボードの 研究開発</H3>
            <Typography>
              使用技術: React, TypeScript, Ionic, Storybook
            </Typography>
            <Typography>担当: フロントエンド</Typography>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
    </StyledTimeline>
  )
}
