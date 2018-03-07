import Link from 'next/link'
import Head from '../components/head'

const Blog = () => (
  <div>
    <Head title="Blog | Luis Locon"/>
    <h2>Area de Blog</h2>
    <Link href="/">
      <a>Go back</a>
    </Link>
  </div>
)

export default Blog;