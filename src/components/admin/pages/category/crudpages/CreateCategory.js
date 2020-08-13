import React, { useEffect, useState } from "react";
// import helpers
import M from "materialize-css";
import { categoryCreate } from "../../../api/adminApi";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const CreateCategory = () => {
  const [newCategory, setNewCategory] = useState({
    categoryName: "",
    categoryOrder: "1",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChangeCategory = (name) => (e) => {
    setError("");
    setSuccess("");
    setNewCategory({ ...newCategory, [name]: e.target.value });
  };

  const clickSubmitCreateCategory = () => {
    if (newCategory.categoryName === "" || newCategory.categoryOrder === "") {
      return setError("Fields are missing");
    }
    categoryCreate(newCategory)
      .then((response) => {
        if (response.ok === false) {
          setError(`Redosled ${newCategory.categoryOrder} je vec u upotrebi`);
        } else {
          setSuccess("Category created");
        }
      })
      .catch(() => setError("Something went wrong please try again"));
  };

  const createCategoryForm = () => (
    <>
      <div className="input-field col s12">
        <input
          onChange={handleChangeCategory("categoryName")}
          type="text"
          className="validate"
        />
        <label htmlFor="keywords">Category name</label>
      </div>
      <div className="input-field col s12">
        <select onChange={handleChangeCategory("categoryOrder")}>
          <option value="" disabled>
            Choose your option
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <label>Odaberi redosled</label>
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreateCategory}
          className="waves-effect waves-light btn"
        >
          Submit
        </button>
      </div>
    </>
  );

  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab
        createTo={"/admin/categories/create"}
        readTo={"/admin/categories/readall"}
      />
      <div className="container">{createCategoryForm()}</div>
    </>
  );
};

export default CreateCategory;
