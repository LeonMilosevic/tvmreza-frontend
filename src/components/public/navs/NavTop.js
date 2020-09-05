import React, { useEffect, useState, useContext } from "react";
// import helpers
import { Link } from "react-router-dom";
import {
  navpageOrderedByNavOrder,
  articleSearchByKeyword,
} from "../api/publicApi";
import M from "materialize-css";
import { PublicContext } from "../../context/public/PublicContext";

const NavTop = () => {
  const [navbarpages, setNavbarpages] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { setKeywordError, setArticlesByKeyword } = useContext(PublicContext);

  useEffect(() => {
    M.AutoInit();
    navpageOrderedByNavOrder()
      .then((response) => response.json())
      .then((responseJson) => setNavbarpages(responseJson))
      .catch((error) => console.log(error));
  }, []);

  const handleOnMouseEnterHideIcon = (e) => {
    e.target.nextElementSibling.style.display = "none";
  };

  const handleOnMouseLeaveShowIcon = (e) => {
    e.target.nextElementSibling.style.display = "block";
    e.target.value = "";
  };

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const clickSubmitSearchKeyword = (e) => {
    articleSearchByKeyword(keyword)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.length === 0) {
          setKeywordError("Nema trazenih rezultata");
        } else {
          setKeywordError("");
          setArticlesByKeyword(response);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="nav-top-custom">
      <div className="container nav-wrapper-custom">
        <div className="nav-content-left">
          <Link
            to="!#"
            className="dropdown-trigger nav-top-link-first"
            data-target="dropdown1"
          >
            O nama
          </Link>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <Link to="/onama/partnerstvo">Partnerstvo</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/onama/vizijaimisija">Vizija i Misija</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/onama/pokrivenost">Pokrivenost</Link>
            </li>
          </ul>
          <Link
            to="!#"
            className="dropdown-trigger nav-top-link"
            data-target="dropdown2"
          >
            Partneri
          </Link>
          <ul id="dropdown2" className="dropdown-content">
            <li>
              <Link to="/partneri/tvmir">TV Mir</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/partneri/tvmost">TV Most</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/partneri/tvpuls">TV Puls</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/partneri/tvherc">TV Herc</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/partneri/newpress">New Press Production</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
          </ul>
          <Link
            to="!#"
            className="dropdown-trigger nav-top-link"
            data-target="dropdown3"
          >
            Program
          </Link>
          <ul id="dropdown3" className="dropdown-content">
            <li>
              <Link to="/program/tvmrezapromofilm">TV Mreža promo film</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/program/kosnetinfo">KoSNet INFO</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/program/slobodnosrpskitalkshow">
                Slobodno Srpski Talk Show
              </Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/program/agrar">Agrar</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/program/koreni">Koreni</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
          </ul>
          <Link
            to="!#"
            className="dropdown-trigger nav-top-link"
            data-target="dropdown4"
          >
            Kontakt
          </Link>
          <ul id="dropdown4" className="dropdown-content">
            <li>
              <Link to="/kontakt/tvmreza">TV Mreža</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/kontakt/tvmir">TV Mir</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/kontakt/tvmost">TV Most</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/kontakt/tvpuls">TV Puls</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/kontakt/tvherc">TV Herc</Link>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Link to="/kontakt/newpress">New Press Production</Link>
            </li>
          </ul>
          <Link className="nav-top-link" to="/tvlica">
            TV Lica
          </Link>
          {navbarpages &&
            navbarpages.map((nav, i) => (
              <Link
                key={i}
                className="nav-top-link"
                to={{ pathname: `/stranica/${nav.navbarName}`, state: nav }}
              >
                {nav.navbarName}
              </Link>
            ))}
        </div>
        <div className="nav-content-right">
          <div className="input-field col s6">
            {keyword && (
              <Link
                to={`/vesti/pretraga/${keyword}`}
                className="prefix empty-link"
              >
                <i
                  onClick={clickSubmitSearchKeyword}
                  className="material-icons"
                >
                  search
                </i>
              </Link>
            )}

            <input
              id="search"
              type="text"
              required
              onFocus={handleOnMouseEnterHideIcon}
              onBlur={handleOnMouseLeaveShowIcon}
              onChange={handleChangeKeyword}
              className="validate"
            />
            <label htmlFor="icon_prefix">Pretraga</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
