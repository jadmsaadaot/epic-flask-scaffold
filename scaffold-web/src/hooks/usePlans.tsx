import { useQuery } from "@tanstack/react-query";
import { request } from "@/utils/axiosUtils";

const fetchPlans = () => {
  return request({ url: "/plans" });
};

const fetchPlanById = (id: number) => {
  return request({ url: `/plans/${id}` });
};

export const usePlansData = () => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  });
};

export const usePlanById = (planId: number) => {
  return useQuery({
    queryKey: ["plan", planId],
    queryFn: () => fetchPlanById(planId),
    enabled: !!planId
  });
};

// const addSuperHero = hero => {
//   // return axios.post('http://localhost:4000/superheroes', hero)
//   return request({ url: '/superheroes', method: 'post', data: hero })
// }

// export const useAddSuperHeroData = () => {
//   const queryClient = useQueryClient()

//   return useMutation(addSuperHero, {
//     // onSuccess: data => {
//     //   /** Query Invalidation Start */
//     //   // queryClient.invalidateQueries('super-heroes')
//     //   /** Query Invalidation End */

//     //   /** Handling Mutation Response Start */
//     // queryClient.setQueryData('super-heroes', oldQueryData => {
//     //   return {
//     //     ...oldQueryData,
//     //     data: [...oldQueryData.data, data.data]
//     //   }
//     // })
//     //   /** Handling Mutation Response Start */
//     // },
//     /**Optimistic Update Start */
//     onMutate: async newHero => {
//       await queryClient.cancelQueries('super-heroes')
//       const previousHeroData = queryClient.getQueryData('super-heroes')
//       queryClient.setQueryData('super-heroes', oldQueryData => {
//         return {
//           ...oldQueryData,
//           data: [
//             ...oldQueryData.data,
//             { id: oldQueryData?.data?.length + 1, ...newHero }
//           ]
//         }
//       })
//       return { previousHeroData }
//     },
//     onError: (_err, _newTodo, context) => {
//       queryClient.setQueryData('super-heroes', context.previousHeroData)
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries('super-heroes')
//     }
//     /**Optimistic Update End */
//   })
// }
