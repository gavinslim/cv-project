function OpenButton(props) {
  // const { click } = this.props;
  return (
    <button className='open-btn' onClick={props.click}>
      <i className="fa-solid fa-plus"></i>
    </button>
  )
}

module.exports = {
  OpenButton,
};

