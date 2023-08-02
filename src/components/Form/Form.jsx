import { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const ModalForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Модальное окно - Простая форма</p>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={formData.email} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

ModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ModalForm;
