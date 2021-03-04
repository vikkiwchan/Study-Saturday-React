import React from 'react';

const SingleStudent = ({ selectedStudent }) => {
  const tests = selectedStudent.tests;
  const avgGrade = Math.round(
    tests.reduce((sum, a) => sum + a.grade, 0) / tests.length
  );
  return (
    <div id='single-student'>
      <h3>{selectedStudent.fullName}</h3>
      <h3>Average grade: {avgGrade}%</h3>
      <table>
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          {tests.map((test) => (
            <tr key={test.id}>
              <td>{test.subject}</td>
              <td>{test.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SingleStudent;
