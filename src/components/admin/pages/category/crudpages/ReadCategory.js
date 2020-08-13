import React, { useState, useEffect } from "react";
// components
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// import helpers
import {
  categoryReadAllByOrder,
  categoryRemoveById,
} from "../../../api/adminApi";
import { Link } from "react-router-dom";

const ReadCategory = () => {
  const [categories, setCategories] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    categoryReadAllByOrder()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
      .then((responseJson) => {
        if (responseJson) {
          return setCategories(responseJson);
        } else {
          return setCategories(null);
        }
      })
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemoveCategory = (e, id) => {
    e.preventDefault();
    categoryRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const readAllcategories = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      {categories !== null ? (
        categories.map((category, i) => (
          <div className="article-table" key={i}>
            <div>
              <span>
                <span className="article-table-list">Naziv</span>:{" "}
                {category.categoryName} |{" "}
              </span>
              <span>
                <span className="article-table-list">Redosled: </span>{" "}
                {category.categoryOrder}
              </span>
            </div>

            <div>
              <Link
                onClick={(e) => handleClickRemoveCategory(e, category.id)}
                to="/"
                className="link-remove"
              >
                {" "}
                Delete
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>Something went wrong with api</div>
      )}
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
      <div className="container">{readAllcategories()}</div>
    </>
  );
};

export default ReadCategory;
