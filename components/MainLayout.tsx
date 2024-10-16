"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { usePathname } from 'next/navigation';

import { Search, ChevronsLeft, ChevronsRight, Home, Users, Mail, Bell, Globe, Settings, RefreshCw, FileText } from 'lucide-react';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ModeToggle } from './ModeToggle';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface MainLayoutProps {
    children: React.ReactNode;
}

type MenuItem = {
    title: string;
    icon?: React.ElementType;
    slug?: string;
    subItems?: MenuItem[];
};

const menuItems: MenuItem[] = [
    {
        title: 'main',
        subItems: [
            { title: 'Dashboard', icon: Home, slug: '/' },
        ],
    },
    {
        title: 'pos section',
        subItems: [
            {
                title: 'New Sale', icon: Users, slug: '/pos'
            },
        ],
    },
    {
        title: 'orders management',
        subItems: [
            {
                title: 'Orders', icon: Users, slug: '/orders/all',
                subItems: [
                    { title: 'All', slug: '/orders/all' },
                    { title: 'Scheduled', slug: '/orders/scheduled' },
                    { title: 'Pending', slug: '/orders/pending' },
                    { title: 'Accepted', slug: '/orders/accepted' },
                    { title: 'Processing', slug: '/orders/processing' },
                    { title: 'Order on the way', slug: '/orders/on-the-way' },
                    { title: 'Delivered', slug: '/orders/delivered' },
                    { title: 'Canceled', slug: '/orders/canceled' },
                    { title: 'Payment Failed', slug: '/orders/payment-failed' },
                    { title: 'Returned', slug: '/orders/returned' },
                    { title: 'Offline Payment', slug: '/orders/offline-payment' },
                ]
            },
            {
                title: 'Orders Refund', icon: Users, slug: '/orders/refund',
                subItems: [
                    { title: 'Refund request', slug: '/orders/refund/request' },
                ]
            },
        ]
    },
    {
        title: 'PROMOTION MANAGEMENT',
        subItems: [
            {
                title: 'Campaigns', icon: Users, slug: '/promotion/campaigns', subItems: [
                    { title: 'Basic Campaign', slug: '/promotion/campaigns/basic' },
                    { title: 'Item Campaign', slug: '/promotion/campaigns/item' },
                ]
            },
            {
                title: 'Banners', icon: Users, slug: '/promotion/banners'
            },
            {
                title: 'Order Banners', icon: Users, slug: '/promotion/order-banners'
            },
            {
                title: 'Coupons', icon: Users, slug: '/promotion/coupons'
            },
            {
                title: 'Cashback', icon: Users, slug: '/promotion/cashback'
            },
            {
                title: 'Push Notifications', icon: Users, slug: '/promotion/push-notifications'
            },
        ]
    },
    {
        title: "PRODUCT MANAGEMENT",
        subItems: [
            {
                title: 'Categories', icon: Users, slug: '/product/categories', subItems: [
                    { title: 'Categories', slug: '/product/categories' },
                    { title: 'Subcategories', slug: '/product/subcategories' },
                    { title: 'Bulk Import', slug: '/product/categories/bulk-import' },
                    { title: 'Bulk Export', slug: '/product/categories/bulk-export' },
                ]
            },
            {
                title: 'Attributes', icon: Users, slug: '/product/attributes'
            },
            {
                title: 'Units', icon: Users, slug: '/product/units'
            },
            {
                title: 'Common Conditions', icon: Users, slug: '/product/common-conditions'
            },
            {
                title: 'Product Setup', icon: Users, slug: '/product/setup', subItems: [
                    { title: 'Add New Product', slug: '/product/setup/add-new' },
                    { title: 'Product List', slug: '/product/setup/list' },
                    { title: 'Product Gallery', slug: '/product/setup/gallery' },
                    { title: 'Product Reviews', slug: '/product/setup/reviews' },
                ]
            },
        ]
    },

];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    const renderMenuItems = (items: MenuItem[]) => {
        return items.map((item, index) => {
            if (item.title !== 'main') {
                return (
                    <div key={index}>
                        <span className='text-sm font-medium text-[#B4B4B4] uppercase'>{item.title}</span>
                        {item.subItems?.map((subItem, subIndex) => {
                            if (subItem.subItems && subItem.subItems.length > 0) {
                                return (
                                    <Accordion type="single" collapsible defaultValue={`item-${subIndex}`} key={subIndex}>
                                        <AccordionItem value={`item-${subIndex}`} className='border-none  !text-base'>
                                            <AccordionTrigger className={`flex items-center gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 rounded-md `}>
                                                <span className='flex items-center gap-2 !font-normal !text-base'>
                                                    {subItem.icon && <subItem.icon size={16} />}
                                                    {subItem.title}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className=''>
                                                {subItem.subItems.map((subSubItem, subSubIndex) => (
                                                    <Link href={subSubItem.slug || '#'} key={subSubIndex} className={`pl-6 flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md ${pathname === subSubItem.slug ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
                                                        {subSubItem.icon && <subSubItem.icon size={16} />}
                                                        - {subSubItem.title}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                );
                            } else {
                                return (
                                    <Link href={subItem.slug || '#'} key={subIndex} className={`flex items-center gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 rounded-md ${pathname === subItem.slug ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
                                        {subItem.icon && <subItem.icon size={16} />}
                                        {subItem.title}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                );
            } else {
                return (
                    <div key={index}>
                        {item.subItems?.map((subItem, subIndex) => (
                            <Link href={subItem.slug || '#'} key={subIndex} className={`flex items-center gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 rounded-md ${pathname === subItem.slug ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
                                {subItem.icon && <subItem.icon size={16} />}
                                {subItem.title}
                            </Link>
                        ))}
                    </div>
                );
            }
        });
    };

    return (
        <>
            <aside className={`h-screen fixed left-0 top-0 p-4 md:p-6 transition-all duration-300 shadow-md ${isCollapsed ? 'w-16' : 'w-64'} z-50`}>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute top-4 md:top-7 right-2 md:right-4 bg-gray-200 dark:bg-gray-700 p-1 md:p-2 rounded"
                >
                    {isCollapsed ? <ChevronsRight size={14} /> : <ChevronsLeft size={14} />}
                    <span className='sr-only'>{isCollapsed ? 'Expand' : 'Collapse'}</span>
                </button>

                {!isCollapsed && (
                    <div className='flex flex-col gap-3 md:gap-4 h-full'>
                        <Link href="/" className='relative w-fit h-8 md:h-10 flex justify-start items-center'>
                            <Image src="/assets/Logo.png" alt="logo" sizes="100vw" width={0} height={0} className="w-full h-full object-contain object-left" />
                        </Link>

                        <div className="relative">
                            <Search className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={14} />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-7 md:pl-8 pr-2 md:pr-4 py-1 md:py-2 w-full text-sm"
                            />
                        </div>

                        <nav className="mt-1 md:mt-2 pb-8 md:pb-10 flex flex-col gap-1 md:gap-2 flex-1 relative overflow-y-auto hide-scrollbar">
                            {renderMenuItems(menuItems)}
                        </nav>
                    </div>
                )}
            </aside>

            <div className={`flex flex-col min-h-screen flex-1 transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-64'}`}>
                <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
                    <div className="mx-auto py-3 md:py-6 px-2 sm:px-4 lg:px-6">
                        <div className="flex justify-between items-center w-full">
                            <Menubar className='border-none w-full flex flex-wrap justify-between items-center gap-2'>
                                <div className="flex flex-wrap items-center gap-1 md:gap-2">
                                    <MenubarMenu>
                                        <Link href="/">
                                            <MenubarTrigger className='flex items-center gap-1 cursor-pointer px-2 md:px-4 py-1 md:py-1.5 text-sm'>
                                                <Home size={14} className="text-blue-500" />
                                                Dashboard
                                            </MenubarTrigger>
                                        </Link>
                                    </MenubarMenu>
                                    <MenubarMenu>
                                        <Link href="/users">
                                            <MenubarTrigger className='flex items-center gap-1 cursor-pointer px-2 md:px-4 py-1 md:py-1.5 text-sm'>
                                                <Users size={14} className="text-blue-500" />
                                                User
                                            </MenubarTrigger>
                                        </Link>
                                    </MenubarMenu>
                                    <MenubarMenu>
                                        <Link href="/transactions">
                                            <MenubarTrigger className='flex items-center gap-1 cursor-pointer px-2 md:px-4 py-1 md:py-1.5 text-sm'>
                                                <FileText size={14} className="text-blue-500" />
                                                Transaction & Report
                                            </MenubarTrigger>
                                        </Link>
                                    </MenubarMenu>
                                    <MenubarMenu>
                                        <MenubarTrigger className='flex items-center gap-1 cursor-pointer px-2 md:px-4 py-1 md:py-1.5 text-sm'>
                                            <Settings size={14} className="text-blue-500" />
                                            Setting
                                        </MenubarTrigger>
                                        <MenubarContent>
                                            <MenubarItem>
                                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem>New Window</MenubarItem>
                                            <MenubarSeparator />
                                            <MenubarItem>Share</MenubarItem>
                                            <MenubarSeparator />
                                            <MenubarItem>Print</MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                    <MenubarMenu>
                                        <Link href="/dispatch">
                                            <MenubarTrigger className='flex items-center gap-1 cursor-pointer px-2 md:px-4 py-1 md:py-1.5 text-sm'>
                                                <RefreshCw size={14} className="text-blue-500" />
                                                Dispatch Management
                                            </MenubarTrigger>
                                        </Link>
                                    </MenubarMenu>
                                </div>

                                <div className='flex items-center gap-1 md:gap-2'>
                                    <ModeToggle />
                                    <button type='button' className='size-7 md:size-9 rounded-full text-black bg-gray-50 border border-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                                        <Globe size={16} strokeWidth={1.5} />
                                    </button>
                                    <button type='button' className='size-7 md:size-9 rounded-full text-black bg-gray-50 border border-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                                        <Mail size={16} strokeWidth={1.5} />
                                    </button>
                                    <button type='button' className='size-7 md:size-9 rounded-full text-black bg-gray-50 border border-gray-200 dark:bg-gray-700 flex items-center justify-center relative'>
                                        <Bell size={16} strokeWidth={1.5} />
                                        <span className="absolute top-0 right-0 h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500 rounded-full animate-ping"></span>
                                        <span className="absolute top-0 right-0 h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500 rounded-full"></span>
                                    </button>
                                    <Avatar className='size-7 md:size-9'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                            </Menubar>
                        </div>
                    </div>
                </header>
                <main className="p-2 md:p-4 flex-1">
                    {children}
                </main>

                <footer className="bg-white dark:bg-gray-800 shadow-sm">
                    <div className="mx-auto py-2 md:py-4 px-2 sm:px-4 lg:px-6">
                        <div className="flex justify-center items-center">
                            <p className="text-xs md:text-sm text-gray-500">© 2024. Telehealth thailand All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default MainLayout;