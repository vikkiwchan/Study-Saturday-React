import React from 'react';
import axios from 'axios';

import StudentList from './StudentList';
import SingleStudent from './SingleStudent';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
    };
    this.selectStudent = this.selectStudent.bind(this);
  }

  async componentDidMount() {
    try {
      const students = (await axios.get('/student')).data;
      this.setState({ students: students });
    } catch (error) {
      console.error(error);
    }
  }

  selectStudent(student) {
    return this.setState({ selectedStudent: student });
  }

  render() {
    const { students, selectedStudent } = this.state;
    const selectStudent = this.selectStudent;
    const view = selectedStudent.id ? (
      <SingleStudent selectedStudent={selectedStudent} />
    ) : (
      <></>
    );
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
            <StudentList students={students} selectStudent={selectStudent} />
          </tbody>
        </table>
        {view}
      </div>
    );
  }
}

export default Main;
