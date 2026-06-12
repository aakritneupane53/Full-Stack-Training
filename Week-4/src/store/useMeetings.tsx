import {create} from 'zustand';


type meeting = {
  id:string|number,
  title:string,
  date:string,
  time:string,
  duration:""
  host:string,
  meetingType:"Online"|"Offline",
  participants:""

}

interface MeetingStore {
    meetings:meeting[],
    addMeeting:(meet:meeting)=>void,
    removeMeeting:(meetid:string|number)=>void,
    updateMeeting:()=>void,
    clearMeeting:()=>void

}

export const useMeetingStore = create<MeetingStore>((set, get)=>({
    meetings:localStorage.getItem('meetings')?JSON.parse(localStorage.getItem('meetings')):[],
    addMeeting:(newMeeting:meeting)=>{
        return set((state)=>{
            const oldMeetings = get().meetings
            localStorage.setItem('meetings', JSON.stringify([...oldMeetings,newMeeting]))
            return ({meetings:[...state.meetings,newMeeting]})
        })
    },
    removeMeeting:(meetid:string|number)=>{

        return set((state)=>({meetings:state.meetings.filter(
            (meet)=> meet.id !== meetid
        )}))
    },
    updateMeeting:()=>{},
    clearMeeting:()=>{
        set(state=>({meetings:[]}))
    }

}))