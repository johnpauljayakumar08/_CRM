// import React, { useState } from 'react';

// const countries = ['Country 1', 'Country 2', 'Country 3', 'Country 4', 'Country 5', 'Country 6', 'Country 7', 'Country 8', 'Country 9', 'Country 10'];

// const CountrySelectionForm = () => {
//   const [firstInterest, setFirstInterest] = useState('');
//   const [secondInterest, setSecondInterest] = useState('');
//   const [thirdInterestOptions, setThirdInterestOptions] = useState(countries);

//   const handleFirstInterestChange = (event) => {
//     const selectedCountry = event.target.value;
//     setFirstInterest(selectedCountry);

//     // Filter out the selected country from the options for the second and third interests
//     const updatedOptions = countries.filter(country => country !== selectedCountry);
//     setSecondInterest('');
//     setThirdInterestOptions(updatedOptions);
//   };

//   const handleSecondInterestChange = (event) => {
//     const selectedCountry = event.target.value;
//     setSecondInterest(selectedCountry);

//     // Filter out the selected country from the options for the third interest
//     const updatedOptions = thirdInterestOptions.filter(country => country !== selectedCountry);
//     setThirdInterestOptions(updatedOptions);
//   };

//   return (
//     <form>
//       <label htmlFor="firstInterest">First Interest:</label>
//       <select id="firstInterest" value={firstInterest} onChange={handleFirstInterestChange}>
//         <option value="">Select Country</option>
//         {countries.map(country => (
//           <option key={country} value={country}>{country}</option>
//         ))}
//       </select>

//       <label htmlFor="secondInterest">Second Interest:</label>
//       <select id="secondInterest" value={secondInterest} onChange={handleSecondInterestChange}>
//         <option value="">Select Country</option>
//         {thirdInterestOptions.map(country => (
//           <option key={country} value={country}>{country}</option>
//         ))}
//       </select>

//       <label htmlFor="thirdInterest">Third Interest:</label>
//       <select id="thirdInterest">
//         <option value="">Select Country</option>
//         {thirdInterestOptions.map(country => (
//           <option key={country} value={country}>{country}</option>
//         ))}
//       </select>
//     </form>
//   );
// };

// export default CountrySelectionForm;

import React, { useState } from 'react';

const CountrySelector = () => {
  const [selectedCountry1, setSelectedCountry1] = useState('');
  const [selectedCountry2, setSelectedCountry2] = useState('');
  const [selectedCountry3, setSelectedCountry3] = useState('');

  const handleCountry1Change = (e) => {
    setSelectedCountry1(e.target.value);
    setSelectedCountry2('');
    setSelectedCountry3('');
  };

  const handleCountry2Change = (e) => {
    setSelectedCountry2(e.target.value);
    setSelectedCountry3('');
  };

  const handleCountry3Change = (e) => {
    setSelectedCountry3(e.target.value);
  };

  const countries = [
    { id: 1, name: 'Country A' },
    { id: 2, name: 'Country B' },
    { id: 3, name: 'Country C' },
    // Add more countries as needed
  ];

  return (
    <>
    
    <div>
      <label htmlFor="country1">Select interested country 1:</label>
      <select id="country1" value={selectedCountry1} onChange={handleCountry1Change}>
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country.id} value={country.name}>{country.name}</option>
        ))}
      </select>

      <label htmlFor="country2">Select interested country 2:</label>
      <select id="country2" value={selectedCountry2} onChange={handleCountry2Change}>
        <option value="">Select a country</option>
        {countries.filter(country => country.name !== selectedCountry1 && country.name !== selectedCountry3)
          .map(country => (
            <option key={country.id} value={country.name}>{country.name}</option>
          ))}
      </select>

      <label htmlFor="country3">Select interested country 3:</label>
      <select id="country3" value={selectedCountry3} onChange={handleCountry3Change}>
        <option value="">Select a country</option>
        {countries.filter(country => country.name !== selectedCountry1 && country.name !== selectedCountry2)
          .map(country => (
            <option key={country.id} value={country.name}>{country.name}</option>
          ))}
      </select>
    </div>
    
    </>
  );
};

export default CountrySelector;
// {first_name,last_name,emailalternative_emailid,phone_number,alternative_number,company_name,country_region,city,industry,mobile_phone_number,job_title,person_linkedin_profile,associated_company}

