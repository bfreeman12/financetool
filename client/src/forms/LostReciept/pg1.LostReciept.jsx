import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg1PayAdvance = () => {
  const { advancePayFields } = useContext(FormContext);
  const { lodgingInfo, setLodgingInfo, airfareInfo, setAirfareInfo } =
    advancePayFields;

  return (
    <>
      <h5>Lost Reciept</h5>
      <p>
        DO NOT include the following items with any amounts listed below: a.
        Optional insurance (Loss Damage Waiver, Personal Accident Insurance,
        etc...) on vehicle rentals, unless the rental is OCONUS. b. Sundries,
        unofficial phone calls, movie rentals, room service, bellhop tips,
        unauthorized laundry services, restaurant fees at lodging facilities, or
        any other expense incurred for personal convenience. c. Airfare that was
        not personally procured or airfare that was charged to a Centrally
        Billed Government Travel Card. d. Expenses incurred while on leave or
        other non-per-diem status.
      </p>
      <Form>
        <Form.Group controlId="hotelName1">
          <Form.Label>Hotel Name</Form.Label>
          <Form.Control
            type="text"
            name="hotelName"
            value={lodgingInfo[0]?.hotelName}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="hotelCity1">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="hotelCity"
            value={lodgingInfo[0]?.hotelCity}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="hotelState1">
          <Form.Label>State/Country</Form.Label>
          <Form.Control
            type="text"
            name="hotelState"
            value={lodgingInfo[0]?.hotelState}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="shared1">
          <Form.Label>Was Shared?</Form.Label>
          <Form.Check
            type="checkbox"
            name="wasShared"
            checked={lodgingInfo[0]?.wasShared}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="onOrders1">
          <Form.Label>If Shared, Was On Orders?</Form.Label>
          <Form.Check
            type="checkbox"
            name="wasOnOrders"
            checked={lodgingInfo[0]?.wasOnOrders}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="checkInDate1">
          <Form.Label>Check In Date</Form.Label>
          <Form.Control
            type="date"
            name="checkInDate"
            value={lodgingInfo[0]?.checkInDate}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="checkOutDate1">
          <Form.Label>Check Out Date</Form.Label>
          <Form.Control
            type="date"
            name="checkOutDate"
            value={lodgingInfo[0]?.checkOutDate}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="dailyRoomRate1">
          <Form.Label>Daily Room Rate</Form.Label>
          <Form.Control
            type="number"
            name="dailyRoomRate"
            value={lodgingInfo[0]?.dailyRoomRate}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="dailyTax1">
          <Form.Label>Daily Tax</Form.Label>
          <Form.Control
            type="number"
            name="dailyTax"
            value={lodgingInfo[0]?.dailyTax}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>

        <Form.Group controlId="totalCost1">
          <Form.Label>Total Cost</Form.Label>
          <Form.Control
            type="number"
            name="totalCost"
            value={lodgingInfo[0]?.totalCost}
            onChange={(event) => handleLodgingChange1(event)}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Pg1PayAdvance;
