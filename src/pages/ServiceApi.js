const baseUrl = "http://94.74.86.174:8080/api";
const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg";

const login = async (form) => {
  const dataUser = await fetch(baseUrl + "/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await dataUser.json();
};

const registerUser = async (form) => {
  const register = await fetch(baseUrl + "/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await register.json();
};

const getAllChecklist = async () => {
  const checkList = await fetch(baseUrl + "/checklist", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await checkList.json();
};

const createName = async (form) => {
  const name = await fetch(baseUrl + "/checklist", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  });
  return await name.json();
};

const deleteName = async (id) => {
  const name = await fetch(baseUrl + `/checklist/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return name.json();
};

export { login, registerUser, getAllChecklist, createName, deleteName };
