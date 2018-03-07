const socials = [
  {
    icon: 'fab fa-facebook-f',
    url: 'https://www.facebook.com/locon.luis'
  },
  {
    icon: 'fab fa-twitter',
    url: 'https://twitter.com/LoconLuis'
  },
  {
    icon: 'fab fa-github',
    url: 'https://github.com/loconluis',
  },
  {
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/loconluis/',
  },
  {
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/loconluis/'
  }
]

export default () => (
  <ul>
    {
      socials.map((social, i) => (
        <li key={`${social.name}+${i}`}>
          <a href={social.url} target="_blank">
            <i className={social.icon}></i>
          </a>
        </li>
      ))
    }
    <li>
      <a href="https://drive.google.com/file/d/0B8E_NJffMWddano2ZDJnSHpDN1U/view" target="_blank">
        CV
      </a>
    </li>
    <style jsx>{`
      ul {
        padding-left: 0;
        display: flex;
        justify-content: center;
      }
      li {
        display: flex;
        padding: 6px 18px;
      }
      li:first_child {
      }
      a {
        font-size: 20px;
        color: #a8a8a8;
        text-decoration: none;
        padding: 5px;
        transition: all .5s;
      }
      a:hover {
        color: #333;
        transform: scale(1);
      }
    `}</style>
  </ul>
)