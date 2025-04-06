"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ErrorDisplayProps {
  title?: string;
  message?: string;
  retry?: () => void;
  className?: string;
}

export function ErrorDisplay({
  title = "Something went wrong",
  message = "An error occurred while loading the content.",
  retry,
  className = "",
}: ErrorDisplayProps) {
  return (
    <div className={`w-full ${className}`}>
      <Alert variant="destructive" className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>{title}</AlertTitle>
        </div>
        <AlertDescription className="text-sm">{message}</AlertDescription>
        {retry && (
          <Button
            variant="outline"
            size="sm"
            onClick={retry}
            className="mt-2 self-end"
          >
            Try again
          </Button>
        )}
      </Alert>
    </div>
  );
}
