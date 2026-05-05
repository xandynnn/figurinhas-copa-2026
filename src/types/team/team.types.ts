export interface Team {
  id: number;
  name: string;
  code: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string | null;
  };
}
