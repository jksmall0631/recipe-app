import React, {Component} from 'react';
import Quagga from 'quagga';
import {browserHistory} from 'react-router';
import {sendGrocery} from '../firebase';

export default class Scan extends Component{
  constructor(){
    super();
    this.storeResponse = this.storeResponse.bind(this);
  }

  componentDidMount(){
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#scanner')
      },
      decoder : {
        readers : ["upc_reader"]
      }
    }, function(err) {
      if (err) {
        console.log(err);
        return
      }
      Quagga.start();
    });
    Quagga.onDetected(this.storeResponse);
  }

  storeResponse(data){
    const url = ('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/upc/' + data.codeResult.code)
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => {
      if(response.status != 'failure'){
        this.props.sendGroceries(response);
        sendGrocery(this.props.user, response.id, response);
      }else{
        console.log(response.message)
      }
    })
    Quagga.stop();
    browserHistory.push('/fridge');
  }

  render(){
    return(
      <div id='scanner'>
      </div>
    )
  }
}
