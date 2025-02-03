export const getData = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_ENDPOINT + "/banner"
  );
  const data = await response.json();
  return data;
};
