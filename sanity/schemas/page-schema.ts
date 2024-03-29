import {defineField} from 'sanity'

const page = {
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
      defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
      }),  
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          { type: "block" }
        ]
      }
    ]
  }
  
  export default page;