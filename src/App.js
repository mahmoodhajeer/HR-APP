import React, {Component} from 'react';
import Candidates from './components/candidates'

class App extends Component {
  state = {
    candidates : []
  }

  fetchData = () => {
    fetch("......./suggestions/random", {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    })
    .then((resp) => {
      return resp.json()
    }) 
    .then((data) => {
      this.setState({ suggestion: data.suggestion })                    
    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    })
  }
 
  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: { 
          'X-ADMIN': 1
      }
  };
    fetch('http://localhost:5000/api/Candidate',requestOptions)
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      if(data.status === 'success'){
        this.setState({candidates: data.data})
      }else{
        this.setState({error: data.message})
      }
    }).catch(console.log)
  }

  render(){
    
    if(this.state.error){
      return(<center><h1>{this.state.error}</h1></center>)
    }
    
    return(
      <Candidates candidates={this.state.candidates} />
    )
    
  }
}

export default App;