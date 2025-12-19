// A utility function to safely parse JSON from a Response object
// It reads the response text and parses it as JSON if not empty,
// otherwise returns an empty object.
export const safeParseJSON = async (response: Response) => {
  const text = await response.text();
  return text ? JSON.parse(text) : {};
};
