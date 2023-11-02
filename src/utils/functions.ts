import { ActionFunction, redirect } from "react-router";
import { createOrder, getMenu, getOrder } from "../services/apiRestaurant";
import { TPizza } from "../types";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string): boolean =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

export async function menuLoader(): Promise<TPizza[]> {
  return await getMenu();
}

export const orderLoader: ActionFunction = async ({ params }) => {
  const order = await getOrder(params.orderId as string);
  return order;
};

export const createOrderAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart as string),
    priority: data.priority === "on",
  };

  const errors = {};
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if(!isValidPhone(order.phone)) {
    (errors as {phone: string}).phone = "Please give us your correct phone number. We might need it to contact you";
  }
  if(Object.keys(errors).length > 0) {
    return errors
  }
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
};
