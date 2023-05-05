import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

const UserList = () => {

    const [data, setData] = useState([]);
    const [favourites, setFavourites]: any = useState(JSON.parse(localStorage.getItem('favourites') || "[]"));

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            if (res.status == 200) {
                const users: any = [];
                setData(res.data);
            }
        }).catch((err) => {
            console.log({ err });
        })
    }, []);


    const handleFavourite = (e: any, id: any) => {
        e.preventDefault();
        id = id.toString();
        const favItems = JSON.parse(JSON.stringify(favourites));
        if (favItems.includes(id)) {
            const index = favItems.indexOf(id);
            favItems.splice(index, 1);
        } else {
            favItems.push(id)
        }
        setFavourites(favItems);
    }

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites])


    return (
        <Container fluid>
            <Row>
                <center>
                    <Col sm="8" className="mt-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.length && data.map((item: any) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.company.name}</td>
                                        <td>
                                            <>
                                                <Button className="btn-link" href="#" onClick={(e) => handleFavourite(e, item.id)}>
                                                    <i className={`${JSON.parse(JSON.stringify(favourites)).includes(item.id.toString()) ? 'fas' : 'far'} fa-heart`} style={{ color: "#ff0000" }}></i>
                                                </Button>
                                                <Button className="btn-link ml-2" href={`/user/${item.id}`}>
                                                    <i className={`fas fa-user`} style={{ color: "#000000" }}></i>
                                                </Button>
                                            </>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </center>
            </Row>
        </Container >
    )
}


export default UserList;