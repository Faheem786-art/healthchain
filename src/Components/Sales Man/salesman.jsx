import React from 'react'

import "./salesman.css"
function Salesman() {
  return (
    <div className='com'>
      <main>
        <form id="login_form" className="form_class" action="" method="post">
          <div className="form_div">
            <center>
              <h2>Sales Man Portal</h2>
            </center>
            <div className="flex_class">
              <input
                className="left"
                type="text"
                placeholder="Sales Man Name"
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
              placeholder="Company Name"
            />
              <input
              id="pass"
              className="field_class"
              type="text"
              placeholder="Stock (Quantity)"
            />

            <button className="submit_class" type="submit" >
              Submit
            </button>
          </div>
        </form>
      </main>

    </div>
  )
}

export default Salesman
