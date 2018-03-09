import Head from '../components/head'
import Nav from '../components/nav'

const About = () => (
  <div>
    <Head title="Luis Locon | Portfolio"/>
    <Nav />
    
    <div className="main-card">
      <div className="row">
      <div className="main-card__info">
        <div>
          <p>Websites</p>
        </div>
        <div>
          <p>Web Apps</p>
        </div>
        <div>
          <p>Rest Api</p>
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
    `}</style>
  </div>
)

export default About;