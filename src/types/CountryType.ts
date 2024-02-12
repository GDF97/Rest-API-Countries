export type CountryType = {
  CountryFlag: string;
  CountryName: string;
  Population: number;
  Region: string;
  Capital: string;
  NativeCountryName?: string;
  SubRegion?: string;
  TopLevelDomain?: string;
  Currencies?: string;
  Languages?: Array<string> | string;
  BorderCountries?: Array<string>;
};
