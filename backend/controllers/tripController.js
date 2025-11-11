const Trip = require('../models/Trip');

exports.createTrip = async (req, res) => {
    try {
        const trip = await Trip.create({ ...req.body, userId: req.userId });
        res.status(201).json(trip);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
};

exports.getTrips = async (req, res) => {
    try {
    const { search, filterDate, filterDestination } = req.query;
    let findParams = { userId: req.userId };

    if (search) {
        findParams.destination = { $regex: search, $options: 'i' };
    }
    if (filterDate) {
        findParams.startDate = { $gte: new Date(filterDate) };
    }
    if (filterDestination) {
        findParams.destination = filterDestination;
    }
    const trips = await Trip.find(findParams);
    res.json(trips);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
};

exports.updateTrip = async (req, res) => {
    try {
    const trip = await Trip.findOneAndUpdate(
        { _id: req.params.id, userId: req.userId },
        req.body,
        { new: true }
    );
    res.json(trip);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
};

exports.deleteTrip = async (req, res) => {
    try {
    await Trip.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    res.json({ message: 'Trip deleted' });
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
};
