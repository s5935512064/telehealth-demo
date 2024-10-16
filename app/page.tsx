"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ItemForm from "@/components/Form/itemForm"
export default function Home() {
  const [activeTab, setActiveTab] = useState("default");
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Item update</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/store">Store Management</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/store/list">Store List</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Edit Item</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 border rounded-md px-6 py-4 mt-2">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="default">Default</TabsTrigger>
            <TabsTrigger value="english">English (EN)</TabsTrigger>
            <TabsTrigger value="thai">Thai-ไทย (TH)</TabsTrigger>
          </TabsList>
          <TabsContent value="default"><ItemForm language="default" /></TabsContent>
          <TabsContent value="english">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quos.</TabsContent>
          <TabsContent value="thai">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quos.</TabsContent>
        </Tabs>
      </div>


    </div>

  );
}
