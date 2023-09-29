import { defineType } from "sanity";

export default defineType({
    name:"skill",
    title:"Skill",
    type:"document",
    fields:[
        {
            name:"id",
            title:"Id",
            type:"string"
        },
        {
            name:"progress",
            title:"Progress",
            type:"number"
        },
        {
            name:"type",
            title:"Type",
            type:"string"
        }
    ]
})