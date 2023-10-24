const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');
const DUMMY_PLACES =
    [
        {
            id: "p1",
            title: "Empire State Building",
            description: "One of the most famous sky scrapers in the world",
            imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
            address: "20 W 34th St., New York, NY 10001, United States",
            location: {
                lat: 28.7041,
                lng: 77.1025
            },
            creator: "u1"
        },
        {
            id: "p2",
            title: "Burj Khalifa",
            description: "The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest building.",
            imageUrl: "https://lh5.googleusercontent.com/p/AF1QipNouThhC7edsvkTYfp_oDDFtfTLB9W5fdXOMxG-=w243-h244-n-k-no-nu",
            address: "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
            location: {
                lat: 25.1972,
                lng: 55.2744
            },
            creator: "u2"
        }
    ];

const getPlaceByID = (req, resp, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(place => place.id === placeId);
    if (!place) {
        return next(new HttpError("Could not find a place for the provided id.", 404));
    }
    resp.json({ place });
}

const getPlaceByUserID = (req, resp, next) => {
    const userId = req.params.uid;
    let user = DUMMY_PLACES.find(place => place.creator === userId);
    if (!user) {
        return next(new HttpError("Could not find a place for the provided user id.", 404));
    }
    resp.json({ user });
}

const createPlace = (req, resp, next) => {
    const { title, description, coordinates, address, creator } = req.body;
    const newPlace = { id: uuidv4(), title, description, location: coordinates, address, creator };
    DUMMY_PLACES.push(newPlace);
    resp.status(201).json({ place: newPlace });
}

const updatePlace = (req, resp, next) => {
    const { title, description } = req.body;
    const placeId = req.params.pid;
    const updatePlace = { ...DUMMY_PLACES.find(place => place.id === placeId) };
    if (!updatePlace) {
        return next(new HttpError("Could not find a place for the provided place id.", 404));
    }
    const placeIndex = DUMMY_PLACES.findIndex(...DUMMY_PLACES.find(place => place.id === placeId));
    updatePlace.title = title;
    updatePlace.description = description;
    DUMMY_PLACES[placeIndex] = updatePlace;

};

const deletePlace = (req, resp, next) => {

};


exports.getPlaceByID = getPlaceByID;
exports.getPlaceByUserID = getPlaceByUserID;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;