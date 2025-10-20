import PropTypes from "prop-types";

export const Form = ({ onCreateUser }) => {
  return (
    <>
      <div className="form-container">
        <h2>Crear un nuevo usuario</h2>
        <form onSubmit={onCreateUser} className="user-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre del usuario"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="phone"
              placeholder="Número de teléfono"
              min="0"
              step="1"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Ingrese el email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Ingrese la dirección"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="age"
              placeholder="Ingrese la edad"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              name="photoUrl"
              placeholder="URL de la imagen"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Crear Usuario
          </button>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
};

Form.defaultProps = {
  onCreateUser: () => {},
};