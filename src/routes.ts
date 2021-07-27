import { Router } from "express";
import { AuthenticateForgotPasswordController } from "./Controllers/AuthenticateForgotPasswordController";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateAccountsController } from "./Controllers/CreateAccountsController";
import { CreateUsersController } from "./Controllers/CreateUsersController";
import { DeleteAccountController } from "./Controllers/DeleteAccountController";
import { ListAccountsController } from "./Controllers/ListAccountsController";
import { RecoveryPasswordController } from "./Controllers/RecoveryPasswordController";
import { UpdateAccountController } from "./Controllers/UpdateAccountController";
import { ensureAuth } from "./Middlewares/ensureAuth";
import { ensureAuthPassword } from "./Middlewares/ensureAuthPassword";

const router = Router();

const createUsersController = new CreateUsersController();
const authenticateUserController = new AuthenticateUserController();
const createAccountsController = new CreateAccountsController();
const listAccountsController = new ListAccountsController();
const authenticateForgotPasswordController =
  new AuthenticateForgotPasswordController();

const recoveryPasswordController = new RecoveryPasswordController()

const updateAccountController = new UpdateAccountController();

const deleteAccountController = new DeleteAccountController();

router.get("/accounts", ensureAuth, listAccountsController.handle);

router.post("/users", createUsersController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/accounts", ensureAuth, createAccountsController.handle);
router.post("/forgot_password", authenticateForgotPasswordController.handle);

router.post("/recovery_password",ensureAuthPassword,recoveryPasswordController.handle)

router.put("/accounts/:id", ensureAuth, updateAccountController.handle);

router.delete("/accounts/:id", ensureAuth, deleteAccountController.handle);

export { router };
