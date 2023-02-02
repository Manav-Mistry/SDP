import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function AddItem() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: 0,
    state: "",
    city: "",
    neighbourhood: "",
  });

  const {title, category, description, price, state, city, neighbourhood} = formData;

  const onChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, password2);
    const itemData = {
        title,
        category,
        description,
        price,
        state,
        city,
        neighbourhood,
    };

    if (
      title == "" ||
      category == "" ||
      description == "" ||
      price == 0 ||
      state == "" ||
      city == "" ||
      neighbourhood == ""
    ) {
    //   toast.error("Please fill all the fields", {
    //     position: toast.POSITION.TOP_CENTER,
    //     theme: "dark",
    //   });
    console.log(itemData);
    } else {
      
      console.log(itemData);
      // dispatch(register(userData));
    }
  };
  return (
    <div className="container">

      <div className="form">
        <div className="form-group">
          <form onSubmit={onSubmit}>
            {/* title */}
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Enter item title"
            />

            {/* category */}
            <select className="form-select" aria-label="Default select example" onChange={onChange}>
                <option name="category" value="1">One</option>
                <option name="category" value="2">Two</option>
                <option name="category" value="3">Three</option>
            </select>

            {/* description */}
            <textarea id="w3review" name="description" rows="4" cols="50" onChange={onChange}>
                
            </textarea>

            {/* price */}
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              onChange={onChange}
              placeholder="Enter item title"
            />

            {/* state */}
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={state}
              onChange={onChange}
              placeholder="Enter item title"
            />

            {/* city */}
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={city}
              onChange={onChange}
              placeholder="Enter item title"
            />

            {/* neighbourhood */}
            <input
              type="text"
              className="form-control"
              id="neighbourhood"
              name="neighbourhood"
              value={neighbourhood}
              onChange={onChange}
              placeholder="Enter item title"
            />

            {/* button */}
            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
