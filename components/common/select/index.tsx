"use client";
import { useState, useRef, useEffect } from "react";
import Icon from "@/components/common/icon";

interface SelectProps {
  options: string[];
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const Select = ({ options, value, label, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-64 text-left" ref={selectRef}>
      <span className="text-xs font-semibold uppercase mb-2 block">
        {label}
      </span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="cursor-pointer inline-flex justify-between w-full capitalize rounded-md shadow-sm px-5 py-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {value || "Padrão"}
        <Icon
          name="arrowDown"
          className="h-5 w-5 text-gray-400"
          fill="var(--color-gray-400)"
          viewBox="0 0 20 20"
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white focus:outline-none">
          <div className="px-2 py-3">
            <button
              onClick={() => handleOptionClick("")}
              className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-emerald-500 hover:text-white transition"
            >
              All
            </button>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 rounded-md capitalize hover:bg-emerald-500 hover:text-white transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
