import React from 'react';
import Layout from '../layout/layout';



const Home = () => {

  return(
   <Layout>
     <div>
        <p
          style={{
            color: "blue",
            fontSize: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 100,
          }}
        >
         Coming Soon
        </p>
      </div>
   </Layout>
  )
}

export default Home;