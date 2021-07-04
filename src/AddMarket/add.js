import React, {Component} from 'react';
import { useHistory } from "react-router-dom";

/*NOTE: Using a functional component as this component doesn't do anything.*/
function Add(props) {
  let history = useHistory();
  return (
    <option key={props.item.id} value={props.item.symbol}>{props.item.symbol} ({props.item.name})</option>
  )
}
export default Add;