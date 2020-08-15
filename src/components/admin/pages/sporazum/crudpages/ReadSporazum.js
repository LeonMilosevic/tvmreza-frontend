import React, { useEffect, useState } from "react";
// import helpers
import { Link } from "react-router-dom";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// import helpers
import {
  sporazumReadAllByDate,
  sporazumRemoveById,
} from "../../../api/adminApi";

const ReadSporazum = () => {
  const [sporazum, setSporazum] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    sporazumReadAllByDate()
      .then((response) => response.json())
      .then((responseJson) => setSporazum(responseJson))
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemoveSporazum = (e, id) => {
    e.preventDefault();
    sporazumRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const displaySporazum = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      <div className="col s12">
        {sporazum &&
          sporazum.map((sporazum, i) => (
            <div className="article-table" key={i}>
              <div>
                <span>
                  <span className="article-table-list">Naslov</span>:{" "}
                  {sporazum.header} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Lokacija</span>:{" "}
                  {sporazum.location} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Napravljen</span>:{" "}
                  {sporazum.dateCreated.slice(0, 10)}
                </span>
              </div>

              <div>
                <Link
                  onClick={(e) => handleClickRemoveSporazum(e, sporazum.id)}
                  to="/"
                  className="link-remove"
                >
                  {" "}
                  Delete
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );

  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab
        createTo={"/admin/sporazum/create"}
        readTo={"/admin/sporazum/readall"}
      />
      {displaySporazum()}
    </>
  );
};

export default ReadSporazum;
