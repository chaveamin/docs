import clsx from 'clsx'

export function Prose({ as, className, ...props }) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate dark:prose-invert max-w-none dark:text-slate-400',
        // headings
        'prose-headings: prose-headings:scroll-mt-28 lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
        // links
        'dark:prose-a:text-sky-400',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:[--tw-prose-background:var(--color-slate-900)]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // hr
        'dark:prose-hr:border-slate-800',
        // h1
        'prose-h1:text-5xl prose-h1:font-light prose-h1:translate-x-7',
        // h2
        'prose-h2:lg:text-4xl prose-h2:md:text-3xl prose-h2:font-extrabold prose-h2:translate-x-7 prose-h2:text-2xl',
        // h3
        'prose-h3:lg:text-3xl prose-h3:md:text-2xl prose-h3:font-light prose-h3:translate-x-7 prose-h3:text-xl',
        // h4
        'prose-h4:lg:text-2xl prose-h4:font-bold prose-h4:translate-x-7 prose-h4:text-[22px]',
        // h5
        'prose-h5:lg:text-lg prose-h5:font-medium prose-h5:translate-x-7 prose-h5:text-[19px]',
        // p
        'prose-p:text-[17px] prose-p:text-gray-600',
      )}
      {...props}
    />
  )
}
