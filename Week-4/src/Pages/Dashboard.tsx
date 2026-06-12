import { FaUsers, FaUserShield, FaCalendar, FaClock } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import {NavLink, useNavigate} from 'react-router'


import {useMeetingStore} from '../store/useMeetings'

type Meetings = [{
  id:string|number,
  title:string,
  date:string,
  time:string,
  duration:""
  host:string,
  meetingType:"Online",
  participants:""

}]


type Props = {
  meetings:Meetings
}

const Dashboard = ({meetings}:Props) => {

  const {clearMeeting} = useMeetingStore()
  const navigator = useNavigate()

  const quickActions = [{id:1, name:"Start Meeting", icon:<FaUsers />,path:'/new-meeting'}, {id:2, name:"Join Meeting", icon:<FaUserShield />,path:'/join-meeting'}, {id:3, name:"Schedule Meeting", icon:<FaCalendar/>,path:"/schedule-meeting"}]



  return (
    <div className="w-full h-full flex flex-col px-10 py-4">
      <div>
        <p className="text-2xl font-bold text-gray-500">Good Morning, Aakrit Neupane</p>
        <p className="text-gray-300">Here's what's happening with your meeting today.</p>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-evenly gap-4 mt-4 transition-transform ">
        {quickActions.map((action)=>{
          return <div key={action.id} className="flex flex-col justify-center items-center gap-2 border border-gray-300 px-16 py-2 rounded-xl flex-wrap hover:scale-[1.2] ">

              <span className="bg-indigo-600 p-1.5 rounded-xl text-gray-200">{action.icon}</span> 
              <span className="font-bold text-xl text-gray-500">{action.name}</span>
              <button><NavLink to={action.path}>{`${action.name} now`}</NavLink></button>

          </div>
        })}
      </div>

      <div className="mt-8">
        <div>
          <button className="w-40 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors" onClick={()=>clearMeeting()}  >ClearMeeting</button>
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Upcoming Meetings</h3>
        {meetings && meetings.length > 0?(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meetings.map((meeting)=>{
            return(
              <div key={meeting.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="bg-indigo-100 p-2.5 rounded-lg text-indigo-600 text-lg">
                      <SiGooglemeet />
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm">{meeting.title}</h3>
                      <p className="text-xs text-gray-500">Host: {meeting.host}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    meeting.meetingType === 'Online' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {meeting.meetingType}
                  </span>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCalendar className="text-gray-400" size={12} />
                    <span>{meeting.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClock className="text-gray-400" size={12} />
                    <span>{meeting.time} • {meeting.duration}</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <p className="font-semibold text-gray-700 mb-1">Participants:</p>
                    <p className="line-clamp-2">{meeting.participants}</p>
                  </div>
                </div>

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors" onClick = {()=>navigator(`/meeting/${meeting.id}`)}>
                  Join Meeting
                </button>
              </div>
            )
          })}
          </div>
        ):(<div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-12 text-center">
          <p className="text-gray-500 font-medium">No Meetings scheduled yet</p>
          <p className="text-xs text-gray-400 mt-1">Create a new meeting to get started</p>
        </div>)}
      </div>

    </div>
  )
}

export default Dashboard