import React, { useContext, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg1LostReciept = () => {
  const { lostRecieptFields } = useContext(FormContext);
  const { lodgingInfo, setLodgingInfo } = lostRecieptFields;

  const handleInputChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const list = [...lodgingInfo];
    list[index][name] = type === "checkbox" ? checked : value;
    setLodgingInfo(list);
  };

  useEffect(() => {
    setLodgingInfo(lodgingInfo);
  }, [lodgingInfo]);

  const addLodging = () => {
    if (lodgingInfo.length < 2) {
      setLodgingInfo([
        ...lodgingInfo,
        {
          hotelName: "",
          hotelCity: "",
          hotelState: "",
          wasShared: false,
          wasOnOrders: false,
          checkInDate: "",
          checkOutDate: "",
          dailyRoomRate: 0,
          dailyTax: 0,
          totalCost: 0,
        },
      ]);
    } else {
      alert("You can only add a maximum of two lodgings.");
    }
  };

  const removeLodging = (index) => {
    const list = [...lodgingInfo];
    list.splice(index, 1);
    setLodgingInfo(list);
  };

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
        {lodgingInfo.map((lodging, index) => (
          <div key={index}>
            <h5>Lodging {index + 1}</h5>
            <Row className="md-5">
              <Form.Group as={Col} controlId={`hotelName${index}`}>
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                  type="text"
                  name="hotelName"
                  value={lodging.hotelName}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`hotelCity${index}`}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="hotelCity"
                  value={lodging.hotelCity}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`hotelState${index}`}>
                <Form.Label>State/Country</Form.Label>
                <Form.Control
                  type="text"
                  name="hotelState"
                  value={lodging.hotelState}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`shared${index}`}>
                <Form.Label>Was Shared?</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="wasShared"
                  checked={lodging.wasShared}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`onOrders${index}`}>
                <Form.Label>If Shared, Was On Orders?</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="wasOnOrders"
                  checked={lodging.wasOnOrders}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`checkInDate${index}`}>
                <Form.Label>Check In Date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkInDate"
                  value={lodging.checkInDate}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>
            </Row>
            <Row className="md-3">
              <Form.Group as={Col} controlId={`checkOutDate${index}`}>
                <Form.Label>Check Out Date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkOutDate"
                  value={lodging.checkOutDate}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`dailyRoomRate${index}`}>
                <Form.Label>Daily Room Rate</Form.Label>
                <Form.Control
                  type="number"
                  name="dailyRoomRate"
                  value={lodging.dailyRoomRate}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`dailyTax${index}`}>
                <Form.Label>Daily Tax</Form.Label>
                <Form.Control
                  type="number"
                  name="dailyTax"
                  value={lodging.dailyTax}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`totalCost${index}`}>
                <Form.Label>Total Cost</Form.Label>
                <Form.Control
                  type="number"
                  name="totalCost"
                  value={lodging.totalCost}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <Button onClick={() => removeLodging(index)}>
                  Remove Lodging
                </Button>
              </Form.Group>
            </Row>
          </div>
        ))}
        <Button onClick={addLodging}>Add Lodging</Button>
      </Form>
    </>
  );
};

export default Pg1LostReciept;
