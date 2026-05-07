import { Dashboard, Footer, Header, SideBar } from '../Pages/export'

const AppShell = () => {
  return (
    <div className='min-h-screen grid grid-cols-7 grid-rows-[auto_1fr_auto] gap-2'>
      <SideBar />
      <Header />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default AppShell