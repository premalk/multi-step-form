import { useMutation } from "react-query";

export const userDetails = (data) => {
  fetch("https://dummyendpoint.com", { method: "post", data });
};

const useUserDetails = () => {
  return useMutation(userDetails);
};

export default useUserDetails;
