import Social from './social'

export default (props) => (
  <div>
    <figure>
      <img src={props.url} alt={props.name} height={props.y} width={props.x} />
    </figure>
    <div>
      <Social />
    </div>
    <style jsx>{`
      img {
        border-radius: 50%;
        box-shadow: 0 14px 28px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0.17);
      }
    `}
    </style>
  </div>
)