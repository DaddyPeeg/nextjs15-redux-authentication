import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-white p-4 text-center">
      <div className="max-w-md space-y-6">
        <Clock className="mx-auto h-16 w-16 text-primary" />
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground">
          We&quot;re working hard to bring you something amazing. This page is
          currently under development.
        </p>
        <div className="pt-6">
          <Button asChild variant="outline">
            <Link href="/lobby" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Lobby
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
