import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import { accountServices } from '../services/account.service';

function Home() {

    const initialData= async ()=> {
        const response= await fetch(`http://localhost:3030/v1/profile/${accountServices.getToken()}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 Accept:"application/json",
            }
        })
        if(response.status===200){
            const data = await response.json();
            console.log('data',data);           
          }
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