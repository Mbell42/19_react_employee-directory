//DEPENDENCIES
import  Axios from"axios";

export default {
    // This function will use Axios to request 20 random users using https://randomuser.me/api/
    // Location of API: https://randomuser.me/
    search: () => {
        return Axios.get("https://randomuser.me/api/?results=20&nat=us");
    },
};