import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { ListClientController } from "./modules/clients/useCases/listClient/ListClientController";
import { MeController } from "./modules/clients/useCases/me/MeController";
import { RefreshTokenController } from "./modules/clients/useCases/refreshToken/RefreshTokenController";
import { CreateRoomController } from "./modules/rooms/useCases/createRoom/CreateRoomController";
import { CreateSchoolController } from "./modules/schools/useCases/createSchool/CreateSchoolController";
import { CreateTestController } from "./modules/test/useCases/createTest/CreateTestController";
import { FindStudentTestController } from "./modules/test/useCases/findStudentTest/FindStudentTestController";
import { ListRoomTestController } from "./modules/test/useCases/listRoomTest/ListRoomTestController";
import { ListSchoolTestController } from "./modules/test/useCases/listSchoolTest/ListSchoolTestController";
import { UpdateStudentTestController } from "./modules/test/useCases/updateStudentTest/UpdateStudentTestController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createTestController = new CreateTestController();
const findStudentTestController = new FindStudentTestController();
const updateStudentTestController = new UpdateStudentTestController();
const listSchoolTestController = new ListSchoolTestController();
const createSchoolController = new CreateSchoolController();
const createRoomController = new CreateRoomController();
const listRoomTestController = new ListRoomTestController();
const listClientController = new ListClientController();
const refreshTokenController = new RefreshTokenController();
const meController = new MeController();

routes.post("/client", createClientController.handle);
routes.get("/client", ensureAuthenticateClient, listClientController.handle);
routes.post("/autheticate", authenticateClientController.handle);
routes.post("/test", ensureAuthenticateClient, createTestController.handle);
routes.get("/me", ensureAuthenticateClient, meController.handle);
routes.post("/refresh", refreshTokenController.handle);
routes.get(
  "/test/school",
  ensureAuthenticateClient,
  listSchoolTestController.handle
);
routes.post(
  "/test/room",
  ensureAuthenticateClient,
  listRoomTestController.handle
);
routes.post(
  "/students",
  ensureAuthenticateClient,
  findStudentTestController.handle
);
routes.post(
  "/student",
  ensureAuthenticateClient,
  updateStudentTestController.handle
);
routes.post("/school", ensureAuthenticateClient, createSchoolController.handle);
routes.post("/room", ensureAuthenticateClient, createRoomController.handle);

export { routes };
