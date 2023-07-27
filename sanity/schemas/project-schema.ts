import { type } from "os";
import {defineField} from 'sanity'

const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
        }),
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hostpot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type:'block'}]
        },
    ]
}

export default project