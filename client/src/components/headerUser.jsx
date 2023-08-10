import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserHeader() {
    return ( 
        <label htmlFor="nom" className="block mb-2 text-sm text-gray-600">Nom</label>
     );
}

export default UserHeader;