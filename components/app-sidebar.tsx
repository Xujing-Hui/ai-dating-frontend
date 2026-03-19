"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

export interface SidebarTab {
  id: string
  icon: string
  label: string
}

interface AppSidebarProps {
  tabs: SidebarTab[]
  activeTab: string
  onTabChange: (id: string) => void
  onLogout: () => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AppSidebar({ tabs, activeTab, onTabChange, onLogout, open, onOpenChange }: AppSidebarProps) {
  return (
    <aside
      className={`flex-shrink-0 flex flex-col border-r border-dashed border-pencil/20 bg-warm-white overflow-hidden transition-all duration-300 ${
        open ? "w-52" : "w-12"
      }`}
    >
      <button
        onClick={() => onOpenChange(!open)}
        className="w-full flex items-center justify-end px-3 py-3 text-pencil/50 hover:text-pencil transition-colors"
      >
        {open ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      <nav className="flex flex-col gap-1 px-2 flex-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-3 px-2 py-2.5 rounded-lg text-left transition-all ${
              activeTab === tab.id
                ? "bg-blush/15 text-pencil font-semibold"
                : "text-pencil/60 hover:bg-pencil/5 hover:text-pencil"
            }`}
          >
            <span className="text-lg flex-shrink-0">{tab.icon}</span>
            {open && <span className="font-sans text-sm whitespace-nowrap">{tab.label}</span>}
          </button>
        ))}
      </nav>

      <div className="px-2 py-4 border-t border-dashed border-pencil/20">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-2 py-2.5 w-full rounded-lg text-pencil/50 hover:text-blush hover:bg-pencil/5 transition-all"
        >
          <span className="text-lg flex-shrink-0">🚪</span>
          {open && <span className="font-sans text-base whitespace-nowrap">Log out</span>}
        </button>
      </div>
    </aside>
  )
}
