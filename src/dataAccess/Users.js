import db from "../fireBaseConfig";

export const addNewUser = (data) => {
  let user = {
    login: { email: data.email.trim(), password: data.password },
    name: data.name.trim(),
    userName:
      data.name.trim().substring(0, 1).toLowerCase() +
      data.name.trim().split(" ")[1].toLowerCase(),
    myList: [],
  };
  db.collection("users").doc(user.userName).set(user);
};

export const validateExistUser = (email, execute) => {
  db.collection("users").where("login.email", "==", email).onSnapshot((snapshot) => {      
      execute(snapshot.size > 0);
  });
};
