# Routes


## Main Routes

| Route | Page (.tsx) |
|-------|------------|
| `/` | Dashboard |
| `/dashboard` | Dashboard |
| `/new-meeting` | NewMeeting |
| `/join-meeting` | JoinMeeting |
| `/calendar` | Calendar |
| `/schedule-meeting` | ScheduleMeeting |
| `/profile-settings` | ProfileSetting |

---

## Meeting Routes

| Route | Page (.tsx) |
|-------|------------|
| `/meeting/:meetingId` | MeetingDetails |
| `/meeting/:meetingId/details` | MeetingDetails |
| `/meeting/:meetingId/participants` | MeetingParticipants |

Example:

## Calendar Routes

| Route | Page tsx |
|-------|------------|
| `/calendar/?view=month` | Calendar |
| `/calendar/?view=week`  | Calendar |

## Special Routes

| Route | Component |
|-------|------------|
| `*` | Not Found |

Used NavLink in sidebar navigation.
Used isActive callback from NavLink for active link styling.

## Hooks Used from react-router

1. useNavigate() return a navigate obje which takes the path as an arg and mostly used alongside button when clicked to navigate to certain router or navigate(-1) to go to previous page

2. useSearchParams(): used in calendar to implement the calendar?view= month or calendar?type= week to implement two distict view based on query parameter
const [searchParams, setSearchParams] = useSearchParams();
searchParams.get('view') to fetch the view or if empty rendered month view,
setSearchParams to toggle between month and week view values

3. useParams():
 Used to fetch the route parameters in the meetings/:meetingId page and also rendering the meetings/:meetingId/details and meetings/:meetingId/participants, Used to find the meeting from meetings array




 # Screen Shots Attached in the folder
https://github.com/aakritneupane53/Full-Stack-Training/tree/main/Week-3/Assignment-2%20Screenshots

 # Appologies for using tailwind, had to use it due to time restrictions.


```txt






