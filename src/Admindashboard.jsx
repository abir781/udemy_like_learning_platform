import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Admindashboard = () => {
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allusers")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        processChartData(data);
      });
  }, []);

  const processChartData = (userData) => {
    const usersByDate = {};
    
    userData.forEach(user => {
      const timestamp = parseInt(user._id.substring(0, 8), 16) * 1000;
      const date = new Date(timestamp).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
      
      if (!usersByDate[date]) {
        usersByDate[date] = {
          date,
          teachers: 0,
          students: 0,
          normal_users: 0,
          total: 0
        };
      }
      
      if (user.role === 'teacher') usersByDate[date].teachers++;
      else if (user.role === 'student') usersByDate[date].students++;
      else if (user.role === 'normal_user') usersByDate[date].normal_users++;
      
      usersByDate[date].total++;
    });

    const chartArray = Object.values(usersByDate);
    let cumulativeTotal = 0;
    let cumulativeTeachers = 0;
    let cumulativeStudents = 0;
    let cumulativeNormalUsers = 0;

    const cumulativeData = chartArray.map(item => {
      cumulativeTotal += item.total;
      cumulativeTeachers += item.teachers;
      cumulativeStudents += item.students;
      cumulativeNormalUsers += item.normal_users;
      
      return {
        date: item.date,
        'Total Users': cumulativeTotal,
        'Teachers': cumulativeTeachers,
        'Students': cumulativeStudents,
        'Normal Users': cumulativeNormalUsers
      };
    });

    setChartData(cumulativeData);
  };

  const roleCount = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const pieData = [
    { name: 'Teachers', value: roleCount.teacher || 0, color: '#10b981' },
    { name: 'Students', value: roleCount.student || 0, color: '#3b82f6' },
    { name: 'Normal Users', value: roleCount.normal_user || 0, color: '#f59e0b' },
    { name: 'Admins', value: roleCount.admin || 0, color: '#ef4444' }
  ];

  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'teacher': return '#10b981';
      case 'student': return '#3b82f6';
      case 'admin': return '#ef4444';
      case 'normal_user': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ 
            color: 'white', 
            fontSize: '42px', 
            fontWeight: '800',
            marginBottom: '10px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Admin Dashboard
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px' }}>
            User Management & Analytics
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600', marginBottom: '8px' }}>
              TOTAL USERS
            </div>
            <div style={{ fontSize: '36px', fontWeight: '800', color: '#1f2937' }}>
              {users.length}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
            color: 'white',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '14px', opacity: '0.9', fontWeight: '600', marginBottom: '8px' }}>
              TEACHERS
            </div>
            <div style={{ fontSize: '36px', fontWeight: '800' }}>
              {roleCount.teacher || 0}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
            color: 'white',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '14px', opacity: '0.9', fontWeight: '600', marginBottom: '8px' }}>
              STUDENTS
            </div>
            <div style={{ fontSize: '36px', fontWeight: '800' }}>
              {roleCount.student || 0}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)',
            color: 'white',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '14px', opacity: '0.9', fontWeight: '600', marginBottom: '8px' }}>
              NORMAL USERS
            </div>
            <div style={{ fontSize: '36px', fontWeight: '800' }}>
              {roleCount.normal_user || 0}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '30px',
          marginBottom: '40px'
        }}>
          {/* Line Chart */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: '#1f2937',
              marginBottom: '20px'
            }}>
              User Growth Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="Total Users" stroke="#667eea" strokeWidth={3} dot={{ fill: '#667eea', r: 4 }} />
                <Line type="monotone" dataKey="Teachers" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="Students" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="Normal Users" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: '#1f2937',
              marginBottom: '20px'
            }}>
              User Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Users Table */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '700', 
            color: '#1f2937',
            marginBottom: '25px'
          }}>
            All Users
          </h3>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'separate',
              borderSpacing: '0'
            }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'left', 
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Username
                  </th>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'left', 
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Email
                  </th>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'left', 
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Role
                  </th>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'left', 
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    User ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr 
                    key={user._id}
                    style={{ 
                      borderBottom: '1px solid #f3f4f6',
                      transition: 'background-color 0.2s',
                      background: index % 2 === 0 ? 'white' : '#fafafa'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f0f9ff'}
                    onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? 'white' : '#fafafa'}
                  >
                    <td style={{ padding: '18px' }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: `${getRoleBadgeColor(user.role)}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: '700',
                          color: getRoleBadgeColor(user.role)
                        }}>
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <span style={{ 
                          fontWeight: '600',
                          color: '#1f2937',
                          fontSize: '15px'
                        }}>
                          {user.username}
                        </span>
                      </div>
                    </td>
                    <td style={{ 
                      padding: '18px',
                      color: '#4b5563',
                      fontSize: '14px'
                    }}>
                      {user.email}
                    </td>
                    <td style={{ padding: '18px' }}>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: '600',
                        background: `${getRoleBadgeColor(user.role)}15`,
                        color: getRoleBadgeColor(user.role),
                        textTransform: 'capitalize',
                        display: 'inline-block'
                      }}>
                        {user.role.replace('_', ' ')}
                      </span>
                    </td>
                    <td style={{ 
                      padding: '18px',
                      color: '#9ca3af',
                      fontSize: '13px',
                      fontFamily: 'monospace'
                    }}>
                      {user._id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;