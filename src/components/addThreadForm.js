import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function AddThreadsForm({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  function addthread() {
    addThread(title, category, body);
  }

  return (
    <div className="">
      <h3 className="mt-5">Add Threads</h3>
      <form className="mt-4">
        <div className="mb-3">
          <input type="text" className="form-control" id="title" placeholder="Title" value={title} onChange={onTitleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="category" placeholder="Category" value={category} onChange={onCategoryChange} />
        </div>
        <div className="mb-3">
          <textarea className="form-control textarea" placeholder="Leave a comment here" id="comments" value={body} onChange={onBodyChange} />
        </div>
        <div className="d-grid gap-2">
          <button type="button" className="btn btn-light" onClick={addthread}><b>Submit</b></button>
        </div>
      </form>
    </div>
  );
}

AddThreadsForm.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default AddThreadsForm;
