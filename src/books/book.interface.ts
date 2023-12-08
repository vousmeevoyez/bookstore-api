export interface ICreateBook {
  title: string;
  writer: string;
  imageUrl: string;
  price: number;
  tags: string[];
}

export interface IGetBook {
  id: number;
}
