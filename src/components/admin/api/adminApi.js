/**
 * Here are functions to make api calls to the server
 *
 * Author: Leon
 */
import { getTokenFromLocalStorage } from "../../auth/auth";
/* ARTICLE CRUD */

export const articleCreate = (article, dateDisplay) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/article/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categoryId: article.categoryId,
      keywords: article.keywords,
      videoUrl: article.videoUrl,
      imageUrl: article.imageUrl,
      content: article.content,
      header: article.header,
      author: article.author,
      dateDisplay: dateDisplay,
    }),
  });
};

export const articleReadAllByDate = () => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/article/read/all/ordered`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

export const articleUpdateById = (article, dateDisplay, articleContent) => {
  return fetch(
    `${process.env.REACT_APP_API_ADMIN}/article/update/${article.id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: article.categoryId,
        keywords: article.keywords,
        videoUrl: article.videoUrl,
        imageUrl: article.imageUrl,
        content: articleContent,
        header: article.header,
        author: article.author,
        dateDisplay: dateDisplay,
      }),
    }
  );
};

export const articleRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/article/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

/* CATEGORY CRUD */
export const categoryReadAllByOrder = () => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/category/read/all/ordered`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

export const categoryCreate = (newCategory) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/category/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categoryName: newCategory.categoryName,
      categoryOrder: newCategory.categoryOrder,
    }),
  });
};

export const categoryRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/category/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

/* SIDEBANNER CRUD */
export const sidebannerCreate = (newBanner) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/sidebanner/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl: newBanner.imageUrl,
      linkToUrl: newBanner.linkToUrl,
      sidebannerOrder: newBanner.sidebannerOrder,
    }),
  });
};

export const sidebannerRead = () => {
  return fetch(
    `${process.env.REACT_APP_API_ADMIN}/sidebanner/read/all/ordered`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    }
  );
};

export const sidebannerRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/sidebanner/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

/* FOOTERBANNER CRUD */
export const footerbannerCreate = (newFooterbanner) => {
  console.log(newFooterbanner);
  return fetch(`${process.env.REACT_APP_API_ADMIN}/footerbanner/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl: newFooterbanner.imageUrl,
      linkToUrl: newFooterbanner.linkToUrl,
      footerbannerOrder: newFooterbanner.footerbannerOrder,
    }),
  });
};

export const footerbannersReadAllByOrder = () => {
  return fetch(
    `${process.env.REACT_APP_API_ADMIN}/footerbanner/read/all/ordered`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    }
  );
};

export const footerbannerRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/footerbanner/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

/* Navpage CRUD */

export const navpageCreate = (page) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/navbarpage/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      navbarName: page.navbarName,
      navbarOrder: page.navbarOrder,
      videoUrl: page.videoUrl,
      imageUrl: page.imageUrl,
      content: page.content,
      header: page.header,
    }),
  });
};

export const navbarPageReadAllByOrder = () => {
  return fetch(
    `${process.env.REACT_APP_API_ADMIN}/navbarpage/read/all/ordered`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    }
  );
};

export const navbarPageRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/navbarpage/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

/* POSTS CRUD */

export const postsReadAllByOrder = () => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/post/read/all/ordered`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

export const postRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/post/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};
