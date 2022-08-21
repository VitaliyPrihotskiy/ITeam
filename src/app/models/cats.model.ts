export interface CatFromAPI {
  breeds: [
    {
      description: string;
      name: string;
      temperament: string;
    }
  ];

  height: number;
  id: string;
  url: string;
  width: number;
}
export interface Cat {
  breedName: string;
  breedDescription: string;
  breedTemperament: string;
  url: string;
}
