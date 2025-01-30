export default {
  name: 'aboutMe',
  type: 'document',
  title: 'About me',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tytuł',
    },
    {
      name: 'content',
      type: 'object', // Zmiana z array na object
      title: 'Opis',
      fields: [
        {
          name: 'pl',
          type: 'array',
          title: 'Polski opis',
          of: [{type: 'block'}], // Treść w języku polskim
        },
        {
          name: 'en',
          type: 'array',
          title: 'Angielski opis',
          of: [{type: 'block'}], // Treść w języku angielskim
        },
      ],
    },
    {
      name: 'Image',
      type: 'image',
      title: 'Image',
    },
  ],
}
