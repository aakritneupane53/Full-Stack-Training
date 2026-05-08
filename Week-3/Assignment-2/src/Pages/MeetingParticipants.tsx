import React from 'react';
import { useParams, useNavigate } from "react-router";

type Meeting = {
  id: string | number;
  title: string;
  participants: string;
};

type Props = {
  meetings: Meeting[];
};

const ParticipantsPage = ({ meetings }: Props) => {
  const { meetingId } = useParams();
  const navigate = useNavigate();

  const meeting = meetings.find(m => String(m.id) === String(meetingId));

  if (!meeting) return <div className="p-10 text-center text-gray-500">Meeting not found</div>;

  // Just turn the string into an array
  const participantsList = meeting.participants
    ? meeting.participants.split(',').map(p => p.trim()).filter(p => p !== "")
    : [];

  return (
    <div className="max-w-md mx-auto mt-6 bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="p-5 border-b border-gray-100 bg-gray-50/50">
        <button 
          onClick={() => navigate(-1)}
          className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block"
        >
          ← Back
        </button>
        <h1 className="text-xl font-bold text-gray-900 leading-tight">Participants</h1>
        <p className="text-xs text-gray-500 mt-1 truncate">Meeting: {meeting.title}</p>
      </div>

      {/* List */}
      <div className="p-2 space-y-1">
        {participantsList.length > 0 ? (
          participantsList.map((name, index) => (
            <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-2xl transition-colors">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                {name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">{name}</span>
                <span className="text-[10px] text-gray-400 uppercase">Participant</span>
              </div>
            </div>
          ))
        ) : (
          <p className="p-10 text-center text-sm text-gray-400 font-medium">No participants listed</p>
        )}
      </div>

    </div>
  );
};

export default ParticipantsPage;