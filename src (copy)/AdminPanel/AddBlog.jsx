import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    
    const closeModalHandler = () => {
        setOpen(false)
    }

    const validate = () => {
        let result = true

        if (title === null || title === '') {
            result = false;
            toast.warning("Please enter title")
        }
        if (description === null || description === '') {
            result = false;
            toast.warning("Please enter description")
        }
        if (author === null || author === '') {
            result = false;
            toast.warning("Please enter author")
        }
        if (category === null || category === '') {
            result = false;
            toast.warning("Please enter category")
        }
        return result
    }

    const addBlogHandler = (e) => {
        e.preventDefault()
        
        if (validate()) {
            let data = { title, description, author, category }

            fetch(' http://localhost:5000/blogs', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            }).then((response) => response.json()).then((data) => {
                console.log("dsgukj", data)
                toast.success("Blog Added Successfully")
            }).catch(err => {
                toast.error("Login failed due to : " + err.message)
            })

            window.location.reload()
            setOpen(false);
        }

    }

    return (
        <div>
            <Button onClick={handleOpen} style={{ textDecoration: "none", background: "blue", color: "white", fontWeight: "bolder", margin: "0 0 2vh 56vw" }}>Add Blog</Button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box >
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6" style={{ marginTop: '150px' }}>
                            <form className="container" onSubmit={addBlogHandler} >
                                <div className="card">
                                    <div className="card-header" style={{ display: "flex" }}>
                                        <h2>ADD BLOG</h2><CloseIcon style={{ margin: "1vh 0 0 30vw", cursor: "pointer" }} onClick={closeModalHandler} />
                                    </div>

                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="title">Title <span className='errmsg'>*</span></label>
                                            <input type="text" className='form-control' value={title} onChange={(e => setTitle(e.target.value))} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="title">Description <span className='errmsg'>*</span></label>
                                            <textarea className='form-control' value={description} onChange={(e => setDescription(e.target.value))}></textarea>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="author">Author <span className='errmsg'>*</span></label>
                                            <input type="text" className='form-control' value={author} onChange={(e => setAuthor(e.target.value))} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="category">Category <span className='errmsg'>*</span></label>
                                            <input type="text" className='form-control' value={category} onChange={(e => setCategory(e.target.value))} />
                                        </div>

                                    </div>

                                    <div className="card-footer">
                                        <button type="submit" className='btn btn-primary'>ADD</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}