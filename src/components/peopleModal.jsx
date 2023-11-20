import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './peopleModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleModal({username, facebook, imagePath, interestArea, phone, office, name, twitter, website, title, tagLine}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {title}
          </Typography>
          <img src={imagePath} alt={name}></img>
          {
            tagLine &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {tagLine}
            </Typography>
          }
          {/*if a website exists, show it. if not it doesn't show */}
          {
            website &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Website: <a href={website} target='_blank'>{website}</a>
            </Typography>
          }
          {
            username &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Username: {username}
            </Typography>
          }
          {
            office &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Office: {office}
            </Typography>
          }
          {
            phone &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Phone: <a href={`tel:${phone}`} target='_blank'>{phone}</a>
            </Typography>
          }
          {
            interestArea &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Interest Area: {interestArea}
            </Typography>
          }
          {
            twitter &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Twitter: {twitter}
            </Typography>
          }
          {
            facebook &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Facebook: {facebook}
            </Typography>
          }
        </Box>
      </Modal>
    </div>
  );
}