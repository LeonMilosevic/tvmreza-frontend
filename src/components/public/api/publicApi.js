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

export const articlesReadOrderedByDate = () => {
  return fetch(`${process.env.REACT_APP_API_PUBLIC}/article/read/all/newest`, {
    method: "GET",
  });
};

export const articlesReadOrderedByMostViewedOnly8 = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/article/read/all/mostviewed/8`,
    {
      method: "GET",
    }
  );
};

export const articlesReadOrderedByMostViewed = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/article/read/all/mostviewed`,
    {
      method: "GET",
    }
  );
};

export const articleReadById = (id) => {
  return fetch(`${process.env.REACT_APP_API_PUBLIC}/article/read/${id}`, {
    method: "GET",
  });
};

export const articleSearchByKeyword = (keyword) => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/article/read/by/${keyword}`,
    {
      method: "GET",
    }
  );
};

// Survey read and update

export const surveyReadByTrue = () => {
  return fetch(`${process.env.REACT_APP_API_PUBLIC}/survey/read`, {
    method: "GET",
  });
};

export const voteSurvey = (id, answer) => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/survey/vote/${id}/${answer}`,
    {
      method: "PUT",
    }
  );
};

// footerbanner read
export const footerBannerReadByOrder = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/footerbanner/read/all/ordered`,
    {
      method: "GET",
    }
  );
};

// sporazum
export const sporazumReadAllOrdedred = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/sporazum/read/all/ordered`,
    {
      method: "GET",
    }
  );
};

// post

export const createPost = (post) => {
  return fetch(`${process.env.REACT_APP_API_PUBLIC}/post/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      articleId: post.articleId,
      username: post.username,
      textContent: post.textContent,
    }),
  });
};

// tv lica
export const tvlicaReadAll = () => {
  return fetch(`${process.env.REACT_APP_API_PUBLIC}/tvface/read/all`, {
    method: "GET",
  });
};

// navpage
export const navpageOrderedByNavOrder = () => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/navbarpage/read/all/ordered`,
    {
      method: "GET",
    }
  );
};
