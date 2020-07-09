// THEME SWITCHER
let btnSwitchTheme = document.querySelector('#theme-switcher');
btnSwitchTheme.addEventListener('click', function () {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    btnSwitchTheme.innerHTML = '<span><img src="icon/icon-moon.png" alt="icon dark theme"></span> Dark mode';
  } else {
    document.body.classList.add('dark');
    btnSwitchTheme.innerHTML = '<span><img src="icon/icon-sun.png" alt="icon light theme"></span> Light mode';
  }
});
// END THEME SWITCHER
// Click Button Back
const sectionDetailContent = document.querySelector("#detail-content");
const homeContent = document.querySelector("#home-content");
const btnBack = document.querySelector("#btn-back");
btnBack.addEventListener("click", () => {
  document.body.classList.toggle("body-details-page");
  sectionDetailContent.innerHTML = "";
});
window.addEventListener('load', (all) => {
  homeContent.style.opacity = 1;
  homeContent.style.transition = "opacity ease-in 4s";
  showHomeData("all");
});
// SEARCH SCRIPT 
// Credit: https://www.w3schools.com/howto/howto_js_autocomplete.asp
const countries = ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "United States Minor Outlying Islands", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cabo Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo (Democratic Republic of the)", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Côte d'Ivoire", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia (the former Yugoslav Republic of)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Korea (Democratic People's Republic of)", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of Kosovo", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Korea (Republic of)", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom of Great Britain and Northern Ireland", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.getElementById("search-country"), countries);
//END SEARCH SCRIPT
const filterRegion = document.querySelectorAll(".region-button");
Array.from(filterRegion)
  .forEach(element => {
    element.addEventListener("click", (e) => {
      const regionSelected = element.getAttribute("data-region");
      const regionQuery = "region/" + regionSelected;
      showHomeData(regionQuery);
    });
  });
const goSearch = document.querySelector("#go-search");
const searchCountry = document.querySelector("#search-country");
// Enter in input Search
searchCountry.addEventListener("click", (e) => {
  e.target.placeholder = "";
  e.target.value = "";
});
// End Enter in input Search
// Click on Button  Search
goSearch.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("body-details-page");
  searchCountryValue = searchCountry.value;
  if (searchCountryValue == "") {
    showDetailData("Brazil");
  } else {
    showDetailData(searchCountryValue);
  }
});
// End Click on Button  Search
showHomeContent = (allCountryData) => {
  const sectionHomeContent = document.querySelector("#home-content");
  const templateHome = allCountryData.map((el) => {
    return `<div class="country-container btn" data-name="${el.name}">
                <img src="${el.flag}" alt="${el.name} flag" />
                <span style="display: block" class="country">
                    <h3>${el.name}</h3>
                    <ul>
                      <li><span class="bold">Population:</span> ${el.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</li>
                      <li><span class="bold">Region:</span> ${el.region}</li>
                      <li><span class="bold">Capital:</span> ${el.capital}</li>
                    </ul>
                  </span>
                  </div>`;
  }).join("");
  sectionHomeContent.innerHTML = templateHome;
};

showHomeData = (query) => {
  let url = `https://restcountries.eu/rest/v2/${query}`;
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
  }
  fetch(url, options)
    .then(res => {
      res.json()
        .then(data => {
          spinner.style.display = "none";
          showHomeContent(data);
          // Navigate from HomePage to Detail Page
          const countryContainerButton = document.querySelectorAll(".country-container");
          Array.from(countryContainerButton).forEach(el => {
            el.addEventListener("click", () => {
              document.body.classList.toggle("body-details-page");
              countryQuery = el.getAttribute("data-name");
              showDetailData(countryQuery);
            });
          });
          // End Navigate from HomePage to Detail Page
        })
    })
    .catch(e => console.log("Error:", e));
};

