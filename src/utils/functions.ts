import { redirect } from "react-router";
import { createOrder, getMenu, getOrder } from "../services/apiRestaurant";
import { TPizza } from "../types";

export async function menuLoader(): Promise<TPizza[]> {
  return await getMenu();
}

export async function orderLoader({ params }: { params: { orderId: string } }): Promise<TPizza[]> {
  const order = await getOrder(params.orderId);
  return order;
}

export async function createOrderAction({
  request,
}: {
  request: {
    formData: () => Iterable<readonly [PropertyKey, string]>;
  };
}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
