import React from 'react';
import useApi from '../hooks/useApi';

const UserPage = () => {
  
  const { data: users, totalCount, loading, error } = useApi('/api/test/users', { params: { param: 'test' }});
  
  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p style={{ color: 'red' }}>오류: {error}</p>;

  return (
    <div>
      <h2>사용자 목록</h2>
      <p>총 {totalCount}명</p>
      <ul>
        {users.map(user => (
          <li key={user.userId}>
            {user.userName} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
