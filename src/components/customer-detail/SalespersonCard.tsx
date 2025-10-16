import { Avatar, Card, CardBody, CardHeader } from "@heroui/react";

interface SalespersonCardProps {
  name: string;
  role?: string;
  initials?: string;
}

export default function SalespersonCard({
  name,
  role,
  initials,
}: SalespersonCardProps) {
  return (
    <Card shadow="sm">
      <CardHeader>
        <h3 className="text-sm font-semibold">Salesperson in Charge</h3>
      </CardHeader>
      <CardBody>
        <div className="flex items-center gap-2">
          <Avatar name={initials || name} size="sm" />
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
