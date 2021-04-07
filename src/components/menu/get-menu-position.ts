export type TooltipPosition = 'top' | 'bottom';

interface Anchors {
  iconTopPosition: number;
  iconLeftPosition: number;
  iconWidth: number;
  iconHeight: number;
  menuHeight: number;
  menuWidth: number;
  offset: number;
}

export const getMenuPosition = (tooltipPositionType: TooltipPosition, anchors: Anchors) => {
  const isInvalidAnchors = Object.values(anchors).some(anchor => Number.isNaN(anchor) || anchor === Infinity);
  const {
    iconHeight, iconLeftPosition, iconTopPosition, iconWidth, menuHeight, menuWidth, offset,
  } = anchors;

  const triangleHeight = 10;
  const halfTriangleAndSpaceBeforeEndOfBlock = 22;

  switch (isInvalidAnchors ? 'default' : tooltipPositionType) {
    case 'top':
      return {
        top: `${iconTopPosition - menuHeight - triangleHeight}px`,
        left: `${iconLeftPosition - menuWidth + iconWidth / 2 + halfTriangleAndSpaceBeforeEndOfBlock}px`,
      };
    case 'bottom':
      return {
        top: `${iconTopPosition + iconHeight + triangleHeight}px`,
        left: `${iconLeftPosition - menuWidth + iconWidth / 2 + halfTriangleAndSpaceBeforeEndOfBlock}px`,
      };
    default:
      return {
        top: `${0}px`,
        left: `${0}px`,
      };
  }
};
