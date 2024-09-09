// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hours, minutes] = time.split(':').map(Number);

  const numbersToWords = [
    'midnight',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
  ];

  const minuteWords = [
    "o'clock",
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
    'half',
  ];

  // Handle special cases for midnight and midday
  if (hours === 0 && minutes === 0) {
    return 'midnight';
  }
  if (hours === 12 && minutes === 0) {
    return 'midday';
  }

  // Convert hours to 12-hour format
  const currentHour = hours % 12 || 12;
  const nextHour = (currentHour % 12) + 1;

  // Determine words for current and next hour
  const currentHourWord = numbersToWords[currentHour];
  const nextHourWord = hours === 23 ? 'midnight' : numbersToWords[nextHour];

  // Handle full hour cases
  if (minutes === 0) {
    return `${currentHourWord} o'clock`;
  }

  // Handle minutes past the hour
  if (minutes <= 30) {
    if (minutes === 15) {
      return `quarter past ${currentHourWord}`;
    }
    if (minutes === 30) {
      return `half past ${currentHourWord}`;
    }

    return `${minuteWords[minutes]} past ${currentHourWord}`;
  }

  // Handle minutes to the next hour
  const remainingMinutes = 60 - minutes;
  if (remainingMinutes === 15) {
    return `quarter to ${nextHourWord}`;
  }

  return `${minuteWords[remainingMinutes]} to ${nextHourWord}`;
}

module.exports = { convertTimeToWords };
