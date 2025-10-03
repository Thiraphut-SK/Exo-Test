import { Card, CardHeader, CardBody } from "@heroui/react";
import { Button } from "@heroui/button";

import { EmailIcon, PhoneIcon } from "../icons";

interface ContactInfoProps {
  email: string;
  phone?: string;
}

export default function ContactInfo({ email, phone }: ContactInfoProps) {
  return (
    <Card shadow="sm">
      <CardHeader>
        <h3 className="text-sm font-semibold">Contact Information</h3>
      </CardHeader>
      <CardBody>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <EmailIcon className="text-gray-500" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="text-gray-500" />
            {phone ? (
              <span>{phone}</span>
            ) : (
              <Button color="success" size="sm" variant="flat">
                Add phone
              </Button>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
