const Footer = () => {
  return (
    <footer className='footer w-full border-t border-gray-200 bg-white flex items-center justify-between px-6 py-4 shrink-0'>
      <p className='text-sm text-gray-600'>© 2026 Meeting Basum. All rights reserved.</p>
      <div className='flex gap-4 text-sm text-gray-500'>
        <a href='#' className='hover:text-gray-700'>Privacy</a>
        <a href='#' className='hover:text-gray-700'>Terms</a>
        <a href='#' className='hover:text-gray-700'>Contact</a>
      </div>
    </footer>
  )
}

export default Footer