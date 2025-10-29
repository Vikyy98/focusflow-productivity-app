// Timer.tsx (UI-only, no logic)
import { FaPlay, FaPause, FaCircle } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

type TimerMode = "focus" | "shortBreak" | "longBreak";

interface TimerDurations {
  focus: number;
  shortBreak: number;
  longBreak: number;
}

const Timer = () => {
  // Default durations (in seconds)
  const durations: TimerDurations = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  // States
  const [mode, setMode] = useState<TimerMode>("focus");
  const [timeLeft, setTimeLeft] = useState<number>(durations.focus);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Ref to hold interval ID
  const intervalRef = useRef<number | null>(null);

  // Circle animation values
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / durations[mode];
  const dashOffset = circumference * (1 - progress);

  // ⏱️ Start timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  // ⏸️ Pause timer
  const pauseTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  // 🔄 Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durations[mode]);
  };

  // 🔁 Mode switch (Focus / Short / Long)
  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(durations[newMode]);
  };

  // 🧠 Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Play sound when timer ends (optional)
      new Audio("/ding.mp3").play().catch(() => {});
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft]);

  // Format seconds → MM:SS
  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="p-6 text-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Focus Timer</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE - TIMER DISPLAY */}
        <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-gray-700">
          {/* SVG Circular Progress */}
          <div className="relative flex items-center justify-center w-56 h-56">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full transform -rotate-90"
            >
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                className="text-gray-700"
                fill="transparent"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                className="text-blue-500 transition-all duration-300"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
              />
            </svg>

            {/* Time Display */}
            <div className="absolute text-center">
              <div className="text-5xl font-semibold">
                {formatTime(timeLeft)}
              </div>
              <div className="text-sm text-gray-400 mt-1 capitalize">
                {mode.replace("Break", " Break")}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-4">
            {!isRunning ? (
              <button
                onClick={startTimer}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                <FaPlay size={16} /> Start
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                <FaPause size={16} /> Pause
              </button>
            )}

            <button
              onClick={resetTimer}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm"
            >
              <FaCircle size={16} /> Reset
            </button>
          </div>

          {/* Mode Switch */}
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={() => handleModeChange("focus")}
              className={`px-3 py-1 text-sm rounded-md border ${
                mode === "focus"
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-gray-700 border-gray-600"
              }`}
            >
              Focus
            </button>
            <button
              onClick={() => handleModeChange("shortBreak")}
              className={`px-3 py-1 text-sm rounded-md border ${
                mode === "shortBreak"
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-gray-700 border-gray-600"
              }`}
            >
              Short Break
            </button>
            <button
              onClick={() => handleModeChange("longBreak")}
              className={`px-3 py-1 text-sm rounded-md border ${
                mode === "longBreak"
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-gray-700 border-gray-600"
              }`}
            >
              Long Break
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - SETTINGS */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-3">Timer Settings</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex justify-between items-center">
              <span>Focus Duration</span>
              <span className="text-gray-100">25m</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Short Break</span>
              <span className="text-gray-100">5m</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Long Break</span>
              <span className="text-gray-100">15m</span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-400">Play Sound on Finish</span>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-checked:bg-blue-600 rounded-full border border-gray-600 transition-all" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
