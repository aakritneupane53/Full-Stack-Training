import {useNavigate} from 'react-router'
import { FaCalendar, FaClock } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";


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

const JoinMeeting = ({meetings}:Props) => {
  const navigate = useNavigate()

  return (
    <div>
        <div className="mt-8 ml-10">
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

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors " onClick={()=>navigate(`/meeting/${meeting.id}`)}>
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

export default JoinMeeting