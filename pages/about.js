import Head from '../components/head'
import Nav from '../components/nav'
import Avatar from '../components/avatar'

const About = () => (
  <div>
    <Head title="Luis Locon | About Me"/>
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
          <div>
            <p>Hello, I'm a Developer and web enthusiast, looking for opportunities to learn and collaborate into different projects.</p>
            <p>At this time, I am working with <strong><a href="http://www.estratek.com/" target="_blank">Estratek</a></strong>, and in my free time I participate in project, and community activities.</p>
          </div>
          <div>
            <p>
              Contact me: <strong><a href="mailto:luis.locon@gmail.com">luis.locon@gmail.com</a></strong>
            </p>
          </div>
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
        width: 60vh;
      }
      .main-card__avatar: {
        flex-direction: column;
        margin-right: 10px;
      }
      .main-card__info {
        color: #333;
        padding: 10px;
        flex-direction: column;
        align-items: right;
        margin-left: 10px;
        font-size: 20px;
      }
      .main-card__info a {
        text-decoration: none;
        color: #333;
      }
      .main-card__info a:hover {
        text-decoration: underline;
        text-decoration-color: #FF00FF;
        color: #333;
      }
    `}
    </style>
  </div>
)

export default About;