import React, { Component } from "react";
import { UserData } from "./UserDummyData";

export default class AdminPanelDashboard extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((item, index) => {
              return (
                <tr>
                  <td>1</td>
                  <td>{item.email}</td>
                  <td>{item.signup_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
