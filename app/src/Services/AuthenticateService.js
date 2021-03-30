import config from '../Config/configuration.json';
import axios from 'axios';

const LOGIN_PATH = config.SERVER_URL + "/login";

class AuthenticationService {
    login(keyId, secretKeyId) {
        return axios
            .post(LOGIN_PATH, {
                keyId,
                secretKeyId
            })
            .then(response => {
                console.log(JSON.stringify(response));
                if (response.data.token) {
                    localStorage.setItem("token", JSON.stringify(response.data));
                }

                return response.data;
            });
    }
}

export default new AuthenticationService();