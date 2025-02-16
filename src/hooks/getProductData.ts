import { bannerDataType, productDataType } from "@/types";

export const getProductData = async (
  slug?: string
): Promise<productDataType[]> => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/products"
    );
    let data = await response.json();
    if (slug)
      data = data.filter((product: productDataType) => product.slug === slug);
    return data;
  } catch (error) {
    console.error("Error fetching product data: ", error);
    throw new Error("Failed to fetch banner data. Please try again later.");
  }
};

export const getProductByCategory = async (
  category?: string[],
  slug?: string
) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/products"
    );
    let data = await response.json();
    if (category && slug)
      data = data.filter(
        (product: productDataType) =>
          product.category?.some((apiItem) =>
            category.map((paraItem) =>
              paraItem.toLowerCase().includes(apiItem.toLowerCase())
            )
          ) && product.slug !== slug
      );
    return data;
  } catch {}
};
