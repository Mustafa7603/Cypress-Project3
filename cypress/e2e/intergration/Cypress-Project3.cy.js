/// <reference types="Cypress"/>
import Booking from "../../pages.js";

const booking = new Booking();
describe("Booking Function Project3", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-3");
  });

  it("Test Case 01 - Validate the default Book your trip form", () => {
    booking.specificRadio(0).should("be.visible").and("be.checked");
    booking.specificRadio(1).should("be.visible").and("not.be.checked");
    booking.labelandInputlocator().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    booking.departandReturnlocator().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    booking.allLabels().eq(6).should("be.visible");
    booking.alldropdowns().eq(3).should("have.value", 1).and("be.visible");
    booking.allLabels().eq(7).should("be.visible");
    booking
      .alldropdowns()
      .eq(4)
      .should("have.value", "Adult (16-64)")
      .and("be.visible");
    booking.bookButton().should("be.visible").and("be.enabled");
  });

  it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
    booking.specificRadio(1).check().should("be.visible").and("be.checked");
    booking.specificRadio(0).should("be.visible").and("not.be.checked");
    booking.alldropdowns().eq(3).should("have.value", 1);
    booking.alldropdowns().eq(4).should("have.value", "Adult (16-64)");
    booking.bookButton().should("be.visible").and("be.enabled");
    booking.allInputs().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    booking.allLabels().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    booking.alldropdowns().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
  });

  const verifybooking = [
    "DEPART",
    "IL to FL",
    "Sun Jun 02 2024",
    "Number of Passengers: 1",
    "Passenger 1: Senior (65+)",
    "Cabin class: Business",
  ];

  const testcase3 = [
    {
      radioIndex: 0,
      cabin: "Business",
      state: "Illinois",
      destination: "Florida",
      passengers: "1",
      passengerType: "Senior (65+)",
      daysToAdd: 7,
    },
  ];

  it("Test Case 03 - Validate the booking for 1 passenger and one way", () => {
    testcase3.forEach((testCase) => {
      const {
        radioIndex,
        cabin,
        state,
        destination,
        passengers,
        passengerType,
        daysToAdd,
      } = testCase;

      booking.specificRadio(radioIndex).click();
      booking.CabinSelector(cabin);
      booking.StateSelector(state);
      booking.DestinationSelector(destination);
      booking.NumberOfPassangers(passengers);
      booking.Passanger1(passengerType);
      booking.date7days(daysToAdd);
    });

    booking.bookButton().click({ force: true });
    booking.VerifyBookingLocators().each(($el, index) => {
      cy.wrap($el).should("have.text", verifybooking[index]);
    });
  });

  const verifybooking4 = [
    "DEPART",
    "CA to IL",
    "Sun Jun 02 2024",
    "RETURN",
    "IL to CA",
    "Tue Jul 02 2024",
    "Number of Passengers: 1",
    "Passenger 1: Adult (16-64)",
    "Cabin class: First",
  ];

  const testcase4 = [
    {
      radioIndex: 1,
      cabin: "First",
      state: "California",
      destination: "Illinois",
      passengers: "1",
      passengerType: "Adult (16-64)",
      daysToAdd: 7,
      daystoReturn: 37,
    },
  ];

  it("Test Case 04 - Validate the booking for 1 passenger and round trip", () => {
    testcase4.forEach((testCase) => {
      const {
        radioIndex,
        cabin,
        state,
        destination,
        passengers,
        passengerType,
        daysToAdd,
        daystoReturn,
      } = testCase;

      booking.specificRadio(radioIndex).click();
      booking.CabinSelector(cabin);
      booking.StateSelector(state);
      booking.DestinationSelector(destination);
      booking.NumberOfPassangers(passengers);
      booking.Passanger1(passengerType);
      booking.date7days(daysToAdd);
      booking.dateToReturn(daystoReturn);
    });

    booking.bookButton().click({ force: true });
    booking.BookingLocatorsv2().each(($el, index) => {
      cy.wrap($el).should("have.text", verifybooking4[index]);
    });
  });

  const verifybooking5 = [
    "DEPART",
    "NY to TX",
    "Mon May 27 2024",
    "RETURN",
    "TX to NY",
    "Mon May 27 2024",
    "Number of Passengers: 2",
    "Passenger 1: Adult (16-64)",
    "Passenger 2: Child (2-11)",
    "Cabin class: Premium Economy",
  ];

  const testcase5 = [
    {
      radioIndex: 1,
      cabin: "Premium Economy",
      state: "New York",
      destination: "Texas",
      passengers: "2",
      passengerType: "Adult (16-64)",
      passengerType2: "Child (2-11)",
      daysToAdd: 1,
    },
  ];

  it("Test Case 05 - Validate the booking for 2 passengers and one way", () => {
    testcase5.forEach((testCase) => {
      const {
        radioIndex,
        cabin,
        state,
        destination,
        passengers,
        passengerType,
        passengerType2,
        daysToAdd,
      } = testCase;

      booking.specificRadio(radioIndex).click();
      booking.CabinSelector(cabin);
      booking.StateSelector(state);
      booking.DestinationSelector(destination);
      booking.NumberOfPassangers(passengers);
      booking.Passanger1(passengerType);
      booking.Passanger2(passengerType2);
      booking.date7days(daysToAdd);
    });

    booking.bookButton().click({ force: true });
    booking.VerifyBookingLocators3().each(($el, index) => {
      cy.wrap($el).should("have.text", verifybooking5[index]);
    });
  });
});
