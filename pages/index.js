import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'


const Subtitle = () => (
  <div>
    <div className="hero_subtitle">
      <p>Web Developer @ <a href="http://www.estratek.com/" target="_blank"><span className="hero_subtitle_bold">ESTRATEK</span></a></p>
    </div>
    <style jsx>{`
      .hero_subtitle {
        color: white;
        heigth: 30px;
        cursor: pointer;
        background-color: black;
        box-shadow: 0 1px 3px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.20);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      }
      .hero_subtitle:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12)
      }
      .hero_subtitle p {
        padding: 5px 15px;
        font-size: 20px;
        font-weight: lighter;
        letter-spacing: 2px;
      }
      .hero_subtitle a {
        cursor: pointer;
        text-decoration: none;
        color: white;
      }
      .hero_subtitle a:hover {
        text-decoration: underline;
      }
      .hero_subtitle_bold {
        font-weight: bold;
      }
    `}</style>
  </div>
)

export default () => (
  <div>
    <Head title="Luis Locon | Resumé" />
    <Nav />

    <div className="hero">
      <h1 className="title">Luis Locon 👨🏻‍💻</h1>
      <Subtitle />
    </div>

    <style jsx>{`
      .hero {
        display: flex;
        width: 100%;
        color: #333;
        align-items: center;
        justify-content: center;
        height: 100vh;
        flex-direction: column;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.15;
        font-size: 78px;
        font-weight: lighter;
        letter-spacing: 2px;
      }
      .title, .description {
        text-align: center;
      }
    `}</style>
  </div>
)
