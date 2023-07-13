export type SemanticColors = {
  readonly primary: string;
};

export type Colors = {
  readonly semantic: SemanticColors;
};

export type ThemeContextState = {
  colors: Colors;
};
