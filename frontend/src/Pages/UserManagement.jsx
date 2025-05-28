import React, { useState } from 'react';
import '../Styles/UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formUser, setFormUser] = useState({ name: '', role: '', username: '', status: 'Active' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const openAddUserModal = () => {
    setFormUser({ name: '', role: '', username: '', status: 'Active' });
    setIsEditing(false);
    setShowModal(true);
  };

  const openEditUserModal = (index) => {
    setFormUser(users[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowModal(true);
  };

  const openDeleteUserModal = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const confirmDeleteUser = () => {
    const updatedUsers = users.filter((_, i) => i !== deleteIndex);
    setUsers(updatedUsers);
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormUser(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updated = [...users];
      updated[editIndex] = formUser;
      setUsers(updated);
    } else {
      setUsers([...users, formUser]);
    }
    setShowModal(false);
  };

  return (
    <div className="user-container">
      <div className="user-management">
        <div className="user-header">
          <h2>User Management</h2>
          <button className="add-user-button" onClick={openAddUserModal}>+ Add User</button>
        </div>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search users..." />
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Username</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="5" style={{ textAlign: 'center' }}>No users found.</td></tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.username}</td>
                <td>{user.status}</td>
                <td>
                  <button className="edit-btn" onClick={() => openEditUserModal(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => openDeleteUserModal(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{isEditing ? 'Edit User' : 'Add User'}</h3>
            <form onSubmit={handleFormSubmit} className="user-form">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formUser.name}
                onChange={handleFormChange}
                required
              />
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={formUser.role}
                onChange={handleFormChange}
                required
              />
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formUser.username}
                onChange={handleFormChange}
                required
              />
              <label>Status:</label>
              <select
                name="status"
                value={formUser.status}
                onChange={handleFormChange}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="form-buttons">
                <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this user?</p>
            <div className="form-buttons">
              <button className="delete-btn" onClick={confirmDeleteUser}>Yes </button>
              <button className="cancel-btn" onClick={cancelDelete}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
