import { useState, useEffect } from "react";

const useFindUsers = (API) => {
  const [users, setUsers] = useState({});
  useEffect(() => {    
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      });
    // eslint-disable-next-line
  }, []);
  return users;
}

export default useFindUsers;
