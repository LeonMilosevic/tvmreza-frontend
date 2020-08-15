import React, { useEffect, useState } from "react";
// import helpers
import { Link } from "react-router-dom";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// import helpers
import {
  videosectionReadAllByDate,
  videosectionRemoveById,
} from "../../../api/adminApi";

const ReadVideo = () => {
  const [video, setVideo] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    videosectionReadAllByDate()
      .then((response) => response.json())
      .then((responseJson) => setVideo(responseJson))
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemoveVideo = (e, id) => {
    e.preventDefault();
    videosectionRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const displayVideo = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      <div className="col s12">
        {video &&
          video.map((video, i) => (
            <div className="article-table" key={i}>
              <div>
                <span>
                  <span className="article-table-list">Naslov</span>:{" "}
                  {video.header} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Lokacija</span>:{" "}
                  {video.location} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Napravljen</span>:{" "}
                  {video.dateCreated.slice(0, 10)}
                </span>
              </div>

              <div>
                <Link
                  onClick={(e) => handleClickRemoveVideo(e, video.id)}
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
        createTo={"/admin/videos/create"}
        readTo={"/admin/videos/readall"}
      />
      {displayVideo()}
    </>
  );
};

export default ReadVideo;
