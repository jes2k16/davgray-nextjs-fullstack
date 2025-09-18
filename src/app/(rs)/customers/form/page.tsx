import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "@/app/(rs)/customers/form/CustomerForm";

export default async function CustomerFormPage({ 
    searchParams, 
}: { 
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        const { customerId } = await searchParams;
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId));
            console.log(customer);
            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer not found</h2>
                        <BackButton title="Back" variant="default" />
                    </>
                );
            }

            // put the customer data in the form
            return <CustomerForm customer={customer} />
        }
        else {

            // new customer form component
            return <CustomerForm />
        }
        
    } catch (error) {
        if (error instanceof Error) {
            Sentry.captureException(error);
            throw error
        }
    }
}
