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

/* CATEGORY CRUD */
export const categoryReadAllByOrder = () => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/category/read/all/ordered`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};
