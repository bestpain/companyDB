export const signInApiCall = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const signUpApiCall = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => err);
};

export const forgotPasswordApiCall = (email) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/forgot-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => response.json())
    .catch((err) => err);
};

export const resetPasswordApiCall = (newPassword) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/reset-password`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPassword),
  })
    .then((response) => response.json())
    .catch((err) => err);
};

export const searchCompanyApiCall = (term) => {
  return fetch(`${process.env.REACT_APP_API_URL}/company/search?term=${term}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => err);
};

export const getFavouriteCompanyApiCall = (token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/favourite`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => err);
};

export const markFavouriteCompanyApiCall = (companyId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/mark/${companyId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => err);
};

export const unmarkFavouriteCompanyApiCall = (companyId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/unmark/${companyId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => err);
};
