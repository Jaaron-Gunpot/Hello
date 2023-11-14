import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import CourseModal from './courseModal'

function MinorModal({name,title,description,courses}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>{name}</Button>}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>{title}</Header>
          <p>
            {description}
          </p>
          <p>{courses.map((course)=>{
            return(
                <CourseModal courseID={course}></CourseModal>
            )
          })}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() =>{setOpen(false);}}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default MinorModal