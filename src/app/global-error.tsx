"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isLogging, setIsLogging] = useState(false);

  useEffect(() => {
    const logError = async () => {
      setIsLogging(true);
      try {
        console.error("Global application error:", error);

        // We can't use fetch in global error as it might not be available
        // Just log to console in this case
      } catch (e) {
        console.error("Failed to log global error:", e);
      } finally {
        setIsLogging(false);
      }
    };

    logError();
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="text-center space-y-6 max-w-md p-8 rounded-lg border border-destructive/20 bg-card shadow-lg">
            <div className="flex justify-center">
              <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold">Critical Error</h2>
            <p className="text-muted-foreground">
              {error.message ||
                "A critical error occurred while loading the application."}
            </p>
            <div className="pt-4">
              <Button
                onClick={() => reset()}
                className="mt-4 w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                disabled={isLogging}
              >
                {isLogging ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Reload Application"
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              If this error persists, please contact support.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
