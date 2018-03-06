import Head from './head'
import Link from 'next/link'

const links = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/about',
    label: 'About Me'
  },
  {
    href: '/portfolio',
    label: 'Portfolio'
  },
  {
    href: '/blog',
    label: 'Blog'
  },
].map((link, i) => {
  link.key = `nav-link-${link.href}-${link.label}-${i}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {
        links.map(link => (
          <li key={link.key}>
            <Link prefetch href={link.href}>
              <a>{link.label}</a>
            </Link>
          </li> 
        ))
      }
    </ul>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
// <Link prefetch href="/">
//           <a>Home</a>
//         </Link>

// <ul>
//         {links.map(
//           ({ key, href, label }) => (
//             <li key={key}>
//               <Link href={href}>
//                 <a>{label}</a>
//               </Link>
//             </li>
//           )
//         )}
//       </ul>