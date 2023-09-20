import { AuthService } from "./auth/auth.service";
import { BarbershopService } from "./barbershop/barbershop.service";

const authService = new AuthService();
const barbershopService = new BarbershopService();

export { authService, barbershopService };
