"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <p className="text-gray-600">
              A critical error occurred while loading the application.
            </p>
            <Button onClick={() => reset()} className="mt-4">
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
