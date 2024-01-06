export interface CountriesNowResponse {
  error: string;
  msg: string;
  data: Country[];
}

export interface Country {
  name: string;
  Iso2: string;
  Iso3: string;
}
