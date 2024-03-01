import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import { accountServices } from '../services/account.service';

function Home() {
    const [userData, setUserData] = useState(null);

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
                setUserData(data);
            } else {
                setUserData(null);
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
            {userData ? <Blog userData={userData} /> : <Blog />}
            <Footer />
        </div>
    );
}

export default Home;
