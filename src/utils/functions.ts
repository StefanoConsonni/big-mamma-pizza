import { getMenu, getOrder } from "../services/apiRestaurant";
import { TPizza } from "../types";

export async function menuLoader(): Promise<TPizza[]> {
  return await getMenu();
}

export async function orderLoader({ params }: { params: { orderId: string } }): Promise<TPizza[]> {
  const order = await getOrder(params.orderId);
  return order;
}
