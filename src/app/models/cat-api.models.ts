export interface CatFromAPI {
    breeds: Array<
      {
        description: string;
        name: string;
        temperament: string;
      }
    >;
    height: number;
    id: string;
    url: string;
    width: number;
  }
  