import React, { useEffect, useState } from "react";
import { UserService } from "../Services/UserService";
import { Col, Container, Row, Table } from "react-bootstrap";


let UserList =()=>{
    let [state ,setState] = useState({
        users:[]
    })
    useEffect( ()=>{
        UserService.getAllUsers().then(()=>{
            setState({
                ...state,
                users:response.data
            })
        }).catch ((error)=>{
            console.log(error);
        })

    } , deps=[])
    return (
        <>
        <Container className="mt-3">
            <Row>
                <Col>
                <h3 className="text-primary">User List</h3>
                <p className="text-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quisquam.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Table stripped bordered hover className="shadow-lg">
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Location</th>

                    </tr>
                </Table>
                </Col>
            </Row>
        </Container>
        
        
        </>
    )

}

export default UserList;