export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    {
      name: 'title',
      type: 'localeString', // Wielojęzyczny tytuł
      title: 'Tytuł',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your portfolio',
      options: {
        source: (doc: any) => doc.title?.en || 'default-slug',
      },
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
    {
      name: 'tags',
      type: 'localeArray', // Wielojęzyczne tagi
      title: 'Tagi',
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Miniaturka',
      fields: [
        {
          name: 'alt',
          type: 'localeString', // Wielojęzyczny tekst alternatywny
          title: 'Tekst alternatywny',
        },
      ],
    },
    {
      name: 'public',
      type: 'boolean',
      title: 'Publiczne',
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
      name: 'images',
      type: 'array',
      title: 'Zdjęcia',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Zdjęcie',
          fields: [
            {
              name: 'caption',
              type: 'localeString', // Wielojęzyczne podpisy zdjęć
              title: 'Podpis',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.pl',
      subtitle: 'order',
      media: 'titleImage',
    },
  },
}
