import React, { useEffect, useState } from "react";
// import helpers
import { Link } from "react-router-dom";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// import helpers
import { tvlicaReadAll, tvlicaRemoveById } from "../../../api/adminApi";

const ReadLica = () => {
  const [lica, setLica] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    tvlicaReadAll()
      .then((response) => response.json())
      .then((responseJson) => setLica(responseJson))
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemoveLica = (e, id) => {
    e.preventDefault();
    tvlicaRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const displayLica = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      <div className="col s12">
        {lica &&
          lica.map((lica, i) => (
            <div className="article-table" key={i}>
              <div>
                <span>
                  <span className="article-table-list">Ime</span>:{" "}
                  {lica.firstName} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Prezime</span>:{" "}
                  {lica.lastName}
                </span>
              </div>

              <div>
                <Link
                  onClick={(e) => handleClickRemoveLica(e, lica.id)}
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
        createTo={"/admin/tvfaces/create"}
        readTo={"/admin/tvfaces/readall"}
      />
      {displayLica()}
    </>
  );
};

export default ReadLica;
