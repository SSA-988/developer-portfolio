import { defineType } from "sanity";

export default defineType({
    name:'experience',
    title:"Experience",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string",
        },
        {
            name:"image",
            title:"Image",
            type:"string",
        },
        {
            name:"description",
            title:"Description",
            type:'array',
            of:[{type:"string"}]
        }
    ]
})