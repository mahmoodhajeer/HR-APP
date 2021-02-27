/*import React, { Component } from 'react';
import Candidates from './components/candidates'


class App extends Component {


  
  constructor() {
    super();
    this.state = {
      full_name: '',
      date_of_birth: '',
      years_of_experience: '',
      department_ID: '',
      candidates: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.fileInput = React.createRef();

  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }


  onSubmit = event => {
    event.preventDefault();


    const formData = new FormData();
    formData.append('file', this.fileInput.current.files[0]);
    fetch('http://localhost:5000/api/resume', {
      method: 'POST',
      body: formData
    }).then(res => res.json()).then((response) => {
      if (response.status === 'success') {
        console.log("doneee")
        const data = {
          full_name: this.state.full_name,
          date_of_birth: this.state.date_of_birth,
          years_of_experience: this.state.years_of_experience,
          department_ID: this.state.department_ID,
          resume: response.data
        }
        console.log(data)

        fetch('http://localhost:5000/api/candidate', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(response2 => {
          alert(response2.status);

        })

      } else {
        alert(response.message);
      }
    });



  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData = e => {

    const requestOptions = {
      method: 'GET',
      headers: {
        'X-ADMIN': 1
      }
    };

    fetch('http://localhost:5000/api/candidate', requestOptions)
      .then(res => res.json())
      .then((data) => {
        console.log(data.data)
        if (data.status === 'success') {
          this.setState({ candidates: data.data })
        } else {
          this.setState({ error: data.message })
        }
      }).catch(console.log)
  }

  downloadFile = e => {

    const requestOptions = {
      method: 'GET',
      headers: {
        'X-ADMIN': 1
      }
    };

    fetch('http://localhost:5000/api/resume?filename=', requestOptions)
      .then(res => res.json())
      .then((data) => {
        console.log(data.data)
        if (data.status === 'success') {
          console.log('yeah')
        } else {
          console.log("shit")
        }
      }).catch(console.log)
  }




  render() {
    return (
      <table>
        <div>
          <form onSubmit={this.onSubmit}>

            <label>Full name</label>
            <input name='full_name' onChange={this.handleChange} />
            <br />
            <label>Date of birth</label>
            <input name='date_of_birth' onChange={this.handleChange} />
            <br />
            <label>Years of experience</label>
            <input name='years_of_experience' onChange={this.handleChange} />
            <br />
            <label>Department ID</label>
            <input name='department_ID' onChange={this.handleChange} />
            <br />
            <label>Resume</label>
            <input type='file' name='resume' ref={this.fileInput} />
            <br />
            <br />
            <input type="submit" value="Submit" />

          </form>
        </div>

        <br />
        <br />

        <div>
        <form>
          <button onClick={this.fetchData}>show candidates</button>
          <Candidates candidates={this.state.candidates} />
          <center><h1>{this.state.error}</h1></center>
        </form>

        </div>


      </table>





    );
    

  }
}


export default App;
*/

import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      date_of_birth: '',
      years_of_experience: '',
      department_ID: '',
      candidates: []
    };
    this.send = this.send.bind(this);
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    // get all entities - GET
  }

  send(e) {
    // add entity - POST
    e.preventDefault();


    const formData = new FormData();
    formData.append('file', this.fileInput.current.files[0]);
    fetch('http://localhost:5000/api/resume', {
      method: 'POST',
      body: formData
    }).then(res => res.json()).then((response) => {
      if (response.status === 'success') {
        console.log("doneee")
        const data = {
          full_name: this.state.full_name,
          date_of_birth: this.state.date_of_birth,
          years_of_experience: this.state.years_of_experience,
          department_ID: this.state.department_ID,
          resume: response.data
        }
        console.log(data)

        fetch('http://localhost:5000/api/candidate', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(response2 => {
          alert(response2.status);

        })

      } else {
        console.log("fuck");
        alert(response.message);
      }
    });
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }
  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Simple HR system</h1>
              <form className="d-flex flex-column">
                <label htmlFor="full_name">
                  Full Name:
                  <input
                    name="full_name"
                    id="full_name"
                    type="text"
                    className="form-control"
                    value={this.state.full_name}
                    onChange={(e) => this.handleChange({ full_name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="date_of_birth">
                  Date of Birth:
                  <input
                    name="date_of_birth"
                    id="date_of_birth"
                    className="form-control"
                    value={this.state.date_of_birth}
                    onChange={(e) => this.handleChange({ date_of_birth: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="department_ID">
                  Department ID:
                  <input
                    name="department_ID"
                    id="department_ID"
                    type="text"
                    className="form-control"
                    value={this.state.department_ID}
                    onChange={(e) => this.handleChange({ department_ID: e.target.value })}
                    />
                </label>
                <label htmlFor="years_of_experience">
                  Years of Experience:
                  <input
                    name="years_of_experience"
                    id="years_of_experience"
                    type="text"
                    className="form-control"
                    value={this.state.years_of_experience}
                    onChange={(e) => this.handleChange({ years_of_experience: e.target.value })}
                    />
                </label>
                <label htmlFor="Resume">
                  Resume:
                  <input
                    name="file"
                    id="file"
                    type="file"
                    ref={this.fileInput}
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.send(e)}>
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default App