import React, {useState} from 'react';

type Meeting = {
  id:string|number,
  title:string,
  date:string,
  time:string,
  duration:string
  host:string,
  meetingType:"Online"|"Offline",
  participants:string

}

const generateMeetingId = () => `MTG-${Date.now()}-${Math.floor(Math.random() * 1000)}`

const NewMeeting = ({meetings, setMeetings}) => {

  const [newMeet, setNewMeet] = useState<Meeting>({
    id:generateMeetingId(),
  title:"",
  date:"",
  time:"",
  duration:"",
  host:"",
  meetingType:"Online",
  participants:""
  })

  const [formErrors, setFormErrors] = useState<{[key:string]:string}>({});

  function handleChange(property, value){
    setNewMeet((prev)=>{
      return {...prev, [property]:value}
    })
    // Clear error for this field when user starts typing
    if(formErrors[property]){
      setFormErrors((prev)=>{
        const updated = {...prev};
        delete updated[property];
        return updated;
      })
    }
  }

  function validateForm():boolean{
    const errors: {[key:string]:string} = {};
    if(!newMeet.title.trim()) errors.title = "Title is required";
    if(!newMeet.date.trim()) errors.date = "Date is required";
    if(!newMeet.time.trim()) errors.time = "Time is required";
    if(!newMeet.duration.trim()) errors.duration = "Duration is required";
    if(!newMeet.host.trim()) errors.host = "Host is required";
    if(!newMeet.participants.trim()) errors.participants = "Participants are required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event){
    event.preventDefault();
    if(!validateForm()) return;
    
    setMeetings((prev)=>[...(prev || []), newMeet])

    setNewMeet({
    id:generateMeetingId(),
  title:"",
  date:"",
  time:"",
  duration:"",
  host:"",
  meetingType:"Online",
  participants:""
  })
  setFormErrors({});
  }

  return (
    <form className="max-w-2xl w-[95%] border border-gray-300 rounded-3xl mx-auto mt-6 p-6 bg-white shadow-sm">
      <h2 className="text-xl font-bold mb-5 text-gray-800 border-b pb-2">New Meeting</h2>
      

      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase ml-1">ID</label>
          <input 
            className="border border-gray-300 rounded-lg p-2 text-sm bg-gray-100 focus:ring-1 focus:ring-blue-500 outline-none" 
            type="text" 
            placeholder="Auto-generated"
            disabled
            value={newMeet.id}
          />
        </div>


        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Title</label>
          <input 
            className={`border rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none ${formErrors.title ? 'border-red-500' : 'border-gray-300'}`} 
            type="text" 
            placeholder="Sync Session" 
            onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleChange('title', event.target.value)}
            value={newMeet.title}
          />
          {formErrors.title && <span className="text-xs text-red-500">{formErrors.title}</span>}
        </div>


        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Date</label>
          <input 
            className={`border rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none ${formErrors.date ? 'border-red-500' : 'border-gray-300'}`} 
            type="date" 
            onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleChange('date', event.target.value)}
            value={newMeet.date}
          />
          {formErrors.date && <span className="text-xs text-red-500">{formErrors.date}</span>}
        </div>


        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Time</label>
          <input 
            className={`border rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none ${formErrors.time ? 'border-red-500' : 'border-gray-300'}`} 
            type="time" 
            onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleChange('time', event.target.value)}
            value={newMeet.time}
          />
          {formErrors.time && <span className="text-xs text-red-500">{formErrors.time}</span>}
        </div>


        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Duration</label>
          <select 
            className={`border rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none ${formErrors.duration ? 'border-red-500' : 'border-gray-300'}`}
            onChange={(event:React.ChangeEvent<HTMLSelectElement>)=>handleChange('duration',event.target.value)}
            value={newMeet.duration}
          >
            <option value="">Select Duration</option>
            <option value="30 mins">30 mins</option>
            <option value="1 Hour">1 Hour</option>
            <option value="1.5 Hours">1.5 Hours</option>
            <option value="2 Hours">2 Hours</option>
          </select>
          {formErrors.duration && <span className="text-xs text-red-500">{formErrors.duration}</span>}
        </div>


        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Host</label>
          <input 
            className={`border rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none ${formErrors.host ? 'border-red-500' : 'border-gray-300'}`} 
            type="text" 
            placeholder="Admin Name" 
            onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleChange('host', event.target.value)}
            value={newMeet.host}
          />
          {formErrors.host && <span className="text-xs text-red-500">{formErrors.host}</span>}
        </div>


        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Type</label>
          <select 
            className="border border-gray-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
            onChange={(event:React.ChangeEvent<HTMLSelectElement>)=>handleChange('meetingType', event.target.value)}
            value={newMeet.meetingType}
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>


        <div className="flex flex-col gap-1 col-span-2">
          <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Participants</label>
          <textarea 
            className={`border rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none resize-none ${formErrors.participants ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Comma separated names" 
            rows={3}
            onChange={(event:React.ChangeEvent<HTMLTextAreaElement>)=>handleChange('participants', event.target.value)}
            value={newMeet.participants}
          />
          {formErrors.participants && <span className="text-xs text-red-500">{formErrors.participants}</span>}
        </div>

      </div>


      <div className="mt-6 pt-4 border-t flex justify-end gap-3">
        <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100"
          onClick={() => setNewMeet({
            id:generateMeetingId(),
            title:"",
            date:"",
            time:"",
            duration:"",
            host:"",
            meetingType:"Online",
            participants:""
          })}
        >
          Clear
        </button>
        <button type="submit" className="bg-indigo-700 hover:bg-indigo-800 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors" onClick={handleSubmit}>
          Save Meeting
        </button>
      </div>
    </form>
  );
};

export default NewMeeting;