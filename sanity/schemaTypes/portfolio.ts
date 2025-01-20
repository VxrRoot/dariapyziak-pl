// export default {
//   name: 'portfolio',
//   type: 'document',
//   title: 'Portfolio',
//   fields: [
//     {
//       name: 'title',
//       type: 'object',
//       fields: [
//         {name: 'pl', type: 'localeString', title: 'Tytuł (Pl)'},
//         {name: 'en', type: 'localeString', title: 'Tytuł (EN)'},
//       ],
//     },
//     {
//       name: 'slug',
//       type: 'slug',
//       title: 'Slug of your portfolio',
//       options: {
//         source: 'title.en',
//       },
//     },
//     {
//       name: 'order',
//       type: 'number',
//       title: 'Order',
//     },
//     {
//       name: 'tags',
//       type: 'array',
//       title: 'Tagi',
//       of: [{type: 'string', name: 'tag', title: 'Tag'}],
//     },
//     {
//       name: 'titleImage',
//       type: 'image',
//       title: 'Miniaturka',
//     },
//     {
//       name: 'public',
//       type: 'boolean',
//       title: 'Publiczne',
//     },
//     {
//       name: 'content',
//       type: 'array',
//       title: 'Opis',
//       of: [
//         {
//           type: 'block',
//           of: [
//             {
//               type: 'image',
//               options: {hotspot: true}, // Opcjonalnie, włącz hotspoty dla większej kontroli nad kadrowaniem obrazów
//               fields: [
//                 {
//                   name: 'caption',
//                   type: 'string',
//                   title: 'Caption',
//                   options: {
//                     isHighlighted: true, // Opcja ta wyróżnia pole w UI, kiedy obraz jest wybrany
//                   },
//                 },
//                 {
//                   // Możesz dodać więcej pól związanych z obrazem, np. alt tekst
//                   name: 'alt',
//                   type: 'string',
//                   title: 'Tekst alternatywny',
//                   description: 'Tekst alternatywny dla obrazu, ważny dla SEO i dostępności',
//                   options: {
//                     isHighlighted: true,
//                   },
//                 },
//               ],
//             },
//             // Możesz dodać więcej typów obiektów, które mogą być wstawiane do bloków tekstu
//           ],
//         },
//       ],
//     },
//     {
//       name: 'images',
//       type: 'array',
//       title: 'Zdjęcia',
//       of: [
//         {
//           name: 'image',
//           type: 'image',
//           title: 'Zdjęcie',
//         },
//       ],
//     },
//   ],
//   preview: {
//     select: {
//       title: 'title.pl',
//       subtitle: 'order',
//       media: 'titleImage',
//     },
//   },
// }
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
        source: (doc) => doc.title?.en || 'default-slug',
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
      type: 'array',
      title: 'Opis',
      of: [
        {
          type: 'localeBlock', // Wielojęzyczne bloki treści
          title: 'Opis w wielu językach',
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
