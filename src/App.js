import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getData, addMarket, removeMarket } from './Main/actions';

import Card from "./Card/card";
import Add from "./AddMarket/add";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddMarket = this.handleAddMarket.bind(this);
    this.handleRemoveMarket = this.handleRemoveMarket.bind(this);
  }

  componentDidMount(){
    this.props.getData();
  }

  handleAddMarket(e){
    this.props.addMarket(e.target.value);
  }

  handleRemoveMarket(e){
    this.props.removeMarket(e.target.id);
  }

  render() {
    return (
        <div className="app">
          <div className='header'><span>CryptoTracker Pro</span></div>

          <div className='add_container'>
            { (this.props.Main.unused.length)
                ? (<select id='market' name='market' onChange={this.handleAddMarket} >
                      <option value='0'>Add a Cryptocurrency:</option>
                    { (this.props.Main.unused)
                      ? this.props.Main.unused.map ( (item,idx) => <Add key={idx} item={item}/> )
                      : null
                    }
                  </select>)
                : null
            }
          </div>
          <ul className='card'>
            { (this.props.Main.used )
              ? this.props.Main.used.map( (item,idx) => <Card key={idx} item={item} removeMarket={this.handleRemoveMarket} /> )
              : null
            }
          </ul>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state };
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch( getData() ),
    addMarket: symbol => dispatch( addMarket(symbol) ),
    removeMarket: symbol => dispatch( removeMarket(symbol) )
  }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
