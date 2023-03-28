
export const isLoggedIn = () =>{
    const data = localStorage.getItem('data');
    if(data!= null){
        return true;
    }
    else{
        return false;
    }
}

export const doLogin = (userData) =>{
    localStorage.setItem('data', JSON.stringify(userData));
}

export const doLogout = () =>{
    const data = localStorage.removeItem('data');
}

export const getCurrentUserDetails = ()=>{
    const data = localStorage.getItem('data');

    if(isLoggedIn()){
        return JSON.parse(data);
    }
    else{
        return undefined;
    }
}

export const getToken = () =>{
    const data = localStorage.getItem('data');

    return "Bearer "+ JSON.parse(data);
}