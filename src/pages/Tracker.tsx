import { useState, useMemo } from "react";
import { Plus, CheckCircle2, Circle, BarChart3, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import TrackerFilters, { type StatusFilter, type CategoryFilter, type SortOption } from "@/components/TrackerFilters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DM_STATUSES = [
  { value: "research", label: "Research & Planning", color: "bg-blue-500/20 text-blue-400 border-blue-500/40" },
  { value: "content-creation", label: "Content Creation", color: "bg-purple-500/20 text-purple-400 border-purple-500/40" },
  { value: "campaign-setup", label: "Campaign Setup", color: "bg-amber-500/20 text-amber-400 border-amber-500/40" },
  { value: "launch", label: "Live / Launched", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40" },
  { value: "optimization", label: "Optimization & Testing", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40" },
  { value: "reporting", label: "Reporting & Analysis", color: "bg-pink-500/20 text-pink-400 border-pink-500/40" },
  { value: "completed", label: "Completed & Deployed", color: "bg-green-500/20 text-green-400 border-green-500/40" },
  { value: "paused", label: "Paused", color: "bg-gray-500/20 text-gray-400 border-gray-500/40" },
] as const;

type StatusValue = (typeof DM_STATUSES)[number]["value"];

interface Task {
  id: string;
  text: string;
  done: boolean;
}

interface Project {
  id: string;
  name: string;
  description: string;
  status: StatusValue;
  category: string;
  tasks: Task[];
}

const DEFAULT_TASKS: Task[] = [
  { id: "1", text: "Define target audience & personas", done: false },
  { id: "2", text: "Keyword & competitor research", done: false },
  { id: "3", text: "Create content calendar", done: false },
  { id: "4", text: "Design creatives & assets", done: false },
  { id: "5", text: "Set up analytics & tracking", done: false },
  { id: "6", text: "Launch campaign", done: false },
  { id: "7", text: "Monitor & optimize performance", done: false },
  { id: "8", text: "Generate final report", done: false },
];

const INITIAL_PROJECTS: Project[] = [
  {
    id: "p1",
    name: "SEO Blog Strategy",
    description: "Build a content-driven SEO strategy for a niche blog, covering keyword research, on-page optimization, and link building.",
    status: "content-creation",
    tasks: [
      { id: "t1", text: "Keyword research & clustering", done: true },
      { id: "t2", text: "Competitor content audit", done: true },
      { id: "t3", text: "Create content calendar", done: true },
      { id: "t4", text: "Write & publish 5 pillar articles", done: false },
      { id: "t5", text: "On-page SEO optimization", done: false },
      { id: "t6", text: "Build backlink outreach list", done: false },
    ],
  },
  {
    id: "p2",
    name: "Social Media Campaign",
    description: "Plan and execute a multi-platform social media campaign for a mock brand, focusing on engagement and growth metrics.",
    status: "research",
    tasks: [
      { id: "t7", text: "Define campaign goals & KPIs", done: true },
      { id: "t8", text: "Audience persona research", done: false },
      { id: "t9", text: "Platform strategy (IG, LinkedIn, X)", done: false },
      { id: "t10", text: "Create content assets", done: false },
      { id: "t11", text: "Schedule & publish posts", done: false },
      { id: "t12", text: "Analyze engagement metrics", done: false },
    ],
  },
  {
    id: "p3",
    name: "Email Marketing Funnel",
    description: "Design a complete email marketing funnel from lead magnet to conversion, with A/B tested subject lines and automated sequences.",
    status: "campaign-setup",
    tasks: [
      { id: "t13", text: "Design lead magnet", done: true },
      { id: "t14", text: "Set up email platform & list", done: true },
      { id: "t15", text: "Write welcome email sequence", done: true },
      { id: "t16", text: "Create landing page", done: true },
      { id: "t17", text: "A/B test subject lines", done: false },
      { id: "t18", text: "Analyze open & click rates", done: false },
    ],
  },
];

const getStatusInfo = (status: StatusValue) =>
  DM_STATUSES.find((s) => s.value === status) || DM_STATUSES[0];

const Tracker = () => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [newProject, setNewProject] = useState({ name: "", description: "", status: "research" as StatusValue });
  const [newTaskText, setNewTaskText] = useState<Record<string, string>>({});

  const addProject = () => {
    if (!newProject.name.trim()) return;
    const project: Project = {
      id: `p-${Date.now()}`,
      name: newProject.name,
      description: newProject.description,
      status: newProject.status,
      tasks: DEFAULT_TASKS.map((t) => ({ ...t, id: `${Date.now()}-${t.id}` })),
    };
    setProjects((prev) => [...prev, project]);
    setNewProject({ name: "", description: "", status: "research" });
    setDialogOpen(false);
  };

  const toggleTask = (projectId: string, taskId: string) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId
          ? { ...p, tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t)) }
          : p
      )
    );
  };

  const updateStatus = (projectId: string, status: StatusValue) => {
    setProjects((prev) => prev.map((p) => (p.id === projectId ? { ...p, status } : p)));
  };

  const deleteProject = (projectId: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  const addTask = (projectId: string) => {
    const text = newTaskText[projectId]?.trim();
    if (!text) return;
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId
          ? { ...p, tasks: [...p.tasks, { id: `t-${Date.now()}`, text, done: false }] }
          : p
      )
    );
    setNewTaskText((prev) => ({ ...prev, [projectId]: "" }));
  };

  const completedCount = (tasks: Task[]) => tasks.filter((t) => t.done).length;
  const progressPercent = (tasks: Task[]) => (tasks.length ? Math.round((completedCount(tasks) / tasks.length) * 100) : 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <BarChart3 className="text-primary" size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">DM Project Tracker</h1>
              <p className="text-xs text-muted-foreground">Digital Marketing Portfolio Projects</p>
            </div>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1.5">
                <Plus size={16} /> New Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
                <DialogDescription>Create a new digital marketing project to track.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <Input
                  placeholder="Project name"
                  value={newProject.name}
                  onChange={(e) => setNewProject((p) => ({ ...p, name: e.target.value }))}
                />
                <Textarea
                  placeholder="Brief description..."
                  value={newProject.description}
                  onChange={(e) => setNewProject((p) => ({ ...p, description: e.target.value }))}
                  rows={3}
                />
                <Select
                  value={newProject.status}
                  onValueChange={(v) => setNewProject((p) => ({ ...p, status: v as StatusValue }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select phase" />
                  </SelectTrigger>
                  <SelectContent>
                    {DM_STATUSES.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button onClick={addProject} disabled={!newProject.name.trim()}>
                  Create Project
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Total Projects", value: projects.length },
            { label: "In Progress", value: projects.filter((p) => !["completed", "paused"].includes(p.status)).length },
            { label: "Completed", value: projects.filter((p) => p.status === "completed").length },
            {
              label: "Avg Progress",
              value: projects.length
                ? `${Math.round(projects.reduce((sum, p) => sum + progressPercent(p.tasks), 0) / projects.length)}%`
                : "0%",
            },
          ].map((stat) => (
            <div key={stat.label} className="card-gradient rounded-lg border border-border p-3 text-center">
              <p className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => {
            const statusInfo = getStatusInfo(project.status);
            const progress = progressPercent(project.tasks);
            const isExpanded = expandedProject === project.id;

            return (
              <div
                key={project.id}
                className="card-gradient rounded-xl border border-border p-5 space-y-4 card-hover flex flex-col"
              >
                {/* Status Badge & Actions */}
                <div className="flex items-start justify-between gap-2">
                  <Select
                    value={project.status}
                    onValueChange={(v) => updateStatus(project.id, v as StatusValue)}
                  >
                    <SelectTrigger className={`w-auto h-auto px-2.5 py-1 text-xs font-semibold border rounded-full ${statusInfo.color}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {DM_STATUSES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-destructive"
                    onClick={() => deleteProject(project.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>

                {/* Name & Description */}
                <div>
                  <h3 className="font-semibold text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                      {completedCount(project.tasks)}/{project.tasks.length} tasks
                    </span>
                    <span className="font-medium gradient-text">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Expandable Task List */}
                <button
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  className="flex items-center gap-1 text-xs text-primary font-medium hover:underline self-start"
                >
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  {isExpanded ? "Hide tasks" : "View tasks"}
                </button>

                {isExpanded && (
                  <div className="space-y-2 pt-1 border-t border-border">
                    {project.tasks.map((task) => (
                      <button
                        key={task.id}
                        onClick={() => toggleTask(project.id, task.id)}
                        className="flex items-center gap-2.5 w-full text-left group/task"
                      >
                        {task.done ? (
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                        ) : (
                          <Circle size={16} className="text-muted-foreground group-hover/task:text-primary shrink-0 transition-colors" />
                        )}
                        <span
                          className={`text-sm ${task.done ? "line-through text-muted-foreground" : "text-foreground"}`}
                        >
                          {task.text}
                        </span>
                      </button>
                    ))}
                    {/* Add task inline */}
                    <div className="flex gap-2 pt-2">
                      <Input
                        placeholder="Add a task..."
                        className="h-8 text-sm"
                        value={newTaskText[project.id] || ""}
                        onChange={(e) => setNewTaskText((prev) => ({ ...prev, [project.id]: e.target.value }))}
                        onKeyDown={(e) => e.key === "Enter" && addTask(project.id)}
                      />
                      <Button size="sm" variant="secondary" className="h-8 px-3" onClick={() => addTask(project.id)}>
                        <Plus size={14} />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Add Project Card */}
          <button
            onClick={() => setDialogOpen(true)}
            className="rounded-xl border border-dashed border-border p-8 flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors min-h-[200px]"
          >
            <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center">
              <Plus size={24} />
            </div>
            <span className="text-sm font-medium">Add New Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
