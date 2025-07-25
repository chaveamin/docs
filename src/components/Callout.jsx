import clsx from 'clsx'

import { Icon } from '@/components/Icon'

const styles = {
  note: {
    container:
      'bg-sky-50 border-t-5 border-t-sky-600 dark:bg-zinc-800/60 dark:ring-1 dark:ring-zinc-300/10',
    title: '!text-sky-900 !dark:text-sky-400',
    body: 'max-w-[40rem] text-justify text-sky-800 [--tw-prose-background:var(--color-sky-50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-zinc-300 dark:prose-code:text-zinc-300',
  },
  warning: {
    container:
      'bg-amber-50 border-t-5 border-t-amber-600 dark:bg-zinc-800/60 dark:ring-1 dark:ring-zinc-300/10',
    title: '!text-amber-900 !dark:text-amber-500',
    body: 'max-w-[40rem] text-justify text-amber-800 [--tw-prose-underline:var(--color-amber-400)] [--tw-prose-background:var(--color-amber-50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-zinc-300 dark:[--tw-prose-underline:var(--color-sky-700)] dark:prose-code:text-zinc-300',
  },
  error: {
    container:
      'bg-red-50 border-t-5 border-t-red-600 dark:bg-zinc-800/60 dark:ring-1 dark:ring-zinc-300/10',
    title: 'text-red-900 !dark:text-red-500',
    body: 'max-w-[40rem] text-justify text-red-800 [--tw-prose-underline:var(--color-red-400)] [--tw-prose-background:var(--color-red-50)] prose-a:text-red-900 prose-code:text-red-900 dark:text-zinc-300 dark:[--tw-prose-underline:var(--color-sky-700)] dark:prose-code:text-zinc-300',
  },
}

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="amber" {...props} />,
  error: (props) => <Icon icon="error" color="red" {...props} />,
}

export function Callout({ title, children, type = 'note' }) {
  let IconComponent = icons[type]

  return (
    <div className={clsx('my-8 flex rounded-lg p-6', styles[type].container)}>
      <IconComponent className="ml-2 h-8 w-8 flex-none" />
      <div className="ml-4 flex-auto">
        <p className={clsx('!m-0 text-xl font-semibold', styles[type].title)}>
          {title}
        </p>
        <div className={clsx('prose mt-2.5', styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  )
}
