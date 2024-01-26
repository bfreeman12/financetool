import React, { useContext, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg2PayAdvance = () => {
  const { lostRecieptFields } = useContext(FormContext);
  const { airfareInfo, setAirfareInfo } = lostRecieptFields;

  const handleInputChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const list = [...airfareInfo];
    list[index][name] = type === "checkbox" ? checked : value;
    setAirfareInfo(list);
  };

  useEffect(() => {
    setAirfareInfo(airfareInfo);
  }, [airfareInfo]);

  const addAirfare = () => {
    if (airfareInfo.length < 2) {
      setAirfareInfo([
        ...airfareInfo,
        {
          carrierName: "",
          travelFrom: "",
          dateTravelled: "",
          baseAirfare: 0,
          airfareTaxes: 0,
          ctoFee: 0,
          totalCost: 0,
          ticketPurchasedThroughCto: false,
          wasIndirectRoutingUsed: false,
          airfarePurchasedWith: "",
        },
      ]);
    } else {
      alert("You can only add a maximum of two airfares.");
    }
  };

  const removeAirfare = (index) => {
    const list = [...airfareInfo];
    list.splice(index, 1);
    setAirfareInfo(list);
  };

  return (
    <>
      <h5>Lost Reciept</h5>
      <Form>
        {airfareInfo.map((airfare, index) => (
          <div key={index}>
            <h5>Airfare {index + 1}</h5>
            <Row className="md-5">
              <Form.Group as={Col} controlId={`carrierName${index}`}>
                <Form.Label>Carrier Name</Form.Label>
                <Form.Control
                  placeholder="Carrier name"
                  type="text"
                  name="carrierName"
                  value={airfare.carrierName}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId={`travelFrom${index}`}>
                <Form.Label>Travel From</Form.Label>
                <Form.Control
                  placeholder=" (City/State/Country)"
                  type="text"
                  name="travelFrom"
                  value={airfare.travelFrom}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`dateTravelled${index}`}>
                <Form.Label>Date Travelled</Form.Label>
                <Form.Control
                  type="date"
                  name="dateTravelled"
                  value={airfare.dateTravelled}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`baseAirfare${index}`}>
                <Form.Label>Base Airfare</Form.Label>
                <Form.Control
                  type="number"
                  name="baseAirfare"
                  value={airfare.baseAirfare}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`airfareTaxes${index}`}>
                <Form.Label>Airfare Taxes</Form.Label>
                <Form.Control
                  type="number"
                  name="airfareTaxes"
                  value={airfare.airfareTaxes}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`ctoFee${index}`}>
                <Form.Label>CTO Fee</Form.Label>
                <Form.Control
                  type="number"
                  name="ctoFee"
                  value={airfare.ctoFee}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId={`totalCost${index}`}>
                <Form.Label>Total Cost</Form.Label>
                <Form.Control
                  type="number"
                  name="totalCost"
                  value={airfare.totalCost}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`airfarePurchasedWith${index}`}>
                <Form.Label>Airfare Purchased With</Form.Label>
                <Form.Control
                  type="text"
                  name="airfarePurchasedWith"
                  placeholder="Personal Card,Personal GTC,Unit GTC"
                  value={airfare.airfarePurchasedWith}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId={`ticketPurchasedThroughCto${index}`}
              >
                <Form.Label>Ticket Purchased Through CTO</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="ticketPurchasedThroughCto"
                  checked={airfare.ticketPurchasedThroughCto}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId={`wasIndirectRoutingUsed${index}`}>
                <Form.Label>Indirect Routing Was Used</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="wasIndirectRoutingUsed"
                  checked={airfare.wasIndirectRoutingUsed}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <Button onClick={() => removeAirfare(index)}>
                  Remove Airfare
                </Button>
              </Form.Group>
            </Row>
          </div>
        ))}
        <Button onClick={addAirfare}>Add Airfare</Button>
      </Form>
    </>
  );
};

export default Pg2PayAdvance;
