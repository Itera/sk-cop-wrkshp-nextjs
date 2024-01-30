import Link from 'next/link'
import styles from '@/styles/Menu.module.css'

export default function MainMenu() {
  return (
    <nav className={styles.list}>
      <h1>Main menu</h1>
      <ul>
        <LinkEntry href="/game" label="Start new game" />
        <LinkEntry href="/settings" label="Settings" />
      </ul>
    </nav>
  )
}

interface LinkEntryProps {
  href: string
  label: string
}

function LinkEntry({ href, label }: LinkEntryProps) {
  return (
    <li className={styles.item}>
      <Link href={href}>{label}</Link>
    </li>
  )
}
