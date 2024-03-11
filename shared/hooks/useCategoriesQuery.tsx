import { useQuery } from "@tanstack/react-query"
import getCategories from "../../services/Categories"

export const useCategoriesQuery = () => {
   return useQuery({
        queryFn:() =>getCategories(),
        queryKey:["categories"]
    })
}


