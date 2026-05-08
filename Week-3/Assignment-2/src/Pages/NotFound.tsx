
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">

      <div className="mb-6">
        <h1 className="text-9xl font-black text-gray-100 relative">
          404
          <span className="absolute inset-0 flex items-center justify-center text-3xl text-indigo-600 mt-8 font-bold tracking-tight">
            Oops!
          </span>
        </h1>
      </div>


      <div className="max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>


        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 text-sm font-bold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
          >
            Go Back
          </button>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-all active:scale-95"
          >
            Take Me Home
          </button>
        </div>
      </div>


      <div className="mt-16 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
        Error Code: ERR_404_NOT_FOUND
      </div>
    </div>
  );
};

export default NotFound;