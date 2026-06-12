
import {useState,useEffect} from 'react'
import {Routes, Route, Outlet} from 'react-router'

import AppShell from './Layout/AppShell.tsx'
import {Calendar, Dashboard, JoinMeeting, NewMeeting, ProfileSetting, ScheduleMeeting, Meeting, MeetingDetails, MeetingParticipants, NotFound, Login} from './Pages/exports.ts'
import {useMeetingStore} from './store/useMeetings.tsx'
import ProtectedRoute from './Components/ProtectedRoute.tsx'


type meetings = [{
  id:string|number,
  title:string,
  date:string,
  time:string,
  duration:""
  host:string,
  meetingType:"Online"|"Offline",
  participants:""

}]

function App() {
  const {meetings} = useMeetingStore()
  const [date, setDate] = useState<Date>(new Date())
 

  useEffect(()=>{
    if(meetings && meetings.length > 0){
      localStorage.setItem('meetings', JSON.stringify(meetings))
    }
  },[meetings])

  useEffect(()=>{
    const interval = setInterval(()=>{
      setDate(new Date())
    },1000)

    return ()=>{
      clearInterval(interval)
    }
  },[])
  return (
    <>
<Routes>
  {/* 1. Public Authentication Route (Outside of AppShell Layout) */}
  <Route path="/login" element={<Login />} />

  {/* 2. Main Application Layout */}
  <Route 
    path="/" 
    element={
      <AppShell 
        day={date.toLocaleDateString('en-US', { weekday: 'long' })} 
        date={date.toDateString()}  
        time={date.toLocaleTimeString()} 
      />
    }
  >

    <Route index element={<Dashboard meetings={meetings}/>}/>


    <Route element={<ProtectedRoute><Outlet /></ProtectedRoute>}>
      <Route path='dashboard' element={<Dashboard meetings={meetings}/>}/>
      <Route path='new-meeting' element={<NewMeeting />}/>
      <Route path='join-meeting' element={<JoinMeeting meetings={meetings}/>}/>
      
      {/* Nested Meeting Routes */}
      <Route path='meeting/:meetingId' >
        <Route index element={<MeetingDetails meetings={meetings}/>} />
        <Route path='details' element={<MeetingDetails meetings={meetings}/>} />
        <Route path='participants' element={<MeetingParticipants meetings={meetings}/>} />
      </Route>
      
      <Route path='calendar' element={<Calendar/>}/>
      <Route path='schedule-meeting' element={<ScheduleMeeting/>}/>
      <Route path='profile-settings' element={<ProfileSetting/>}/>
    </Route>
  </Route>


  <Route path='*' element={<NotFound/>} />
</Routes>
   
    </>
  )
}

export default App
