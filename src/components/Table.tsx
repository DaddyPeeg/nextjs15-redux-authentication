import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Church,
  HandIcon as PrayingHands,
  Minus,
} from "lucide-react";

const scheduleData = [
  {
    day: "Sunday",
    event: "Sunday Service",
    startTime: "9:00 AM",
    endTime: "11:00 AM",
    icon: Church,
  },
  { day: "Monday", event: "NA", startTime: "-", endTime: "-", icon: Minus },
  { day: "Tuesday", event: "NA", startTime: "-", endTime: "-", icon: Minus },
  {
    day: "Wednesday",
    event: "Midweek Service",
    startTime: "5:00 PM",
    endTime: "7:00 PM",
    icon: Calendar,
  },
  { day: "Thursday", event: "NA", startTime: "-", endTime: "-", icon: Minus },
  { day: "Friday", event: "NA", startTime: "-", endTime: "-", icon: Minus },
  {
    day: "Saturday",
    event: "Prayer Service",
    startTime: "9:00 AM",
    endTime: "12:00 PM",
    icon: PrayingHands,
  },
];

export function WeekScheduleComp() {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary">Weekly Schedule</h1>
        <h3 className="text-base">
          {"Stay Connected: Join Us for Worship and Fellowship every Week"}
        </h3>
        <div className="w-full mt-6 mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <WeeklySchedule />
        </div>
      </div>
    </div>
  );
}

function WeeklySchedule() {
  return (
    <Table className="border border-border rounded-lg overflow-hidden shadow-lg ">
      <TableHeader>
        <TableRow className="bg-primary/10">
          <TableHead className="w-[100px]">Day</TableHead>
          <TableHead>Event</TableHead>
          <TableHead>Start Time</TableHead>
          <TableHead>End Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scheduleData.map((item) => {
          const Icon = item.icon;
          return (
            <TableRow
              key={item.day}
              className={cn(
                item.event !== "NA" && "bg-primary/5 hover:bg-primary/10",
                "transition-colors"
              )}
            >
              <TableCell className="font-medium">{item.day}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-primary" />
                {item.event}
              </TableCell>
              <TableCell>{item.startTime}</TableCell>
              <TableCell>{item.endTime}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
