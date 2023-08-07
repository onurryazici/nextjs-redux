import Layout from '../../components/layout'
import React from 'react'

const ServerSide = ({serverData}) => {
  return (
    <Layout>
      {Array.from(serverData).map(
        todos => {
          return <li>{`${todos.completed}`}</li>
        }
      )}
    </Layout>
  )
}

export async function getServerSideProps() {
  // Sunucu tarafında veriyi oluştur veya API isteği gönder
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data)
  return {
    props: {
      serverData: data,
    },
  };
}
export default ServerSide
