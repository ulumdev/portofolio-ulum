import AdminLayout from "@/Layouts/AdminLayout";
import Button from "@/Components/Common/Button";
import Input from "@/Components/Common/Input";
import Textarea from "@/Components/Common/Textarea";
import { useForm, router } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { BlogPost, Category, Tag } from "@/types";

interface EditBlogProps {
    post: BlogPost;
    categories: Category[];
    tags: Tag[];
}

export default function EditBlog({ post, categories, tags }: EditBlogProps) {
    const {
        data,
        setData,
        post: submit,
        processing,
        errors,
    } = useForm({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        featured_image: null as File | null,
        category_id: post.category?.id ? post.category.id.toString() : "",
        tags: post.tags ? post.tags.map((t) => t.id) : [],
        status: post.status,
        published_at: post.published_at || "",
        _method: "PUT",
    });

    const [previewImage, setPreviewImage] = useState<string | null>(
        post.featured_image ? `/storage/${post.featured_image}` : null
    );

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("featured_image", file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTagToggle = (tagId: number) => {
        if (data.tags.includes(tagId)) {
            setData(
                "tags",
                data.tags.filter((id) => id !== tagId)
            );
        } else {
            setData("tags", [...data.tags, tagId]);
        }
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        // Use slug for admin routes since BlogPost uses slug as route key
        submit(`/admin/blog/${post.slug}`);
    };

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this post?")) {
            router.delete(`/admin/blog/${post.slug}`);
        }
    };

    return (
        <AdminLayout title="Edit Blog Post">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Edit Blog Post
                        </h2>
                        <p className="text-gray-600">Update your article</p>
                    </div>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete Post
                    </Button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-lg shadow-md p-6 space-y-6"
                >
                    <Input
                        label="Post Title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        error={errors.title}
                        required
                    />

                    <Textarea
                        label="Excerpt"
                        value={data.excerpt}
                        onChange={(e) => setData("excerpt", e.target.value)}
                        error={errors.excerpt}
                        required
                        rows={3}
                    />

                    <Textarea
                        label="Content"
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        error={errors.content}
                        required
                        rows={15}
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Featured Image
                        </label>
                        {previewImage && (
                            <div className="mb-4">
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={data.category_id}
                            onChange={(e) =>
                                setData("category_id", e.target.value)
                            }
                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            required
                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tags
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <button
                                    key={tag.id}
                                    type="button"
                                    onClick={() => handleTagToggle(tag.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        data.tags.includes(tag.id)
                                            ? "bg-primary-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {tag.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Status
                            </label>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="draft"
                                        checked={data.status === "draft"}
                                        onChange={(e) =>
                                            setData(
                                                "status",
                                                e.target.value as "draft"
                                            )
                                        }
                                        className="mr-2"
                                    />
                                    <span>Draft</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="published"
                                        checked={data.status === "published"}
                                        onChange={(e) =>
                                            setData(
                                                "status",
                                                e.target.value as "published"
                                            )
                                        }
                                        className="mr-2"
                                    />
                                    <span>Published</span>
                                </label>
                            </div>
                        </div>

                        <Input
                            label="Publish Date"
                            type="datetime-local"
                            value={data.published_at}
                            onChange={(e) =>
                                setData("published_at", e.target.value)
                            }
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => window.history.back()}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" loading={processing}>
                            Update Post
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
