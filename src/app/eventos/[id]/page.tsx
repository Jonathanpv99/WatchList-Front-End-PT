import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import axios from "axios";

interface Event {
  id: string;
  message: string;
  summary?: string;
  severity: string;
  suggestion?: string;
  watchlistName: string;
}

async function getEventById(id: string): Promise<Event> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`,
      {
        headers: { "Cache-Control": "no-store" },
      }
    );
    return response.data.event;
  } catch (error) {
    console.error("Error fetching event:", error);
    throw new Error("Failed to fetch event");
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEventById(params.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/eventos">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Events
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Message
              </h3>
              <p className="text-lg">{event.message}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Summary
              </h3>
              <p className="text-lg">{event.summary}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Severity
              </h3>
              <p className="text-lg">{event.severity}</p>
            </div>

            {event.suggestion && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Suggestion
                </h3>
                <p className="text-lg">{event.suggestion}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Watchlist
              </h3>
              <p className="text-lg">{event.watchlistName}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
