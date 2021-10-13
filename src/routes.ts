import { Router } from "express";
import { runInThisContext } from "vm";
import { AuthenticateForgotPasswordController } from "./Controllers/AuthenticateForgotPasswordController";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { ChangePasswordController } from "./Controllers/ChangePasswordController";
import { CreateAccountsController } from "./Controllers/CreateAccountsController";
import { CreateUsersController } from "./Controllers/CreateUsersController";
import { DeleteAccountController } from "./Controllers/DeleteAccountController";
import { DeleteUserController } from "./Controllers/DeleteUserController";
import { GetAccountController } from "./Controllers/GetAccountController";
import { ListAccountsController } from "./Controllers/ListAccountsController";
import { RecoveryPasswordController } from "./Controllers/RecoveryPasswordController";
import { UpdateAccountController } from "./Controllers/UpdateAccountController";
import { ensureAuth } from "./Middlewares/ensureAuth";
import { ensureAuthPassword } from "./Middlewares/ensureAuthPassword";

const router = Router();

const createUsersController = new CreateUsersController();
const getAccountController = new GetAccountController();

const authenticateUserController = new AuthenticateUserController();
const createAccountsController = new CreateAccountsController();
const listAccountsController = new ListAccountsController();
const authenticateForgotPasswordController =
  new AuthenticateForgotPasswordController();
const recoveryPasswordController = new RecoveryPasswordController();
const changePasswordController = new ChangePasswordController();

const updateAccountController = new UpdateAccountController();

const deleteAccountController = new DeleteAccountController();
const deleteUserController = new DeleteUserController();

router.get("/accounts", ensureAuth, listAccountsController.handle);
router.get("/accounts/search/:id", ensureAuth, getAccountController.handle);

router.post("/users", createUsersController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/accounts", ensureAuth, createAccountsController.handle);
router.post("/forgot_password", authenticateForgotPasswordController.handle);
router.post(
  "/recovery_password",
  ensureAuthPassword,
  recoveryPasswordController.handle
);
router.post("/change_password", ensureAuth, changePasswordController.handle);
router.post("/accounts/search", ensureAuth, getAccountController.handle);

router.put("/accounts/:id", ensureAuth, updateAccountController.handle);

router.delete("/accounts/:id", ensureAuth, deleteAccountController.handle);
router.delete("/users", ensureAuth, deleteUserController.handle);

export { router };
