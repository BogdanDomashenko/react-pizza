import protectedApi from "./protectedApi";

export const fetchUserData = async () => {
    const response = await protectedApi().get("user/data");
    return response.data;
}