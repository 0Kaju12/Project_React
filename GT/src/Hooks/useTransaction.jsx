import { useState, useEffect } from "react";


function useTransaction(unique) {
  const [res, setRes] = useState([]);
//    console.log('token'+unique);


  const fetchData = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Cookie",
        "ci_session=7c38fc1fc455fca9846d688fb8343f5c7ea71bee"
      );

      const raw = JSON.stringify({
        env_type: "Prod",
        app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
        unique_token: unique,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "https://khatrimatka.online/api-wallet-transaction-history",
        requestOptions
      );
      const result = await response.json();

      // Update state with the fetched data
      setRes(result);
      return result;
    //   console.log(result);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return res;
}

export default useTransaction;
