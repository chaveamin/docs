import { nodes as defaultNodes, Tag } from '@markdoc/markdoc'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import yaml from 'js-yaml'
import { EnlargeImage } from '@/components/EnlargeImage'
import { DocsLayout } from '@/components/DocsLayout'
import { Fence } from '@/components/Fence'

let documentSlugifyMap = new Map()

const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node, config) {
      documentSlugifyMap.set(config, slugifyWithCounter())

      return new Tag(
        this.render,
        {
          frontmatter: yaml.load(node.attributes.frontmatter),
          nodes: node.children,
        },
        node.transformChildren(config),
      )
    },
  },
  heading: {
    ...defaultNodes.heading,
    transform(node, config) {
      let slugify = documentSlugifyMap.get(config)
      let attributes = node.transformAttributes(config)
      let children = node.transformChildren(config)
      let text = children.filter((child) => typeof child === 'string').join(' ')
      let id = attributes.id ?? slugify(text)

      return new Tag(`h${node.attributes.level}`, { ...attributes, id }, [
        new Tag(
          'a',
          {
            href: `#${id}`,
            class:
              'headings relative before:content-["#"] before:text-blue-600 before:invisible hover:before:visible before:ml-2 !shadow-none',
          },
          children,
        ),
      ])
    },
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: 'col',
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
  image: {
    render: EnlargeImage,
    attributes: {
      src: { type: String, required: true },
      alt: { type: String },
      title: { type: String },
    },
  },
}

export default nodes
