import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

function Home() {

    const initialData= async ()=> {
        await fetch('http://localhost:3030/v1/profile',{
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 Accept:"application/json",
            }
        })
    }
     

    useEffect( () =>  {
        initialData()  
            
          
    },[]);
    return (  
        <div className="app_home">
            <Header />
            <Blog />
            <Footer />
        </div>
           
    );
}

export default Home;