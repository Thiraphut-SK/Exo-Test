import DefaultLayout from "@/layouts/default";
import CustomerCard from "@/components/customer-detail/CustomerCard";
import CreditStatus from "@/components/customer-detail/CreditStatus";
import SalespersonCard from "@/components/customer-detail/SalespersonCard";
import ContactInfo from "@/components/customer-detail/ContactInfo";
import TotalStats from "@/components/customer-detail/TotalStats";
import RecentActivity from "@/components/customer-detail/RecentActivity";
import { Link } from "@heroui/link";
import { useParams } from "react-router-dom";
import dataMock from "../mock/mock_customers_100.json";

export default function CustomerPage() {
  const { cid } = useParams();

  // Convert id (string) to number
  const customer = dataMock.find((item) => item.id === Number(cid));

  if (!customer) return <div>Customer not found</div>;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex justify-start items-start w-full gap-4 px-2 md:px-0">
          <Link className="text-brand-text" href="/customers">{`< Back`}</Link>
        </div>
        <div className="w-full text-brand-text">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <CustomerCard
              activeSince={customer.active_since}
              company={customer.company}
              initials={customer.initials}
              name={customer.name}
              status={customer.active_since ? "Active" : "Inactive"}
            />
            <CreditStatus
              creditStatus={customer.credit_status}
              description={customer.credit_status}
            />
            <SalespersonCard
              initials={customer.salesperson}
              name={customer.salesperson}
              role={customer.role}
            />
          </div>

          {/* Contact Info + Totals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-brand-text">
            <ContactInfo email={customer.email} phone={customer.phone} />
            <TotalStats
              purchases={customer.number_of_purchases}
              totalSpend={customer.total_spend}
            />
          </div>

          {/* Recent Activity */}
          <RecentActivity activities={customer.recent_activity} />
        </div>
      </section>
    </DefaultLayout>
  );
}
