export type TItem = {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
};

export type TCartItemProps = {
  item: TItem;
};

export type TMenuItem = {
  pizza: TPizza;
};

export type TPizza = {
  id: string;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};
