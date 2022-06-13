import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {

  return (
    <>
      <h1>{ title }</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}