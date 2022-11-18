import { infoUserService } from "../services/users.service";

export const infoUserController = async (request, response) => {
  
              return response
                  .status(200)
                  .json( await infoUserService());
};
