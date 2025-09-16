import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";
import axios from "axios";

interface Event {
  id: string;
  message: string;
  summary?: string;
  severity: string;
  suggestion?: string;
  watchlistName: string;
}

async function fetchEvents() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/events",
      {
        headers: { "Cache-Control": "no-store" },
      }
    );
    console.log("response data:", response.data);
    return response.data.events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error("Failed to fetch events");
  }
}

export default async function EventsPage() {
  const events = await fetchEvents();

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Recent Security Events
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {events.length === 0 ? (
              <div className="text-center py-12">
                <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  No events found
                </h3>
                <p className="text-muted-foreground">
                  Your security monitoring is active, but no events have been
                  detected.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">
                        Message
                      </th>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">
                        Summary
                      </th>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">
                        Severity
                      </th>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">
                        Suggestion
                      </th>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.length > 0 &&
                      events.map((event: Event, index: number) => (
                        <tr
                          key={event.id}
                          className={`border-b hover:bg-muted/30 transition-colors ${
                            index % 2 === 0 ? "bg-background" : "bg-muted/10"
                          }`}
                        >
                          <td className="p-4 max-w-xs">
                            <p className="text-sm leading-relaxed">
                              {truncateText(event.message, 80)}
                            </p>
                          </td>
                          <td className="p-4 max-w-xs">
                            <p className="text-sm text-muted-foreground">
                              {event.summary
                                ? truncateText(event.summary, 60)
                                : "-"}
                            </p>
                          </td>
                          <td className="p-4">{event.severity}</td>
                          <td className="p-4 max-w-xs">
                            <p className="text-sm text-muted-foreground">
                              {event.suggestion
                                ? truncateText(event.suggestion, 50)
                                : "-"}
                            </p>
                          </td>
                          <td className="p-4">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs bg-transparent"
                            >
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
