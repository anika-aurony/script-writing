import React, { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';


const CreateScript = ({ show, handleClose }) => {
    const navigate = useNavigate();
    const from = "/login"
    const { user} = useContext(AuthContext);

    const handleAddScript = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const title = form.title.value
        const plot = form.plot.value
        const genre = form.genre.value
        console.log(title, plot, genre )
        const script = {name, email, title, plot, genre}

        {user ? 
        fetch('http://localhost:5000/script', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(script)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy information Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();

            }) : 
            Swal.fire('Please Login to submit script')
            
            
        }

    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Script</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add your modal content here */}

                    <form onSubmit={handleAddScript}>
                        <div >
                            <div className="form-control w-full  d-none  ">
                                
                                <input type="text" defaultValue={user?.name } placeholder="User Name" className="input input-bordered w-full max-w-xs" name="name" />
                            </div>
                            <div className="form-control w-full mt-4 d-none">
                                
                                <input type="text" defaultValue={ user?.email } placeholder="User Email" className="input input-bordered w-full max-w-xs" name="email" />
                            </div>
                            <div className="form-control border-white border-none w-full mt-4 d-flex flex-column">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text"  placeholder="Untitled Screenplay" className="input input-bordered rounded-pill w-full max-w-xs" name="title" required/>
                            </div>
                            <div className="form-control border-white border-none w-full mt-2 d-flex flex-column">
                                <label className="label">
                                    <span className="label-text">Plot</span>
                                </label>
                                <textarea type="text"  placeholder="Sci-fi adventure across multiverse" className="input input-bordered rounded w-full max-w-xs" name="plot" />
                            </div>
                            <div className="form-control border-white border-none w-full mt-2 d-flex flex-column">
                                <label className="label">
                                    <span className="label-text">*Genre</span>
                                </label>
                                <input type="text"  placeholder="Untitled Screenplay" className="input input-bordered rounded-pill w-full max-w-xs" name="genre" required/>
                            </div>
                            
                            <div className="form-control border-white mt-6 mb-6 text-center">
                                <button className="btn btn-danger ">Submit</button>
                            </div>
                        </div>
                    </form>
                    <div >
                        <p className="text-center">OR</p>
                    </div>
                    <div className='text-center'>
                        <Button variant="outline-danger" >Upload .PDF</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>

                    {/* Add additional footer buttons if needed */}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateScript;