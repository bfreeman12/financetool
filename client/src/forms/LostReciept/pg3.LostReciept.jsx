import React, { useContext, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg3PayAdvance = () => {
  const { lostRecieptFields } = useContext(FormContext);
  const {
    carRentalCompanyName,
    setcarRentalCompanyName,
    dateRentalRented,
    setDateRentalRented,
    dateRentalReturned,
    setDateRentalReturned,
    basicRentalRate,
    setBasicRentalRate,
    carRentalTax,
    setCarRentalTax,
    carRentalInsurance,
    setCarRentalInsurance,
    carRentalFuelAdvance,
    setCarRentalFuelAdvance,
    carRentalTotalCost,
    setCarRentalTotalCost,
    taxiCompanyName,
    setTaxiCompanyName,
    taxiTravelFrom,
    setTaxiTravelFrom,
    taxiTravelTo,
    setTaxiTravelTo,
    taxiBasicFare,
    setTaxiBasicFare,
    taxiTip,
    setTaxiTip,
    taxiTotalCost,
    setTaxiTotalCost,
    otherTransportationCompanyName,
    setOtherTransportationCompanyName,
    otherTransportationTravelFrom,
    setOtherTransportationTravelFrom,
    otherTransportationTravelTo,
    setOtherTransportationTravelTo,
    otherTransportationType,
    setOtherTransportationType,
    otherTransportationCost,
    setOtherTransportationCost,
    otherTransportationTaxes,
    setOtherTransportationTaxes,
    otherTransportationTips,
    setOtherTransportationTips,
    otherTransportationTotalCost,
    setOtherTransportationTotalCost,
    conferencePurpose,
    setConferencePurpose,
    conferencePaidTo,
    setConferencePaidTo,
    mealsIncluded,
    setMealsIncluded,
    lodgingIncluded,
    setLodgingIncluded,
    conferenceTotalCost,
    setConferenceTotalCost,
    otherExpensePurpose,
    setOtherExpensePurpose,
    otherExpenseDate,
    setOtherExpenseDate,
    otherExpenseTotalCost,
    setOtherExpenseCost,
    travellerName,
    setTravellerName,
  } = lostRecieptFields;

  return (
    <>
      <h5>Lost Reciept</h5>
      <Form>
        <h5>Car Rental</h5>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="carRentalCompanyName">
            <Form.Label>Car Rental Company Name</Form.Label>
            <Form.Control
              type="text"
              value={carRentalCompanyName}
              onChange={(e) => setcarRentalCompanyName(e.target.value)}
              placeholder="Enter car rental company name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="dateRentalRented">
            <Form.Label>Date Rental Rented</Form.Label>
            <Form.Control
              type="date"
              value={dateRentalRented}
              onChange={(e) => setDateRentalRented(e.target.value)}
              placeholder="Enter rental date"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="dateRentalReturned">
            <Form.Label>Date Rental Returned</Form.Label>
            <Form.Control
              type="date"
              value={dateRentalReturned}
              onChange={(e) => setDateRentalReturned(e.target.value)}
              placeholder="Enter return date"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="basicRentalRate">
            <Form.Label>Basic Rental Rate</Form.Label>
            <Form.Control
              type="number"
              value={basicRentalRate}
              onChange={(e) => setBasicRentalRate(e.target.value)}
              placeholder="Enter basic rental rate"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="carRentalTax">
            <Form.Label>Car Rental Tax</Form.Label>
            <Form.Control
              type="number"
              value={carRentalTax}
              onChange={(e) => setCarRentalTax(e.target.value)}
              placeholder="Enter car rental tax"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="carRentalInsurance">
            <Form.Label>Car Rental Insurance</Form.Label>
            <Form.Control
              type="number"
              value={carRentalInsurance}
              onChange={(e) => setCarRentalInsurance(e.target.value)}
              placeholder="Enter car rental insurance"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="carRentalFuelAdvance">
            <Form.Label>Car Rental Fuel Advance</Form.Label>
            <Form.Control
              type="number"
              value={carRentalFuelAdvance}
              onChange={(e) => setCarRentalFuelAdvance(e.target.value)}
              placeholder="Enter car rental fuel advance"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="carRentalTotalCost">
            <Form.Label>Car Rental Total Cost</Form.Label>
            <Form.Control
              type="number"
              value={carRentalTotalCost}
              onChange={(e) => setCarRentalTotalCost(e.target.value)}
              placeholder="Enter car rental total cost"
            />
          </Form.Group>
        </Row>
        <h5>Taxi/Limosine/Van</h5>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="taxiCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              value={taxiCompanyName}
              onChange={(e) => setTaxiCompanyName(e.target.value)}
              placeholder="Enter company name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="taxiTravelFrom">
            <Form.Label>Travel From</Form.Label>
            <Form.Control
              type="text"
              value={taxiTravelFrom}
              onChange={(e) => setTaxiTravelFrom(e.target.value)}
              placeholder="Departure location"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="taxiTravelTo">
            <Form.Label>Travel To</Form.Label>
            <Form.Control
              type="text"
              value={taxiTravelTo}
              onChange={(e) => setTaxiTravelTo(e.target.value)}
              placeholder="Destination"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="taxiBasicFare">
            <Form.Label>Basic Fare</Form.Label>
            <Form.Control
              type="number"
              value={taxiBasicFare}
              onChange={(e) => setTaxiBasicFare(e.target.value)}
              placeholder="Basic fare"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="taxiTip">
            <Form.Label>Tip</Form.Label>
            <Form.Control
              type="number"
              value={taxiTip}
              onChange={(e) => setTaxiTip(e.target.value)}
              placeholder="Tip amount"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="taxiTotalCost">
            <Form.Label>Total Cost</Form.Label>
            <Form.Control
              type="number"
              value={taxiTotalCost}
              onChange={(e) => setTaxiTotalCost(e.target.value)}
              placeholder="Total cost"
            />
          </Form.Group>
        </Row>
        <h5>Other Transportation</h5>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="otherTransportationCompanyName">
            <Form.Label>Other Transportation Company Name</Form.Label>
            <Form.Control
              type="text"
              value={otherTransportationCompanyName}
              onChange={(e) =>
                setOtherTransportationCompanyName(e.target.value)
              }
              placeholder="Enter company name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherTransportationTravelFrom">
            <Form.Label>Other Transportation Travel From</Form.Label>
            <Form.Control
              type="text"
              value={otherTransportationTravelFrom}
              onChange={(e) => setOtherTransportationTravelFrom(e.target.value)}
              placeholder="Enter departure location"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherTransportationTravelTo">
            <Form.Label>Other Transportation Travel To</Form.Label>
            <Form.Control
              type="text"
              value={otherTransportationTravelTo}
              onChange={(e) => setOtherTransportationTravelTo(e.target.value)}
              placeholder="Enter destination"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherTransportationType">
            <Form.Label>Other Transportation Type</Form.Label>
            <Form.Control
              type="text"
              value={otherTransportationType}
              onChange={(e) => setOtherTransportationType(e.target.value)}
              placeholder="Enter type of transportation"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherTransportationCost">
            <Form.Label>Other Transportation Cost</Form.Label>
            <Form.Control
              type="number"
              value={otherTransportationCost}
              onChange={(e) => setOtherTransportationCost(e.target.value)}
              placeholder="Enter cost"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherTransportationTaxes">
            <Form.Label>Other Transportation Taxes</Form.Label>
            <Form.Control
              type="number"
              value={otherTransportationTaxes}
              onChange={(e) => setOtherTransportationTaxes(e.target.value)}
              placeholder="Enter taxes"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="otherTransportationTips">
            <Form.Label>Other Transportation Tips</Form.Label>
            <Form.Control
              type="number"
              value={otherTransportationTips}
              onChange={(e) => setOtherTransportationTips(e.target.value)}
              placeholder="Enter tips"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherTransportationTotalCost">
            <Form.Label>Other Transportation Total Cost</Form.Label>
            <Form.Control
              type="number"
              value={otherTransportationTotalCost}
              onChange={(e) => setOtherTransportationTotalCost(e.target.value)}
              placeholder="Enter total cost"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="otherTransportationTips">
            <Form.Label>Other Transportation Tips</Form.Label>
            <Form.Control
              type="number"
              value={otherTransportationTips}
              onChange={(e) => setOtherTransportationTips(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherTransportationTotalCost">
            <Form.Label>Other Transportation Total Cost</Form.Label>
            <Form.Control
              type="number"
              value={otherTransportationTotalCost}
              onChange={(e) => setOtherTransportationTotalCost(e.target.value)}
            />
          </Form.Group>
        </Row>
        <h5>Registration / Conference fee</h5>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="conferencePurpose">
            <Form.Label>Conference Purpose</Form.Label>
            <Form.Control
              type="text"
              value={conferencePurpose}
              onChange={(e) => setConferencePurpose(e.target.value)}
              placeholder="Enter conference purpose"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="conferencePaidTo">
            <Form.Label>Conference Paid To</Form.Label>
            <Form.Control
              type="text"
              value={conferencePaidTo}
              onChange={(e) => setConferencePaidTo(e.target.value)}
              placeholder="Enter recipient of payment"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="mealsIncluded">
            <Form.Label>Meals Included</Form.Label>
            <Form.Check
              type="checkbox"
              value={mealsIncluded}
              onChange={(e) => setMealsIncluded(e.target.checked)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="lodgingIncluded">
            <Form.Label>Lodging Included</Form.Label>
            <Form.Check
              type="checkbox"
              value={lodgingIncluded}
              onChange={(e) => setLodgingIncluded(e.target.checked)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="conferenceTotalCost">
            <Form.Label>Conference Total Cost</Form.Label>
            <Form.Control
              type="number"
              value={conferenceTotalCost}
              onChange={(e) => setConferenceTotalCost(e.target.value)}
              placeholder="Enter total cost of conference"
            />
          </Form.Group>
        </Row>
        <h5>Other Expense</h5>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="otherExpensePurpose">
            <Form.Label>Other Expense Purpose</Form.Label>
            <Form.Control
              type="text"
              value={otherExpensePurpose}
              onChange={(e) => setOtherExpensePurpose(e.target.value)}
              placeholder="Other expense purpose"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherExpenseDate">
            <Form.Label>Other Expense Date</Form.Label>
            <Form.Control
              type="date"
              value={otherExpenseDate}
              onChange={(e) => setOtherExpenseDate(e.target.value)}
              placeholder="Other expense date"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="otherExpenseTotalCost">
            <Form.Label>Other Expense Total Cost</Form.Label>
            <Form.Control
              type="number"
              value={otherExpenseTotalCost}
              onChange={(e) => setOtherExpenseCost(e.target.value)}
              placeholder="Other expense total cost"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="travellerName">
            <Form.Label>Traveller Name</Form.Label>
            <Form.Control
              type="text"
              value={travellerName}
              onChange={(e) => setTravellerName(e.target.value)}
              placeholder="Traveller name"
            />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default Pg3PayAdvance;
