import { useState } from "react";

export const useLostRecieptInfo = () => {
  //needs date from userInfo

  // lodging
  const [lodgingInfo, setLodgingInfo] = useState([]);

  // airfare
  const [airfareInfo, setAirfareInfo] = useState([]);

  //rental car
  const [carRentalCompanyName, setcarRentalCompanyName] = useState("");
  const [dateRentalRented, setDateRentalRented] = useState("");
  const [dateRentalReturned, setDateRentalReturned] = useState("");
  const [basicRentalRate, setBasicRentalRate] = useState(0);
  const [carRentalTax, setCarRentalTax] = useState(0);
  const [carRentalInsurance, setCarRentalInsurance] = useState(0);
  const [carRentalFuelAdvance, setCarRentalFuelAdvance] = useState(0);
  const [carRentalTotalCost, setCarRentalTotalCost] = useState(0);

  //taxi/limosine/van
  const [taxiCompanyName, setTaxiCompanyName] = useState("");
  const [taxiTravelFrom, setTaxiTravelFrom] = useState("");
  const [taxiTravelTo, setTaxiTravelTo] = useState("");
  const [taxiBasicFare, setTaxiBasicFare] = useState(0);
  const [taxiTip, setTaxiTip] = useState(0);
  const [taxiTotalCost, setTaxiTotalCost] = useState(0);

  //other transportation
  const [otherTransportationCompanyName, setOtherTransportationCompanyName] =
    useState("");
  const [otherTransportationTravelFrom, setOtherTransportationTravelFrom] =
    useState("");
  const [otherTransportationTravelTo, setOtherTransportationTravelTo] =
    useState("");
  const [otherTransportationType, setOtherTransportationType] = useState("");
  const [otherTransportationCost, setOtherTransportationCost] = useState(0);
  const [otherTransportationTaxes, setOtherTransportationTaxes] = useState(0);
  const [otherTransportationTips, setOtherTransportationTips] = useState(0);
  const [otherTransportationTotalCost, setOtherTransportationTotalCost] =
    useState(0);

  //registration/ conference fee
  const [conferencePurpose, setConferencePurpose] = useState("");
  const [conferencePaidTo, setConferencePaidTo] = useState("");
  const [mealsIncluded, setMealsIncluded] = useState(false);
  const [lodgingIncluded, setLodgingIncluded] = useState(false);
  const [conferenceTotalCost, setConferenceTotalCost] = useState(0);

  //other expense
  const [otherExpensePurpose, setOtherExpensePurpose] = useState("");
  const [otherExpenseDate, setOtherExpenseDate] = useState("");
  const [otherExpenseTotalCost, setOtherExpenseCost] = useState(0);

  //certification
  const [travellerName, setTravellerName] = useState("");

  const lostRecieptInfo = {
    lodgingInfo,
    airfareInfo,
    carRentalCompanyName,
    dateRentalRented,
    dateRentalReturned,
    basicRentalRate,
    carRentalTax,
    carRentalInsurance,
    carRentalFuelAdvance,
    carRentalTotalCost,
    taxiCompanyName,
    taxiTravelFrom,
    taxiTravelTo,
    taxiBasicFare,
    taxiTip,
    taxiTotalCost,
    otherTransportationCompanyName,
    otherTransportationTravelFrom,
    otherTransportationTravelTo,
    otherTransportationType,
    otherTransportationCost,
    otherTransportationTaxes,
    otherTransportationTips,
    otherTransportationTotalCost,
    conferencePurpose,
    conferencePaidTo,
    mealsIncluded,
    lodgingIncluded,
    conferenceTotalCost,
    otherExpensePurpose,
    otherExpenseDate,
    otherExpenseTotalCost,
    travellerName,
    setLodgingInfo,
    setAirfareInfo,
    setcarRentalCompanyName,
    setDateRentalRented,
    setDateRentalReturned,
    setBasicRentalRate,
    setCarRentalTax,
    setCarRentalInsurance,
    setCarRentalFuelAdvance,
    setCarRentalTotalCost,
    setTaxiCompanyName,
    setTaxiTravelFrom,
    setTaxiTravelTo,
    setTaxiBasicFare,
    setTaxiTip,
    setTaxiTotalCost,
    setOtherTransportationCompanyName,
    setOtherTransportationTravelFrom,
    setOtherTransportationTravelTo,
    setOtherTransportationType,
    setOtherTransportationCost,
    setOtherTransportationTaxes,
    setOtherTransportationTips,
    setOtherTransportationTotalCost,
    setConferencePurpose,
    setConferencePaidTo,
    setMealsIncluded,
    setLodgingIncluded,
    setConferenceTotalCost,
    setOtherExpensePurpose,
    setOtherExpenseDate,
    setOtherExpenseCost,
    setTravellerName,
  };

  return lostRecieptInfo;
};
