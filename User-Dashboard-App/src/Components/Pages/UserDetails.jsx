import React from 'react';
import { useParams } from 'react-router-dom';

const users = [
  { id: 1, name: "Swapnil", skill: "React", age: 22 },
  { id: 2, name: "Aman", skill: "Node.js", age: 25 },
  { id: 3, name: "Priya", skill: "UI/UX", age: 28 }
];

const UserDetails = () => {

  // const param = useParams();
  // console.log(param, "...param");       // {id : 1}

  const { id } = useParams();
  // console.log(id, "...id");      // returns always String

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <div> User Not Found</div>
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details for ID: {id}</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Skill:</strong> {user.skill}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
}

export default UserDetails;
