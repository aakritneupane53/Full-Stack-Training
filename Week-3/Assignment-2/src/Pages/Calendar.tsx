import { useSearchParams } from 'react-router';

const CalendarPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();


  const currentView = searchParams.get('view') || 'month';


  const setView = (viewName: 'month' | 'week') => {
    setSearchParams({ view: viewName });
  };

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">

        <button 
          onClick={() => setView('month')}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
            currentView === 'month' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          Month
        </button>
        <button 
          onClick={() => setView('week')}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
            currentView === 'week' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          Week
        </button>
      </div>


      <div className="border border-gray-200 rounded-3xl p-8 bg-white shadow-sm">
        {currentView === 'month' ? (
          <div className="text-center py-20 text-gray-400 font-medium">Month View Content</div>
        ) : (
          <div className="text-center py-20 text-gray-400 font-medium">Week View Content</div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;