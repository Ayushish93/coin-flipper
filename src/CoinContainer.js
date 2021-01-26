import React, { Component } from 'react';
import {choice} from "./helpers";
import Coin from  "./Coin";

class CoinCointainer extends Component {

  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  };

  constructor(props){
    super(props);
    this.state = {
       currentCoin: null,
       nFlips:0,
       nHeads:0,
       nTails:0

    }
    this.handleClick = this.handleClick.bind(this);
    
  }
  flipCoin(){
    const newCoin = choice(this.props.coins);
    this.setState(st=>{

      let newState = {
        ...st,
        currCoin: newCoin,
        nFlips: st.nFlips + 1
      }
      if(newCoin.side === "heads") {
        newState.nHeads += 1;
      } else {
        newState.nTails += 1;
      }
      return newState;
    })
  }

  handleClick(e){
    this.flipCoin();
  }

  render(){
    return(
      <div className="CoinConatiner">
        <h2>Let's Flip Coin!</h2>
        <button onClick={this.handleClick}>Flip The Coin</button>
        {this.state.currCoin && <Coin info={this.state.currCoin}/>}
        <p>out of {this.state.nFlips} flips, there have been {this.state.nTails} tails and {this.state.nHeads} heads</p>
      </div>
    )
  }

}

export default CoinCointainer;