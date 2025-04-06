"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({
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
        // Log the error to console
        console.error("Application error:", error);

        // Send error to API endpoint
        await fetch("/api/error-logger", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            error: error.message,
            stack: error.stack,
            digest: error.digest,
            url: window.location.href,
            timestamp: new Date().toISOString(),
            type: "server_component",
          }),
        });
      } catch (e) {
        console.error("Failed to log error:", e);
      } finally {
        setIsLogging(false);
      }
    };

    logError();
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <div className="text-center space-y-6 max-w-md p-8 rounded-lg border border-border bg-card shadow-sm">
        <div className="flex justify-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-muted-foreground">
          {error.message || "An error occurred while loading the page."}
          {error.digest && (
            <span className="block mt-2 text-xs font-mono bg-muted p-2 rounded">
              Error digest: {error.digest}
            </span>
          )}
        </p>
        <div className="pt-4">
          <Button
            onClick={() => reset()}
            className="mt-4 w-full"
            disabled={isLogging}
          >
            {isLogging ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Try again"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
