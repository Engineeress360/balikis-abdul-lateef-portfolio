import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DM_STATUSES = [
  { value: "research", label: "Research & Planning" },
  { value: "content-creation", label: "Content Creation" },
  { value: "campaign-setup", label: "Campaign Setup" },
  { value: "launch", label: "Live / Launched" },
  { value: "optimization", label: "Optimization & Testing" },
  { value: "reporting", label: "Reporting & Analysis" },
  { value: "completed", label: "Completed & Deployed" },
  { value: "paused", label: "Paused" },
] as const;

const CATEGORIES = [
  { value: "all", label: "All Categories" },
  { value: "seo", label: "SEO" },
  { value: "social-media", label: "Social Media" },
  { value: "email", label: "Email Marketing" },
  { value: "content", label: "Content Marketing" },
  { value: "ppc", label: "PPC / Paid Ads" },
  { value: "analytics", label: "Analytics" },
  { value: "other", label: "Other" },
] as const;

const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "progress-asc", label: "Progress (Low → High)" },
  { value: "progress-desc", label: "Progress (High → Low)" },
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
] as const;

export type StatusFilter = (typeof DM_STATUSES)[number]["value"] | "all";
export type CategoryFilter = (typeof CATEGORIES)[number]["value"];
export type SortOption = (typeof SORT_OPTIONS)[number]["value"];

interface TrackerFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (value: StatusFilter) => void;
  categoryFilter: CategoryFilter;
  onCategoryFilterChange: (value: CategoryFilter) => void;
  sortBy: SortOption;
  onSortByChange: (value: SortOption) => void;
}

const TrackerFilters = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  sortBy,
  onSortByChange,
}: TrackerFiltersProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
      <div className="card-gradient rounded-xl border border-border p-3 flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <Input
            placeholder="Search projects..."
            className="pl-9 h-9 text-sm bg-background/50"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Filter by Status */}
        <Select value={statusFilter} onValueChange={(v) => onStatusFilterChange(v as StatusFilter)}>
          <SelectTrigger className="w-full sm:w-[180px] h-9 text-sm bg-background/50">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {DM_STATUSES.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter by Category */}
        <Select value={categoryFilter} onValueChange={(v) => onCategoryFilterChange(v as CategoryFilter)}>
          <SelectTrigger className="w-full sm:w-[180px] h-9 text-sm bg-background/50">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort By */}
        <Select value={sortBy} onValueChange={(v) => onSortByChange(v as SortOption)}>
          <SelectTrigger className="w-full sm:w-[170px] h-9 text-sm bg-background/50">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TrackerFilters;
