import React from 'react';

const StudentList = ({ students, selectStudent }) => {
  return students.map((student) => (
    <tr key={student.id}>
      <td>{student.fullName}</td>
      <td onClick={() => selectStudent(student)}>Details</td>
    </tr>
  ));
};

export default StudentList;
