import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  href = "#",
  featured = false,
  className,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <Card
        className={cn(
          "h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20",
          featured && "border-primary/30",
          className
        )}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
