import React, { useState, useRef } from 'react';
import {
  Autocomplete,
  useLoadScript,
} from '@react-google-maps/api';

const libraries = ['places']; // Load the 'places' library for Autocomplete

function LocationInput() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API key
    libraries,
  });

  const [location, setLocation] = useState('');
  const autocompleteRef = useRef(null);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.formatted_address) {
      setLocation(place.formatted_address);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <label htmlFor="location">Enter Location:</label>
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ width: '300px', padding: '8px', fontSize: '16px' }}
        />
      </Autocomplete>

      <p>Selected Location: {location || "No location selected"}</p>
    </div>
  );
}

export default LocationInput;
