import { productDataType } from "@/types";

export const getProductData = async (): Promise<productDataType[]> => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/products"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product data: ", error);
    throw new Error("Failed to fetch banner data. Please try again later.");
  }
};
