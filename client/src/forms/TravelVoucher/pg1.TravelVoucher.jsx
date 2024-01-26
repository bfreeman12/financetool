import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";
const Pg1TravelVoucher = () => {
  const [travelDetails, setTravelDetails] = useState([]);
  const { voucherFields } = useContext(FormContext);
  const { travelVoucher, setTravelVoucher } = voucherFields;

  useEffect(() => {
    setTravelDetails(travelVoucher);
  }, [travelVoucher]);

  const addTravelDetail = () => {
    const newTravelDetails = [
      ...travelDetails,
      {
        arrivalDeparture: "",
        place: "",
        meansOfTravel: "",
        reasonForStop: "",
        lodgingCost: "",
        pocMiles: "",
      },
    ];
    setTravelDetails(newTravelDetails);
    setTravelVoucher(newTravelDetails);
  };

  const removeTravelDetail = (index) => {
    const newTravelDetails = travelDetails.filter((_, i) => i !== index);
    setTravelDetails(newTravelDetails);
    setTravelVoucher(newTravelDetails);
  };
  return (
    <FormContext.Consumer>
      {(value) => {
        const { travelVoucher, setTravelVoucher } = value.voucherFields; // travelVoucher is an array of objects

        const handleInputChange = (e, index, field) => {
          const newTravelDetails = [...travelDetails];
          newTravelDetails[index][field] = e.target.value;
          setTravelDetails(newTravelDetails);
          setTravelVoucher(newTravelDetails);
        };
        return (
          <>
            <h5>Itenerary</h5>

            <Form className="travel-stops-content">
              <Form.Group controlId="departure">
                <Form.Label>Departure</Form.Label>
                <Row>
                  <Col>
                    <Form.Control type="date" placeholder="Date" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Place" />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Means/Mode of Travel"
                    />
                  </Col>
                </Row>
              </Form.Group>
              {travelDetails.map((travelDetail, index) => (
                <Form.Group key={index}>
                  <Form.Label>Travel Detail {index + 1}</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Arrival/Departure"
                        value={travelDetail.arrivalDeparture}
                        onChange={(e) =>
                          handleInputChange(e, index, "arrivalDeparture")
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Place"
                        value={travelDetail.place}
                        onChange={(e) => handleInputChange(e, index, "place")}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Means/Mode of Travel"
                        value={travelDetail.meansOfTravel}
                        onChange={(e) =>
                          handleInputChange(e, index, "meansOfTravel")
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Reason for Stop"
                        value={travelDetail.reasonForStop}
                        onChange={(e) =>
                          handleInputChange(e, index, "reasonForStop")
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="Lodging Cost"
                        value={travelDetail.lodgingCost}
                        onChange={(e) =>
                          handleInputChange(e, index, "lodgingCost")
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="POC Miles"
                        value={travelDetail.pocMiles}
                        onChange={(e) =>
                          handleInputChange(e, index, "pocMiles")
                        }
                      />
                      <Button
                        size="sm"
                        onClick={() => removeTravelDetail(index)}
                      >
                        Remove Travel Detail
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              ))}

              <Button onClick={addTravelDetail}>Add Travel Detail</Button>

              <Form.Group controlId="arrival">
                <Form.Label>Arrival</Form.Label>
                <Row>
                  <Col>
                    <Form.Control type="date" placeholder="Date" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Place" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Reason for Stop" />
                  </Col>
                  <Col>
                    <Form.Control type="number" placeholder="Lodging Cost" />
                  </Col>
                  <Col>
                    <Form.Control type="number" placeholder="POC Miles" />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Pg1TravelVoucher;
