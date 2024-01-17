import React, { useState, ChangeEvent } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const option = event.target.value;
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="dropdown">
        <select value={selectedOption || ''} onChange={handleSelect}>
            <option value="" disabled>Select an option</option>
            {options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
            ))}
        </select>
        </div>
    );
};

export default Dropdown;