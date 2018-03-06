export default (props) => (
  <div>
    <figure>
      <img src={props.url} alt={props.name} height={props.y} width={props.x} />
    </figure>
    <div>
      <p>social goes here</p>
    </div>
  </div>
)