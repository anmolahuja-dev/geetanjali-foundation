import React from 'react'
import EventCard from './EventCard'

function Events() {
  return (
    <div className='event'>
        <div className="container">
          <h1 className='text-center mt-5 mb-4'>
          <i class="fa-solid fa-calendar-check"></i> {'  '}Upcoming Events</h1>
          <div className="row">
              <div className="col-md-4 col-12"><EventCard/></div>
              <div className="col-md-4 col-12"><EventCard/></div>
              <div className="col-md-4 col-12"><EventCard/></div>
          </div>
              
        </div>
    </div>
  )
}

export default Events