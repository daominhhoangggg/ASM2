import React, { Component } from 'react';
import Staffs from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Departments from './DepartmentComponent';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { STAFFS } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }

  render() {
    const StaffWithId = ({ match }) => {
      return <StaffDetail staff={this.state.staffs.filter(staff => staff.id === parseInt(match.params.staffId, 10))[0]} />;
    };

    const SalaryList = () => {
      return <Salary staffs={this.state.staffs} />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <Staffs staffs={this.state.staffs} onClick={staffId => this.onStaffSelect(staffId)} />} />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Route path="/departments" component={() => <Departments departments={this.state.departments} />} />
          <Route path="/salary" component={SalaryList} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
