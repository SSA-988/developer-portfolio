import { createClient } from "next-sanity";

export const client =  createClient({
    projectId:"c61vk34d",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-01-01"
})