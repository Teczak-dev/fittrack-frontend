export const safeParseJSON = async (response: Response) => {
    const text = await response.text();
    return text ? JSON.parse(text) : {};
};
