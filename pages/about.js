import Head from '../components/head'
import Nav from '../components/nav'

const About = () => (
  <div>
    <Head title="About Me"/>
    <Nav />
    <div className="main-card">
      <div className="row">
        <div className="main-card__avatar">
          here goes an avatar
        </div>
        <div className="main-card__info">
          here goes data about me
        </div>
      </div>
    </div>
    <style jsx>{`
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .main-card {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
      .main-card__avatar, .main-card__info {
        height: 60vh;
        width: 60vh;
        border: 1px solid blue;
      }
      .main-card__avatar: {
        margin-right: 10px;
      }
      .main-card__info {
        margin-left: 10px;
      }
    `}
    </style>
  </div>
)

export default About;