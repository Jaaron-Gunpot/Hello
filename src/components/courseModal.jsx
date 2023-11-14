import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import getData from '../utils/getData'

function CourseModal({courseID}) {
  const [open, setOpen] = React.useState(false);
  const [loaded, isLoaded] = React.useState(false);
  const [courseObj, setCourseObj] = React.useState();
  return (
    <Modal
      onClose={() => setOpen(false)}
      // using the on open event to only load the data when the modal is clicked
      onOpen={() => {
        setOpen(true);
        getData(`course/courseID=${courseID}`).then((courseJSON)=>{
          isLoaded(true);
          setCourseObj(courseJSON);
        })
      }}
      open={open}
      trigger={<Button>{courseID}</Button>}
    >
      <Modal.Header>{courseID}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {/* using a ternary operator to show data when it is loaded */}
          <Header>{loaded ? courseObj.title : "loading"}</Header>
          <p>
          {loaded ? courseObj.description : "loading"}
          </p>
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

export default CourseModal