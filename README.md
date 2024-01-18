This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Configuration
To configure the project's content, make the necessary changes in `project.json`. 

### Name, Description, and Target Amount
Simply modify `name`, `description`, and `targetAmt` respectively.

### Rewards
To modify rewards and incentives, follow the format provided in `project.json`. The application will automatically scale up/down depending on the rewards and incentives added.

**NOTE: It is important for each entry in the list to have a unique ID for them to be rendered properly and avoid issues.** 

### FAQs
Similar to rewards, follow the format provided in `project.json`.

## Impt. File Directories
### /public
The public folder contains the data for mocking and configuring the fundraising project. Any changes made here will reflect on the web application.

- `project.json`: The details of the fundraising project. The fundraising project contains:
    - Name
    - Description
    - Target amount (in USD)
    - FAQs
    - Rewards
- `db.json`: Contains mock data for donations and is meant to simulate a database. Requires a `name`, `amount`, and `currency`.

### /helpers
Contains utility functions to assist in data formatting and calculations.

- `calculateGoalPercentage.ts` - Calculates the goal percentage based on `amtRaised` and `targetAmt`.
- `currencyConverter.ts` - 
- `currency.json`- 
- `numberFormatter.ts` - Module containing functions that are responsible for formatting numbers (i.e. `numberFormatter` and `cashFormatter`).
- `requests.ts` - Module containing requests to interact with APIs. Handles data fetching, adding donations, and stripe integrations (mock). **Also contains `NOTIF_INTERVAL` which indicates how often recent donations should be checked for notifications.**


## Dependencies
- `@mantine/core`
- `@mantine/form`
- `@mantine/hooks`
- `@mantine/notifications`
- `next`
- `react`
- `react-dom`
- `stripe`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
