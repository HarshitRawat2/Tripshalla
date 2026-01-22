import { NavLink } from "react-router-dom";

const tabs = [
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Copyright Policies", path: "/copyright" },
];

export default function LegalTabs() {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex gap-8 text-sm font-medium h-14 items-center">
          {tabs.map((tab) => (
            <NavLink key={tab.path} to={tab.path}>
              {({ isActive }) => (
                <div
                  className={`relative pb-1 transition-colors ${
                    isActive
                      ? "text-orange-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.name}

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-[9px] h-[2px] w-full transition-all ${
                      isActive ? "bg-orange-500" : "bg-transparent"
                    }`}
                  />
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
