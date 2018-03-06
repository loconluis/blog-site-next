import Head from '../components/head'
import Nav from '../components/nav'
import Avatar from '../components/avatar'

const About = () => (
  <div>
    <Head title="About Me"/>
    <Nav />
    <div className="main-card">
      <div className="row">
        <div className="main-card__avatar">
          <Avatar
            url="https://loconluis.github.io/img/responsive.JPG"
            name="perfil"
            x="300"
            y="300"
          />
        </div>
        <div className="main-card__info">
          <p></p>
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60vh;
        width: 60vh;
      }
      .main-card__avatar: {
        flex-direction: column;
        margin-right: 10px;
      }
      .main-card__info {
        margin-left: 10px;
        border: 1px solid #eee;
      }
    `}
    </style>
  </div>
)

export default About;