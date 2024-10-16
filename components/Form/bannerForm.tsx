"use client"
import React from 'react';
import { Input } from "@/components/ui/input"
import { CloudUpload } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BannerFormProps {
}

const BannerForm: React.FC<BannerFormProps> = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-5 md:mt-6 lg:mt-7 w-full">
            <div className='flex flex-col gap-2 sm:gap-3 md:gap-4'>
                <p className='border-b-2 border-gray-200 pb-2 font-semibold text-sm sm:text-base md:text-lg'>Banner Info</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-3 md:mt-4'>
                    <div className='flex flex-col gap-2 sm:gap-3 md:gap-4'>
                        <div className='flex flex-col gap-1 sm:gap-2'>
                            <label htmlFor="title" className='text-xs sm:text-sm text-gray-500'>Title (Default)*</label>
                            <Input
                                id="title"
                                placeholder="Title"
                                required
                                className="text-sm sm:text-base"
                            />
                        </div>

                        <div className='flex flex-col gap-1 sm:gap-2'>
                            <label htmlFor="zone" className='text-xs sm:text-sm text-gray-500'>Zone</label>
                            <Select>
                                <SelectTrigger id="zone" className="text-sm sm:text-base">
                                    <SelectValue placeholder="Select zone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="main">Main</SelectItem>
                                    <SelectItem value="popup">Popup</SelectItem>
                                    <SelectItem value="footer">Footer</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='flex flex-col gap-1 sm:gap-2'>
                            <label htmlFor="type" className='text-xs sm:text-sm text-gray-500'>Banner Type</label>
                            <Select>
                                <SelectTrigger id="type" className="text-sm sm:text-base">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="image">Image</SelectItem>
                                    <SelectItem value="video">Video</SelectItem>
                                    <SelectItem value="text">Text</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 w-full h-full'>
                        <label htmlFor="bannerImage" className='text-xs sm:text-sm text-gray-500'>Banner Image *</label>
                        <div className='w-full h-32 sm:h-40 md:h-48 lg:h-full border rounded-md border-dashed border-gray-300 flex items-center justify-center relative'>
                            <CloudUpload className='w-8 h-8 sm:w-10 sm:h-10 text-gray-500/50' />
                            <input type="file" id="bannerImage" className='opacity-0 w-full h-full absolute cursor-pointer' />
                        </div>
                    </div>

                    <div className='col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-1 sm:gap-2'>
                            <label htmlFor="dateRange" className='text-xs sm:text-sm text-gray-500'>Date</label>
                            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
                                <Input
                                    type="date"
                                    id="startDate"
                                    placeholder="Start Date"
                                    className="text-sm sm:text-base w-full sm:w-1/2"
                                />
                                <Input
                                    type="date"
                                    id="endDate"
                                    placeholder="End Date"
                                    className="text-sm sm:text-base w-full sm:w-1/2"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col justify-end gap-1 sm:gap-2'>
                            <Input
                                id="extraLink"
                                placeholder="เพิ่มลิ้ง (ไม่จำเป็น)"
                                className="text-sm sm:text-base"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-4 mt-4 sm:mt-6'>
                <button
                    type="reset"
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors min-w-[100px] sm:min-w-[120px]"
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs sm:text-sm min-w-[100px] sm:min-w-[120px]"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default BannerForm;