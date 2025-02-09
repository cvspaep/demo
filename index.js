import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Settings, Gamepad2, Sun, Moon } from "lucide-react";

const games = [
  { name: "Zelda", icon: "/icons/zelda.png" },
  { name: "Mario Kart", icon: "/icons/mariokart.png" },
  { name: "Smash Bros", icon: "/icons/smashbros.png" },
  { name: "Animal Crossing", icon: "/icons/animalcrossing.png" },
];

export default function SwitchUI() {
  const [selected, setSelected] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`w-screen h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"} flex flex-col items-center justify-center`}>
      <div className="flex gap-4 overflow-hidden">
        {games.map((game, index) => (
          <motion.div
            key={index}
            className={`w-32 h-32 p-2 rounded-lg ${selected === index ? "bg-red-500" : "bg-gray-800"}`}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelected(index)}
          >
            <img src={game.icon} alt={game.name} className="w-full h-full object-cover rounded" />
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <Button><Home /></Button>
        <Button><Gamepad2 /></Button>
        <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun /> : <Moon />}</Button>
        <Button><Settings /></Button>
      </div>
    </div>
  );
}
