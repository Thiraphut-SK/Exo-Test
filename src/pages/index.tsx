import DefaultLayout from "@/layouts/default";
import CustomerCard from "@/components/customer-detail/CustomerCard";
import CreditStatus from "@/components/customer-detail/CreditStatus";
import SalespersonCard from "@/components/customer-detail/SalespersonCard";
import ContactInfo from "@/components/customer-detail/ContactInfo";
import TotalStats from "@/components/customer-detail/TotalStats";
import RecentActivity from "@/components/customer-detail/RecentActivity";

export default function CustomerPage() {
  const data = {
    name: "John Snow",
    company: "ABC",
    initials: "JS",
    activeSince: "2019-04-12",
    status: "Active" as "Active" | "Inactive",
    email: "john_snow@example.com",
    phone: "081-123-4567",
    creditStatus: "warning", // "success" | "warning" | "error"
    creditStatusDesc: "15 Days After Invoice",
    salesPerson: {
      name: "Jane White",
      role: "Senior Sales Manager",
      initials: "JW",
    },
    metrics: { totalSpend: 12450.75, purchases: 18 },
    recentActivity: [
      { time: "2025-09-28T10:12:00Z", action: "Generated Report" },
      { time: "2025-09-24T15:30:00Z", action: "Received Email" },
      { time: "2025-09-20T09:45:00Z", action: "Subscribed Promotion" },
      { time: "2025-09-15T14:00:00Z", action: "Updated Profile" },
      { time: "2025-09-10T08:20:00Z", action: "Updated Billing" },
    ],
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full text-brand-text">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <CustomerCard
              activeSince={data.activeSince}
              company={data.company}
              initials={data.initials}
              name={data.name}
              status={data.status}
            />
            <CreditStatus
              creditStatus={data.creditStatus}
              description={data.creditStatusDesc}
            />
            <SalespersonCard
              initials={data.salesPerson.initials}
              name={data.salesPerson.name}
              role={data.salesPerson.role}
            />
          </div>

          {/* Contact Info + Totals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-brand-text">
            <ContactInfo email={data.email} phone={data.phone} />
            <TotalStats
              purchases={data.metrics.purchases}
              totalSpend={data.metrics.totalSpend}
            />
          </div>

          {/* Recent Activity */}
          <RecentActivity activities={data.recentActivity} />
        </div>
      </section>
    </DefaultLayout>
  );
}
