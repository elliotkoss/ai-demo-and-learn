import { useState, useMemo } from "react";
import { Plus, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import SearchInput from "@/components/SearchInput";
import TagFilter from "@/components/TagFilter";
import { projects } from "@/data/projects";
import { SITE } from "@/config";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach(project => {
      project.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter projects based on search and tags
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.creator?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => project.tags?.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllTags = () => setSelectedTags([]);

  return (
    <MainLayout>
      <PageHeader 
        title="Community Projects"
        description="Explore innovative AI projects built by our community members. From experimental demos to production-ready applications."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="space-y-6 mb-8">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search projects by title, description, or creator..."
            className="max-w-2xl"
          />
          
          <TagFilter
            availableTags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            onClearAll={clearAllTags}
          />
        </div>

        {/* Results */}
        {filteredProjects.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Plus className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No projects found
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {searchQuery || selectedTags.length > 0 
                ? "Try adjusting your search or filters to find more projects."
                : "Be the first to add a project to our community showcase!"
              }
            </p>
            <Button asChild>
              <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
                <GitPullRequest className="h-4 w-4 mr-2" />
                Contribute Your Project
              </a>
            </Button>
          </div>
        )}

        {/* Contribution CTA */}
        {filteredProjects.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-card shadow-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Share Your Project
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Built something awesome with AI? Add it to our community showcase! 
                Simply submit a PR to our GitHub repository.
              </p>
              <Button asChild>
                <a href={`${SITE.githubRepo}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer">
                  <GitPullRequest className="h-4 w-4 mr-2" />
                  Learn How to Contribute
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Projects;