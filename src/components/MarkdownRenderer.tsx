import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { Link } from 'react-router-dom';

interface MarkdownRendererProps {
  content: string;
}

/**
 * Renders trusted, repository-authored markdown with GFM tables, raw HTML
 * support and GitHub-style heading anchors.
 */
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-ink max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-h1:text-4xl prose-a:font-semibold prose-li:marker:text-trans-pink prose-hr:border-ink-200 dark:prose-hr:border-white/10">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          a({ href, children }) {
            if (href && href.startsWith('/')) {
              return <Link to={href}>{children}</Link>;
            }
            return (
              <a href={href} target="_blank" rel="noreferrer noopener">
                {children}
              </a>
            );
          },
          table({ children }) {
            return (
              <div className="my-6 overflow-x-auto rounded-xl border border-ink-200 dark:border-white/10">
                <table className="w-full text-left">{children}</table>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
