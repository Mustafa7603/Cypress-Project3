class Booking {
  //locators ----------------------------------------------------------------
  radiobuttonlocator() {
    return cy.get(".mr-1");
  }
  radioButtonInput() {
    return cy.get(":nth-child(1) > .control");
  }
  threeto5locators() {
    return cy.get("");
  }
  bookButton() {
    return cy.get(".Button_c_button__TmkRS");
  }

  allLabels() {
    // this has 0-7
    return cy.get(".label");
  }

  alldropdowns() {
    // this has 5
    return cy.get(".select select");
  }

  allInputs() {
    // this has 4
    return cy.get('.mr-1, [type="text"]');
  }

  labelandInputlocator() {
    return cy.get(
      ".field:nth-child(2) > label, .field:nth-child(3) > label, .field:nth-child(4) > label, :nth-child(2) > .select > select, :nth-child(3) > .select > select, :nth-child(4) > .select > select"
    );
  }

  departandReturnlocator() {
    return cy.get(
      ":nth-child(5) > .label, :nth-child(6) > .label, :nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input, :nth-child(6) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input"
    );
  }
  numOfPasslabelandDropdown() {
    return cy.get(":nth-child(7) > .label, :nth-child(7) > .select > select");
  }

  VerifyBookingLocators() {
    return cy.get(
      ".is-underlined, .is-italic, .field > div > p, .mt-4 > :nth-child(1), .mt-4 > :nth-child(2), .mt-4 > :nth-child(3)"
    );
  }
  BookingLocatorsv2() {
    return cy.get(
      '[style="width: 48%; color: var(--mainBlue);"] > .is-underlined,[style="width: 48%; color: var(--mainBlue);"] > .is-italic, [style="width: 48%; color: var(--mainBlue);"] > p, .ml > .is-underlined,.mt-4 > :nth-child(1), .mt-4 > :nth-child(2),.mt-4 > :nth-child(3),.ml > .is-underlined,.ml > .is-italic,.ml > p'
    );
  }

  Passanger2(string) {
    return cy.get(":nth-child(9) > .select > select").select(string);
  }

  VerifyBookingLocators3() {
    return cy.get(
      '[style="width: 48%; color: var(--mainBlue);"] > .is-underlined,[style="width: 48%; color: var(--mainBlue);"] > .is-italic, [style="width: 48%; color: var(--mainBlue);"] > p, .ml > .is-underlined,.mt-4 > :nth-child(1), .mt-4 > :nth-child(2),.mt-4 > :nth-child(3),.ml > .is-underlined, .ml > .is-italic,.ml > p, .mt-4 > :nth-child(3), .mt-4 > :nth-child(4)'
    );
  }

  //methods ----------------------------------------------------------
  getSpecificDropdown(index) {
    return this.alldropdowns().eq(index);
  }
  specificRadio(num) {
    return this.radiobuttonlocator().eq(num);
  }

  CabinSelector(string) {
    return this.getSpecificDropdown(0).select(string);
  }

  StateSelector(string) {
    return this.getSpecificDropdown(1).select(string);
  }

  DestinationSelector(string) {
    return this.getSpecificDropdown(2).select(string);
  }

  departInput(num) {
    return cy.get(
      ":nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input"
    );
  }

  /**
   *
   * @param {number} daysToAdd
   * @returns a date that adds to the current date
   */
  date7days(daysToAdd) {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}/${month}/${day}`;

    return cy
      .get(
        ":nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input"
      )
      .clear()
      .type(formattedDate);
  }

  /**
   *
   * @param {number} daysToAdd
   * @returns The locator and input for the return date
   */
  dateToReturn(daysToAdd) {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}/${month}/${day}`;

    return cy
      .get(
        ":nth-child(6) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input"
      )
      .clear()
      .type(formattedDate);
  }

  NumberOfPassangers(string) {
    return this.alldropdowns().eq(3).select(string);
  }

  Passanger1(string) {
    return this.alldropdowns().eq(4).select(string);
  }

  /**
   *
   * @param {number} daysToAdd
   * @returns a dynamic date to use to verify the booking information
   */

  getDate(daysToAdd) {
    const monthAbv = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };

    const weekAbv = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat",
    };

    const today = new Date();

    today.setDate(today.getDate() + daysToAdd);

    const dayOfWeek = String(today.getDay());
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const mm2 = Number(today.getMonth() + 1);
    const yyyy = today.getFullYear();

    return `${weekAbv[dayOfWeek]} ${monthAbv[mm2]} ${dd} ${yyyy}`;
  }
}

export default Booking;
