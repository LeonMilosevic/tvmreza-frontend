import React, { useEffect } from "react";
// import components
import NavTop from "../navs/NavTop";
import NavMiddle from "../navs/NavMiddle";
import Videos from "./Videos";
import SpinnerDots from "../ui/SpinnerDots";
// import helpers
import { PublicContext } from "../../context/public/PublicContext";
import {
  videosectionReadAllByDateOnly6,
  categoriesReadAllByDate,
} from "../api/publicApi";
// import NavBottom from "../navs/NavBottom";

const Home = () => {
  const {
    video,
    setVideo,
    categories,
    setCategories,
    loading,
    setLoading,
  } = React.useContext(PublicContext);
  useEffect(() => {
    try {
      Promise.all([
        videosectionReadAllByDateOnly6().then((response) => response.json()),
        categoriesReadAllByDate().then((response) => response.json()),
      ]).then((responseJson) => {
        setVideo(responseJson[0]);
        setCategories(responseJson[1]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [setVideo, setCategories, setLoading]);
  return (
    <>
      {loading ? (
        <SpinnerDots />
      ) : (
        <>
          <NavMiddle />
          {/* <NavBottom /> */}
          <NavTop />
          <Videos videos={video} />
        </>
      )}
    </>
  );
};

export default Home;
