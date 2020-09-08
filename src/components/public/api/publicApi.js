/**
 * Public api calls, here we will have all the api calls for the public domain
 *
 */

// video section get
export const videosectionReadAllByDatePaginated = (pageNumber, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/video/read/all/ordered?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      method: "GET",
    }
  );
};

// categories get
export const categoriesReadAllByOrdered = () => {
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
export const articlesReadOrderedByDate = (pageNumber, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/article/read/all/newest?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      method: "GET",
    }
  );
};

export const articlesReadOrderedByMostViewed = (pageNumber, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/article/read/all/mostviewed?pageNumber=${pageNumber}&pageSize=${pageSize}`,
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

export const articleReadByCategorySliced = (id) => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/category/read/articles/sliced/${id}`,
    {
      method: "GET",
    }
  );
};

export const articleReadByCategory = (id, pageNumber, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/article/read/by/category/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`,
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
export const sporazumReadAllOrdedred = (pageNumber, pageSize) => {
  return fetch(
    `${process.env.REACT_APP_API_PUBLIC}/sporazum/read/all/ordered?pageNumber=${pageNumber}&pageSize=${pageSize}`,
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
