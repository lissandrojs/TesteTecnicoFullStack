import axios from 'axios';

 export const requestUsersApiExternal = async  () => {
        let resultRequest = []

        await axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
                response.data.forEach(element => {   
                resultRequest.push(
                    {
                        id : element.id,
                        name : element.name,
                        username : element.username,
                        email : element.email
                    })
                });
            })
        return resultRequest
}

 export const sortUsersAlphabetically = (arrayCurrent) =>{
        let aaa  = arrayCurrent.sort((a,b)=>{
                if(a.name < b.name){
                    return -1;
                }if(a.name > b.name){
                    return 1;
                }
                    return 0;
        });
        return aaa;
}
