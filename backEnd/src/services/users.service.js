import { requestUsersApiExternal, sortUsersAlphabetically } from "../utils/users.util";

export const infoUserService = async () => {

        let resultUsers =  await requestUsersApiExternal()

        return sortUsersAlphabetically(resultUsers);
};

