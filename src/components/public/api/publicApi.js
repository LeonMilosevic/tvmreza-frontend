/**
 * Public api calls, here we will have all the api calls for the public domain
 *
 */

// video section get
export const videosectionReadAllByDateOnly6 = () => {
  return fetch(`${process.env.REACT_APP_API_PUBLIC}/video/read/all/ordered/6`, {
    method: "GET",
  });
};

export const videosectionReadAllByDate = () => {
  return fetch(`${process.env.REACT_APP_API_PUBLIC}/video/read/all/ordered`, {
    method: "GET",
  });
};

// categories get
export const categoriesReadAllByDate = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/category/read/all/ordered`,
    {
      method: "GET",
    }
  );
};

// sidebanners get
export const sidebannersReadAllOrdered = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/sidebanner/read/all/ordered`,
    {
      method: "GET",
    }
  );
};

// articles read
export const articlesReadOrderedOnly8 = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/article/read/all/ordered/8`,
    {
      method: "GET",
    }
  );
};

export const articlesReadOrderedByMostViewedOnly8 = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/article/read/all/mostviewed/8`,
    {
      method: "GET",
    }
  );
};
