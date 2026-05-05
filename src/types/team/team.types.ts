export interface Team {
  name: string;
  code: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string | null;
  };
};