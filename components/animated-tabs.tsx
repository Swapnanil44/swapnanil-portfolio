"use client";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Tab = {
  id: number;
  icon: ReactNode;
  label: string;
  content: ReactNode;
};

type AnimatedTabsProps = {
  tabs: Tab[];
};

export function AnimatedTabs({ tabs }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Find the active tab content
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "opacity-100" : "opacity-65"
            } relative h-full flex items-center gap-1 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="underline"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-foreground/80 rounded-full"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <>{tab.icon}</>
            <span className="text-xs md:text-base">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center w-full">
        {/* --- REFACTOR START --- */}
        <AnimatePresence mode="wait">
          {/*
            By using the activeTab ID as the key,
            AnimatePresence will correctly handle
            the exit of the old tab and entrance
            of the new one.
          */}
          <motion.div
            key={activeTab} // Use the active tab ID as the key
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.2 }}
          >
            {activeTabContent}
          </motion.div>
        </AnimatePresence>
        {/* --- REFACTOR END --- */}
      </div>
    </div>
  );
}