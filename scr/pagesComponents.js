export const pages = {
  flightsEditForm() {
    return `<form id="flightsEditForm" class="edited-form" enctype="multipart/form-data">
                <section class="user-selected-dates">
                    <div class="form-group">
                        <div class="calendar_container">
                            <label>Start Date</label>
                            <input type="date" class="form-input" id="firstDate" name="firstDate"
                                data-validators="requiered">
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select start date</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="calendar_container">
                            <label>Start Date</label>
                            <input type="date" class="form-input" id="secondDate" name="secondDate"
                                data-validators="requiered">
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select start date</span>
                            </div>
                        </div>
                    </div>
                </section>

                <p class="location-label">From</p>
                <section class="location-form-container">
                    <div class="form-group">
                        <div class="country-picker-container">
                            <label>Choose country:</label>
                            <select id="countryFromPicker" class="country country-picker form-input" name="countryFrom"
                                data-validators="requiered">
                            </select>
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select location</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="country-picker-container">
                            <label>Choose city:</label>
                            <select id="cityFromPicker" class="city-picker form-input" name="cityFrom"
                               >
                            </select>
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select location</span>
                            </div>
                        </div>
                    </div>
                </section>
                <p class="location-label">To</p>
                <section class="location-form-container">
                    <div class="form-group">
                        <div class="country-picker-container">
                            <label>Choose country:</label>
                            <select id="countryToPicker" class="country country-picker form-input" name="countryTo"
                                data-validators="requiered">
                            </select>
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select location</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="country-picker-container">
                            <label>Choose city:</label>
                            <select id="cityToPicker" class="city-picker form-input" name="cityTo">
                            </select>
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select location</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="buttons">
                    <div id='clearAll' class="clearAll">Clear</div>
                    <input type="submit" value="Search" id='submitForm'>
                </section>
            </form>`;
  },
  hotelsEditForm() {
    return `<form id="hotelsEditForm" class="edited-form" enctype="multipart/form-data">
                <section class="user-selected-dates">
                    <div class="form-group">
                        <div class="calendar_container">
                            <label>Start Date</label>
                            <input type="date" class="form-input" id="firstDate" name="firstDate"
                                data-validators="requiered">
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select start date</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="calendar_container">
                            <label>Start Date</label>
                            <input type="date" class="form-input" id="secondDate" name="secondDate"
                                data-validators="requiered">
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select start date</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="form-group">
                    <div class="amenities_container">
                    <label>Amenities:</label>
                    <select class="form-input" id="amenities" name="amenities" data-validators="requiered">
                        <option selected value=""></option>
                        <option value="1">1*</option>
                        <option value="2">2*</option>
                        <option value="3">3*</option>
                        <option value="4">4*</option>
                        <option value="5">5*</option>
                    </select>
                    <div class="form-group--error-container">
                        <span class="error-message error-message--requiered">Select start date</span>
                    </div>
                    </div>

                </div>

                <section class="location-form-container">
                    <div class="form-group">
                        <div class="country-picker-container">
                            <label>Choose country:</label>
                            <select id="countryFromPicker" class="country country-picker form-input" name="countryFrom"
                                data-validators="requiered">
                            </select>
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select location</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="country-picker-container">
                            <label>Choose city:</label>
                            <select id="cityFromPicker" class="city-picker form-input" name="cityFrom" >
                            </select>
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select location</span>
                            </div>
                        </div>
                    </div>
                </section>

               <section class="buttons">
                    <div id='clearAll' class="clearAll">Clear</div>
                    <input type="submit" value="Search" id='submitForm'>
                </section>
            </form>`;
  },
  carsEditForm() {
    return `<form id="carsEditForm" class="edited-form" enctype="multipart/form-data">
                <section class="user-selected-dates">
                    <div class="form-group">
                        <div class="calendar_container">
                            <label>Start Date</label>
                            <input type="date" class="form-input" id="firstDate" name="firstDate" data-validators="requiered">
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select start date</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="calendar_container">
                            <label>Start Date</label>
                            <input type="date" class="form-input" id="secondDate" name="secondDate" data-validators="requiered">
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select start date</span>
                            </div>
                        </div>
                    </div>
                </section>
            
                <div class="form-group">
                    <div class="choose-car-container">
                        <label>Class:</label>
                        <select class="form-input" id="carClass" name="carClass" data-validators="requiered">
                            <option selected value=""></option>
                            <option value="economy">economy</option>
                            <option value="business">business</option>
                        </select>
                        <div class="form-group--error-container">
                            <span class="error-message error-message--requiered">Select start date</span>
                        </div>
                    </div>
                </div>
            
                <section class="location-form-container">
                    <div class="form-group">
                        <div class="country-picker-container">
                            <label>Choose country:</label>
                            <select id="countryFromPicker" class="country country-picker form-input" name="countryFrom"
                                data-validators="requiered">
                            </select>
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select location</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="country-picker-container">
                            <label>Choose city:</label>
                            <select id="cityFromPicker" class="city-picker form-input" name="cityFrom">
                            </select>
                            <div class="form-group--error-container">
                                <span class="error-message error-message--requiered">Select location</span>
                            </div>
                        </div>
                    </div>
                </section>
            
              <section class="buttons">
                     <div id='clearAll' class="clearAll">Clear</div>
                    <input type="submit" value="Search" id='submitForm'>
                </section>
            </form>`;
  },

  search() {
    return `<aside class="sidebar">
            <ul class="sidebar-list" id="sidebar-list">
                <li class="sidebar-list-item active" data-page="flightsEditForm">Flights</li>
                <li class="sidebar-list-item" data-page="hotelsEditForm">Hotels</li>
                <li class="sidebar-list-item" data-page="carsEditForm">Cars</li>
            </ul>
        </aside>
        <div id="page_container">          

        </div> `;
  },

  searchHistory() {
    const history = JSON.parse(window.localStorage.getItem("history"));
    let divs = "<ul class='history-list'>";
    if (history && history.length > 0) {
      history.forEach((element) => {
        let historyItem = historyElements[element.type](element);
        divs += historyItem;
      });
      divs += "</ul>";
    }

    return `<div class="searchHistory" id=searchHistoryPage>
        ${divs}
    </div>`;
  },
};

