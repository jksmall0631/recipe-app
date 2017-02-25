import React, {Component} from 'react';
import Quagga from 'quagga';

export default class Scan extends Component{

  // componentDidMount(){
  //   Quagga.init({
  //     inputStream : {
  //       name : "Live",
  //       type : "LiveStream",
  //       target: document.querySelector('#scanner')
  //     },
  //     decoder : {
  //       readers : ["upc_reader"]
  //     }
  //   }, function(err) {
  //     if (err) {
  //       console.log(err);
  //       return
  //     }
  //     console.log("Initialization finished. Ready to start");
  //     Quagga.start();
  //   });
  //   Quagga.onDetected(this.storeResponse);
  // }
  //
  // componentWillUnmount(){
  //   Quagga.stop();
  // }

  storeResponse(data){
    console.log(data.codeResult.code)
    const url = ('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/upc/' + data.codeResult.code)
    console.log(url)
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => console.log(response))
    Quagga.stop();
  }

  render(){
    return(
      <div id='scanner'>
      </div>
    )
  }
}
