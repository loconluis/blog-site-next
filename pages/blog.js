import Link from 'next/link'
import Head from '../components/head'
import BlogHeader from '../components/blogHeader'
import { USERNAME } from '../constant'
import firebase from '../firebase'
import moment from 'moment'

const Blog = (props) => {
  return (
  <div>
    <Head title="Blog | Luis Locon"/>
    <BlogHeader />
    <div className="row">
      <ul>
        {props.post.map(node => (
          <li
            className="post_link"
            key={node.id}
          >
            <p>{moment(node.createdAt).format('MMMM Do, YYYY')}</p>
            <Link prefetch as={`blog/p/${node.title.split(' ').join('-').toLowerCase()}`} href={`/post?id=${node.id}&user=${USERNAME}`}>
              <a>{node.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <style jsx>{`
      .row {
        max-width: 880px;
        margin: 10px 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      }
      .post_link{
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        display flex;
      }
      .post_link a {
        color: #333;
        margin: 16px 0;
        margin-left: 20px;
        text-decoration: none;
      }
      .post_link a:hover {
        background-color: #333;
        text-decoration: underline;
        text-decoration-color: magenta;
        color: white;
      }
      .post_link p {
        color: #a8a8a8;
      }
    `}
    </style>
  </div>
  )
}

Blog.getInitialProps = async () => {
  const post = []
  const database = firebase.database();
  const data = await database.ref(`/users/${USERNAME}/posts`).once('value')
  const res = data.forEach(child => {
    post.push({
      id: child.key,
      ...child.val()
    })
  })
  return { post }
}

export default Blog;