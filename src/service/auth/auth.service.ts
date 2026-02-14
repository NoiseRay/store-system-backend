import { prisma } from "../../config/prisma";
import { JWT } from "../../helpers/jwt";
import {
    IAuthService,
    IUser,
    ILoginPost,
    IEmployeeInfo,
} from "./IAuth.interface";
import { NotFoundError, UnauthorizedError } from "../../helpers/errors/error";

/**
 * Service responsible for handling authentication and user management logic.
 *
 * Implements {@link IAuthService} to provide methods for validating user
 * credentials and creating new employee records.
 *
 * @example
 * ```ts
 * const authService = new AuthService();
 *
 * // Validate a user login
 * const result = await authService.validateInfoUser({
 *   email: "john@example.com",
 *   password: "securePassword123",
 * });
 *
 * // Create a new employee
 * await authService.createNewEmployee({
 *   email: "jane@example.com",
 *   password: "anotherPassword",
 *   token: "abc123",
 *   tokenExpires: new Date("2026-12-31"),
 *   name: "Jane",
 *   lastname: "Doe",
 *   birthdate: "1995-04-15",
 *   rfc: "DODJ950415XXX",
 *   nss: "12345678901",
 *   address: "123 Main St",
 *   salary: 15000,
 * });
 * ```
 */
export class AuthService implements IAuthService {
    constructor() {}

    /**
     * Validates user credentials by looking up the email in the database
     * and verifying that the account is active.
     *
     * @param data - The login payload containing email and password.
     * @returns A confirmation string `"ok"` if the user is valid.
     *
     * @throws {@link NotFoundError} If no user with the given email exists.
     * @throws {@link UnauthorizedError} If the user account is deactivated.
     *
     * @example
     * ```ts
     * const authService = new AuthService();
     *
     * try {
     *   const result = await authService.validateInfoUser({
     *     email: "user@company.com",
     *     password: "myPassword",
     *   });
     *   console.log(result); // "ok"
     * } catch (error) {
     *   // NotFoundError  -> user does not exist
     *   // UnauthorizedError -> user is deactivated
     * }
     * ```
     */
    public async validateInfoUser(data: ILoginPost): Promise<any> {
        const { email, password } = data;
        console.log(email);
        console.log(password);

        const user: IUser | null = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        console.log(user);
        if (!user) throw new NotFoundError("user not found");

        if (!user.isActive) throw new UnauthorizedError("Usuario dado de baja");

        return "ok";
    }

    /**
     * Creates a new employee by inserting a user record into the database.
     *
     * @param payload - The employee information including credentials and
     *   personal details (see {@link IEmployeeInfo}).
     *
     * @example
     * ```ts
     * const authService = new AuthService();
     *
     * await authService.createNewEmployee({
     *   email: "new.hire@company.com",
     *   password: "initialPassword",
     *   token: "verificationToken",
     *   tokenExpires: new Date("2026-03-01"),
     *   name: "Carlos",
     *   lastname: "Garcia",
     *   birthdate: "1990-08-20",
     *   rfc: "GARC900820XXX",
     *   nss: "98765432101",
     *   address: "456 Oak Ave",
     *   salary: 18000,
     * });
     * ```
     */
    public async createNewEmployee(payload: IEmployeeInfo): Promise<void> {
        const user = await prisma.user.create({
            data: {
                email: payload.email,
                password: payload.password,
            },
        });
    }
}
