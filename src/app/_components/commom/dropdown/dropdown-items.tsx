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
        <div className="flex flex-col w-max box-content">
          {dropdownItems.map((item, index) => (
            <div
              className="p-1"
              key={index}
              onClick={() => onSelectedItem(item)}
            >
              <label>
                <div className="flex items-center justify-between mt-2 cursor-pointer">
                  <h5 className="text-bodyColor">
                    {item.text}
                  </h5>
                </div>
              </label>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
