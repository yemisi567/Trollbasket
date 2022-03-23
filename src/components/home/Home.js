import React from 'react';
import { Header } from '../header';
import Layout from '../layout/layout';



const Home = () => {

  return(
   <Layout>
     <Header title='Home' />
        <p className='other-pages'>
         Coming Soon
        </p>
   </Layout>
  )
}

export default Home;