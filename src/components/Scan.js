import React, {Component} from 'react';
import Quagga from 'quagga';

export default class Scan extends Component{

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
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    });
    Quagga.onDetected(this.storeResponse);
  }

  componentWillUnmount(){
    Quagga.stop();
  }

  storeResponse(data){
    console.log(data)
  }

  render(){
    return(
      <div id='scanner'>
      </div>
    )
  }
}
