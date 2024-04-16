import axios from 'axios';

const checkToken = async (token) => {  //Verifica se um token é válido através de uma requisição á API
    try {
        const response = await axios.get('http://127.0.0.1:8000/authenticate/authtoken', {
            headers: {
                Authorization : `Token ${token}`
            }
        });
        return response.data ? true : false; //Se existir resposta, retorne true, se não retorne false
    } catch(error){
        return false;
    }
}

export default checkToken;
