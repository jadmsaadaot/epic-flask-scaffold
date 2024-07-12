import { useMutation, useQuery } from "@tanstack/react-query";
import { OnErrorType, OnSuccessType, request } from "@/utils/axiosUtils";
import { User } from "@/models/User";

const fetchUsers = () => {
  return request({ url: "/user" });
};

const fetchUserById = (id: number) => {
  return request({ url: `/user/${id}` });
};

const addUser = (user: Omit<User, "id">) => {
  return request({ url: "/user", method: "post" , data: user});
};

export const useUsersData = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export const useUserById = (userId: number) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUserById(userId),
    enabled: !!userId,
  });
};

export const useAddUser = (onSuccess: OnSuccessType, onError: OnErrorType) => {
  return useMutation({
    mutationFn: addUser,
    onSuccess,
    onError
  })
}
