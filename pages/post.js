import Link from 'next/link'
import Head from '../components/head'
import BlogHeader from '../components/blogHeader'
import firebase from '../firebase'
import Marked from 'marked'

const Post = (props) => {
  return (
    <div>
      <Head />
      <div>
        <BlogHeader />
        <Link href="/blog">
          <a className="go-back">
            <i className="fas fa-chevron-left"></i>  Go Back
          </a>
        </Link>
      </div>
      <div
        className="row"
        dangerouslySetInnerHTML={getRawMarkup(props.res.body)}
      >
        {/*here goes all the markdown convert to html*/}
      </div>
      <style jsx>{`
        .row {
          max-width: 880px;
          margin: 10px 60px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .go-back{
          padding: 10px;
          margin-left: 60px;
          text-decoration: none;
          color: #333;
        }
        .go-back:hover {
          background-color: #333;
          color: white;
          text-decoration: underline;
          text-decoration-color: magenta;
        }
      `}</style>
    </div>
  )
}

const getRawMarkup = (value) => {
  const markup = Marked(value, { sanitize: true })
  return { __html: markup }
}

Post.getInitialProps = async (context) => {
  const { id, user } = context.query
  const database = firebase.database();
  const data = await database.ref(`/users/${user}/posts/${id}`).once('value')
  const res = await data.val()
  console.log('res', res)
  return { res }
}

export default Post