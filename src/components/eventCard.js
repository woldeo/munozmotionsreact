import React from 'react';
import { Button } from 'reactstrap';

const EventCard = ({ id, name, location, price, title, addTicket }) => {
    return (
        <div id={id}>
        <div className="row">
          <div className="col-sm-9 ml-2 p-1">
            <h6>
              {name} @ {location}
            </h6>
          </div>
        </div>
        <div className="row">
          <Button
            onClick={() => addTicket({id, name, location, price, title, units: 1})}
            style={{ marginLeft: 15, marginTop: 5, marginBottom: 10 }}
            className="btn ticketBtn"
          >
            Add Tickets
          </Button>{" "}
          <div className="col" style={{ marginTop: 10 }}>
            {" "}
            ${price} each
          </div>
          </div>
        </div>
)
}
export default EventCard;