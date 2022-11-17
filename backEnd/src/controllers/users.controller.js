import { infoUserService } from "../services/users.service";

export const infoUserController = (request, response) => {

  return response.status(200).json(infoUserService());
};
