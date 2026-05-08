
import { useParams, useNavigate } from "react-router";

type Meeting = {
  id: string | number;
  title: string;
  date: string;
  time: string;
  duration: string;
  host: string;
  meetingType: "Online" | "Offline";
  participants: string;
};

type Props = {
  meetings: Meeting[];
};

const MeetingDetails = ({ meetings }: Props) => {
  const { meetingId } = useParams();
  const navigate = useNavigate();

  // Find the meeting
  const meeting = meetings.find(m => String(m.id) === String(meetingId));

  // Handle case where meeting isn't found
  if (!meeting) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-xl font-bold text-gray-800">Meeting not found</h2>
        <button 
          onClick={() => navigate(-1)}
          className="mt-4 text-indigo-600 hover:underline text-sm font-medium"
        >
          Go back to list
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
      {/* Top Navigation Row */}
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="text-xs font-bold text-indigo-600 uppercase tracking-widest hover:text-indigo-800 transition-colors"
        >
          ← Back to Meetings
        </button>
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
          meeting.meetingType === 'Online' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-orange-100 text-orange-700'
        }`}>
          {meeting.meetingType}
        </span>
      </div>


      <div className="mb-8">
        <div className="text-[11px] font-bold text-gray-400 uppercase mb-1">Meeting ID: {meeting.id}</div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          {meeting.title}
        </h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-gray-100">
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Date</span>
          <span className="text-sm font-semibold text-gray-800">{meeting.date}</span>
        </div>
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Time</span>
          <span className="text-sm font-semibold text-gray-800">{meeting.time}</span>
        </div>
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Duration</span>
          <span className="text-sm font-semibold text-gray-800">{meeting.duration}</span>
        </div>
      </div>


      <div className="py-6 space-y-6">
        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase block mb-2">Host</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
              {meeting.host.charAt(0)}
            </div>
            <span className="text-sm font-medium text-gray-800">{meeting.host}</span>
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold text-gray-400 uppercase block mb-2">Participants</span>
          <button className="text-sm bg-indigo-700 text-gray-200 leading-relaxed p-3 rounded-xl border border-gray-100 hover:bg-gray-200 hover:text-black " onClick={()=>navigate(`/meeting/${meeting.id}/participants`)}>
            Show Participant
          </button>
        </div>
      </div>


      
    </div>
  );
};

export default MeetingDetails;