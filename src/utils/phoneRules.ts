interface CountryRule {
  country: string;
  code: string;
  pattern: string;
  description: string;
}

export const countryRules: CountryRule[] = [
  {
    country: "China",
    code: "+86",
    pattern: "1[3-9]\\d{9}",
    description: "Starts with +86, followed by 1(3-9) and 9 digits"
  },
  {
    country: "India",
    code: "+91",
    pattern: "[6-9]\\d{9}",
    description: "Starts with +91, followed by 6-9 and 9 digits"
  },
  {
    country: "US",
    code: "+1",
    pattern: "[2-9]\\d{9}",
    description: "Starts with +1, followed by 2-9 and 9 digits"
  },
  {
    country: "Indonesia",
    code: "+62",
    pattern: "8\\d{10,11}",
    description: "Starts with +62, followed by 8 and 10-11 digits"
  },
  {
    country: "Brazil",
    code: "+55",
    pattern: "[1-9]{2}9\\d{8}",
    description: "Starts with +55, followed by area code (2 digits), 9, and 8 digits"
  },
  {
    country: "Pakistan",
    code: "+92",
    pattern: "3\\d{9}",
    description: "Starts with +92, followed by 3 and 9 digits"
  },
  {
    country: "Nigeria",
    code: "+234",
    pattern: "[789]\\d{9}",
    description: "Starts with +234, followed by 7-9 and 9 digits"
  },
  {
    country: "Bangladesh",
    code: "+880",
    pattern: "1[3-9]\\d{8}",
    description: "Starts with +880, followed by 1(3-9) and 8 digits"
  },
  {
    country: "Russia",
    code: "+7",
    pattern: "9\\d{9}",
    description: "Starts with +7, followed by 9 and 9 digits"
  },
  {
    country: "Japan",
    code: "+81",
    pattern: "[7-9]0\\d{8}",
    description: "Starts with +81, followed by 70/80/90 and 8 digits"
  }
];