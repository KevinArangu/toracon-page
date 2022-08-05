import Link from 'next/link'

const Linked = ({href, children, scroll, ...props}) => {
  return (
    <Link href={href} scroll={scroll}>
        <a {...props}>{children}</a>
    </Link>
  )
}

export default Linked