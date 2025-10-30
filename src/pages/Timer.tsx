import { FaPlay, FaPause, FaCircle } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

type TimerMode = "focus" | "shortBreak" | "longBreak";

interface TimerDurations {
  focus: number;
  shortBreak: number;
  longBreak: number;
}

const Timer = () => {
  const durations: TimerDurations = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  const [mode, setMode] = useState<TimerMode>("focus");
  const [timeLeft, setTimeLeft] = useState<number>(durations.focus);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / durations[mode];
  const dashOffset = circumference * (1 - progress);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durations[mode]);
  };

  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(durations[newMode]);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      new Audio("/ding.mp3").play().catch(() => {});
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-8">⏳ Focus Timer</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Timer Display */}
        <div className="rounded-2xl p-8 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all">
          {/* Circular Timer */}
          <div className="relative flex items-center justify-center w-60 h-60">
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
                className="text-slate-300 dark:text-slate-700"
                fill="transparent"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                className="text-blue-600 dark:text-blue-400 transition-all duration-300"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
              />
            </svg>

            <div className="absolute text-center">
              <div className="text-5xl font-bold tracking-tight">
                {formatTime(timeLeft)}
              </div>
              <div className="text-sm mt-1 capitalize text-slate-500 dark:text-slate-400">
                {mode === "focus"
                  ? "Focus Session"
                  : mode === "shortBreak"
                  ? "Short Break"
                  : "Long Break"}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-4">
            {!isRunning ? (
              <button
                onClick={startTimer}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium transition"
              >
                <FaPlay size={14} /> Start
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white dark:bg-yellow-600 dark:hover:bg-yellow-500 px-5 py-2 rounded-md text-sm font-medium transition"
              >
                <FaPause size={14} /> Pause
              </button>
            )}
            <button
              onClick={resetTimer}
              className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-200 px-4 py-2 rounded-md text-sm font-medium transition"
            >
              <FaCircle size={12} /> Reset
            </button>
          </div>

          {/* Mode Switch */}
          <div className="mt-6 flex items-center gap-3">
            {(["focus", "shortBreak", "longBreak"] as TimerMode[]).map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                className={`px-3 py-1 text-sm rounded-md border transition-all duration-200 ${
                  mode === m
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-100 border-slate-300 text-slate-800 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-600"
                }`}
              >
                {m === "focus"
                  ? "Focus"
                  : m === "shortBreak"
                  ? "Short Break"
                  : "Long Break"}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Timer Settings */}
        <div className="rounded-2xl p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all">
          <h3 className="text-xl font-semibold mb-4">⚙️ Timer Settings</h3>
          <div className="space-y-4 text-sm">
            {[
              { label: "Focus Duration", value: "25m" },
              { label: "Short Break", value: "5m" },
              { label: "Long Break", value: "15m" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-slate-700 dark:text-slate-300"
              >
                <span>{item.label}</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {item.value}
                </span>
              </div>
            ))}

            <div className="mt-6 flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">
                Play sound on finish
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 rounded-full peer-checked:bg-blue-600 dark:peer-checked:bg-blue-500 transition-all"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white dark:bg-slate-200 rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
