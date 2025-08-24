"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ChevronDown,
  Smartphone,
  Monitor,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import { ActionableItems } from "./ActionableItems";

export default function PageSpeedInsights() {
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState("mobile");

  const [isShowWebEdit, setIsShowWebEdit] = useState(false);
  const [isShowAnalyze, setIsShowAnalyze] = useState(false);
  // Mock data based on the screenshot

  const [scores, setScores] = useState({
    performance: 58,
    accessibility: 84,
    bestPractices: 96,
    seo: 92,
  });

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 50) return "text-orange-500";
    return "text-red-500";
  };

  const getMetricColor = (status: string) => {
    if (status === "good") return "text-green-600";
    if (status === "needs-improvement") return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Answer Engine Optimization
          </h1>

          {/* URL Input */}
          <div className="flex gap-2 max-w-2xl mx-auto">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter a web page URL"
              className="flex-1"
            />
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsShowAnalyze(true)}
            >
              Analyze
            </Button>
          </div>

          {/* Device Tabs */}
          {/* <Tabs value={activeTab} onValueChange={setActiveTab} className="w-fit mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mobile" className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Mobile
              </TabsTrigger>
              <TabsTrigger value="desktop" className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Desktop
              </TabsTrigger>
            </TabsList>
          </Tabs> */}
        </div>

        {/* Core Web Vitals */}
        {/* <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-500" />
              <CardTitle className="text-lg">Discover what your real users are experiencing</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">Core Web Vitals Assessment:</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Passed
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Largest Contentful Paint (LCP)</div>
                <div className={`text-2xl font-bold ${getMetricColor(coreWebVitals.lcp.status)}`}>
                  {coreWebVitals.lcp.value}
                </div>
                <Progress value={25} className="mt-2 h-2" />
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Interaction to Next Paint (INP)</div>
                <div className={`text-2xl font-bold ${getMetricColor(coreWebVitals.inp.status)}`}>
                  {coreWebVitals.inp.value}
                </div>
                <Progress value={30} className="mt-2 h-2" />
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Cumulative Layout Shift (CLS)</div>
                <div className={`text-2xl font-bold ${getMetricColor(coreWebVitals.cls.status)}`}>
                  {coreWebVitals.cls.value}
                </div>
                <Progress value={0} className="mt-2 h-2" />
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium text-gray-900 mb-4">OTHER NOTABLE METRICS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">First Contentful Paint (FCP)</div>
                  <div className={`text-xl font-bold ${getMetricColor(otherMetrics.fcp.status)}`}>
                    {otherMetrics.fcp.value}
                  </div>
                  <Progress value={25} className="mt-2 h-2" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Time to First Byte (TTFB)</div>
                  <div className={`text-xl font-bold ${getMetricColor(otherMetrics.ttfb.status)}`}>
                    {otherMetrics.ttfb.value}
                  </div>
                  <Progress value={15} className="mt-2 h-2" />
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center gap-4">
                <span>📊 Latest 28-day period</span>
                <span>📱 Various mobile devices</span>
                <span>👥 Many samples (Chrome UX Report)</span>
              </div>
              <div className="flex items-center gap-4">
                <span>📊 Full visit duration</span>
                <span>🌐 Various network connections</span>
                <span>🌍 All Chrome versions</span>
              </div>
            </div>
          </CardContent>
        </Card> */}

        {/* Performance Scores */}
        {isShowAnalyze ? (
          <>
            <p className="text-sm text-gray-600">
              Report from Aug 24, 2025, 11:10:37 AM
            </p>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-500" />
                  <CardTitle className="text-lg">dashboard score</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {Object.entries(scores).map(([key, score]) => (
                    <div key={key} className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg
                          className="w-16 h-16 transform -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={
                              score >= 90
                                ? "#10b981"
                                : score >= 50
                                ? "#f59e0b"
                                : "#ef4444"
                            }
                            strokeWidth="2"
                            strokeDasharray={`${score}, 100`}
                          />
                        </svg>
                        <div
                          className={`absolute inset-0 flex items-center justify-center text-lg font-bold ${getScoreColor(
                            score
                          )}`}
                        >
                          {score}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key === "bestPractices" ? "Best Practices" : key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Detailed Performance Metrics */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeDasharray="58, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-orange-500">
                    58
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Performance</h3>
                <p className="text-sm text-gray-600 text-center mb-6">
                  Values are estimated and may vary. The{" "}
                  <span className="text-blue-600">performance score is calculated</span> directly from these metrics.
                </p>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">METRICS</h4>
                  {detailedMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {metric.status === "poor" ? (
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                        <span className="text-sm">{metric.name}</span>
                      </div>
                      <span className={`text-sm font-medium ${getMetricColor(metric.status)}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-xs text-gray-500 space-y-1">
                  <div>📊 Captured at Aug 24, 2025, 11:10 AM GMT+7</div>
                  <div>🌐 Simulated Moto G Power with Lighthouse 12.0.0</div>
                  <div>📱 Single page load</div>
                  <div>🔗 Slow 4G throttling</div>
                  <div>👤 Using headless Chromium 131.0.6778.139 with 4</div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-48 h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="/mobile-phone-mockup-showing-biogrione-website.png"
                    alt="Mobile preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div> */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sectors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <Button variant="outline" size="sm">
                      วัสดุก่อสร้าง
                    </Button>

                    <Button variant="outline" size="sm">
                      อุปกรณ์ก่อสร้าง
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Add sector
                  </Button>
                </div>

                <p>1. อุปกรณ์ก่อสร้าง</p>
                <p>2. เครื่องมือช่าง</p>
                <p>3. วัสดุก่อสร้างรักโลก</p>
                <p>4. โครสร้างสำเร็จรูป</p>

                <br />

                <div className="mt-4 text-right">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    variant="outline"
                    size="sm"
                    onClick={() => setIsShowWebEdit(true)}
                    type="button"
                  >
                    AEO
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <ActionableItems />
              </CardContent>
            </Card>
          </>
        ) : null}

        {isShowWebEdit ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">แก้ไขหน้าเว็บตามนี้</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  1. ใส่ keyword : วัสดุก่อสร้าง,อุปกรณ์ก่อสร้าง, อุปกรณ์ช่าง
                </li>
                <li>2. ใส่ h1 : ขายวัสดุก่อสร้าง</li>
                <li>3. ใส่ meta description : ขายวัสดุก่อสร้าง</li>
              </ul>
              <div className="mt-4 text-right">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    setScores({
                      performance: 99,
                      accessibility: 99,
                      bestPractices: 99,
                      seo: 99,
                    });
                  }}
                >
                  Rescore
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Insights */}
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-lg">INSIGHTS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    {insight.type === "warning" ? (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    ) : (
                      <Info className="w-4 h-4 text-blue-500" />
                    )}
                    <span className="text-sm">{insight.title}</span>
                    {insight.savings && (
                      <span className="text-xs text-gray-500">
                        — {insight.savings}
                      </span>
                    )}
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium">
                    Later this year, Insights will replace performance audits.
                  </span>
                  <span className="text-blue-600 ml-1">
                    Learn more and provide feedback here.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-right">
              <Button variant="outline" size="sm">
                ติดต่อผู้เชี่ยวชาญ
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
