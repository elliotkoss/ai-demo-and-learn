import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Plus, GitPullRequest, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import ResourceCard from "@/components/ResourceCard";
import SearchInput from "@/components/SearchInput";
import TagFilter from "@/components/TagFilter";
import { resources } from "@/data/resources";
import { SITE } from "@/config";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    resources.forEach(resource => {
      resource.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter resources based on search and tags
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = searchQuery === "" || 
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => resource.tags?.includes(tag));
      
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
        title="AI Resources & Tools"
        description="Curated collection of essential AI tools, platforms, and resources recommended by our community. Discover new tools and exclusive deals."
      />

      <div className="container mx-auto py-12">
        {/* Search and Filters */}
        <div className="space-y-6 mb-8">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search resources by name or description..."
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
        {filteredResources.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Plus className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No resources found
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {searchQuery || selectedTags.length > 0 
                ? "Try adjusting your search or filters to find more resources."
                : "Help us build our resource collection!"
              }
            </p>
            <Button asChild>
              <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
                <GitPullRequest className="h-4 w-4 mr-2" />
                Suggest a Resource
              </a>
            </Button>
          </div>
        )}

        {/* Special Deals Section */}
        {filteredResources.some(r => r.deals && r.deals.length > 0) && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">🎁 Community Deals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(resource => resource.deals && resource.deals.length > 0)
                .map((resource, index) => (
                  <ResourceCard key={`deal-${index}`} resource={resource} />
                ))}
            </div>
          </div>
        )}

        {/* Contribution CTA */}
        {filteredResources.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-card shadow-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Know a Great AI Tool?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Help expand our resource collection! Share your favorite AI tools, platforms, 
                or services with the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href={SITE.discordUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Tell Us on Discord
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contribute">
                    <GitPullRequest className="h-4 w-4 mr-2" />
                    Submit a Pull Request
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Resources;