export type TItem = {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
};

export type TCartItemProps = {
  item: TItem;
};
