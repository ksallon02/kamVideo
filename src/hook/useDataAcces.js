import { useEffect, useState } from "react";
import db from "../fireBaseConfig";

export const useGetAllUsers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      let result = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(result);
    });
  }, []);
  return data;
};

export const useGetAllMovies = (setLoading) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    db.collection("movies").doc("Ne9PRK2fLIswTrxKyGuG").onSnapshot((doc) => {
      setData(doc.data());
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);
  return data;
};
