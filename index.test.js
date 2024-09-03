const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles exact hours', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles minutes to next hour - 2:55', () => {
    const timeInWords = convertTimeToWords('2:55');
    expect(timeInWords).toBe('five to three');
  });

  it('Handles times after midday - 15:00', () => {
    const timeInWords = convertTimeToWords('15:00');
    expect(timeInWords).toBe("three o'clock");
  });

  it('Handles times around the clock - 23:45', () => {
    const timeInWords = convertTimeToWords('23:45');
    expect(timeInWords).toBe('quarter to midnight');
  });

  it('Handles early morning - 5:20', () => {
    const timeInWords = convertTimeToWords('5:20');
    expect(timeInWords).toBe('twenty past five');
  });
});
