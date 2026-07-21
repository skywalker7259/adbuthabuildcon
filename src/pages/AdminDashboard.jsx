import React, {useEffect, useState} from 'react';
import {db, auth} from '../firebase';
import {collection, getDocs, orderBy, query} from 'firebase/firestore';
import {signOut} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const leadsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLeads(leadsData);
      } catch (error) {
        console.error('Error fetching leads: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard - Customer Leads</h1>
        <button onClick={handleLogout} className="logout-btn">Sign Out</button>
      </header>

      {loading ? (
        <p className="loading-text">Loading leads...</p>
      ) : (
        <div className="table-responsive">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Service</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {leads.length > 0 ? (
                leads.map(lead => (
                  <tr key={lead.id}>
                    <td>{lead.createdAt?.toDate().toLocaleString() || 'N/A'}</td>
                    <td>{lead.name}</td>
                    <td>{lead.phone}</td>
                    <td>{lead.email}</td>
                    <td>{lead.service}</td>
                    <td>{lead.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-data">No client inquiries found yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;