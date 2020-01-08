import React, {Component} from 'react';
import axios from 'axios';

import API from './backenddata';

class App2 extends Component {
    constructor(props) {
        super()
        this.state = {
            dataObj:'',
            imageURL: ''
        }
    }

  componentDidMount(){
      this.fetchData();
  }


  fetchData(){
      const url = "http://localhost:8000/polls/api/index/";

      return axios.get(url)
       .then(response => {
           this.setState({ imageURL: JSON.stringify(response ) + 'testsettting' });
       })
       .catch(error => console.log('nothing found'));
  }

  render() {
    return (
      <div className="App2">
        <API dataObject={this.state.imageURL} />
      </div>
    );
  }
}

export default App2;
