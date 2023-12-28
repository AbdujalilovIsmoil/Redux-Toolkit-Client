import { get } from "lodash";
import { api } from "services";
import { useMutation } from "@tanstack/react-query";

type usePutTypes = {
  path: string;
  onError: (data: any) => void;
  onSuccess: (data: any) => void;
};

const usePut = ({
  path = "",
  onError = () => {},
  onSuccess = () => {},
}: usePutTypes) => {
  const response = useMutation({
    mutationFn: (id: string) => {
      return api.put(`${path}/${id}`).then((response) => {
        return get(response, "data");
      });
    },
    onError: (error) => onError(error),
    onSuccess: (successData) => onSuccess(successData),
  });
  return response;
};

export default usePut;
