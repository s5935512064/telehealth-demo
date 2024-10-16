"use client"
import React from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CloudUpload } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface ItemFormProps {
    language: 'default' | 'english' | 'thai';
}

const ItemForm: React.FC<ItemFormProps> = ({ language }) => {
    const labels = {
        default: { name: 'Name (Default)*', description: 'Short Description (Default)*' },
        english: { name: 'Name (English)*', description: 'Short Description (English)' },
        thai: { name: 'Name (Thai)*', description: 'Short Description (Thai)' },
    };

    const placeholders = {
        default: { name: 'New Item', description: 'Enter short description' },
        english: { name: 'Enter name in English', description: 'Enter short description in English' },
        thai: { name: 'ใส่ชื่อภาษาไทย', description: 'ใส่คำอธิบายสั้นๆ ภาษาไทย' },
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6 md:gap-10 mt-4 md:mt-7">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor={`${language}-name`} className='text-sm text-gray-500'>{labels[language].name}</label>
                        <Input
                            id={`${language}-name`}
                            placeholder={placeholders[language].name}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor={`${language}-description`} className='text-sm text-gray-500'>{labels[language].description}</label>
                        <Textarea
                            id={`${language}-description`}
                            placeholder={placeholders[language].description}
                            rows={3}
                            required
                        />
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className='flex flex-col gap-2 flex-1'>
                        <label htmlFor="uploadImage" className='text-sm text-gray-500'>Item Image * <span className='text-red-500'>( Ratio 1:1)</span></label>
                        <div className='w-full h-40 md:h-full border rounded-md border-dashed border-gray-300 flex items-center justify-center relative'>
                            <CloudUpload className='size-10 text-gray-500/50' />
                            <input type="file" id="uploadImage" className='opacity-0 w-full h-full absolute cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                        <label htmlFor="uploadThumbnail" className='text-sm text-gray-500'>Item Thumbnail * <span className='text-red-500'>( Ratio 1:1)</span></label>
                        <div className='w-full h-40 md:h-full border rounded-md border-dashed border-gray-300 flex items-center justify-center relative'>
                            <CloudUpload className='size-10 text-gray-500/50' />
                            <input type="file" id="uploadThumbnail" className='opacity-0 w-full h-full absolute cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='border-b-2 border-gray-200 pb-2 font-semibold'>Item Details</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="store" className='text-sm text-gray-500'>Store</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a store" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="store1">Store 1</SelectItem>
                                <SelectItem value="store2">Store 2</SelectItem>
                                <SelectItem value="store3">Store 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="category" className='text-sm text-gray-500'>Category</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="category1">Category 1</SelectItem>
                                <SelectItem value="category2">Category 2</SelectItem>
                                <SelectItem value="category3">Category 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="subCategory" className='text-sm text-gray-500'>Sub Category</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a sub category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="subCategory1">Sub Category 1</SelectItem>
                                <SelectItem value="subCategory2">Sub Category 2</SelectItem>
                                <SelectItem value="subCategory3">Sub Category 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="suitableFor" className='text-sm text-gray-500'>Suitable For</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select suitable for" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="adults">Adults</SelectItem>
                                <SelectItem value="children">Children</SelectItem>
                                <SelectItem value="seniors">Seniors</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="unit" className='text-sm text-gray-500'>Unit</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a unit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="piece">Piece</SelectItem>
                                <SelectItem value="box">Box</SelectItem>
                                <SelectItem value="pack">Pack</SelectItem>
                                <SelectItem value="bottle">Bottle</SelectItem>
                                <SelectItem value="kg">Kilogram</SelectItem>
                                <SelectItem value="g">Gram</SelectItem>
                                <SelectItem value="ml">Milliliter</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="maxPurchaseQuantity" className='text-sm text-gray-500'>Maximum Purchase Quantity</label>
                        <Input
                            type="number"
                            id="maxPurchaseQuantity"
                            placeholder="Enter maximum purchase quantity"
                            min="1"
                        />
                    </div>

                    <div className='flex items-center gap-2'>
                        <Checkbox id="isBasicMedicine" />
                        <label
                            htmlFor="isBasicMedicine"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Is Basic Medicine
                        </label>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Checkbox id="isPrescriptionRequired" />
                        <label
                            htmlFor="isPrescriptionRequired"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Is Prescription Required
                        </label>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='border-b-2 border-gray-200 pb-2 font-semibold'>Price Information</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="price" className='text-sm text-gray-500'>Price*</label>
                        <Input
                            type="number"
                            id="price"
                            placeholder="Enter price"
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="totalStock" className='text-sm text-gray-500'>Total Stock</label>
                        <Input
                            type="number"
                            id="totalStock"
                            placeholder="Enter total stock"
                            min="0"
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="discountType" className='text-sm text-gray-500'>Discount Type*</label>
                        <Select required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select discount type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="percentage">Percentage</SelectItem>
                                <SelectItem value="fixed">Fixed Amount</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="discount" className='text-sm text-gray-500'>Discount (%)*</label>
                        <Input
                            type="number"
                            id="discount"
                            placeholder="Enter discount percentage"
                            min="0"
                            max="100"
                            step="0.01"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='border-b-2 border-gray-200 pb-2 font-semibold'>Attribute</p>
                <div className='flex flex-col gap-2 mt-4'>
                    <label htmlFor="attribute" className='text-sm text-gray-500'>Attribute*</label>
                    <Select required>
                        <SelectTrigger id="attribute">
                            <SelectValue placeholder="Select attribute" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="color">Color</SelectItem>
                            <SelectItem value="size">Size</SelectItem>
                            <SelectItem value="material">Material</SelectItem>
                            <SelectItem value="style">Style</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='border-b-2 border-gray-200 pb-2 font-semibold'>Tags</p>
                <div className='flex flex-col gap-2 mt-4'>
                    <label htmlFor="tags" className='text-sm text-gray-500'>Tags</label>
                    <Select>
                        <SelectTrigger id="tags">
                            <SelectValue placeholder="Select tags" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="popular">Popular</SelectItem>
                            <SelectItem value="sale">Sale</SelectItem>
                            <SelectItem value="seasonal">Seasonal</SelectItem>
                            <SelectItem value="limited">Limited Edition</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-end gap-2 mt-4'>
                <button
                    type="reset"
                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors min-w-[120px]"
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors min-w-[120px]"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ItemForm;