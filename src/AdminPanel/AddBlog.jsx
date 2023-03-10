import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={{ textDecoration: "none", background: "blue", color: "white", fontWeight: "bolder", margin: "20px 50px 20px 84vw" }}>Add Blog</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box >
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6" style={{ marginTop: '150px' }}>
                            <form className="container" >
                                <div className="card">
                                    <div className="card-header">
                                        <h2>ADD BLOG</h2>
                                    </div>

                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="title">Title <span className='errmsg'>*</span></label>
                                            <input type="text" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="title">Description <span className='errmsg'>*</span></label>
                                            <textarea className='form-control'></textarea>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="author">Author <span className='errmsg'>*</span></label>
                                            <input type="text" className='form-control' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="category">Category <span className='errmsg'>*</span></label>
                                            <input type="text" className='form-control' />
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