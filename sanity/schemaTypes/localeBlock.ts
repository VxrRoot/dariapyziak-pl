export default {
  name: 'localeBlock',
  type: 'object',
  title: 'Localized Block',
  fields: [
    {name: 'pl', type: 'array', of: [{type: 'block'}], title: 'Polski'},
    {name: 'en', type: 'array', of: [{type: 'block'}], title: 'English'},
  ],
}
