import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Komponen UI
import StyledCard from "@/Components/Public/UI/StyledCard";
import { FormInput } from "@/Components/Public/UI/FormControls";
import GradientButton from "@/Components/Public/UI/GradientButton";

interface Category {
    id: number;
    name: string;
    slug: string;
    blog_posts_count?: number;
}

interface Tag {
    id: number;
    name: string;
    slug: string;
}

interface BlogSidebarProps {
    categories: Category[];
    popularTags: Tag[];
    totalPosts: number;
    currentSearch?: string;
}

export default function BlogSidebar({
    categories,
    popularTags,
    totalPosts,
    currentSearch = "",
}: BlogSidebarProps) {
    const { data, setData, get } = useForm({
        search: currentSearch,
    });

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault();
        get("/blog", { preserveState: true });
    };

    return (
        <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
                {/* Search */}
                <StyledCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                        <MagnifyingGlassIcon className="w-5 h-5 mr-2 text-blue-400" />
                        Search Articles
                    </h3>
                    <form onSubmit={handleSearch}>
                        <FormInput
                            label=""
                            value={data.search}
                            onChange={(e) => setData("search", e.target.value)}
                            placeholder="Type to search..."
                            className="mb-4"
                        />
                        <GradientButton type="submit" fullWidth>
                            Search
                        </GradientButton>
                    </form>
                </StyledCard>

                {/* Categories */}
                <StyledCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">
                        Categories
                    </h3>
                    <ul className="space-y-2 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent pr-2">
                        <li>
                            <Link
                                href="/blog"
                                className="group flex items-center justify-between text-slate-300 hover:text-blue-400 py-2 px-3 rounded-lg hover:bg-slate-700/50 transition-all"
                            >
                                <span className="font-medium">All Posts</span>
                                <span className="px-2 py-1 text-xs bg-slate-900 text-slate-400 rounded-full group-hover:bg-blue-900 group-hover:text-blue-300 transition-colors">
                                    {totalPosts}
                                </span>
                            </Link>
                        </li>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link
                                    href={`/blog/category/${category.slug}`}
                                    className="group flex items-center justify-between text-slate-300 hover:text-blue-400 py-2 px-3 rounded-lg hover:bg-slate-700/50 transition-all"
                                >
                                    <span className="font-medium">
                                        {category.name}
                                    </span>
                                    <span className="px-2 py-1 text-xs bg-slate-900 text-slate-400 rounded-full group-hover:bg-blue-900 group-hover:text-blue-300 transition-colors">
                                        {category.blog_posts_count || 0}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </StyledCard>

                {/* Popular Tags */}
                <StyledCard className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">
                        Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {popularTags.map((tag) => (
                            <Link
                                key={tag.id}
                                href={`/blog/tag/${tag.slug}`}
                                className="px-3 py-1.5 text-sm font-medium bg-slate-900/80 text-slate-300 hover:text-white hover:bg-blue-600 border border-slate-700 rounded-lg transition-all duration-300"
                            >
                                #{tag.name}
                            </Link>
                        ))}
                    </div>
                </StyledCard>
            </div>
        </aside>
    );
}
