import { Card, CardHeader, CardBody } from "@heroui/react";

import { ErrorIcon, SuccessIcon, WarningIcon } from "../icons";

interface CreditStatusProps {
  creditStatus: string;
  description?: string;
}

export default function CreditStatus({
  creditStatus,
  description,
}: CreditStatusProps) {
  // Map creditStatus string to allowed Chip color values
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "success":
        return "bg-green-100 text-green-800 border-brand-success";
      case "warning":
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-brand-warning ";
      case "error":
      case "canceled":
        return "bg-red-100 text-red-800 border-red-800";
      default:
        return "default";
    }
  };

  return (
    <Card shadow="sm">
      <CardHeader>
        <h3 className="text-sm font-semibold">Credit Status</h3>
      </CardHeader>
      <CardBody>
        <div
          className={`${getStatusColor(creditStatus)} border-1.5 p-2 rounded flex items-center gap-2`}
        >
          {creditStatus === "error" ? (
            <ErrorIcon />
          ) : creditStatus === "success" ? (
            <SuccessIcon />
          ) : (
            <WarningIcon />
          )}
          {/* <WarningIcon /> */}
          <div className="my-2 text-left">
            {description && <p className="text-xs">{description}</p>}
            <p className="text-xs text-gray-400">payment terms active</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
