import React, { useState, useEffect } from "react";
// components
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// import helpers
import {
  footerbannersReadAllByOrder,
  footerbannerRemoveById,
} from "../../../api/adminApi";
import { Link } from "react-router-dom";

const ReadFooter = () => {
  const [footerbanners, setFooterbanners] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    footerbannersReadAllByOrder()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
      .then((responseJson) => {
        if (responseJson) {
          return setFooterbanners(responseJson);
        } else {
          return setFooterbanners(null);
        }
      })
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemoveFooterbanner = (e, id) => {
    e.preventDefault();
    footerbannerRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const readAllfooterbanners = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      {footerbanners !== null ? (
        footerbanners.map((footerbanner, i) => (
          <div className="article-table" key={i}>
            <div>
              <span>
                <span className="article-table-list">Image link</span>:{" "}
                {footerbanner.imageUrl} |{" "}
              </span>
              <span>
                <span className="article-table-list">Link</span>:{" "}
                {footerbanner.linkToUrl} |{" "}
              </span>
              <span>
                <span className="article-table-list">Redosled: </span>{" "}
                {footerbanner.footerbannerOrder}
              </span>
            </div>

            <div>
              <Link
                onClick={(e) =>
                  handleClickRemoveFooterbanner(e, footerbanner.id)
                }
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
        createTo={"/admin/footers/create"}
        readTo={"/admin/footers/readall"}
      />
      <div className="container">{readAllfooterbanners()}</div>
    </>
  );
};

export default ReadFooter;
