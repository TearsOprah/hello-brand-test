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
    <form className={'form'} onSubmit={handleSubmit}>
      <p className={'form__text'}>Reserve a table</p>
      <label className={'form__label'}>
        Name:
        <input className={'form__input'} type="text" name="name" value={formData.name} onChange={handleInputChange} required={true} />
      </label>
      <label className={'form__label'}>
        Phone:
        <input className={'form__input'} type="text" name="phone" value={formData.email} onChange={handleInputChange} required={true} />
      </label>
      <button className={'form__button'} type="submit">Submit</button>
    </form>
  );
};

ModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ModalForm;
