import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {StructureBuilder, structureTool} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'zykjz4cb',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([...S.documentTypeListItems().reverse()]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
