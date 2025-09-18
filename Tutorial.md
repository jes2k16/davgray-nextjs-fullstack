Next.js Full Stack Project w/ Nextjs 15 & React 19

> npx create-next-app@latest 
    - repairshop
> npx shadcdn@latest init                               - install shadcdn
> npx shadcn@latest add button

- create the "public\images" folder in the src and add the background images
- update the page.tsx

> npm run dev

- create the "(rs)" folder inside the app directory     - this is called group route or route group
    - helps orgaize routes in the file system without pulluting the URL
    - example
        src/app/(auth)/login/page.ts        -> login
        src/app/(auth)/register/page.tsx    -> register
- create layout.tsx
- create template.tsx
- create home\page.tsx
- create customers\page.tsx
- create tickets\page.tsx
- create components\Header.tsx
- update layout.tsx and add the Header component

> npm run dev       - home, customers, and tickets should work

- create the components\NavButton.tsx
- update Header.tsx to use the Navbutton

> npm install next-themes
- create the component\theme-provider.tsx and apply
    https://ui.shadcn.com/docs/dark-mode/next
> npx shadcn@latest add dropdown-menu
    - implement all requried codes from the documentation

- Sentry setup > used to log error and performance monitoring
    - create an account
> npx @sentry/wizard@latest -i nextjs --saas --org jesmar --project javascript-nextjs
- create the error.tsx file and copy paste the values from https://nextjs.org/docs/app/getting-started/error-handling#nested-error-boundaries
    - this error page will show particular error per route
- add sentry and capture the error
- do the same in the global-error.tsx - already done

> npm run dev
    - http://jesmarasusnuc:3000/sentry-example-page

- create the app\not-found.tsx file and copy the codes from https://nextjs.org/docs/app/getting-started/error-handling#not-found

- update the metada in app\layout.tsx - this will update the browser title
- add the metadata in home\page.tsx, tickets\page.tsx, etc

-----------PART 2: NextJS Authentication & Login-----------
- use kinde.com, create a free account, this is used for SSO or 3rd party authentication
    - https://jesmar.kinde.com/admin/cx/_:nav&m:application_details::_:submenu&s:quick_start&id:dbefeae69fee40e3bc9819f5852ff30e::_:action&tab:existing
> npx nypm add @kinde-oss/kinde-auth-nextjs     - install sdk
- update environment vars
    - create the src\.env.local and copy paste the values
- api endpoints
    - create src/app/api/auth/[kindeAuth]/route.js and copy paste the values
    - the bracket directory is a dynamic directory 
- add sign up and sign in buttons

> npm install @kinde-oss/kinde-auth-nextjs

- create the src\app\login\page.tsx

- configure kinde account
- add user
- add permission

- add the logout link in the Header.tsx

- add middleware to secure the pages after logout
- add src\middleware.ts


-----------PART 3: Next.js + PostgreSQL + Drizzle ORM-----------
- create account in neon.tech and create a postgres database
> npm install drizzle-orm @neondatabase/serverless
> npm install -D drizzle-kit tsx dotenv                 > "-D" means dev dependencies

- create src\db\index.ts and use drizzle, neon, config
- create src\db\schema.ts
- create src\db\migrate.ts
- create \drizzle.config.ts

- update the package.json > scripts part to add the db:generate and db:migrate to make it reusable
- dont forget to update the .env.local to add the postgres connection string
> npm run db:generate
> npm run db:migrate

-----------PART 4: Next.js SQL Data Queries with Drizzle ORM-----------
- update the tech = "new-ticket@example.com" in all records in neon.tech

- create src\lib\queries\getCustomer.ts
- create src\lib\queries\getTicket.ts

- create src\app\(rs)\customers\from\page.tsx
- create src\components\BackButton.tsx

> npm run dev
    - access the form get: http://localhost:3000/customers/form?customerId=2

- create src\app\(rs)\tickets\from\page.tsx
- implement sentry in both forms


-----------Part 5: Next.js with React-Hook-Form, Drizzle-Zod, & ShadCN/ui-----------
> npm install zod drizzle-zod react-hook-form @hookform/resolvers
> npm install shadcn@latest add form

- create the src\zod-schema\customer.ts
- create the src\zod-schema\ticket.ts

- create src\app\(rs)\customers\form\CustomerForm.tsx




































playlist: https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PCLz7VMP2QQdeKa83rshe5

