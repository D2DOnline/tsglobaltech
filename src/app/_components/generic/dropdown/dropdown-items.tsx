import { dropdownItem } from "./interface";


type props = {
  dropdownItems: dropdownItem[];
  onSelectedItem: (item: dropdownItem) => void;
};

export const DropdownItems = ({ dropdownItems, onSelectedItem }: props) => {
  return (
    <>
      <section className="bg-bodyColor absolute right-0 min-w-32 z-10 shadow-inner p-1">
        <div className="flex flex-col w-max box-content">
          {dropdownItems.map((item, index) => (
            <div
              className="p-1"
              key={index}
              onClick={() => onSelectedItem(item)}
            >
              <label>
                <div className="flex items-center justify-between mt-2 cursor-pointer">
                  <h5 className="text-sm text-fontRegularColor">
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
