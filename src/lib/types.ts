type SubItem = {
  name: string;
  link: string;
};

type MenuItem = {
  name: string;
  link: string;
  subItems?: SubItem[];
};
