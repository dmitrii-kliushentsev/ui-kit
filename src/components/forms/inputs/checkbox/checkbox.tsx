export const Checkbox = ({ field, ...props }: any) => (
  <input
    type="checkbox"
    tw="
      appearance-none
      min-w-[16px]
      max-w-[16px]
      min-h-[16px]
      max-h-[16px]
      bg-check-mark
      bg-monochrome-white
      bg-no-repeat
      border rounded
      border-current-color
      cursor-pointer
      hover:border-current-color
      checked:bg-current-color
      checked:hover:opacity-[0.8]
      checked:border-transparent
      disabled:opacity-50
    "
    {...field}
    {...props}
  />
);
