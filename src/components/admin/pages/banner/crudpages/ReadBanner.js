import React, { useState, useEffect } from "react";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// helpers
import { Link } from "react-router-dom";
import { sidebannerRead, sidebannerRemoveById } from "../../../api/adminApi";

const ReadBanner = () => {
  const [banners, setBanners] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    sidebannerRead()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return false;
        }
      })
      .then((responseJson) => {
        if (responseJson) {
          return setBanners(responseJson);
        } else {
          return setBanners(null);
        }
      })
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemoveBanner = (e, id) => {
    e.preventDefault();
    sidebannerRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const readAllBanners = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      {banners !== null ? (
        banners.map((banner, i) => (
          <div className="article-table" key={i}>
            <div>
              <span>
                <span className="article-table-list">Image</span>:{" "}
                {banner.imageUrl} |{" "}
              </span>
              <span>
                <span className="article-table-list">Link</span>:{" "}
                {banner.linkToUrl} |{" "}
              </span>
              <span>
                <span className="article-table-list">Redosled: </span>{" "}
                {banner.sidebannerOrder}
              </span>
            </div>

            <div>
              <Link
                onClick={(e) => handleClickRemoveBanner(e, banner.id)}
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
        createTo={"/admin/banners/create"}
        readTo={"/admin/banners/readall"}
      />
      <div className="container">{readAllBanners()}</div>
    </>
  );
};

export default ReadBanner;