const historyElements = {
  flightsEditForm(element) {
    const firstDate = new Date(element.firstDate);
    const secondDate = new Date(element.secondDate);

    return `<li class="history-list-item" data-id="${element.id}">
        <p class="list-item-text">Flight ${firstDate.toDateString().substr(3)} - ${secondDate
      .toDateString()
      .substr(3)}  ${element.countryFrom} - ${element.countryTo} </p><button class="delete-list-item">Delete</button>
    </li>`;
  },
  hotelsEditForm(element) {
    const firstDate = new Date(element.firstDate);
    const secondDate = new Date(element.secondDate);

    return `<li class="history-list-item" data-id="${element.id}">
        <p class="list-item-text"> Hotel ${firstDate.toDateString().substr(3)} - ${secondDate
      .toDateString()
      .substr(3)}  ${element.countryFrom} - ${element.amenities}* </p><button class="delete-list-item">Delete</button>
    </li>`;
  },
  carsEditForm(element) {
    const firstDate = new Date(element.firstDate);
    const secondDate = new Date(element.secondDate);

    return `<li class="history-list-item" data-id="${element.id}">
        <p class="list-item-text"> Car ${firstDate.toDateString().substr(3)} - ${secondDate
      .toDateString()
      .substr(3)}  ${element.countryFrom} - ${element.carClass} </p><button class="delete-list-item">Delete</button>
    </li>`;
  },
};

export const resultsPage = {
  flightsEditForm(array, value) {
    let divs = "<ul>";
    if (array && array.length > 0) {
      array.forEach((element) => {
        let resultItem = resultsPageComponents.flightsEditForm(element);
        divs += resultItem;
      });
      divs += "</ul>";
    }

    return divs;
  },
  hotelsEditForm(array, value) {
    let divs = "<ul>";
    if (array && array.length > 0) {
      array.forEach((element) => {
        let resultItem = resultsPageComponents.hotelsEditForm(element);
        divs += resultItem;
      });
      divs += "</ul>";
    }

    return divs;
  },

  carsEditForm(array, value) {
    let divs = "<ul>";
    if (array && array.length > 0) {
      array.forEach((element) => {
        let resultItem = resultsPageComponents.carsEditForm(element, value.carClass);
        divs += resultItem;
      });
      divs += "</ul>";
    }

    return divs;
  },

  noMatches() {
    return `<ul><li>
        <p >          
          no Matches
        </p>       
      </li></ul>`;
  },
};

const resultsPageComponents = {
  flightsEditForm(object) {
    const resultDate = new Date(object.date);
    return `    
      <li >
        <p >          
          Flights ${resultDate.toDateString().substr(3)} ${object.countryFrom} - ${object.avia} Airline 
        </p>       
      </li>
      `;
  },
  hotelsEditForm(object) {
    const resultDate = new Date(object.date);
    return `    
      <li >
        <p>          
          Hotel ${resultDate.toDateString().substr(3)} ${object.countryFrom} - Hotel ${object.hotel}* 
        </p>       
      </li>
      `;
  },
  carsEditForm(object, carClass) {
    const resultDate = new Date(object.date);
    return `
      <li >
        <p >
          Car ${resultDate.toDateString().substr(3)} ${object.countryFrom} - car ${object[carClass]}
        </p>
      </li>`;
  },
};
