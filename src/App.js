import React, { Component } from 'react';
import Company from './components/company';
import CompanyForm from './components/form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      api_url: 'https://tehwarrer-api.herokuapp.com/api/v1/companies'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies() {
    fetch(this.state.api_url)
      .then(resp => resp.json()) // Transform the data into json
      .then(data => {
        this.setState({ companies: data });
      })
      .catch(function() {});
  }

  handleClick(company) {
    fetch(this.state.api_url + '/' + company.id, {
      method: 'DELETE'
    })
      .then(resp => {
        console.log(resp.statusText);
      })
      .catch(error => console.error('Error:', error))
      .then(response => this.getCompanies());
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var object = {};
    data.forEach(function(value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    console.log('Creating new company');
    fetch(this.state.api_url, { method: 'POST', body: json })
      .then(resp => {
        if (resp.ok) {
          return resp.statusText;
        }
        throw new Error('Dublicate cvr');
      })
      .then(data => {
        console.log(data);
        this.getCompanies();
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    let companies = this.state.companies;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Totally awesome company frontend</h1>
        </header>
        <div className="container">
          <div className="column">
            <Company click={this.handleClick} companies={companies} />
          </div>
          <div className="column">
            <CompanyForm submit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
