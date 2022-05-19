import { Conversions } from './Conversions';

describe('Conversions', () => {
  it('metersToKilometers should convert from meters to kilometers when called with a valid value', () => {
    let method = Conversions.metersToKilometers
    expect(method(1000)).toEqual(1);
  });

  it('metersToKilometers should return zero when called without a value', () => {
    let method = Conversions.metersToKilometers
    expect(method(0)).toEqual(0);
  });

  it('metersToKilometers should return zero when called with a negative value', () => {
    let method = Conversions.metersToKilometers
    expect(method(-1)).toEqual(0);
  });

  it('secondsToHours should convert from seconds to hours when called with a valid value', () => {
    let method = Conversions.secondsToHours
    expect(method(3600)).toEqual(1);
  });

  it('secondsToHours should return zero when called without a value', () => {
    let method = Conversions.secondsToHours
    expect(method(0)).toEqual(0);
  });

  it('secondsToHours should return zero when called with a negative value', () => {
    let method = Conversions.secondsToHours
    expect(method(-1)).toEqual(0);
  });

  it('avgSpeed should return the average speed when called with valids values', () => {
    let method = Conversions.avgSpeed
    expect(method(100, 10)).toEqual("10.00");
  }); 

  it('avgSpeed should return zero when called with a negative value', () => {
    let method = Conversions.avgSpeed
    expect(method(-1, 1)).toEqual(0);
    expect(method(1, -1)).toEqual(0);
    expect(method(-1, -1)).toEqual(0);
  });

  it('avgSpeed should return zero when called without value', () => {
    let method = Conversions.avgSpeed
    expect(method(0, 0)).toEqual(0);
    expect(method(0, 1)).toEqual(0);
    expect(method(1, 0)).toEqual(0);
  });
  
  it('runningAvgPace should return the average pace when called with valid values', () => {
    let method = Conversions.runningAvgPace
    expect(method(1, 10)).toEqual("6.00");
  });

  it('runningAvgPace should return zero when called without value', () => {
    let method = Conversions.runningAvgPace
    expect(method(0, 0)).toEqual(0);
    expect(method(0, 1)).toEqual(0);
    expect(method(1, 0)).toEqual(0);
  });

  it('runningAvgPace should return zero when called with a negative value', () => {
    let method = Conversions.runningAvgPace
    expect(method(-1, 1)).toEqual(0);
    expect(method(1, -1)).toEqual(0);
    expect(method(-1, -1)).toEqual(0);
  });
});
