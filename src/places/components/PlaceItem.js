import React, { useState, useContext } from "react";
import Card from '../../shared/components/UIElements/Card';
import "../styles/PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from "../../shared/Context/auth-context";

const PlaceItem = (props) => {
    console.log(props);
    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    const showDeleteWarningHandeler = () => { setShowConfirmModal(true) };
    const cancelDeleteHandeler = () => { setShowConfirmModal(false) };

    const confirmDeleteHandeler = () => {
        setShowConfirmModal(false);
        console.log("Deleting")

    };
    return <>
        <Modal show={showMap} onCancel={closeMapHandler}
            header={props.address} contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={
                <Button onClick={closeMapHandler}>
                    CLOSE
                </Button>}
        >
            <div className="map-container">
                <Map zoom={50} center={props.coordinates} />
            </div>
        </Modal>
        <Modal show={showConfirmModal}
            onCancel={cancelDeleteHandeler}
            header="Are you sure?" foooterClass="place-item__modal-actions" footer={
                <>
                    <Button inverse onClick={cancelDeleteHandeler}>CANCEL</Button>
                    <Button danger onClick={confirmDeleteHandeler}>DELETE</Button>
                </>
            }>
            <p>Do you want to proceed and delete this place?
                Please note that it cannot be undone.</p>
        </Modal>
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p> {props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                    {auth.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT </Button>}
                    {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandeler}>DELETE </Button>}
                </div>
            </Card>
        </li>
    </>;
};

export default PlaceItem;