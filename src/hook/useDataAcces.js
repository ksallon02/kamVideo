import { useEffect, useState } from "react";
import db from "../fireBaseConfig";

export const useGetAllUsers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      let result = snapshot.docs.map((doc) => ({ login: doc.data().login,  name: doc.data().name, userName: doc.data().userName }));      
      setData(result);
    });
  }, []);
  return data;
};

export const useGetAllMovies = (setLoading) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    db.collection("movies").doc("7StJNqQ1T9v78ZAmGKy5").onSnapshot((doc) => {
      setData(doc.data());
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);
  return data;
};

export const useGetMyList = () => {
  const [data, setData] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("token")).userName;
  useEffect(() => {
    db.collection("users").doc(user).onSnapshot((doc) => {  
      setData(doc.data().myList);
    });
    // eslint-disable-next-line
  }, []);
  return data;
}
