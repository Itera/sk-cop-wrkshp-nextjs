import styles from '@/styles/Home.module.css'
import MainMenu from '@/components/main_menu'

export default function Home() {
  return (
    <div className={styles.centeredBox}>
      <MainMenu />
    </div>
  )
}
