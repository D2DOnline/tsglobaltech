"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DropdownItems } from "./dropdown-items";
import { dropdownItem } from "./interface";

const useClickOutside = (
    ref: React.RefObject<HTMLDivElement>,
    handler: () => void
  ) => {
    const handleClickOutside = useCallback(
      (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler();
        }
      },
      [ref, handler]
    );
  
    useEffect(() => {
      const handleDocumentClick = (event: MouseEvent) => {
        handleClickOutside(event);
      };
  
      document.addEventListener("mousedown", handleDocumentClick);
  
      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    }, [handleClickOutside]);
  };

  type props = {
    label:{text:string, icon:JSX.Element};
    dropdownItems: dropdownItem[];
    onSelectedItem: (item: dropdownItem) => void;
  }; 

export const Dropdown = ({ label, dropdownItems, onSelectedItem }: props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
  
    useClickOutside(dropdownRef, closeDropdown);

    const handleSelection = (item:dropdownItem)=>{
      setIsDropdownOpen(false);
      onSelectedItem(item);
    }

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <span
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="cursor-pointer"
        >
          <div className="hidden md:flex">{label.text}</div>
          <div className="flex md:hidden">{label.icon}</div>
        </span>
        {isDropdownOpen && <DropdownItems dropdownItems={dropdownItems} onSelectedItem={handleSelection} />}
      </div>
    </>
  );
};
