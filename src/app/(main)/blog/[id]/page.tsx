import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

interface BlogArticle {
  id: string;
  slug?: string;
  title: string;
  author: string;
  category: string;
  featured_image: string;
  gallery_images: string[];
  content: string | Array<{
    heading: string;
    text: string;
  }>;
}

async function getArticle(id: string): Promise<BlogArticle | null> {
  const files = ['blogs.json', 'blog1.json', 'blog2.json', 'blog3.json'];
  
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), 'public', file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      const articles = data.articles || data.blogs || [];
      const article = articles.find((a: BlogArticle) => a.id === id || a.slug === id);
      if (article) return article;
    } catch (e) {
      continue;
    }
  }
  return null;
}

export async function generateStaticParams() {
  const files = ['blogs.json', 'blog1.json', 'blog2.json', 'blog3.json'];
  const allBlogs: { id: string }[] = [];
  
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), 'public', file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      const articles = data.articles || data.blogs || [];
      allBlogs.push(...articles.map((a: BlogArticle) => ({ id: a.id })));
    } catch (e) {
      continue;
    }
  }
  return allBlogs;
}

export default async function BlogArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </Button>

        <article>
          <div className="mb-6">
            <span className="text-sm font-medium text-primary">{article.category}</span>
            <h1 className="mt-2 font-headline text-4xl font-bold md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-muted-foreground">By {article.author}</p>
          </div>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={article.featured_image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {typeof article.content === 'string' 
              ? article.content.split('\n\n').map((paragraph, index) => (
                  <Card key={index} className="mb-6">
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{paragraph}</p>
                    </CardContent>
                  </Card>
                ))
              : article.content.map((section, index) => (
                  <Card key={index} className="mb-6">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
                      <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                    </CardContent>
                  </Card>
                ))
            }
          </div>

          {article.gallery_images.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Related Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.gallery_images.map((image, index) => (
                  <div key={index} className="relative w-full h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${article.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
