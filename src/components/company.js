import React from 'react';

const Company = props => (
  <div>
    <h2>Companies</h2>
    {props.companies.map((company, key) => (
      <div key={key}>
        <h4>{company.company_name}</h4>
        <ul>
          <li>CVR: {company.cvr}</li>
          <li>Address: {company.address}</li>
          <li>City: {company.city}</li>
          <li>Contry: {company.country}</li>
          <li>Phone: {company.phone_number}</li>
        </ul>
        <a className="btn btn__delete" onClick={() => props.click(company)}>
          Delete
        </a>
      </div>
    ))}
  </div>
);

export default Company;
