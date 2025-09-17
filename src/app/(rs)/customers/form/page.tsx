import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs";

export default async function CustomerForm({ 
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
            return (
                <div>
                    <h1>Customer Form</h1>
                    <p>{customer.firstName} {customer.lastName}</p>
                </div>
            );
        }
        else {

            // new customer form component
            return <div>No customer ID provided</div>;
        }
        
    } catch (error) {
        if (error instanceof Error) {
            Sentry.captureException(error);
            throw error
        }
    }
}
