import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Dashboard.css"
import CreateScript from '../CreateScript/CreateScript';
import { AiOutlineDelete } from 'react-icons/ai';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    //script Modal
    const [showModal, setShowModal] = useState(false);
    const [allnotes, setAllNotes] = useState('')
    const notes = allnotes && allnotes.filter(allnote => allnote.email === user.email)
    console.log(notes)
    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    useEffect(() => {
        fetch('https://script-writing-server.vercel.app/scripts')
            .then(res => res.json())
            .then(data => setAllNotes(data))
    }, [showModal])

    const handleDelete = id => {
        Swal.fire({
            title: 'Do you want to delete?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://script-writing-server.vercel.app/script/${id}`, {
                    method: 'Delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = allnotes.filter(note => note._id !== id);
                            setAllNotes(remaining)
                        }
                    })
                Swal.fire('Deleted')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved')
            }
        })

    }

    return (
        <div className='dash-bg  text-white p-5'>
            <h2 className='pt-5 text-center'>Your Latest Scripts</h2>
            <div className='text-center'>
                <Button variant='danger' className='text-center mt-3'>Upgade Your Plan</Button>
            </div>

            <div className='p-3 m-3 dash-back mx-auto'>
                <div className='d-flex justify-content-around '>
                    <h3>My Script</h3>
                    <Button variant="outline-danger" className='rounded-pill' onClick={handleModalOpen}>Create Script</Button>
                </div>
                {
                    notes && notes.map(note => <div className='mt-3 d-flex justify-content-between' key={note._id}>
                        <div>
                            <h3>{note.title}</h3>
                            <p className='lh-1'>Genre: {note.genre}</p>
                            <p className='lh-1'>Synopsis: {note.plot}</p>
                        </div>
                        <div>
                            <Button variant='danger' onClick={()=>handleDelete(note._id)}><AiOutlineDelete className='me-2' />Delete</Button>
                        </div>
                    </div>)
                }
                <div>

                </div>


            </div>
            <CreateScript show={showModal} handleClose={handleModalClose} ></CreateScript>
        </div>
    );
};

export default Dashboard;