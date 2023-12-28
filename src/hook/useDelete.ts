import { get } from "lodash";
import { api } from "services";
import { useMutation } from "@tanstack/react-query";

type typeUseDelete = {
  path: string;
  onError: (e: any) => void;
  onSuccess: (e: any) => void;
};

const useDelete = ({
  path = "",
  onError = () => {},
  onSuccess = () => {},
}: typeUseDelete) => {
  const response = useMutation({
    mutationFn: (id: string) => {
      return api.delete(`${path}/${id}`).then((response) => {
        return get(response, "data");
      });
    },
    onError: (error) => onError(error),
    onSuccess: (successData) => onSuccess(successData),
  });
  return response;
};

export default useDelete;
