function OpenButton(props) {
  return (
    <button className='open-btn' onClick={props.click}>
      <i className="fa-solid fa-plus"></i>
    </button>
  )
}

function CloseButton(props) {
  return (
    <button className='close-btn' onClick={props.click}>
      <i className="fa-solid fa-xmark"></i>
    </button>
  )
}

function SubmitButton(props) {
  return (
    <button className='submit-btn' onClick={props.click}>
      Save
    </button>
  )
}

function EditButton(props) {
  return (
    <button className='edit-btn' onClick={props.click}>
      <i class="fa-solid fa-pencil"></i>
    </button>
  )
}

export {
  OpenButton,
  CloseButton,
  SubmitButton,
  EditButton,
};

