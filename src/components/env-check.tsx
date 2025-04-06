"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function EnvCheck() {
  const [exposedVars, setExposedVars] = useState<string[]>([]);

  useEffect(() => {
    // Check if any sensitive variables are exposed in window object
    const checkExposedVars = () => {
      const sensitiveVarPrefixes = [
        "STRIPE_SECRET",
        "SUPABASE_SERVICE",
        "WEBHOOK_SECRET",
      ];

      const exposed: string[] = [];

      // Check if any window variables contain sensitive prefixes
      Object.keys(window).forEach((key) => {
        sensitiveVarPrefixes.forEach((prefix) => {
          if (key.includes(prefix)) {
            exposed.push(key);
          }
        });
      });

      setExposedVars(exposed);
    };

    checkExposedVars();
  }, []);

  if (exposedVars.length === 0) return null;

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Security Warning</AlertTitle>
      <AlertDescription>
        Sensitive environment variables may be exposed in the client. Please
        check your configuration.
      </AlertDescription>
    </Alert>
  );
}
