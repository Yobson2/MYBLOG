import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import { accountServices } from '../services/account.service';
import { UserContext } from '../context/UserContext';

function Home() {
    const {setUserInfo, userInfo} =useContext(UserContext); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3030/v1/profile/${accountServices.getToken()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }
            });

            if (response.status === 200) {
                const data = await response.json();
                setUserInfo(data);
            } else {
                setUserInfo(null);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    // Actualiser les données après déconnexion
    const handleLogout = () => {
        fetchData(); 
    };

    return (
        <div className="app_home">
            <Header onLogout={handleLogout} />
            <Blog />
            <Footer />
        </div>
    );
}

export default Home;
