import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Новини та статті",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL-адреса",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Короткий опис",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Головне зображення",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Альтернативний текст",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Категорії",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Дата публікації",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "author",
      title: "Автор",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "body",
      title: "Зміст",
      type: "blockContent",
    }),
    defineField({
      name: "featured",
      title: "Рекомендована стаття",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO налаштування",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta заголовок",
          type: "string",
          validation: (rule) => rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta опис",
          type: "text",
          rows: 3,
          validation: (rule) => rule.max(160),
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare(selection) {
      const { author, date } = selection;
      return {
        ...selection,
        subtitle:
          author && date
            ? `${author} • ${new Date(date).toLocaleDateString("uk-UA")}`
            : "",
      };
    },
  },
});
