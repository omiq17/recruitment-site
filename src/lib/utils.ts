export const getCardBackgroundColor = (index: number): string => {
  switch (index % 3) {
    case 0:
      return "bg-secondary";
    case 1:
      return "bg-primary";
    default:
      return "bg-warning";
  }
};

export const getCardTextColor = (index: number): string => {
  switch (index % 3) {
    case 0:
      return "text-primary";
    case 1:
      return "text-white";
    default:
      return "text-white";
  }
};
