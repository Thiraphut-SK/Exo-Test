import { Card, CardBody, CardHeader } from "@heroui/react";

// Update this import path to match your UI library

interface TotalStatsProps {
  totalSpend: number;
  purchases: number;
}

export default function TotalStats({ totalSpend, purchases }: TotalStatsProps) {
  return (
    <Card shadow="sm">
      <CardHeader>
        <h3 className="text-sm font-semibold">Total</h3>
      </CardHeader>
      <CardBody className="flex flex-row gap-4">
        <div className="flex-1 bg-brand-primary/25 rounded p-3 text-center">
          <p className="text-lg font-semibold text-brand-primary">
            ฿ {totalSpend}
          </p>
          <p className="text-xs text-gray-600">Total Spend</p>
        </div>
        <div className="flex-1 bg-brand-secondary/25 rounded p-3 text-center">
          <p className="text-lg font-semibold text-brand-secondary">
            {purchases}
          </p>
          <p className="text-xs text-gray-600">Purchases</p>
        </div>
      </CardBody>
    </Card>
  );
}
