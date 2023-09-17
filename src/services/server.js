import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000",
// baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});


// const mockUsersList = [
//     {
//         id: '123',
//         firstName: 'test999',
//         lastName: 'test999', 
//         address: 'test999',  
//         phoneNumber: '123'   
//     },
//     {
//         id: '999',
//         firstName: 'test111',
//         lastName: 'test111', 
//         address: 'test111',  
//         phoneNumber: '123'   
//     }
// ]

async function addNewUser(newUser){
    const response = await api.post('/users/add-user', newUser);
    return response.data;
}


async function addUserHobbies(userHobbies){
    const response = await api.post('/users/add-hobby', userHobbies);
    return response.data;
}

async function getUsers(){
    try {
        const response = await api.get('/users');
        console.log(response.data)
        return response.data;

    } catch (error) {
        
    }
}

async function getUsersWithHobbies(){
    try {
        const response = await api.get('/users/hobbies');
        console.log(response.data)
        return response.data;

    } catch (error) {
        
    }
}

async function deleteUser(userId){
    try {
        const response = await api.delete(`/users/${userId}`);
        console.log(response.data)
        return response.data;

    } catch (error) {
        
    }
}


export  {addNewUser, addUserHobbies, getUsers, getUsersWithHobbies, deleteUser};