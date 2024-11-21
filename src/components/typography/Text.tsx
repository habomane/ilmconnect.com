import { ReactNode } from "react";

class TextModel {
  size: number;
  color: string;
  weight: number;
  constructor(size: number, weight: number, color: string) {
    this.size = size;
    this.weight = weight;
    this.color = color;
  }
}

// Text Colors
// Main black: #121212
// Grey : #808080
// Purple: #5A46F5
// White: #ffffff

export const TextType = {
  headerOneBlack: new TextModel(42, 700, "#121212"),
  headerTwoBlack: new TextModel(32, 600, "#121212"),
  headerThreeBlack: new TextModel(24, 500, "#121212"),
  bodyBlack: new TextModel(16, 400, "#121212"),
  smallBodyBlack: new TextModel(14, 400, "#121212"),
  headerOneGrey: new TextModel(42, 700, "#808080"),
  headerTwoGrey: new TextModel(32, 600, "#808080"),
  headerThreeGrey: new TextModel(24, 500, "#808080"),
  bodyGrey: new TextModel(16, 400, "#808080"),
  smallBodyGrey: new TextModel(14, 400, "#808080"),
  headerOnePurple: new TextModel(42, 700, "#5A46F5"),
  headerTwoPurple: new TextModel(32, 600, "#5A46F5"),
  headerThreePurple: new TextModel(24, 500, "#5A46F5"),
  bodyPurple: new TextModel(16, 400, "#5A46F5"),
  smallBodyPurple: new TextModel(14, 400, "#5A46F5"),
  headerOneWhite: new TextModel(42, 700, "#ffffff"),
  headerTwoWhite: new TextModel(32, 600, "#ffffff"),
  headerThreeWhite: new TextModel(24, 500, "#ffffff"),
  bodyWhite: new TextModel(16, 400, "#ffffff"),
  smallBodyWhite: new TextModel(14, 400, "#ffffff"),
};

type TextProps = {
  children: ReactNode;
  type: TextModel;
};

export const Text: React.FC<TextProps> = ({ children, type }) => {
  const inlineStyles = {
    fontSize: type.size,
    fontWeight: type.weight,
    color: type.color,
  };
  if (type.size === 42) {
    return (
      <h1 className="headerOne" style={inlineStyles}>
        {children}
      </h1>
    );
  } else if (type.size === 32) {
    return (
      <h2 className="headerTwo" style={inlineStyles}>
        {children}
      </h2>
    );
  } else if (type.size === 24) {
    return (
      <h3 className="headerThree" style={inlineStyles}>
        {children}
      </h3>
    );
  } else if (type.size === 16) {
    return (
      <p className="body" style={inlineStyles}>
        {children}
      </p>
    );
  } else {
    return (
      <p className="bodySmall" style={inlineStyles}>
        {children}
      </p>
    );
  }
};
