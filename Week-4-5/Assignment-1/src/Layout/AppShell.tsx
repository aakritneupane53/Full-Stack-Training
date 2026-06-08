import { Outlet } from "react-router";
import {Footer, Header, SideBar } from '../Components/export'
import '../App.css'

type Props = {
  date:string,
  day:string,
  time:string
}

const AppShell = ({day,date, time}:Props) => {
  return (
    <div className='app-shell h-screen w-screen flex flex-col md:flex-row'>
      <SideBar />
      <div className='flex-1 flex flex-col'>
        <Header day={day} date={date} time={time}/>
        <div className="flex-1 overflow-y-auto w-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AppShell