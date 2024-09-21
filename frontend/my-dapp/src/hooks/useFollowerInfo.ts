import kyInstance from "@/lib/ky";
import { FollowerInfo } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useFollowerInfo = (userId: string, initialState: FollowerInfo) => {
  const query = useQuery({
    queryKey: ["Follower-info", userId],
    queryFn: () =>
      kyInstance.get(`/api/user/${userId}/followers`).json<FollowerInfo>(),
    initialData: initialState,
    staleTime: Infinity,
  });

  return query;
};

export default useFollowerInfo;
