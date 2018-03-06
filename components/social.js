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
      socials.map(social => (
        <li>
          <a href={social.url} target="_blank">
            <i className={social.icon}></i>
          </a>
        </li>
      ))
    }
    <style jsx>{`
      ul {
        display: flex;
        justify-content: center;
      }
      li {
        display: flex;
        padding: 6px 18px;
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
        transform: scale(1.3);
      }
    `}</style>
  </ul>
)