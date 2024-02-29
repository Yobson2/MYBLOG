
//Gestion avec le localStorage

let saveToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
};

let lagout = () => {
    localStorage.removeItem('token');
};

let islogged=() => {
    let token = localStorage.getItem('token');
    return !!token
};

let getToken = () => {
    return JSON.parse(localStorage.getItem('token'));
};
export const accountServices= {
   saveToken,
   lagout,
   islogged,
   getToken  
};