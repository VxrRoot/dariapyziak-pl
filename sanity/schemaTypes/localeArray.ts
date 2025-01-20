export default {
  name: 'localeArray',
  type: 'object',
  title: 'Localized Array',
  fields: [
    {name: 'pl', type: 'array', of: [{type: 'string'}], title: 'Polski'},
    {name: 'en', type: 'array', of: [{type: 'string'}], title: 'English'},
  ],
}
