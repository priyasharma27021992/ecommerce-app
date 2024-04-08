export interface IProduct {
  id: number;
  title: string;
  description?: string;
  availableSizes: number[];
  price: number;
  currencyFormat: string;
  isFreeShipping: boolean;
  discountedPrice: number;
  discountPercentage: number;
  color: string;
}

export interface IGetProductsResponse {
  data: {
    products: IProduct[];
  };
}
