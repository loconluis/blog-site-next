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
        position: fixed;
        text-align: center;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      ul {
        display: flex;
        justify-content: center;
      }
      nav > ul {
        padding: 4px 36px;
      }
      li {
        display: flex;
        padding: 6px 18px;
      }
      a {
        color: #333;
        font-weight: ligther;
        text-decoration: none;
        font-size: 20px;
        padding: 5px 10px;
        transition: all .3s;
        border-radius: 10%;
      }
      a:hover {
        background-color: #333;
        border-radius: 10%;
        color: white;
        padding: 5px 10px;
        transform: scale(1);
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