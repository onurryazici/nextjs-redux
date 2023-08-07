import Layout from "../../components/layout";
import React, { useEffect, useState } from "react";

const ClientSide = () => {
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Layout>
      <div>
        {responseData && Array.from(responseData).map((todos) => {
          return <li>{todos.title}</li>;
        })}
      </div>
    </Layout>
  );
};
export default ClientSide;
