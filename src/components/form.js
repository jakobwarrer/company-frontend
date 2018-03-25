import React from 'react';

const CompanyForm = props => (
  <div>
    <h3>Create Company</h3>
    <form onSubmit={props.submit}>
      <label htmlFor="cvr">Enter Cvr</label>
      <input required id="cvr" name="cvr" type="number" />

      <label htmlFor="company_name">Enter Company name</label>
      <input required id="company_name" name="company_name" type="text" />

      <label htmlFor="address">Enter Address</label>
      <input required id="address" name="address" type="text" />

      <label htmlFor="city">Enter City</label>
      <input required id="city" name="city" type="text" />

      <label htmlFor="country">Enter Country</label>
      <input required id="country" name="country" type="text" />

      <label htmlFor="phone_number">Enter Phone number</label>
      <input id="phone_number" name="phone_number" type="number" />

      <button className="btn btn__green">Create Company</button>
    </form>
  </div>
);

export default CompanyForm;
