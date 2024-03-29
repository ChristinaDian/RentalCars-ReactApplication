import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { getLoggeduser } from '../../../utils/http-utils/user-requests';
import { rental } from '../../../utils/http-utils/vehicle-requests';

export function VehicleCard({ vehicle, deleteVehicle }) {

  const loggedUser = getLoggeduser();
  const navigate = useNavigate();

  const redirectToRentals = () => {
    rental(vehicle).then(() => {
      navigate('/rental/create');
    })
  }

  const redirectToEdit = () => {
    navigate(`/vehicle/edit/${vehicle.id}`);
  }

  if (!vehicle) {
    return <p> No vehicles!</p>
  }
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={vehicle.picture} />
      <Card.Body>
        <Card.Title>{vehicle.brand}  {vehicle.model} {vehicle.contructionYear}</Card.Title>
        <Card.Text>
          <span className='key'>Type: </span>
          <span className='value'>{vehicle.type}</span>
        </Card.Text>
        <Card.Text>
          <span className='key'>Fuel type: </span>
          <span className='value'>{vehicle.fuelType}</span>
        </Card.Text>
        <Card.Text>
          <span className='key'>Number of seats: </span>
          <span className='value'>{vehicle.seatsNum}</span>
        </Card.Text>
        <Card.Text>
          <span className='key'>Price per day: </span>
          <span className='value'>{vehicle.pricePerDay}</span>
        </Card.Text>
        <Card.Text>
          <span className='key'>Number of available cars: </span>
          <span className='value'>{vehicle.availableCarsCount}</span>
        </Card.Text>
        <div className='btn-holder'>
          {vehicle.availableCarsCount > 0 ? <Button variant="info" onClick={redirectToRentals}>Rent a car</Button> : ''}
          {loggedUser.role !== "customer" ? <Button variant="primary" onClick={redirectToEdit}>Edit</Button> : ''}
          {loggedUser.role !== "customer" ? <Button variant="danger" onClick={() => deleteVehicle(vehicle.id)}>Delete</Button> : ''} {/*izpolzvai tova*/}
        </div>
      </Card.Body>
    </Card>
  );
}