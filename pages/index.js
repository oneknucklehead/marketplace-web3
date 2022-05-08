import Sidebar from '../components/Sidebar'

const styles = {
  container: `h-full w-full flex bg-[#fff]`,
}
const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  )
}

export default Home
