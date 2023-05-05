import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { id } = useParams();
    const [favourites, setFavourites]: any = useState(JSON.parse(localStorage.getItem('favourites') || "[]"));
    const [user, setUser]: any = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
                console.log(res.data);
                if (res.status == 200) {

                    const userAddress = res.data.address;
                    let addressArr = [];
                    if (userAddress.suite) {
                        addressArr.push(userAddress.suite)
                    }
                    if (userAddress.street) {
                        addressArr.push(userAddress.street)
                    }
                    if (userAddress.city) {
                        addressArr.push(userAddress.city)
                    }
                    if (userAddress.zipcode) {
                        addressArr.push(userAddress.zipcode)
                    }
                    const address = addressArr.join(", ");
                    setUser({ ...res.data, address });
                }
            }).catch((err) => {
                console.log({ err });
            });
        }
    }, [id]);

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
                        {user ? (
                            <Card>
                                <Card.Body>
                                    <div className="col-sm-12 col-md-12">
                                        <h4>{user.name}</h4>
                                        <h6>{user.username}</h6>
                                        <small><cite title={user.address}>{user.address} <i className="glyphicon glyphicon-map-marker">
                                        </i>
                                        </cite></small>
                                        <p>
                                            <i className="glyphicon glyphicon-envelope"></i>{user.email}
                                            <br />
                                            <i className="glyphicon glyphicon-gift"></i>{user.phone}
                                        </p>
                                        <div className="btn-group" style={{ float: "right" }}>
                                            <Button className="btn-link" href="#" onClick={(e) => handleFavourite(e, id)}>
                                                <i className={`${JSON.parse(JSON.stringify(favourites)).includes(user.id.toString()) ? 'fas' : 'far'} fa-heart`} style={{ color: "#ff0000" }}></i>
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ) : null}
                    </Col>
                </center>
            </Row>
        </Container>
    )
}


export default UserProfile;