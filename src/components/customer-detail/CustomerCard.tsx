import { Card, CardHeader, CardBody, Avatar } from "@heroui/react";
import { Chip } from "@heroui/chip";
interface CustomerCardProps {
  name: string;
  company: string;
  activeSince: string;
  status: "Active" | "Inactive";
  initials?: string;
}

export default function CustomerCard({
  name,
  company,
  activeSince,
  status,
  initials,
}: CustomerCardProps) {
  return (
    <Card shadow="sm">
      <CardHeader className="flex gap-3 items-center">
        <Avatar
          className="bg-brand-primary text-white"
          name={initials || name}
          size="lg"
        />
        <div>
          <h3 className="text-lg font-semibold text-brand-text">{name}</h3>
          <p className="text-sm text-gray-500">{company} Corp.</p>
          <p className="text-xs text-gray-400">Active since {activeSince}</p>
        </div>
      </CardHeader>
      <CardBody className="flex items-end w-full">
        <Chip color="success" variant="bordered">
          {status}
        </Chip>
      </CardBody>
    </Card>
  );
}
