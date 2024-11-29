import { countryRules } from './phoneRules';

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateByPattern(country: string): string {
  const rule = countryRules.find(r => r.country === country);
  if (!rule) return '';

  let number = '';
  
  switch (country) {
    case 'China':
      number = '1' + (generateRandomNumber(3, 9)) + Array(9).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'India':
      number = generateRandomNumber(6, 9) + Array(9).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'US':
      number = generateRandomNumber(2, 9) + Array(9).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'Indonesia':
      number = '8' + Array(generateRandomNumber(10, 11)).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'Brazil':
      number = generateRandomNumber(1, 9) + generateRandomNumber(1, 9) + '9' + Array(8).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'Pakistan':
      number = '3' + Array(9).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'Nigeria':
      number = generateRandomNumber(7, 9) + Array(9).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'Bangladesh':
      number = '1' + generateRandomNumber(3, 9) + Array(8).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'Russia':
      number = '9' + Array(9).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    case 'Japan':
      number = generateRandomNumber(7, 9) + '0' + Array(8).fill(0).map(() => generateRandomNumber(0, 9)).join('');
      break;
    default:
      return '';
  }

  return rule.code + number;
}

export function generatePhoneNumbers(country: string, count: number): string[] {
  const numbers = new Set<string>();
  
  while (numbers.size < count) {
    numbers.add(generateByPattern(country));
  }
  
  return Array.from(numbers);
}