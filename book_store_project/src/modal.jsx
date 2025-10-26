import { useState, useEffect } from 'react';

export default function Modal({ buttonLabel, buttonClassName, onAdd, initialData }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    url: '',
    language: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setShowForm(true);
    }
  }, [initialData]);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.author && formData.url) {
      onAdd(formData);
      setFormData({
        title: '',
        author: '',
        url: '',
        language: 'English',
      });
      setShowForm(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      author: '',
      url: '',
      language: 'English',
    });
    setShowForm(false);
  };

  return (
    <>
      <button className={buttonClassName} onClick={() => setShowForm(true)}>
        {buttonLabel}
      </button>
      {showForm && (
        <div className="modal_overlay">
          <div className="modal_content">
            <form onSubmit={handleSubmit} className="formControl">
              <label>Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={handleChange('title')}
                required
              />
              <label>Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={handleChange('author')}
                required
              />
              <label>Cover Image URL</label>
              <input
                type="url"
                value={formData.url}
                onChange={handleChange('url')}
                required
              />
              <label>Language</label>
              <input
                type="text"
                value={formData.language}
                onChange={handleChange('language')}/>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <button type="submit" className="buttonPrimary">{buttonLabel}</button>
                <button type="button" onClick={handleCancel} className="buttonPrimary" style={{ background: '#ccc', color: '#000' }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}