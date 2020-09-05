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
      imagesUrl: page.imageUrl,
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

/* SPORAZUM CRUD */

export const sporazumCreate = (sporazum, dateDisplay) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/sporazum/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoUrl: sporazum.videoUrl,
      content: sporazum.content,
      header: sporazum.header,
      location: sporazum.location,
      dateDisplay: dateDisplay,
    }),
  });
};

export const sporazumReadAllByDate = () => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/sporazum/read/all/ordered`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

export const sporazumRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/sporazum/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

/* VIDEO CRUD */

export const videosectionCreate = (video, dateDisplay) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/video/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoUrl: video.videoUrl,
      content: video.content,
      header: video.header,
      location: video.location,
      dateDisplay: dateDisplay,
    }),
  });
};

export const videosectionReadAllByDate = () => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/video/read/all/ordered`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

export const videosectionRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/video/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

/* TV FACES CRUD */
export const tvfaceCreate = (lica) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/tvface/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: lica.firstName,
      lastName: lica.lastName,
      imageUrl: lica.imageUrl,
      workPosition: lica.workPosition,
      career: lica.career,
      education: lica.education,
      tvprogram: lica.tvprogram,
      professionalChallenges: lica.professionalChallenges,
      contact: lica.contact,
    }),
  });
};

export const tvlicaReadAll = () => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/tvface/read/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

export const tvlicaRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/tvface/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

/* Survey CRUD */

export const surveyCreate = (survey) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/survey/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      display: survey.display,
      question: survey.question,
      answerOne: survey.answerOne,
      answerTwo: survey.answerTwo,
      answerThree: survey.answerThree,
      answerFour: survey.answerFour,
      answerFive: survey.answerFive,
    }),
  });
};

export const surveyReadAll = () => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/survey/read/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

export const surveyRemoveById = (id) => {
  return fetch(`${process.env.REACT_APP_API_ADMIN}/survey/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};

export const surveyUpdateById = (survey) => {
  return fetch(
    `${process.env.REACT_APP_API_ADMIN}/survey/update/${survey.id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        display: survey.display,
        question: survey.question,
        answerOne: survey.answerOne,
        answerTwo: survey.answerTwo,
        answerThree: survey.answerThree,
        answerFour: survey.answerFour,
        answerFive: survey.answerFive,
      }),
    }
  );
};
