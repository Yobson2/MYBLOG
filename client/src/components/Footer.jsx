import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';

function Footer() {
    const userContext = useContext(UserContext);
    return (
        <footer className="bg-gray-200 dark:bg-gray-800 text-center lg:text-left">
        <div className="container mx-auto py-4 lg:px-8 text-gray-700 dark:text-gray-300">
          <p className="text-sm">
            © 2024 Tout Droit Réservé: 
            <a
              className="text-blue-600 dark:text-blue-400 ml-2 hover:underline"
              href="#"
            >
              YoyoBlog
            </a>
          </p>
        </div>
      </footer>
      
    );
}

export default Footer;
