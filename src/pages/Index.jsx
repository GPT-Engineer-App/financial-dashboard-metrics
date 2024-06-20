import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const financialMetrics = [
  { name: "Revenue", value: "$120,000", progress: 75 },
  { name: "Expenses", value: "$80,000", progress: 50 },
  { name: "Profit", value: "$40,000", progress: 25 },
];

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Financial Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {financialMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{metric.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">{metric.value}</p>
              <Progress value={metric.progress} className="mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="w-full max-w-4xl mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Financial Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {financialMetrics.map((metric, index) => (
                  <TableRow key={index}>
                    <TableCell>{metric.name}</TableCell>
                    <TableCell>{metric.value}</TableCell>
                    <TableCell>
                      <Progress value={metric.progress} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;