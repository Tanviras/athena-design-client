import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const ServiceListAdmin = () => {
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/allServicesOrdered")
        .then((res) => res.json())
        .then((data) => setServicesList(data));
    }, []);
  
  
    const containerStyle = {
      // backgroundColor: "#F4F7FC",
      border: "none",
    };


    return (
        <section style={containerStyle} className="row">

        <div className='col-md-2 col-sm-2'>
          <Sidebar></Sidebar>
        </div>
  
  
  
        <div style={{ marginTop: 30 }} className=" col-md-10 p-4 pr-5 ml-auto">
          <h3 className="text-dark">Services List</h3>
  
          <div className='table-responsive'>
            <table className="table ">
  
  
  
              {/* table-header */}
              <thead className="text-dark">
  
                <tr>
                  <th style={{ width: "5%" }} className="text-dark text-left" scope="col">
                    Serial
                </th>
  
                  <th style={{ width: "10%" }} className="text-dark" scope="col">
                    Name
                </th>
  
                  <th style={{ width: "15%" }} className="text-dark" scope="col">
                    Email
                </th>
  
                  <th style={{ width: "18%" }} className="text-dark" scope="col">
                    Service
                </th>
  
                  <th style={{ width: "40%" }} className="text-dark" scope="col">
                    Project Details
                </th>
  
                  <th style={{ width: "12%" }} className="text-dark" scope="col">
                    Status
                </th>
  
                </tr>
  
              </thead>
  
  
              {/* table body */}
              <tbody>
                {
                  servicesList.map((srvclst, index) => (
  
                    <tr>
                      <td>{index + 1}</td>
                      <td>{srvclst.name}</td>
                      <td>{srvclst.email}</td>
                      <td>{srvclst.selectedService}</td>
                      <td>{srvclst.description}</td>
  
                      <td>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Control as="select">
                            <option>Pending</option>
                            <option>On going</option>
                            <option>Completed</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
  
                    </tr>
  
                  ))
                }
  
              </tbody>
  
  
            </table>
          </div>
  
  
        </div>
      </section>
    );
};

export default ServiceListAdmin;