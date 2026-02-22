// SectionDropdown.tsx

import { sections } from "../config/explore";

const SectionDropdown = () => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sectionId = e.target.value;

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <select
      onChange={handleChange}
      className="p-3 w-full  rounded-lg border border-gray-300"
      defaultValue=""
    >
      <option value="" disabled>
        Menu Categories
      </option>

      {sections.map((section) => (
        <option key={section.id} value={section.id}>
          {section.label}
        </option>
      ))}
    </select>
  );
};

export default SectionDropdown;