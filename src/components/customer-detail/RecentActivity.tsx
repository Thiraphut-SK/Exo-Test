import { Card, CardHeader, CardBody } from "@heroui/react";
import { ReactNode } from "react";

import {
  BillIcon,
  EmailIcon,
  PeopleIcon,
  ReportIcon,
  SubscribeIcon,
} from "../icons";
import formatDate from "../formatDate";

interface Activity {
  action: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case "generated report":
        return (
          <div className="text-brand-primary bg-brand-primary/50 p-2 rounded-4xl">
            <ReportIcon />
          </div>
        );
      case "received email":
        return (
          <div className="text-brand-secondary bg-brand-secondary/50 p-2 rounded-4xl">
            <EmailIcon />
          </div>
        );
      case "subscribed promotion":
        return (
          <div className="text-brand-warning bg-brand-warning/50 p-2 rounded-4xl">
            <SubscribeIcon />
          </div>
        );
      case "updated profile":
        return (
          <div className="text-brand-secondary bg-brand-secondary/50 p-2 rounded-4xl">
            <PeopleIcon />
          </div>
        );
      case "updated billing":
        return (
          <div className="text-brand-primary bg-brand-primary/50 p-2 rounded-4xl">
            <BillIcon />
          </div>
        );
      default:
        return undefined as ReactNode;
    }
  };

  return (
    <Card shadow="sm">
      <CardHeader>
        <h3 className="text-sm font-semibold">Recent Activity</h3>
      </CardHeader>
      <CardBody>
        <ul className="space-y-3">
          {activities.map((a, i) => (
            <li
              key={i}
              className="flex items-center gap-3 p-2 bg-gray-50 rounded"
            >
              {getIcon(a.action)}
              <div>
                <p className="text-sm font-medium">{a.action}</p>
                <p className="text-xs text-gray-500">{formatDate(a.time)}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
