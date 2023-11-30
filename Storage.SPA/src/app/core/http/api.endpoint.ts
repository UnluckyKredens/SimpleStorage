import {environment} from './../../../environments/environment'

export const apiEndpoints = {
  items:  {
    getItemList: `${environment.apiUrl}/api/Items/list`,
    getItemById: `${environment.apiUrl}/api/items`,
    addItem: `${environment.apiUrl}/api/Items`,
    deleteItem: `${environment.apiUrl}/api/Items/delete/`,
    getLargestId: `${environment.apiUrl}/api/Items/getlargestid`
  },
  users: {
    login: `${environment.apiUrl}/api/User/login`,
    findUserById: `${environment.apiUrl}/api/User/getuser/`
  }
}
