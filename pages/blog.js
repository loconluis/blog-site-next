import Link from 'next/link'
import Head from '../components/head'

const Blog = () => (
  <div>
    <Head title="Blog | Luis Locon"/>
    <div>
      <Link href="/">
        <h1 className="logo">Luis Locon ⚡️</h1>
      </Link>
    </div>
    <div className="row">
      <ul>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ul>
    </div>
    <style jsx>{`
      h1 {
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        font-weight: lighter;
        font-size: 55px;
        padding: 10px 30px;
      }
      .logo {
        cursor: pointer;
        margin: 0;
      }
      .row {
        max-width: 880px;
        margin: 10px 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      }
    `}
    </style>
  </div>
)

export default Blog;