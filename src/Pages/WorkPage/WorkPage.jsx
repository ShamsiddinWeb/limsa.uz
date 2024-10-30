import React, { useEffect } from 'react'
import Work from '../../components/Work/Work'

const WorkPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <Work t={props.t} />
    </>
  )
}

export default WorkPage