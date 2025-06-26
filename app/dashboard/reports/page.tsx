import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, Share, Plus, FileText, BarChart3, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automated</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">70% automation rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Shared</CardTitle>
            <Share className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">+18% this quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,429</div>
            <p className="text-xs text-muted-foreground">+22% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Monthly Performance Report",
                  type: "Performance",
                  status: "Generated",
                  date: "Dec 2024",
                  size: "2.4 MB"
                },
                {
                  name: "Customer Behavior Analysis",
                  type: "Analytics",
                  status: "Processing",
                  date: "Dec 2024",
                  size: "1.8 MB"
                },
                {
                  name: "Revenue Breakdown Q4",
                  type: "Financial",
                  status: "Generated",
                  date: "Dec 2024",
                  size: "3.1 MB"
                },
                {
                  name: "User Engagement Summary",
                  type: "Engagement",
                  status: "Generated",
                  date: "Nov 2024",
                  size: "1.2 MB"
                }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">{report.name}</p>
                      <Badge variant={report.status === 'Generated' ? 'default' : 'secondary'}>
                        {report.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{report.type}</span>
                      <span>•</span>
                      <span>{report.date}</span>
                      <span>•</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Weekly Sales Summary",
                  frequency: "Every Monday",
                  nextRun: "Dec 30, 2024",
                  recipients: 5
                },
                {
                  name: "Monthly Dashboard Export",
                  frequency: "1st of each month",
                  nextRun: "Jan 1, 2025",
                  recipients: 12
                },
                {
                  name: "Quarterly Business Review",
                  frequency: "Every quarter",
                  nextRun: "Mar 31, 2025",
                  recipients: 8
                },
                {
                  name: "Daily Metrics Update",
                  frequency: "Daily at 9 AM",
                  nextRun: "Tomorrow",
                  recipients: 3
                }
              ].map((schedule, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{schedule.name}</p>
                      <Badge variant="outline">{schedule.recipients} recipients</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{schedule.frequency}</p>
                      <p>Next: {schedule.nextRun}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Executive Summary",
                description: "High-level overview for leadership",
                category: "Executive"
              },
              {
                name: "Performance Analytics",
                description: "Detailed performance metrics and KPIs",
                category: "Analytics"
              },
              {
                name: "Financial Report",
                description: "Revenue, costs, and financial insights",
                category: "Financial"
              },
              {
                name: "User Behavior",
                description: "User engagement and behavior patterns",
                category: "User Analytics"
              },
              {
                name: "Sales Pipeline",
                description: "Sales funnel and conversion metrics",
                category: "Sales"
              },
              {
                name: "Marketing ROI",
                description: "Marketing campaign effectiveness",
                category: "Marketing"
              }
            ].map((template, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{template.name}</h4>
                    <Badge variant="outline">{template.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}