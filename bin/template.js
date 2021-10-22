const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
  };
  const fillAttrs = {
    fill: 'color',
    otherProps: '...otherProps',
  };
  const strokeAttrs = {
    fill: 'none',
    stroke: 'color',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    otherProps: '...otherProps',
  };
  return { ...baseAttrs, ...(style === 'fill' ? fillAttrs : strokeAttrs) };
};

const getElementCode = (ComponentName, attrs, svgCode) => `
  interface Props {
    color?: string;
    size?: number;
  }

  const ${ComponentName} = (props: Props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg ${attrs}>
        ${svgCode}
      </svg>
    )
  };

  export default ${ComponentName}
`;

module.exports = { getAttrs, getElementCode };
