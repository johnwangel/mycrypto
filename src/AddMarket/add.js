/*NOTE: Using a functional component as this component doesn't do anything.*/
function Add(props) {
  return (
    <option value={props.item.symbol}>{props.item.symbol} ({props.item.name})</option>
  )
}
export default Add;