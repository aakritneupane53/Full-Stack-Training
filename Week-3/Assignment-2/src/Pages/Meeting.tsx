
import { Outlet } from 'react-router';

const MeetingLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

      <main className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-2">
           <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MeetingLayout;