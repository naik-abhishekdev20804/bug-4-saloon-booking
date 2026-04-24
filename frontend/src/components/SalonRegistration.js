import React, { useState } from 'react';
import { useSalonContext } from '../context/SalonContext';

const DEFAULT_SALON_IMAGE =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';

const SalonRegistration = () => {
  const { addSalon } = useSalonContext();
  const [formData, setFormData] = useState({
    shopName: '',
    contactNumber: '',
    email: '',
    location: '',
    description: ''
  });
  const [services, setServices] = useState([{ name: '', price: '' }]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const addServiceField = () => {
    setServices([...services, { name: '', price: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validServices = services.filter(
      (service) => service.name.trim() && service.price
    );

    if (validServices.length === 0) {
      alert('Please add at least one service');
      return;
    }

    const shopName = formData.shopName;
    const newSalon = {
      _id: `local-${Date.now()}`,
      name: shopName,
      contact: formData.contactNumber,
      email: formData.email,
      location: formData.location,
      description: formData.description,
      rating: 5,
      isOpen: true,
      image: DEFAULT_SALON_IMAGE,
      services: validServices.map((service) => ({
        name: service.name,
        price: parseFloat(service.price)
      }))
    };

    addSalon(newSalon);

    setFormData({
      shopName: '',
      contactNumber: '',
      email: '',
      location: '',
      description: ''
    });
    setServices([{ name: '', price: '' }]);

    alert(`Salon "${shopName}" has been registered successfully!`);

    const element = document.getElementById('salons');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="register">
      <h2 className="section-title">Register Your Salon</h2>
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <h3>Salon Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="shopName">Shop Name *</label>
              <input
                type="text"
                id="shopName"
                name="shopName"
                value={formData.shopName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number *</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
                autoComplete="tel"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="City, Address"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Salon Description</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <h3>Services & Pricing</h3>
          <div id="servicesContainer">
            {services.map((service, index) => (
              <div key={index} className="service-entry form-row">
                <div className="form-group">
                  <label>Service Name</label>
                  <input
                    type="text"
                    className="service-name"
                    placeholder="e.g., Haircut, Manicure"
                    value={service.name}
                    onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Price (₹)</label>
                  <input
                    type="number"
                    className="service-price"
                    min="0"
                    step="0.01"
                    value={service.price}
                    onChange={(e) => handleServiceChange(index, 'price', e.target.value)}
                    required
                  />
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="add-service-btn" onClick={addServiceField}>
            <i className="fas fa-plus"></i> Add Another Service
          </button>
          <div className="form-group">
            <button type="submit" className="booking-btn">Register Salon</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SalonRegistration;
