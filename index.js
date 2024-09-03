// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hour, minute] = time.split(':').map((str) => +str);
  const hoursToWords = [
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
    'midday',
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
  ];
  const minutesToWords = [
    '',
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

  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  if (minute === 0) {
    return `${hoursToWords[hour]} o'clock`;
  }

  if (minute <= 30) {
    if (minute === 15) {
      return `quarter past ${hoursToWords[hour]}`;
    }
    if (minute === 30) {
      return `half past ${hoursToWords[hour]}`;
    }
    return `${minutesToWords[minute]} past ${hoursToWords[hour]}`;
  }

  const minutesToNextHour = 60 - minute;
  const nextHour = (hour + 1) % 24;

  if (minutesToNextHour === 15) {
    return `quarter to ${hoursToWords[nextHour]}`;
  }

  return `${minutesToWords[minutesToNextHour]} to ${hoursToWords[nextHour]}`;
}

module.exports = { convertTimeToWords };
