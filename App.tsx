import * as React from 'react';
import './style.css';
import TemperatureConverter, {
  Fahrenheit,
  Kelvin,
} from './TemperatureConverter';

export default function App() {
  return (
    <TemperatureConverter
      renderFahrenheit={(value) => <Fahrenheit value={value} />}
      renderKelvin={(value) => <Kelvin value={value} />}
    />
  );
}
