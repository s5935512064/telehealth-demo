"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BannerForm from "@/components/Form/bannerForm"
import { Plus } from "lucide-react"

export default function Banners() {
  const [activeTab, setActiveTab] = useState("list");
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Banner</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/promotion">Promotion Management</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/store/list">Banner</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Add New Banner</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 border rounded-md px-6 py-4 mt-2">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="newBanner">Add New Banner</TabsTrigger>

          </TabsList>
          <TabsContent value="list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quos.</TabsContent>
          <TabsContent value="newBanner" className="flex flex-col items-center gap-4">
            <BannerForm />

            <div className="w-full max-w-md aspect-video border-slate-500  border border-dashed rounded-md flex items-center justify-center">
              <Plus className="size-16 text-slate-500" />
            </div>
          </TabsContent>

        </Tabs>
      </div>


    </div>

  );
}
