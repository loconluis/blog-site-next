import Head from '../components/head'
import Nav from '../components/nav'
import MiniCards from '../components/miniCards'

const About = () => (
  <div>
    <Head title="Luis Locon | Portfolio"/>
    <Nav />
    
    <div className="main-card">
      <div className="row">
      <div className="main-card__info">
        <div>
          <p>Websites</p>
          <div className="container-mini-cards">
            <MiniCards icon="fab fa-html5" name="Happy Std" githubLink="https://loconluis.github.io/happy/"/>
            <MiniCards icon="fab fa-html5" name="Portfolio (old version)" githubLink="https://loconluis.github.io/#project" />
            <MiniCards icon="fab fa-html5" name="Dizzy" githubLink="https://loconluis.github.io/webpage-eduTec2/" />
            <MiniCards icon="fas fa-arrow-right" name="See more" githubLink="https://github.com/loconluis/" />
          </div>
        </div>
        <div>
          <p>Web Apps</p>
          <div className="container-mini-cards">
            <MiniCards icon="fab fa-react" name="Expensify" githubLink="https://github.com/loconluis/expensify" />
            <MiniCards icon="fab fa-react" name="React-Blog" githubLink="https://github.com/loconluis/react-blog" />
            <MiniCards icon="fab fa-react" name="Markdown Viewer" githubLink="https://github.com/loconluis/markdown-preview" />
            <MiniCards icon="fas fa-arrow-right" name="See more" githubLink="https://github.com/loconluis/" />
          </div>
        </div>
        <div>
          <p>Rest Api</p>
          <div className="container-mini-cards">
            <MiniCards icon="fab fa-node-js" name="ToDo-Rest-Api" githubLink="https://github.com/loconluis/todo-rest-api"/>
            <MiniCards icon="fab fa-node-js" name="Album-Api (MEAN)" githubLink="https://github.com/loconluis/Album-App"/>
            <MiniCards icon="fab fa-node-js" name="Favorite-Api (MEAN)" githubLink="https://github.com/loconluis/SaveFavoritesApp"/>
            <MiniCards icon="fas fa-arrow-right" name="See more" githubLink="https://github.com/loconluis/" />
          </div>
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
      .hero {
        display: flex;
        width: 100%;
        color: #333;
        align-items: center;
        justify-content: center;
        height: 100vh;
        flex-direction: column;
      }
      .main-card__info {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333;
        padding: 10px;
        flex-direction: column;
        align-items: right;
        margin-left: 10px;
        font-size: 20px;
        text-align: center;
      }
      .container-mini-cards {
        display: flex;
        background-color: #fbfbfb;
      }
    `}</style>
  </div>
)

export default About;