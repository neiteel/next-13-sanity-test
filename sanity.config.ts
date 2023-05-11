import { defineConfig } from "sanity";
import { deskTool } from'sanity/desk'
import  schemas  from "./sanity/schemas";

const config = defineConfig({
    projectId: 'r82l3m7d',
    dataset: 'production',
    title: '吃甜食胃食道逆流',
    apiVersion: '2023-05-11',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config