import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { Video } from '@/components/Video'
import Changelog from '@/components/Changelog'
import Labels from '@/components/Labels'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  video: {
    attributes: {
      src: { type: String, required: true },
      autoPlay: { type: Boolean, default: true },
      muted: { type: Boolean, default: true },
      loop: { type: Boolean, default: true },
      controls: { type: Boolean, default: true },
    },
    render: Video,
  },
  changelog: {
    render: Changelog,
    attributes: {
      version: { type: String },
      date: { type: String },
      compatibility: { type: String },
    },
  },
  label: {
    render: Labels,
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'new',
        matches: ['new', 'fix', 'improvement'],
      },
    },
  },
}

export default tags
