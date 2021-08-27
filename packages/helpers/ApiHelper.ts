import axios from "axios";
import {assert} from 'chai'
import {User} from "../entities/User";

var FormData = require('form-data');
const BASE_API_URL = 'https://api-preprod.affise.com'

export class ApiHelper {

    static async createNewUser(user: User): Promise<void> {
        const requestUrl = BASE_API_URL + '/3.0/admin/user'
        const formData = new FormData()
        formData.append('email', user.email)
        formData.append('password', user.password)
        formData.append('first_name', user.firstName)
        formData.append('last_name', user.lastName)
        formData.append('roles[]', user.roles[0])
        const headers = {
            'api-key': '456505a43730b5f2b4a98fb4ce5408c4',
            ...formData.getHeaders()
        }

        try {
            await axios.post(requestUrl, formData, {headers} )
        } catch (e) {
            console.error(e.response)
            console.error(e.response.status)
            assert.fail('Ошибка создания нового пользователя через API:\n' + e as string)
        }
    }
}
