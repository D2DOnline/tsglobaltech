import { dropdownItem } from "./interface";
import "./dropdown.css";

type props = {
  dropdownItems: dropdownItem[];
  onSelectedItem: (item: dropdownItem) => void;
};

export const DropdownItems = ({ dropdownItems, onSelectedItem }: props) => {
  return (
    <>
      <section className="dropdown-box">
        <div className="flex flex-col w-full box-content">
          {dropdownItems.map((item, index) => (
            <div
              className="p-1 text-bodyColor hover:bg-textHoverColor hover:text-whiteColor flex items-center justify-between mt-2 cursor-pointer"
              key={index}
              onClick={() => onSelectedItem(item)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
