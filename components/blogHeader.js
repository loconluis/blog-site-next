import Link from 'next/link'
export default () => {
  return (
    <div>
      <Link href="/">
        <h1 className="logo">Luis Locon ⚡️</h1>
      </Link>
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        }
        h1 {
          font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
          font-weight: lighter;
          font-size: 55px;
          padding: 10px 60px;
        }
        .logo {
          text-align: center;
          cursor: pointer;
          margin: 0;
        }
        @media (max-width: 812px) {
          h1 {
            font-size:45px;
            letter-spacing: 1px;
          }
        }
      `}</style>
    </div>
  )
}
