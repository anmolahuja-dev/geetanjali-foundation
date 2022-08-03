import React from 'react'
import AboutUtil from './AboutUtil'

function About() {
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <AboutUtil/>
                </div>
                <div className="col-6">
                    <h2 className='text-warning fw-600'>Our Story</h2>
                    <h1>We’ve Been Saving Sight And Changing Lives</h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptatibus labore officia. Accusantium pariatur ipsum reprehenderit. Neque eligendi sunt, vel nobis alias, error recusandae sit ab corrupti, placeat fuga dolor.
                    <button className='mt-5 d-block btn btn-lg btn-warning'>About more</button>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    </div>
  )
}

export default About