import { Dashboard, Footer, Header, SideBar } from '../Pages/export'
import '../App.css'

const AppShell = () => {
  return (
    <div className='app-shell h-screen w-screen flex flex-col md:flex-row'>
      <SideBar />
      <div className='flex-1 flex flex-col md:ml-0'>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </div>
  )
}

export default AppShell