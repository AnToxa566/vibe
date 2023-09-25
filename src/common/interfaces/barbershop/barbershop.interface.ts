interface IBarbershop {
  id: number;
  lat: number;
  lng: number;
  address: string;
  phoneNumbers: string[];
  schedule: string;
}

interface ICreateBarbershop {
  lat: number;
  lng: number;
  address: string;
  phoneNumbers: string[];
  schedule: string;
}

export type { IBarbershop, ICreateBarbershop };
