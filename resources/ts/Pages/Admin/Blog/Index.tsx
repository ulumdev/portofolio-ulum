import AdminLayout from "@/Layouts/AdminLayout";
import DataTable from "@/Components/Admin/DataTable";
import Button from "@/Components/Common/Button";
import Input from "@/Components/Common/Input";
import { Link, router, useForm } from "@inertiajs/react";
import {
    PencilIcon,
    TrashIcon,
    PlusIcon,
    EyeIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { BlogPost, PaginatedData } from "@/types";
import { FormEventHandler, useState } from "react";

interface BlogIndexProps {
    posts: PaginatedData<BlogPost>;
    filters: {
        search?: string;
    };
}

export default function BlogIndex({ posts, filters }: BlogIndexProps) {
    const [deleting, setDeleting] = useState<string | null>(null);
    const { data, setData, get } = useForm({
        search: filters.search || "",
    });

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault();
        get("/admin/blog", { preserveState: true });
    };

    //   const handleDelete = (id: number) => {
    //     if (confirm('Are you sure you want to delete this post?')) {
    //       setDeleting(id);
    //       router.delete(`/admin/blog/${id}`, {
    //         onFinish: () => setDeleting(null),
    //       });
    //     }
    //   };

    const handleDelete = (slug: string) => {
        if (confirm("Are you sure you want to delete this post?")) {
            setDeleting(slug);
            router.delete(`/admin/blog/${slug}`, {
                onFinish: () => setDeleting(null),
            });
        }
    };

    const columns = [
        {
            key: "featured_image",
            label: "Image",
            render: (post: BlogPost) =>
                post.featured_image ? (
                    <img
                        src={`/storage/${post.featured_image}`}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                    />
                ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No image</span>
                    </div>
                ),
        },
        {
            key: "title",
            label: "Title",
            render: (post: BlogPost) => (
                <div>
                    <p className="font-medium text-gray-900">{post.title}</p>
                    <p className="text-sm text-gray-500">
                        {post.category.name}
                    </p>
                </div>
            ),
        },
        {
            key: "tags",
            label: "Tags",
            render: (post: BlogPost) => (
                <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag.id}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                            {tag.name}
                        </span>
                    ))}
                    {post.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                            +{post.tags.length - 2}
                        </span>
                    )}
                </div>
            ),
        },
        {
            key: "views",
            label: "Views",
            render: (post: BlogPost) => post.views.toLocaleString(),
        },
        {
            key: "status",
            label: "Status",
            render: (post: BlogPost) => (
                <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        post.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                    }`}
                >
                    {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </span>
            ),
        },
        {
            key: "created_at",
            label: "Created",
            render: (post: BlogPost) => (
                <span className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        // hour: "2-digit",
                        // minute: "2-digit",
                    })}
                </span>
            ),
        },
        {
            key: "actions",
            label: "Actions",
            render: (post: BlogPost) => (
                <div className="flex items-center space-x-2">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
                        title="View"
                    >
                        <EyeIcon className="w-5 h-5" />
                    </Link>
                    <Link
                        href={`/admin/blog/${post.slug}/edit`}
                        className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
                        title="Edit"
                    >
                        <PencilIcon className="w-5 h-5" />
                    </Link>
                    <button
                        onClick={() => handleDelete(post.slug)}
                        disabled={deleting === post.slug}
                        className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                        title="Delete"
                    >
                        <TrashIcon className="w-5 h-5" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <AdminLayout title="Blog Posts">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Blog Posts
                        </h2>
                        <p className="text-gray-600">
                            Manage your blog articles
                        </p>
                    </div>
                    <Link href="/admin/blog/create">
                        <Button>
                            <PlusIcon className="w-5 h-5 mr-2" />
                            New Post
                        </Button>
                    </Link>
                </div>

                {/* Search */}
                <form onSubmit={handleSearch} className="flex gap-4">
                    <div className="flex-1">
                        <Input
                            value={data.search}
                            onChange={(e) => setData("search", e.target.value)}
                            placeholder="Search posts..."
                        />
                    </div>
                    <Button type="submit">
                        <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                        Search
                    </Button>
                </form>
            </div>

            <DataTable
                columns={columns}
                data={posts.data}
                pagination={posts}
                onPageChange={(page) =>
                    router.get(`/admin/blog?page=${page}&search=${data.search}`)
                }
            />
        </AdminLayout>
    );
}
