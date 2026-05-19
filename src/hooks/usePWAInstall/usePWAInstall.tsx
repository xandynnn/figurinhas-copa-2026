import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
let listeners: ((value: boolean) => void)[] = [];

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();

  deferredPrompt = e as BeforeInstallPromptEvent;

  listeners.forEach((l) => l(true));
});

export const usePWAInstall = () => {
  const [isInstallable, setIsInstallable] = useState(!!deferredPrompt);

  useEffect(() => {
    const listener = (value: boolean) => setIsInstallable(value);

    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      deferredPrompt = null;
      setIsInstallable(false);
    }
  };

  return {
    install,
    isInstallable,
  };
};
