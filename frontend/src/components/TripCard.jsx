function TripCard({ trip, onEdit, onDelete }) {
    return (
    <div className="shadow p-4 rounded bg-white">
        <h2 className="text-xl font-bold">{trip.title}</h2>
        <p>Destination: {trip.destination}</p>
        <p>Dates: {new Date(trip.startDate).toLocaleDateString()} – {new Date(trip.endDate).toLocaleDateString()}</p>
        <p>Budget: ${trip.budget}</p>
        <p>Notes: {trip.notes}</p>
        <div className="mt-2">
        <button className="btn btn-primary mx-1" onClick={() => onEdit(trip)}>Edit</button>
        <button className="btn btn-secondary mx-1" onClick={() => onDelete(trip._id)}>Delete</button>
        </div>
    </div>
    );
}

export default TripCard;