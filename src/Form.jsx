import "bootstrap/dist/css/bootstrap.rtl.min.css";

import { useState, useEffect } from "react";

const Form = () => {
  return (
    <div className="row my-5">
      <div className="col-5 w-25 offset-4">
        <form className="shadow p-4">
          <div className="d-flex flex-column align-items-center">
            <label className="m-2">
              <span className="p-2">Username</span>
              <input type="text" />
            </label>
            <label className="m-2">
              <span className="p-2">Password</span>
              <input type="text" />
            </label>
            <button className="m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
