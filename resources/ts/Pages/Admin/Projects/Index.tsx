import AdminLayout from "@/Layouts/AdminLayout";
import DataTable from "@/Components/Admin/DataTable";
import Button from "@/Components/Common/Button";
import ConfirmDialog from "@/Components/Common/ConfirmDialog";
import { Link, router } from "@inertiajs/react";
import {
    PencilIcon,
    TrashIcon,
    PlusIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";
import { Project, PaginatedData } from "@/types";
import { useState } from "react";

interface ProjectsIndexProps {
    projects: PaginatedData<Project>;
}

export default function ProjectsIndex({ projects }: ProjectsIndexProps) {
    const [deleting, setDeleting] = useState<string | null>(null);
    const [showDeleteDialog, setShowDeletingDialog] = useState(false);
    const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

    //   const handleDelete = (id: number) => {
    //     if (confirm('Are you sure you want to delete this project?')) {
    //       setDeleting(id);
    //       router.delete(`/admin/projects/${id}`, {
    //         onFinish: () => setDeleting(null),
    //       });
    //     }
    //   };

    const handleDeleteClick = (project: Project) => {
        setProjectToDelete(project);
        setShowDeletingDialog(true);
    };

    const handleConfirmDelete = () => {
        if (projectToDelete) {
            setDeleting(projectToDelete.slug);
            router.delete(`/admin/projects/${projectToDelete.slug}`, {
                onFinish: () => {
                    setDeleting(null);
                    setShowDeletingDialog(false);
                    setProjectToDelete(null);
                },
            });
        }
    };

    const handleCancelDelete = () => {
        setShowDeletingDialog(false);
        setProjectToDelete(null);
    };

    // const handleDelete = (slug: string) => {
    //     if (confirm("Are you sure you want to delete this project?")) {
    //         setDeleting(slug);
    //         router.delete(`/admin/projects/${slug}`, {
    //             onFinish: () => setDeleting(null),
    //         });
    //     }
    // };

    const columns = [
        {
            key: "featured_image",
            label: "Image",
            render: (project: Project) =>
                project.featured_image ? (
                    <img
                        src={`/storage/${project.featured_image}`}
                        alt={project.title}
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
            render: (project: Project) => (
                <div>
                    <p className="font-medium text-gray-900">{project.title}</p>
                    <p className="text-sm text-gray-500">{project.slug}</p>
                </div>
            ),
        },
        {
            key: "skills",
            label: "Technologies",
            render: (project: Project) => (
                <div className="flex flex-wrap gap-1">
                    {project.skills.slice(0, 3).map((skill) => (
                        <span
                            key={skill.id}
                            className="px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded"
                        >
                            {skill.name}
                        </span>
                    ))}
                    {project.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                            +{project.skills.length - 3}
                        </span>
                    )}
                </div>
            ),
        },
        {
            key: "status",
            label: "Status",
            render: (project: Project) => (
                <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                    }`}
                >
                    {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                </span>
            ),
        },
        {
            key: "created_at",
            label: "Created",
            render: (project: Project) => (
                <span className="text-sm text-gray-500">
                    {new Date(project.created_at).toLocaleDateString("en-US", {
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
            render: (project: Project) => (
                <div className="flex items-center space-x-2">
                    <Link
                        href={`/portofolio/${project.slug}`}
                        className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
                        title="View"
                    >
                        <EyeIcon className="w-5 h-5" />
                    </Link>
                    <Link
                        // href={`/admin/projects/${project.id}/edit`}
                        href={`/admin/projects/${project.slug}/edit`}
                        className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
                        title="Edit"
                    >
                        <PencilIcon className="w-5 h-5" />
                    </Link>
                    <button
                        onClick={() => handleDeleteClick(project)}
                        disabled={deleting === project.slug}
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
        <AdminLayout title="Projects">
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Projects
                    </h2>
                    <p className="text-gray-600">
                        Manage your portfolio projects
                    </p>
                </div>
                <Link href="/admin/projects/create">
                    <Button>
                        <PlusIcon className="w-5 h-5 mr-2" />
                        New Project
                    </Button>
                </Link>
            </div>

            <DataTable
                columns={columns}
                data={projects.data}
                pagination={projects}
                onPageChange={(page) =>
                    router.get(`/admin/projects?page=${page}`)
                }
            />

            <ConfirmDialog
                show={showDeleteDialog}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
                title="Delete Project"
                message={`Are you sure you want to delete "${projectToDelete?.title}"? This action cannot be undone and will permanently remove this project from your portfolio.`}
                confirmText="Delete"
                cancelText="Cancel"
                type="danger"
                isLoading={deleting === projectToDelete?.slug}
            />

        </AdminLayout>
    );
}
