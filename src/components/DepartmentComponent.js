import React from 'react';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

function RenderDepartment({ department }) {
  return (
    <Card>
      <CardHeader>{department.name}</CardHeader>
      <CardBody>
        <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
      </CardBody>
    </Card>
  );
}

const Departments = props => {
  const departments = props.departments.map(department => {
    return (
      <div key={department.id} className="col-12 col-md-4">
        <RenderDepartment department={department} />
      </div>
    );
  });
  return (
    <div className="container my-3">
      <div className="row">{departments}</div>
    </div>
  );
};

export default Departments;