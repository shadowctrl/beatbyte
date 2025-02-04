import { bannerDataType } from "@/types";

export const getBannerData = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/banner",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching banner data:", error);
    throw new Error("Failed to fetch banner data. Please try again later.");
  }
};
