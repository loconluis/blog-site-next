export default ({ name, githubLink, icon }) => {
  return (
    <div className="card">
      <div>
        <i className={`big ${icon}`}></i>
      </div>
      <div>
        <a href={githubLink}>
          <p>{ name }</p>
        </a>
      </div>
      <style jsx>{`
        .card {
          background-color: white;
          padding: 10px;
          height: 100px;
          width: 100px;
          border: 1px solid #f7f6f6;
          margin: 5px 2.5px;
        }
        p {
          margin: 0;
          font-size: 14px;
        } 
        .big {
          font-size: 60px;
        }
        .fa-react {
          color: #61dafb;
        }
        .fa-node-js {
          color: #43853d
        }
        .fa-html5 {
          color: #f1652a
        }
      `}</style>
    </div>
  )
}
