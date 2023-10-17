import { getMenu } from "../services/apiRestaurant";
import { TPizza } from "../types";

export async function menuLoader(): Promise<TPizza[]> {
  return await getMenu();
}
