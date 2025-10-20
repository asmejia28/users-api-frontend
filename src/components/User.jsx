import PropTypes from 'prop-types';

export const User = ({ user = {} }) => {
  return (
    <>
      <div key={user.id} className="user-card">
        <img src={user.photoUrl} alt={user.photoUrl} className="user-photoUrl" />
        <h3 className="user-name">{user.name}</h3>
        <p className="user-phone">Teléfono: {user.phone}</p>
        <p className="user-email">Email: {user.email}</p>
        <p className="user-address">Dirección: {user.address}</p>
        <p className="user-age">Edad: {user.age} años</p>
      </div>
    </>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

User.defaultProps = {
  user: {},
};