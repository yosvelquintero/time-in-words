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

  if (hours === 0 && minutes === 0) return 'midnight';
  if (hours === 12 && minutes === 0) return 'midday';

  const hourWord = hours > 12 ? numbersToWords[hours - 12] : numbersToWords[hours];
  const nextHourWord = hours + 1 > 12 ? numbersToWords[hours + 1 - 12] : numbersToWords[hours + 1];

  if (minutes === 0) return `${hourWord} o'clock`;

  if (minutes <= 30) {
    if (minutes === 15) return `quarter past ${hourWord}`;
    if (minutes === 30) return `half past ${hourWord}`;
    return `${minuteWords[minutes]} past ${hourWord}`;
  }
  const remainingMinutes = 60 - minutes;
  if (remainingMinutes === 15) return `quarter to ${nextHourWord}`;
  return `${minuteWords[remainingMinutes]} to ${nextHourWord}`;
}

module.exports = { convertTimeToWords };