showDetailContent = (countryDetailData) => {
  const templateLanguages = countryDetailData[0].languages.map((lang) => {
    return `
        <ul style="list-style: inside square;"> 
        <li>${lang.name}</li>
        </ul>`;
  }).join("");
  const templateCurrencies = countryDetailData[0].currencies.map((currency) => {
    return `<ul style="list-style: inside square;">
        <li>Code: ${currency.code}</li>
        <li>Name: ${currency.name}</li>
        <li>Symbol: ${currency.symbol}</li>
        </ul>
        `;
  }).join("");
  if (countryDetailData[0].borders.length == 0) {
    templateBorders = `&#127965;&#65039; It's an Island! &#127965;&#65039;`;
  } else {
    templateBorders = countryDetailData[0].borders.map((border) => {
      return `<span role="button" class="btn btn-border" data-border="${border}">${border}</span>`;
    }).join("");
  };
  const templateDetail = `
          <figure class="flag-country">
          <img src="${countryDetailData[0].flag}" alt="" />
          </figure>

          <div class="name-country">
            <h2>${countryDetailData[0].name}</h2>
            <ul>
              <li><span class="bold">Native Name: </span>${countryDetailData[0].name}</li>
              <li><span class="bold">Population: </span>${countryDetailData[0].population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</li>
              <li><span class="bold">Region: </span>${countryDetailData[0].region}</li>
              <li><span class="bold">Sub Region: </span>${countryDetailData[0].subregion}</li>
              <li><span class="bold">Capital: </span>${countryDetailData[0].capital}</li>
            </ul>
          </div>
    <div class="domain-country">
        <ul>
          <li> <span class="bold">Top Level Domain: </span>${countryDetailData[0].topLevelDomain}</li>
          <li><span class="bold">Currencies: </span>${templateCurrencies}</li>
          <li><span class="bold">Languages: </span>${templateLanguages}</li>
        </ul>
      </div>
      <div class="border-country">
          <span class="bold">Border Coutries:</span>
          ${templateBorders}`;
  sectionDetailContent.innerHTML = templateDetail;
};

showDetailData = (query) => {
  let url = `https://restcountries.eu/rest/v2/name/${query}`;
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
  };
  fetch(url, options)
    .then(res => {
      res.json()
        .then(countryDetailData => {
          spinner.style.display = "none";
          showDetailContent(countryDetailData);
          // Click on Buttons Borders
          const btnBorder = document.querySelectorAll(".btn-border");
          Array.from(btnBorder)
            .forEach(element => {
              element.addEventListener("click", () => {
                const sectionDetailContent = document.querySelector("#detail-content");
                sectionDetailContent.innerHTML = "";
                borderQuery = element.getAttribute("data-border");
                showDetailDataBorderClick(borderQuery);
              });
            });
          // End Click on Buttons Borders
        });
    })
    .catch(e => console.log("Error:", e));
};
// Click on border country button
showDetailContentBorderClick = (countryDetailDataBorderClick) => {
  const templateLanguages = countryDetailDataBorderClick.languages.map((lang) => {
    return `
        <ul style="list-style: inside square;"> 
        <li>${lang.name}</li>
        </ul>`;
  }).join("");
  const templateCurrencies = countryDetailDataBorderClick.currencies.map((currency) => {
    return `<ul style="list-style: inside square;">
        <li>Code: ${currency.code}</li>
        <li>Name: ${currency.name}</li>
        <li>Symbol: ${currency.symbol}</li>
        </ul>
        `;
  }).join("");

  const templateBorders = countryDetailDataBorderClick.borders.map((border) => {
    return `<span role="button" class="btn btn-border" style="margin-left: 5px;" data-border="${border}">${border}</span>`;
  }).join("");

  const templateDetail = `
          <figure class="flag-country">
          <img src="${countryDetailDataBorderClick.flag}" alt="" />
          </figure>
          <div class="name-country">
            <h2>${countryDetailDataBorderClick.name}</h2>
            <ul>
              <li><span class="bold">Native Name: </span>${countryDetailDataBorderClick.name}</li>
              <li><span class="bold">Population: </span>${countryDetailDataBorderClick.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</li>
              <li><span class="bold">Region: </span>${countryDetailDataBorderClick.region}</li>
              <li><span class="bold">Sub Region: </span>${countryDetailDataBorderClick.subregion}</li>
              <li><span class="bold">Capital: </span>${countryDetailDataBorderClick.capital}</li>
            </ul>
          </div>
      <div class="domain-country">
        <ul>
          <li> <span class="bold">Top Level Domain: </span>${countryDetailDataBorderClick.topLevelDomain}</li>
          <li><span class="bold">Currencies: </span>${templateCurrencies}</li>
          <li><span class="bold">Languages: </span>${templateLanguages}</li>
        </ul>
      </div>
      <div class="border-country">
          <span class="bold">Border Coutries:</span>
          ${templateBorders}`;
  sectionDetailContent.insertAdjacentHTML("beforeend", templateDetail);
};

showDetailDataBorderClick = (query) => {
  let url = `https://restcountries.eu/rest/v2/alpha/${query}`;
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
  };
  fetch(url, options)
    .then(res => {
      res.json()
        .then(countryDetailDataBorderClick => {
          spinner.style.display = "none";
          showDetailContentBorderClick(countryDetailDataBorderClick);
          // Click on Buttons Borders
          const btnBorder = document.querySelectorAll(".btn-border");
          Array.from(btnBorder)
            .forEach(element => {
              element.addEventListener("click", () => {
                const sectionDetailContent = document.querySelector("#detail-content");
                sectionDetailContent.innerHTML = "";
                borderQuery = element.getAttribute("data-border");
                showDetailDataBorderClick(borderQuery);
              });
            });
          // End Click on Buttons Borders
        });

    })
    .catch(e => console.log("Error:", e));
};