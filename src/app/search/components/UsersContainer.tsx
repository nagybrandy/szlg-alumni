import React, { useEffect, useState } from 'react';
import { useGetUsersMutation } from '@/store/services/apiSlice';
import User from './User';

interface UsersContainerProps {
  name: string;
  year: string;
  grade: string;
  job: string;
}

export default function UsersContainer({ name, year, grade, job, closeOnes }: UsersContainerProps) {
  const [getUsers, { error, isLoading }] = useGetUsersMutation();
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

  const filteredUsers = users.filter(user => {
    const nameCheck = (!name || (user.first_name?.toLowerCase().includes(name.toLowerCase()))) ||
      (!name || (user.last_name?.toLowerCase().includes(name.toLowerCase()))) ||
      (!name || (user.username?.toLowerCase().includes(name.toLowerCase())));

    const yearCheck = !year || (user.year?.toLowerCase().includes(year.toLowerCase()));
    const gradeCheck = !grade || (user.grade?.toLowerCase().includes(grade.toLowerCase()));
    const jobCheck = !job || (user.job?.toLowerCase().includes(job.toLowerCase()));

    return nameCheck && yearCheck && gradeCheck && jobCheck;
  });

  const renderUser = (user: any) => {
    return (
      <User elem={user} key={user.user_id} />
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      {filteredUsers.map(renderUser)}
    </div>
  );
}