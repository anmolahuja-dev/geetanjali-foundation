import React from 'react'
import EventCard from './EventCard'

function Events() {
  return (
    <div className='event'>
        <div className="container">
        <h1 className='text-center mt-5 mb-4'>
        <i class="fa-solid fa-calendar-check"></i> {'  '}Upcoming Events</h1>
            <div className="row">
                <div className="col-4"><EventCard/></div>
                <div className="col-4"><EventCard/></div>
                <div className="col-4"><EventCard/></div>
            </div>
            
        </div>
    </div>
  )
}

export default Events