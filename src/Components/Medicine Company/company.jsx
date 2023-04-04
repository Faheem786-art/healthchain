import "./company.css";
import React from "react";

function Company() {
  return (
    <div className="com">
      <main>
        <form id="login_form" className="form_class" action="" method="post">
          <div className="form_div">
            <center>
              <h2>Company Portal</h2>
            </center>
            <div className="flex_class">
              <input
                className="left"
                type="text"
                placeholder="Company Name"
                autofocus
              />
              <input
                className="left"
                type="text"
                placeholder="Reg no."
                autofocus
              />
            </div>

            <input
              id="pass"
              className="field_class"
              type="text"
              placeholder="Product Name"
            />
            <input
              id="pass"
              className="field_class"
              type="text"
              placeholder="Raw Meterial Source"
            />

            <button className="submit_class" type="submit" >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Company;
