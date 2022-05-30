import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function Addmovie({addmv}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState("")
  const [posterUrl, setPosterUrl] = useState("")
  const [rate, setRate] = useState(0)
  console.log(addmv)
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
Add new movie
 </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <label>title</label>
        <input  type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>description</label>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} /> 
         <label>posterUrl</label>
        <input type="text" value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)}/>
        <label>rating </label>
        <input type="number" value={rate} onChange={(e)=>setRate(e.target.value)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={()=>{addmv({id:Math.random(),title,description,posterUrl,rate});handleClose()}} >
            confirm 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
