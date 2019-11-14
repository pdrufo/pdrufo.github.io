'use strict';

const STORE = {   
  quiz: [
    {
      question: 'The hottest temperature ever recorded in the U.S. was 134° F. This occured in which state?',
      choices: ['Texas', 'Arizona', 'Utah', 'California'],
      correct: 'California' 
    },
    {
      question: 'Which state is home to all five of the most lightning prone U.S. cities?',
      choices: ['Florida', 'Alabama', 'Mississippi', 'Louisiana'],
      correct: 'Florida'
    },
    {
      question: 'This U.S. city is the sunniest on Earth, receiving on average more than 4,000 hours of sunny weather every year:',
      choices: ['El Paso, TX', 'Phoenix, AZ', 'Yuma, AZ', 'Las Vegas, NV'],
      correct: 'Phoenix, AZ'
    },
    {
      question: 'In 2011, this state broke a record for the most tornadoes in a single day - a total of 72!',
      choices: ['Tennessee', 'Alabama', 'Texas', 'Oklahoma'],
      correct: 'Tennessee'
    },
    {
      question: 'Which state received the most rain in a 24 hour period? (an extreme 42 inches!)',
      choices: ['Louisiana', 'Texas', 'Washington', 'California'],
      correct: 'Texas'
    },
    {
      question: 'This U.S. city is the sunniest on Earth, receiving on average more than 4,000 hours of sunny weather every year:',
      choices: ['El Paso, TX', 'Phoenix, AZ', 'Yuma, AZ', 'Las Vegas, NV'],
      correct: 'Phoenix, AZ'
    },
    {
      question: 'Of the 100 most populous U.S. cities, which is the coldest? (Based on which cities are persistently the coldest during the winter, rather than their record coldest temperature)',
      choices: ['Omaha, NE', 'Minneapolis-St. Paul, MN', 'Anchorage, AK', 'Madison, WI'],
      correct: 'Minneapolis-St. Paul, MN'
    },
    {
      question: 'What is the cloudiest major U.S. city, with an average of 226 cloudy days per year? (Cities with a population of 1 million+)',
      choices: ['Pittsburgh, PA', 'Portland, OR', 'Seattle, WA', 'Cleveland, OH'],
      correct: 'Seattle, WA'
    },
    // {
    //   question: 'This state experienced a world record rainstorm: 1 foot of rain fell in just 42 minutes',
    //   choices: ['Florida', 'Missouri', 'Hawaii', 'Oregon'],
    //   correct: 'Missouri'
    // },
    {
      question: 'Of U.S. cities with a population of at least 100,000, this city is the most persistently windy:',
      choices: ['Amarillo, TX', 'Fargo, ND', 'Boston, MA', 'Chicago, IL'],
      correct: 'Amarillo, TX'
    },
    {
      question: 'In the lower 48, this state holds the record for the most snowfall in a 24-hour period:',
      choices: ['Wyoming', 'Oregon', 'Colorado', 'Maine'],
      correct: 'Colorado'
    },
  ],
  currentQuestion: 0,
  score: 0
};