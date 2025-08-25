"use client";

import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function ThemeDemo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Theme Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Current Theme:</p>
            <p className="text-2xl font-bold text-primary">Loading...</p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-primary text-primary-foreground rounded text-center">
              Primary
            </div>
            <div className="p-2 bg-secondary text-secondary-foreground rounded text-center">
              Secondary
            </div>
            <div className="p-2 bg-accent text-accent-foreground rounded text-center">
              Accent
            </div>
            <div className="p-2 bg-muted text-muted-foreground rounded text-center">
              Muted
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Theme Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Current Theme:</p>
          <p className="text-2xl font-bold text-primary">{theme}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-primary text-primary-foreground rounded text-center">
            Primary
          </div>
          <div className="p-2 bg-secondary text-secondary-foreground rounded text-center">
            Secondary
          </div>
          <div className="p-2 bg-accent text-accent-foreground rounded text-center">
            Accent
          </div>
          <div className="p-2 bg-muted text-muted-foreground rounded text-center">
            Muted
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
