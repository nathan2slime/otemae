export type MaeSearchProps = {
  active: boolean;
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  className?: string;
};
