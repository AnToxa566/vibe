import { AuthService } from "./auth/auth.service";
import { BarberService } from "./barber/barber.service";
import { BarbershopService } from "./barbershop/barbershop.service";
import { GraduationService } from "./graduation/graduation.service";
import { PhotoService } from "./photo/photo.service";
import { PriceService } from "./price/price.service";
import { ServiceService } from "./service/service.service";

const authService = new AuthService();
const barberService = new BarberService();
const barbershopService = new BarbershopService();
const graduationService = new GraduationService();
const photoService = new PhotoService();
const priceService = new PriceService();
const serviceService = new ServiceService();

export {
  authService,
  barberService,
  barbershopService,
  graduationService,
  photoService,
  priceService,
  serviceService,
};
