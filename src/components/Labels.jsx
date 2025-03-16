import clsx from 'clsx'

const styles = {
  new: {
    name: 'NEW',
    background: 'bg-green-100',
    title: 'text-green-700',
  },
  fix: {
    name: 'FIX',
    background: 'bg-red-100',
    title: 'text-red-700',
  },
  improvement: {
    name: 'improvement',
    background: 'bg-blue-100',
    title: 'text-blue-700',
  },
}

export default function Labels({ type }) {
  return (
    <p
      className={clsx(
        'ml-2 inline rounded-sm px-[6px] py-[2px] text-sm',
        styles[type].background,
        styles[type].title,
      )}
    >
      {styles[type].name}
    </p>
  )
}
