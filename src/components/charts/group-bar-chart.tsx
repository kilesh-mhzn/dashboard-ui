import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Subscription } from "@models/subscription.model";
import { User } from "@models/customer.model";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PackageStatusCounts {
  [packageName: string]: {
    active: number;
    inactive: number;
  };
}
interface GroupedBarChartProps {
  mergedData: (User & { subscriptionInfo?: Subscription })[];
}
const calculatePackageStatusCounts = (
  mergedData: (User & { subscriptionInfo?: Subscription })[]
): PackageStatusCounts => {
  const sortedMergedData = mergedData.slice().sort((a, b) => {
    const packageA = a.subscriptionInfo?.package || "No Package";
    const packageB = b.subscriptionInfo?.package || "No Package";
    return packageA.localeCompare(packageB);
  });

  return sortedMergedData.reduce((packageCounts, user) => {
    const packageName = user.subscriptionInfo?.package || "No Package";
    const status = user.active === 1 ? "active" : "inactive";

    if (!packageCounts[packageName]) {
      packageCounts[packageName] = { active: 0, inactive: 0 };
    }

    packageCounts[packageName][status]++;
    return packageCounts;
  }, {} as PackageStatusCounts);
};

const GroupedBarChart: React.FC<GroupedBarChartProps> = ({ mergedData }) => {
  const packageStatusCounts = calculatePackageStatusCounts(mergedData);

  const packages = Object.keys(packageStatusCounts);

  const data = {
    labels: packages,
    datasets: [
      {
        label: "Active Users",
        data: packages.map(
          (packageName) => packageStatusCounts[packageName].active
        ),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
      {
        label: "Inactive Users",
        data: packages.map(
          (packageName) => packageStatusCounts[packageName].inactive
        ),
        backgroundColor: "rgba(192,75,192,0.2)",
        borderColor: "rgba(192,75,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Package",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default GroupedBarChart;
