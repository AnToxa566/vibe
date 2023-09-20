import { AuthService } from "./auth/auth.service";
import { BarbershopService } from "./barbershop/barbershop.service";
import { GraduationService } from "./graduation/graduation.service";
import { PriceService } from "./price/price.service";
import { ServiceService } from "./service/service.service";

const authService = new AuthService();
const barbershopService = new BarbershopService();
const graduationService = new GraduationService();
const priceService = new PriceService();
const serviceService = new ServiceService();

export {
  authService,
  barbershopService,
  graduationService,
  priceService,
  serviceService,
};
