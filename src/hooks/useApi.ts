const URL_API = "https://restcountries.com/v3.1/";

export const useApi = () => {
  return {
    getAllCountries: async () => {
      const response = await fetch(`${URL_API}all`);
      const data = await response.json();
      return data;
    },
    getCountryByName: async (name: string) => {
      const response = await fetch(`${URL_API}name/${name}`);

      if (response.status === 404) {
        return response.status;
      }

      const data = await response.json();
      return data;
    },
    getCountriesByRegion: async (region: string) => {
      const response = await fetch(`${URL_API}region/${region}`);
      const data = await response.json();
      return data;
    },
  };
};
