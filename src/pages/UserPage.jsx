import React from 'react';
import useApi from '../hooks/useApi';

const UserPage = () => {
  
  const { header, body, error, loading } = useApi('/api/test/users', { method:'post'});
  
  if (loading) return <p>불러오는 중...</p>;
  if (error) return <p style={{ color: 'red' }}>
    코드: {header.code},
    오류: {header.message}</p>;

  return (
    <div>
      <h2>사용자 목록</h2>
      <p>총 {body.totalCount}명</p>
      <ul>
        {body.items.map(user => (
          <li key={user.userId}>
            {user.userName} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
