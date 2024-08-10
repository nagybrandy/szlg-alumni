'use client';

import React, { useEffect, useState } from 'react';
import { useGetUsersMutation } from '@/store/services/apiSlice';
import User from './User';

export default function UsersContainer() {
  const [getUsers, { data, error, isLoading }] = useGetUsersMutation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers({ token: localStorage.getItem('token') }).unwrap();
        setUsers(response); // Assuming the response is the array of users
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };
    
    fetchUsers();
  }, [getUsers]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div className="flex flex-col space-y-3">
      {users.map((person, index) => (
        <User elem={person} key={index} />
      ))}
    </div>
  );
}
