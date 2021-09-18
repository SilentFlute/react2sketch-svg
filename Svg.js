import React from 'react';
import { Svg } from 'react-sketchapp';

const {
  Circle, ClipPath, Defs, Ellipse, G, Image, Line, LinearGradient,
  Path, Pattern, Polygon, Polyline, RadialGradient, Rect, Stop,
  Symbol, Text, TextPath, TSpan, Use
} = Svg;

const Mask = () => <></>;
const _G = ({ mask, ...props }) => (mask ? <></> : <G {...props} />);

const _Use = ({ xlinkHref: href, ...props }) => <Use href={href} {...props} />;
const _Image = ({ xlinkHref: href, ...props }) => (
  <Image href={href} {...props} />
);

export {
  Mask, Circle, ClipPath, Defs, Ellipse, _G as G, _Image as Image,
  Line, LinearGradient, Path, Pattern, Polygon, Polyline, RadialGradient,
  Rect, Stop, Symbol, Text, TextPath, TSpan, _Use as Use
};

export default Svg;
