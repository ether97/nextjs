"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div className="hover:bg-neutral-400 cursor-pointer px-4 bg-neutral-100 py-2 transition font-semibold">
      {label}
    </div>
  );
};

export default MenuItem;
