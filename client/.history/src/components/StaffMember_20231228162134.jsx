import React from 'react'

const StaffMember = ({element}) => {
  return (
    <div className='flex'>
        <div></div>
    <div>{element.firstName} {element.lastName}</div></div>
  )
}

export default StaffMember