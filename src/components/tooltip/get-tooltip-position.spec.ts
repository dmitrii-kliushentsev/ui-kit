import { Anchors, getTooltipPosition } from './get-tooltip-position';

const anchors: Anchors = {
  messageWidth: 200,
  messageHeight: 100,
  childrenWidth: 200,
  offset: 12,
  childrenHeight: 100,
  childrenLeftPosition: 300,
  childrenTopPosition: 300,
};
describe('get-tooltip-position', () => {
  it('should return zero coordinates if some of anchors are NaN', () => {
    const { top, left } = getTooltipPosition('right', { ...anchors, offset: NaN });
    expect(top).toBe('0px');
    expect(left).toBe('0px');
  });

  it('should return zero coordinates if some of anchors are Infinity', () => {
    const { top, left } = getTooltipPosition('right', { ...anchors, offset: Infinity });
    expect(top).toBe('0px');
    expect(left).toBe('0px');
  });

  it('should return zero coordinates if some of anchors are not a number type', () => {
    // @ts-ignore
    const { top, left } = getTooltipPosition('right', { ...anchors, offset: '' });
    expect(top).toBe('0px');
    expect(left).toBe('0px');
  });

  it('should return zero coordinates if tooltipPositionType is not match', () => {
    const { top, left } = getTooltipPosition('test', anchors);
    expect(top).toBe('0px');
    expect(left).toBe('0px');
  });
});
