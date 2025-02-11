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
    <div className="relative flex flex-col items-start h-full overflow-hidden">
      {/* <div className="absolute h-full w-24 pointer-events-none bg-gradient-to-l from-neutral-100 to-transparent right-0 z-10" /> */}
      <div className="p-2 lg:p-6 pb-0 z-20">
        <h1 className="text-xl lg:text-4xl font-bold text-primary">
          Weekly Schedule
        </h1>
        <h3 className="text-xs lg:text-base">
          {"Stay Connected: Join Us for Worship and Fellowship every Week"}
        </h3>
      </div>
      <div className="w-full mt-2 lg:mt-6 mx-auto bg-transparent p-0 lg:p-6 pt-0">
        <WeeklySchedule />
      </div>
    </div>
  );
}

function WeeklySchedule() {
  return (
    <div className="p-2 lg:p-8 rounded-lg bg-gradient-to-br from-blue-100 via-violet-500/50 to-red-500/30">
      <div className="rounded-lg overflow-hidden border bg-neutral-50 border-neutral-300 shadow-sm">
        <Table>
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
      </div>
    </div>
  );
}
